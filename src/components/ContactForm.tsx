import React, { useState } from 'react';
import {
  Send,
  User,
  Mail,
  Phone,
  Building,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader
} from 'lucide-react';

interface FormData {
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

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budgetRange: '',
    timeline: '',
    projectDescription: '',
    specificRequirements: '',
    contactMethod: 'email',
    bestTimeToContact: 'anytime'
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const projectTypes = [
    { value: '', label: 'Select Project Type' },
    { value: 'business-website', label: 'Business Website' },
    { value: 'ecommerce', label: 'E-commerce Store' },
    { value: 'portfolio', label: 'Portfolio Website' },
    { value: 'blog', label: 'Blog/Content Site' },
    { value: 'custom-application', label: 'Custom Web Application' },
    { value: 'other', label: 'Other' }
  ];

  const budgetRanges = [
    { value: '', label: 'Select Budget Range' },
    { value: 'under-1000', label: 'Under $1,000' },
    { value: '1000-3000', label: '$1,000 - $3,000' },
    { value: '3000-5000', label: '$3,000 - $5,000' },
    { value: '5000-plus', label: '$5,000+' },
    { value: 'discuss', label: 'Let\'s Discuss' }
  ];

  const timelines = [
    { value: '', label: 'Select Timeline' },
    { value: 'asap', label: 'ASAP' },
    { value: '1-2-weeks', label: '1-2 Weeks' },
    { value: '1-month', label: '1 Month' },
    { value: '2-3-months', label: '2-3 Months' },
    { value: 'flexible', label: 'Flexible' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'whatsapp', label: 'WhatsApp' }
  ];

  const contactTimes = [
    { value: 'morning', label: 'Morning' },
    { value: 'afternoon', label: 'Afternoon' },
    { value: 'evening', label: 'Evening' },
    { value: 'anytime', label: 'Anytime' }
  ];

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.projectType) {
      newErrors.projectType = 'Please select a project type';
    }

    if (!formData.budgetRange) {
      newErrors.budgetRange = 'Please select a budget range';
    }

    if (!formData.timeline) {
      newErrors.timeline = 'Please select a timeline';
    }

    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Project description is required';
    } else if (formData.projectDescription.trim().length < 20) {
      newErrors.projectDescription = 'Please provide at least 20 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Import the email service dynamically to avoid build issues if not configured
      const { sendInquiryEmail } = await import('../services/emailService');

      // Send the inquiry email
      await sendInquiryEmail(formData);

      setSubmitStatus('success');
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        budgetRange: '',
        timeline: '',
        projectDescription: '',
        specificRequirements: '',
        contactMethod: 'email',
        bestTimeToContact: 'anytime'
      });
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Start Your Website Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to transform your business with a professional website?
            Fill out our detailed inquiry form and we'll get back to you within 24 hours with a custom proposal.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <Phone className="h-8 w-8 text-primary-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
            <p className="text-gray-600">8838829679</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <Mail className="h-8 w-8 text-primary-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
            <p className="text-gray-600">techfolksweb@gmail.com</p>
          </div>
          <div className="text-center p-6 bg-white rounded-lg shadow-sm">
            <Clock className="h-8 w-8 text-primary-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-1">Response Time</h3>
            <p className="text-gray-600">Within 24 hours</p>
          </div>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {submitStatus === 'success' && (
            <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center">
              <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
              <div>
                <h4 className="font-semibold text-green-800">Thank you for your inquiry!</h4>
                <p className="text-green-700">We'll get back to you within 24 hours with a detailed proposal.</p>
              </div>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mb-8 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center">
              <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
              <div>
                <h4 className="font-semibold text-red-800">Something went wrong</h4>
                <p className="text-red-700">Please try again or contact us directly at techfolksweb@gmail.com</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Client Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <User className="h-5 w-5 mr-2 text-primary-600" />
                Client Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="form-label">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`form-input ${errors.fullName ? 'border-red-500' : ''}`}
                    placeholder="Your full name"
                  />
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-600">{errors.fullName}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`form-input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="form-label">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`form-input ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="company" className="form-label">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="form-input"
                    placeholder="Your company name"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Building className="h-5 w-5 mr-2 text-primary-600" />
                Project Details
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="projectType" className="form-label">
                    Project Type *
                  </label>
                  <select
                    id="projectType"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className={`form-input ${errors.projectType ? 'border-red-500' : ''}`}
                  >
                    {projectTypes.map(type => (
                      <option key={type.value} value={type.value}>
                        {type.label}
                      </option>
                    ))}
                  </select>
                  {errors.projectType && (
                    <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="budgetRange" className="form-label">
                    Budget Range *
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    className={`form-input ${errors.budgetRange ? 'border-red-500' : ''}`}
                  >
                    {budgetRanges.map(budget => (
                      <option key={budget.value} value={budget.value}>
                        {budget.label}
                      </option>
                    ))}
                  </select>
                  {errors.budgetRange && (
                    <p className="mt-1 text-sm text-red-600">{errors.budgetRange}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="timeline" className="form-label">
                    Timeline *
                  </label>
                  <select
                    id="timeline"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleInputChange}
                    className={`form-input ${errors.timeline ? 'border-red-500' : ''}`}
                  >
                    {timelines.map(timeline => (
                      <option key={timeline.value} value={timeline.value}>
                        {timeline.label}
                      </option>
                    ))}
                  </select>
                  {errors.timeline && (
                    <p className="mt-1 text-sm text-red-600">{errors.timeline}</p>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label htmlFor="projectDescription" className="form-label">
                    Project Description *
                  </label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    rows={4}
                    className={`form-input ${errors.projectDescription ? 'border-red-500' : ''}`}
                    placeholder="Please describe your project in detail. What is the purpose of your website? What are your main goals?"
                  />
                  {errors.projectDescription && (
                    <p className="mt-1 text-sm text-red-600">{errors.projectDescription}</p>
                  )}
                  <p className="mt-1 text-sm text-gray-500">
                    {formData.projectDescription.length}/20 characters minimum
                  </p>
                </div>

                <div>
                  <label htmlFor="specificRequirements" className="form-label">
                    Specific Requirements/Features
                  </label>
                  <textarea
                    id="specificRequirements"
                    name="specificRequirements"
                    value={formData.specificRequirements}
                    onChange={handleInputChange}
                    rows={3}
                    className="form-input"
                    placeholder="Any specific features, integrations, or requirements you need? (e.g., payment processing, booking system, etc.)"
                  />
                </div>
              </div>
            </div>

            {/* Contact Preferences */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <MessageSquare className="h-5 w-5 mr-2 text-primary-600" />
                Contact Preferences
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contactMethod" className="form-label">
                    Preferred Contact Method
                  </label>
                  <select
                    id="contactMethod"
                    name="contactMethod"
                    value={formData.contactMethod}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    {contactMethods.map(method => (
                      <option key={method.value} value={method.value}>
                        {method.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="bestTimeToContact" className="form-label">
                    Best Time to Contact
                  </label>
                  <select
                    id="bestTimeToContact"
                    name="bestTimeToContact"
                    value={formData.bestTimeToContact}
                    onChange={handleInputChange}
                    className="form-input"
                  >
                    {contactTimes.map(time => (
                      <option key={time.value} value={time.value}>
                        {time.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin h-5 w-5 mr-2" />
                    Sending Your Inquiry...
                  </>
                ) : (
                  <>
                    Send Inquiry
                    <Send className="ml-2 h-5 w-5" />
                  </>
                )}
              </button>
              <p className="mt-3 text-sm text-gray-500 text-center">
                We respect your privacy. Your information will only be used to contact you about your project.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;