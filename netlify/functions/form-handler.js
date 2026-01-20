// High Ridge Advisory - MailerLite Form Handler
// ==============================================
// This Netlify function handles form submissions and sends them to MailerLite

const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID; // Optional: specific group to add subscribers to

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  // Parse the form data
  let formData;
  try {
    formData = JSON.parse(event.body);
  } catch (e) {
    // Handle URL-encoded form data
    const params = new URLSearchParams(event.body);
    formData = Object.fromEntries(params);
  }

  const { name, email, phone, message, newsletter } = formData;

  // Validate required fields
  if (!email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Email is required' })
    };
  }

  // Check if user opted out of newsletter
  const shouldSubscribe = newsletter !== 'no' && newsletter !== 'false' && newsletter !== false;

  // If API key is not set, log and return success (for development)
  if (!MAILERLITE_API_KEY) {
    console.log('MailerLite API key not configured. Form data received:', {
      name,
      email,
      phone,
      message,
      newsletter: shouldSubscribe
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Form received (MailerLite not configured)'
      })
    };
  }

  // If user wants to subscribe, add them to MailerLite
  if (shouldSubscribe) {
    try {
      const subscriberData = {
        email: email,
        fields: {
          name: name || '',
          phone: phone || '',
          last_message: message || ''
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
        // Don't fail the form submission if MailerLite fails
        // The form data is still captured by Netlify Forms
      } else {
        console.log('Successfully added subscriber to MailerLite:', email);
      }
    } catch (error) {
      console.error('Error adding subscriber to MailerLite:', error);
      // Don't fail the form submission if MailerLite fails
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      success: true,
      message: 'Form submitted successfully',
      subscribed: shouldSubscribe
    })
  };
};
