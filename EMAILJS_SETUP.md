# EmailJS Setup Guide

This guide will help you configure EmailJS to send emails from your contact forms.

## Step 1: Create an EmailJS Account

1. Visit [emailjs.com](https://www.emailjs.com)
2. Click **Sign Up** and create a free account
3. Verify your email address

## Step 2: Add an Email Service

1. Go to **Email Services** in your dashboard
2. Click **Add New Service**
3. Select your email provider:
   - **Gmail** (recommended)
   - **Outlook**
   - **SendGrid**
   - **Other SMTP providers**

### For Gmail:

1. Select **Gmail** as the service
2. Click **Connect Account**
3. Follow Gmail's authentication flow
4. Allow EmailJS to send emails on your behalf
5. Copy your **Service ID** (e.g., `service_xxxxx`)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Configure the template:

**Template Name:** `contact_form_template` (or your choice)

**Email Subject:**

```
New Contact Form Submission from {{from_name}}
```

**Email Content:**

```html
<html>
  <body style="font-family: Arial, sans-serif; color: #333;">
    <h2>New Contact Form Submission</h2>
    <p><strong>Name:</strong> {{from_name}}</p>
    <p><strong>Email:</strong> {{from_email}}</p>
    <p><strong>Phone:</strong> {{phone}}</p>
    <p><strong>Company:</strong> {{company}}</p>
    <p><strong>Service Interested:</strong> {{service}}</p>
    <p><strong>Message:</strong></p>
    <p
      style="white-space: pre-wrap; background-color: #f5f5f5; padding: 10px; border-radius: 4px;"
    >
      {{message}}
    </p>
    <hr />
    <p style="color: #999; font-size: 12px;">
      This email was sent from your contact form at iConnect Dynamics.
    </p>
  </body>
</html>
```

**To Email:** `{{to_email}}`

4. Click **Save**
5. Copy your **Template ID** (e.g., `template_xxxxx`)

## Step 4: Get Your Public Key

1. Go to **Account** → **API Keys**
2. Copy your **Public Key** (e.g., `abc123def456...`)

## Step 5: Update Your Code

Replace the placeholder values in both files:

### In `src/pages/Home.js` (line 35):

```javascript
useEffect(() => {
  emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Replace with your Public Key
}, []);
```

### In `src/pages/Home.js` (lines 75-76):

```javascript
emailjs.send(
  "YOUR_SERVICE_ID_HERE", // Replace with your Service ID
  "YOUR_TEMPLATE_ID_HERE", // Replace with your Template ID
  templateParams
);
```

### In `src/pages/ContactUs.js` (line 7):

```javascript
emailjs.init("YOUR_PUBLIC_KEY_HERE"); // Replace with your Public Key
```

### In `src/pages/ContactUs.js` (lines 42-44):

```javascript
emailjs.send(
  "YOUR_SERVICE_ID_HERE", // Replace with your Service ID
  "YOUR_TEMPLATE_ID_HERE", // Replace with your Template ID
  templateParams
);
```

## Step 6: Test Your Setup

1. Start your React app: `npm start`
2. Fill out a contact form on the Home page or Contact Us page
3. Submit the form
4. Check:
   - Your email inbox for the received message
   - Browser console for any errors
   - EmailJS dashboard for delivery status

## Template Variables Reference

The following variables are sent to EmailJS and can be used in your email template:

- `to_email` - Recipient email (admin@iconnectdynamics.com)
- `from_name` - Contact form name field
- `from_email` - Contact form email field
- `phone` - Contact form phone field
- `company` - Contact form company field (Home.js only)
- `service` - Service dropdown selection (Home.js only)
- `subject` - Message subject (ContactUs.js only)
- `message` - Contact form message

## Troubleshooting

### "Failed to send email"

- Check that your Public Key, Service ID, and Template ID are correct
- Ensure your email service is connected in the EmailJS dashboard
- Check browser console for detailed error messages

### "EmailJS not initializing"

- Verify the Public Key is correct
- Check that `emailjs.init()` is called before any `emailjs.send()` calls

### Email not received

- Check your spam/junk folder
- Verify the email service is active in EmailJS dashboard
- Test sending an email directly from EmailJS dashboard

### CORS errors

- This is expected for frontend-only apps; EmailJS handles it automatically
- Make sure you're using the correct domain restrictions in EmailJS settings

## Production Deployment

Before deploying to production:

1. **Update Public Key** - Consider using environment variables
2. **Email Service** - Ensure your email service has adequate sending limits
3. **Rate Limiting** - Add client-side rate limiting to prevent spam
4. **Verification** - Test all contact forms thoroughly

### Using Environment Variables (Optional)

Create a `.env` file:

```
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
```

Then update your code:

```javascript
emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY);
```

## Support

For more information, visit:

- [EmailJS Documentation](https://www.emailjs.com/docs/)
- [EmailJS FAQ](https://www.emailjs.com/faq/)
