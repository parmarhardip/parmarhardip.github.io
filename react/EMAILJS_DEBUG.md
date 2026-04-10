# EmailJS Debug Guide - "Recipients address is empty"

## Your Current Configuration (from curl)
- **User ID**: `73Vs0c9xW4b-SGjXt`
- **Service ID**: `service_mx39cts`
- **Template ID**: `template_h97r46f`

## Step-by-Step Debug Process

### 1. Check Your EmailJS Service Configuration

Go to [EmailJS Dashboard](https://dashboard.emailjs.com/) → **Services** → Click on `service_mx39cts`

**Look for these specific fields** (the exact name varies by email provider):

#### For Gmail Service:
- **"To Email"** field should contain: `parmarhardip1995@gmail.com`
- **"From Email"** should be your Gmail address
- Service should be **"Connected"** with green status

#### For Outlook Service:
- **"Recipient Email"** field should contain: `parmarhardip1995@gmail.com`
- **"From Email"** should be your Outlook address

#### For Custom SMTP:
- **"Default To"** or **"Recipient"** should contain: `parmarhardip1995@gmail.com`

### 2. Check Your Email Template

Go to **Email Templates** → Click on `template_h97r46f`

**Verify the template configuration:**

1. **To Field**: Should be empty or use `{{to_email}}` if you want dynamic recipients
2. **From Field**: Should use your service email or be empty
3. **Subject**: `New Contact Form Submission from {{from_name}}`
4. **Body**: Should contain the variables we're sending

### 3. Template Body Should Look Like This:
```
Subject: New Contact Form Submission from {{from_name}}

Hello,

New contact form submission:

Name: {{from_name}}
Email: {{from_email}}
Project: {{project_type}}
Submitted: {{submitted_at}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

### 4. Common Issues & Solutions

#### Issue 1: Service Not Properly Connected
- **Solution**: Reconnect your email service
- Go to Services → Edit your service → Re-authenticate with your email provider

#### Issue 2: Missing Recipient in Service
- **Solution**: Add recipient email in service settings
- The recipient email must be set at the SERVICE level, not template level

#### Issue 3: Template Configuration
- **Solution**: Don't set "To" field in template if using service default recipient
- Remove any hardcoded email addresses from template

### 5. Test Your Configuration

**Method 1: EmailJS Dashboard Test**
1. Go to your template in EmailJS dashboard
2. Click "Test" button
3. Fill in test data
4. Send test email

**Method 2: API Test via Browser Console**
```javascript
emailjs.send('service_mx39cts', 'template_h97r46f', {
  from_name: 'Test Name',
  from_email: 'test@example.com',
  project_type: 'Test Project',
  message: 'Test message',
  reply_to: 'test@example.com',
  submitted_at: new Date().toLocaleString()
}, '73Vs0c9xW4b-SGjXt').then(
  response => console.log('SUCCESS!', response.status, response.text),
  error => console.log('FAILED...', error)
);
```

### 6. Alternative Solutions

#### Option A: Use SendForm Instead
If the issue persists, we can modify the code to use `emailjs.sendForm()` method which handles recipients differently.

#### Option B: Add Recipient to Template Params
We can modify our service to include the recipient in template parameters:

```javascript
// In emailService.ts
const templateParams = {
  from_name: formData.name,
  from_email: formData.email,
  to_email: 'parmarhardip1995@gmail.com', // Add this line
  project_type: formData.projectType,
  message: formData.projectDetails,
  reply_to: formData.email,
  submitted_at: new Date().toLocaleString(),
};
```

Then update your template to use `{{to_email}}` in the "To" field.

## Immediate Action Items

1. **Check service recipient**: Verify `parmarhardip1995@gmail.com` is set in your service
2. **Reconnect service**: Try disconnecting and reconnecting your email service
3. **Test from dashboard**: Use EmailJS dashboard test feature first
4. **Check service status**: Ensure service shows "Connected" status

## If Still Failing

Let me know:
1. Which email provider are you using? (Gmail, Outlook, etc.)
2. What does the "Services" page show for your service status?
3. Can you see any error logs in the EmailJS dashboard?
4. Does the test from EmailJS dashboard work?

This will help identify the exact configuration issue.