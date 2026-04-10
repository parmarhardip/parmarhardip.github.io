# EmailJS Setup Guide

This guide will help you configure EmailJS for the contact form functionality.

## Step 1: Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Create Email Service

1. In the EmailJS dashboard, click **"Add New Service"**
2. Choose your email provider (Gmail recommended):
   - **Gmail**: Use your Gmail account
   - **Outlook**: Use your Outlook account
   - **Custom SMTP**: Use any email provider
3. Follow the setup instructions for your chosen provider
4. **IMPORTANT**: After connecting, make sure to:
   - Set the **"To Email"** field to `parmarhardip1995@gmail.com`
   - This is where contact form emails will be sent
   - You can add multiple recipient emails if needed
5. **Copy the Service ID** (e.g., `service_xyz123`)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

Hello,

You have received a new contact form submission from your portfolio website:

**Contact Details:**
- Name: {{from_name}}
- Email: {{from_email}}
- Submitted: {{submitted_at}}

**Project Type:** {{project_type}}

**Message:**
{{message}}

---
This email was sent from your portfolio contact form.
You can reply directly to: {{reply_to}}
```

4. **Copy the Template ID** (e.g., `template_abc456`)

## Step 4: Get Public Key

1. Go to **"Account"** → **"General"** in the dashboard
2. Find your **Public Key** (e.g., `user_xyz789`)

## Step 5: Configure Environment Variables

1. Create a `.env` file in the `react/` folder:

```bash
# EmailJS Configuration
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the placeholder values with your actual IDs:
   - `VITE_EMAILJS_SERVICE_ID`: Service ID from Step 2
   - `VITE_EMAILJS_TEMPLATE_ID`: Template ID from Step 3
   - `VITE_EMAILJS_PUBLIC_KEY`: Public Key from Step 4

## Step 6: Test the Contact Form

1. Start the development server: `npm run dev`
2. Navigate to `/contact`
3. Fill out and submit the form
4. Check your email for the submission

## Email Template Variables

The following variables are available in your email template:

- `{{from_name}}`: Contact's name
- `{{from_email}}`: Contact's email address
- `{{project_type}}`: Selected project type
- `{{message}}`: Project details message
- `{{to_name}}`: Your name (hardcoded to "Hardip Parmar")
- `{{to_email}}`: Your email (hardcoded to "parmarhardip1995@gmail.com")
- `{{reply_to}}`: Contact's email for replies

## Security Notes

- Environment variables starting with `VITE_` are exposed to the client
- EmailJS Public Key is safe to expose (it's designed for client-side use)
- Never expose your Private Key in client-side code
- The free tier has rate limiting (200 emails/month)

## Troubleshooting

### "The recipients address is empty" Error
**This is the most common issue!** The recipient email must be configured in the EmailJS service:

1. Go to your EmailJS dashboard → **Services**
2. Click on your service (Gmail/Outlook/etc.)
3. Look for **"To Email"** or **"Recipient Email"** field
4. Enter: `parmarhardip1995@gmail.com`
5. **Save** the service configuration
6. Test the form again

**Alternative fix:**
- In your email template, make sure you're NOT trying to set the recipient
- The recipient should ONLY be configured in the service settings

### "Email service is not configured" Error
- Check that all environment variables are set correctly
- Restart the development server after adding `.env` file
- Ensure variable names start with `VITE_`

### Emails Not Being Sent
- Check EmailJS dashboard for error logs
- Verify service and template IDs are correct
- Check spam folder for received emails
- Ensure email service is active in EmailJS dashboard

### Rate Limiting
- Free tier: 200 emails/month
- Paid plans available for higher limits
- Consider adding form validation to prevent spam

## Production Deployment

For production deployment (GitHub Pages):

1. Add environment variables to your deployment pipeline
2. For GitHub Pages, you may need to build with environment variables
3. Consider using GitHub Secrets for sensitive values
4. Test thoroughly before going live

## Alternative Email Services

If you prefer other services:
- **Formspree**: Simple form backend
- **Netlify Forms**: If hosting on Netlify
- **Custom API**: Build your own email service