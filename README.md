# High Ridge Advisory Website

A professional website for High Ridge Advisory, a boutique wealth management firm in McKinney, Texas.

## Quick Reference

### File Locations

| Content | File |
|---------|------|
| Homepage | `index.html` |
| Services | `services.html` |
| About & Team | `about.html` |
| Contact Form | `contact.html` |
| Form Confirmation | `thank-you.html` |
| Styles | `css/styles.css` |
| Animations | `css/animations.css` |
| JavaScript | `js/main.js` |
| Images | `images/` folder |

### Technology Stack

- **Frontend:** HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Forms:** Netlify Forms
- **Hosting:** Netlify
- **Fonts:** Google Fonts (Cormorant Garamond, Inter)
- **Icons:** Inline SVG (Lucide Icons)

---

## Making Updates with Claude Code

Open your terminal and use Claude Code. Here are example prompts:

### Text Changes

```
"Change the phone number to 972-555-1234"
"Update Jay Madden's bio to mention 30 years of experience"
"Change the homepage headline to 'Your Partner in Wealth'"
```

### Adding Content

```
"Add a new service called 'Cryptocurrency Planning' to the Family section"
"Add a new team member named Sarah Johnson, Client Relations Manager"
```

### Image Changes

```
"Update the hero image to use hero-new.jpg from the images folder"
"Change Kyle Harrison's headshot to kyle-new.jpg"
```

---

## Replacing Images

1. Add your new image to the `images/` folder
2. Name it clearly (e.g., `jay-madden.jpg`)
3. Ask Claude Code: "Replace the current Jay Madden photo with jay-madden.jpg"

### Recommended Image Sizes

| Image Type | Recommended Size |
|------------|------------------|
| Hero images | 1920 x 1080 px |
| Team headshots | 400 x 480 px |
| General images | 600 x 400 px |
| Logo | 200 x 80 px |

---

## Publishing Changes

After making changes:

```bash
git add .
git commit -m "Describe your change here"
git push
```

Netlify automatically publishes within 1-2 minutes.

---

## Viewing Form Submissions

1. Log into [Netlify](https://netlify.com)
2. Select your site
3. Go to **Forms** in the sidebar
4. Click on **contact** to see submissions

### Setting Up Email Notifications

1. In Netlify, go to **Site settings**
2. Click **Forms** in the sidebar
3. Click **Form notifications**
4. Click **Add notification** → **Email notification**
5. Enter your email address and save

---

## Project Structure

```
high-ridge-advisory/
├── index.html                 # Homepage
├── services.html              # Services overview
├── about.html                 # About & team
├── contact.html               # Contact form
├── thank-you.html             # Form submission confirmation
├── css/
│   ├── styles.css             # Main stylesheet
│   └── animations.css         # Animation definitions
├── js/
│   └── main.js                # All JavaScript functionality
├── images/                    # Image assets
├── site.webmanifest           # PWA manifest
├── claude.md                  # Claude Code instructions
├── quickstart-guide.md        # Detailed user guide
└── README.md                  # This file
```

---

## Key URLs

| Destination | URL |
|-------------|-----|
| Book a Meeting | https://highridgeadvisory.as.me/ |
| View Investments | https://login.orionadvisor.com/ |
| Access Wealth Plan | https://wealth.emaplan.com/ema/SignIn |

---

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## Accessibility Features

- WCAG 2.1 AA compliant color contrast
- Keyboard navigation support
- Screen reader friendly
- Reduced motion support
- Skip to main content link
- Proper focus indicators

---

## Need Help?

- Review the [quickstart-guide.md](quickstart-guide.md) for detailed instructions
- Use Claude Code to ask questions about the site
- For technical issues, contact your developer

---

## Credits

- **Design & Development:** Built with Claude Code
- **Fonts:** [Google Fonts](https://fonts.google.com)
- **Icons:** [Lucide Icons](https://lucide.dev)
