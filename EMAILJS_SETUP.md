# EmailJS Setup Instructions

This application uses EmailJS to send email notifications when users submit inquiries. Follow these steps to configure EmailJS:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Set Up Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Note down your **Service ID**

## 3. Create Email Templates

### Template 1: Business Notification (to Techfolks)
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Template Name:** techfolks_inquiry_notification

**Subject:** New Website Inquiry from {{client_name}}

**Body:**
```
New Website Building Inquiry - Techfolks

CLIENT INFORMATION:
- Name: {{client_name}}
- Email: {{client_email}}
- Phone: {{client_phone}}
- Company: {{client_company}}

PROJECT DETAILS:
- Project Type: {{project_type}}
- Budget Range: {{budget_range}}
- Timeline: {{timeline}}
- Description: {{project_description}}
- Requirements: {{specific_requirements}}

CONTACT PREFERENCES:
- Preferred Contact Method: {{contact_method}}
- Best Time to Contact: {{best_time}}

INQUIRY SUBMITTED: {{inquiry_date}}

---
Please respond to this inquiry promptly to maintain our professional service standards.

Contact the client at: {{client_email}} or {{client_phone}}
```

**To Email:** techfolksweb@gmail.com
**From Name:** Techfolks Website
**Reply To:** {{client_email}}

### Template 2: Client Auto-Response
1. Create another template
2. Use this template content:

**Template Name:** client_autoresponse_template

**Subject:** Thank you for your inquiry - Techfolks will contact you soon!

**Body:**
```
Dear {{client_name}},

Thank you for your interest in Techfolks website building services!

We have received your inquiry about {{project_type}} and will review your requirements carefully. Our team will contact you within 24 hours to discuss your project in detail.

Your Inquiry Summary:
- Project: {{project_description}}
- Budget: {{budget_range}}
- Timeline: {{timeline}}

Our Contact Information:
- Email: techfolksweb@gmail.com
- Phone: 8838829679

We look forward to building an amazing website for you!

Best regards,
Techfolks Team
```

**To Email:** {{client_email}}
**From Name:** Techfolks Team
**Reply To:** techfolksweb@gmail.com

## 4. Get Your Public Key
1. Go to "Account" > "General"
2. Find your **Public Key**
3. Copy it for use in the application

## 5. Update Application Configuration
1. Open `src/services/emailService.ts`
2. Replace the placeholder values:
   ```typescript
   const EMAILJS_SERVICE_ID = 'your_service_id_here';
   const EMAILJS_TEMPLATE_ID = 'techfolks_inquiry_notification';
   const EMAILJS_PUBLIC_KEY = 'your_public_key_here';
   ```

## 6. Test the Integration
1. Start your development server: `npm start`
2. Fill out and submit the contact form
3. Check that emails are received at techfolksweb@gmail.com
4. Verify that the client receives an auto-response

## 7. Environment Variables (Recommended)
For production, use environment variables:

1. Create a `.env` file in your project root:
   ```
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
   REACT_APP_EMAILJS_TEMPLATE_ID=techfolks_inquiry_notification
   REACT_APP_EMAILJS_CLIENT_TEMPLATE_ID=client_autoresponse_template
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```

2. Update `emailService.ts` to use environment variables:
   ```typescript
   const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
   const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
   const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;
   ```

## Troubleshooting

### Common Issues:
1. **Emails not sending:** Check your service configuration and template IDs
2. **Template variables not working:** Ensure variable names match exactly (case-sensitive)
3. **Rate limiting:** EmailJS free plan has sending limits - consider upgrading for production
4. **Email in spam:** Configure SPF/DKIM records for your domain

### EmailJS Free Plan Limits:
- 200 emails per month
- 50 emails per day
- EmailJS branding in emails

For production use, consider upgrading to a paid plan to remove limits and branding.

## Support
- EmailJS Documentation: https://www.emailjs.com/docs/
- EmailJS Support: https://www.emailjs.com/support/