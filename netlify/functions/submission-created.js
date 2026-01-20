// High Ridge Advisory - Form Submission Handler
// ==============================================
// This event-driven function automatically runs when a form is submitted
// It sends the subscriber data to MailerLite if they opted in

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID;

exports.handler = async (event, context) => {
  // Parse the form submission payload
  const payload = JSON.parse(event.body);
  const { data } = payload.payload;

  // Extract form fields
  const firstName = data['first-name'] || '';
  const lastName = data['last-name'] || '';
  const email = data.email;
  const phone = data.phone || '';
  const message = data.message || '';
  const newsletter = data.newsletter;

  // Check if user opted in to newsletter (checkbox is 'on' when checked)
  const shouldSubscribe = newsletter === 'on' || newsletter === 'true' || newsletter === true;

  console.log('Form submission received:', {
    name: `${firstName} ${lastName}`,
    email,
    phone,
    newsletter: shouldSubscribe
  });

  // If no API key configured, log and exit
  if (!MAILERLITE_API_KEY) {
    console.log('MailerLite API key not configured. Skipping subscriber creation.');
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form processed (MailerLite not configured)' })
    };
  }

  // If user didn't opt in, skip MailerLite
  if (!shouldSubscribe) {
    console.log('User opted out of newsletter. Skipping MailerLite.');
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Form processed (user opted out)' })
    };
  }

  // Add subscriber to MailerLite
  try {
    const subscriberData = {
      email: email,
      fields: {
        name: firstName,
        last_name: lastName,
        phone: phone,
        company: '', // Can be added if form includes company field
        notes: message
      },
      status: 'active'
    };

    // Add to specific group if configured
    if (MAILERLITE_GROUP_ID) {
      subscriberData.groups = [MAILERLITE_GROUP_ID];
    }

    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`
      },
      body: JSON.stringify(subscriberData)
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('MailerLite API error:', result);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to add subscriber to MailerLite' })
      };
    }

    console.log('Successfully added subscriber to MailerLite:', email);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Subscriber added to MailerLite', email })
    };

  } catch (error) {
    console.error('Error adding subscriber to MailerLite:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error processing subscription' })
    };
  }
};
