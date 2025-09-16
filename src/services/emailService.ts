import emailjs from '@emailjs/browser';

// EmailJS configuration
const EMAILJS_SERVICE_ID = 'service_5kr32xq';
const EMAILJS_TEMPLATE_ID = 'template_5izlrct'; // Auto-Reply template
const EMAILJS_PUBLIC_KEY = 'dxIKzjgRmMO41lcSv';

// Initialize EmailJS
emailjs.init(EMAILJS_PUBLIC_KEY);

export interface InquiryFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budgetRange: string;
  timeline: string;
  projectDescription: string;
  specificRequirements: string;
  contactMethod: string;
  bestTimeToContact: string;
}

// Map form values to readable text
const getReadableProjectType = (value: string): string => {
  const projectTypeMap: { [key: string]: string } = {
    'business-website': 'Business Website',
    'ecommerce': 'E-commerce Store',
    'portfolio': 'Portfolio Website',
    'blog': 'Blog/Content Site',
    'custom-application': 'Custom Web Application',
    'other': 'Other'
  };
  return projectTypeMap[value] || value;
};

const getReadableBudgetRange = (value: string): string => {
  const budgetMap: { [key: string]: string } = {
    'under-1000': 'Under $1,000',
    '1000-3000': '$1,000 - $3,000',
    '3000-5000': '$3,000 - $5,000',
    '5000-plus': '$5,000+',
    'discuss': "Let's Discuss"
  };
  return budgetMap[value] || value;
};

const getReadableTimeline = (value: string): string => {
  const timelineMap: { [key: string]: string } = {
    'asap': 'ASAP',
    '1-2-weeks': '1-2 Weeks',
    '1-month': '1 Month',
    '2-3-months': '2-3 Months',
    'flexible': 'Flexible'
  };
  return timelineMap[value] || value;
};

const getReadableContactMethod = (value: string): string => {
  const contactMap: { [key: string]: string } = {
    'email': 'Email',
    'phone': 'Phone Call',
    'whatsapp': 'WhatsApp'
  };
  return contactMap[value] || value;
};

const getReadableContactTime = (value: string): string => {
  const timeMap: { [key: string]: string } = {
    'morning': 'Morning',
    'afternoon': 'Afternoon',
    'evening': 'Evening',
    'anytime': 'Anytime'
  };
  return timeMap[value] || value;
};

export const sendInquiryEmail = async (formData: InquiryFormData): Promise<void> => {
  console.log('=== EMAIL SERVICE DEBUG ===');
  console.log('Form data received:', formData);
  console.log('EmailJS Config:', {
    serviceId: EMAILJS_SERVICE_ID,
    templateId: EMAILJS_TEMPLATE_ID,
    publicKey: EMAILJS_PUBLIC_KEY ? 'SET' : 'NOT SET'
  });

  try {
    // Create email data with multiple variable name formats to ensure compatibility
    const emailData = {
      // Multiple name formats
      to_name: 'Techfolks Team',
      to_email: 'techfolksweb@gmail.com',
      from_name: formData.fullName,
      from_email: formData.email,
      reply_to: formData.email,

      // Client information - multiple formats
      name: formData.fullName,
      client_name: formData.fullName,
      user_name: formData.fullName,
      fullName: formData.fullName,

      email: formData.email,
      client_email: formData.email,
      user_email: formData.email,

      phone: formData.phone,
      client_phone: formData.phone,

      company: formData.company || 'Not specified',
      client_company: formData.company || 'Not specified',

      // Project details - multiple formats
      project_type: getReadableProjectType(formData.projectType),
      projectType: getReadableProjectType(formData.projectType),

      budget: getReadableBudgetRange(formData.budgetRange),
      budget_range: getReadableBudgetRange(formData.budgetRange),
      budgetRange: getReadableBudgetRange(formData.budgetRange),

      timeline: getReadableTimeline(formData.timeline),
      projectTimeline: getReadableTimeline(formData.timeline),

      message: formData.projectDescription,
      project_description: formData.projectDescription,
      projectDescription: formData.projectDescription,
      description: formData.projectDescription,

      requirements: formData.specificRequirements || 'None specified',
      specific_requirements: formData.specificRequirements || 'None specified',
      specificRequirements: formData.specificRequirements || 'None specified',

      // Contact preferences
      contact_method: getReadableContactMethod(formData.contactMethod),
      contactMethod: getReadableContactMethod(formData.contactMethod),
      best_time: getReadableContactTime(formData.bestTimeToContact),
      bestTime: getReadableContactTime(formData.bestTimeToContact),

      // Additional info
      subject: `New Website Inquiry from ${formData.fullName}`,
      inquiry_date: new Date().toLocaleDateString(),
      inquiryDate: new Date().toLocaleDateString(),
      inquiry_time: new Date().toLocaleTimeString(),
      inquiryTime: new Date().toLocaleTimeString()
    };

    console.log('Email data prepared:', emailData);

    // Send email using EmailJS
    console.log('Sending email via EmailJS...');
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      emailData
    );

    console.log('Email sent successfully:', response);
    console.log('=== EMAIL SERVICE SUCCESS ===');

  } catch (error) {
    console.error('=== EMAIL SERVICE ERROR ===');
    console.error('Full error object:', error);
    console.error('Error message:', error instanceof Error ? error.message : 'Unknown error');
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');

    // Check if it's a specific EmailJS error
    if (error && typeof error === 'object' && 'text' in error) {
      console.error('EmailJS error text:', (error as any).text);
    }

    // Provide more specific error messages
    let errorMessage = 'Failed to send inquiry. Please try again or contact us directly.';

    if (error instanceof Error) {
      const msg = error.message.toLowerCase();
      if (msg.includes('template')) {
        errorMessage = 'Email template issue. Please contact us directly at techfolksweb@gmail.com';
      } else if (msg.includes('service') || msg.includes('invalid service id')) {
        errorMessage = 'Email service configuration issue. Please contact us directly at techfolksweb@gmail.com';
      } else if (msg.includes('public key') || msg.includes('invalid public key')) {
        errorMessage = 'Email authentication issue. Please contact us directly at techfolksweb@gmail.com';
      } else if (msg.includes('network') || msg.includes('fetch')) {
        errorMessage = 'Network connection issue. Please check your internet and try again.';
      }
    }

    throw new Error(errorMessage);
  }
};

// Email template content for reference (to be configured in EmailJS dashboard)
export const EMAIL_TEMPLATES = {
  businessNotification: `
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
  `,

  clientAutoResponse: `
    Dear {{client_name}},

    Thank you for your interest in Techfolks website building services!

    We have received your inquiry about {{project_type}} and will review your requirements carefully.
    Our team will contact you within 24 hours to discuss your project in detail.

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
  `
};