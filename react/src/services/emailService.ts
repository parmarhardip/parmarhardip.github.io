import emailjs from '@emailjs/browser';

// EmailJS configuration from environment variables
const EMAILJS_CONFIG = {
  serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
  templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  autoReplyTemplateId: import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID,
};

// Initialize EmailJS with public key
const initEmailJS = () => {
  if (EMAILJS_CONFIG.publicKey) {
    emailjs.init(EMAILJS_CONFIG.publicKey);
  }
};

// Contact form data interface
export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  projectDetails: string;
}

// Send email using EmailJS
export const sendContactEmail = async (formData: ContactFormData): Promise<void> => {
  // Check if all required environment variables are set
  if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
    throw new Error('EmailJS configuration is missing. Please check your environment variables.');
  }

  try {
    // Initialize EmailJS
    initEmailJS();

    // Admin email
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.autoReplyTemplateId,
      {
        from_name: formData.name,
        from_email: formData.email,
        to_email: formData.email,
        project_type: formData.projectType,
        message: formData.projectDetails,
        reply_to: formData.email,
        submitted_at: new Date().toLocaleString(),
      }
    );

    // User Send email
    await emailjs.send(
      EMAILJS_CONFIG.serviceId,
      EMAILJS_CONFIG.templateId, // Admin template
      {
        to_name: formData.name,
        to_email: formData.email,
        from_name: 'Hardip Parmar',
        from_email: "parmarhardip1995@gmail.com",
        title: formData.projectType
      }
    );
    return;
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send email. Please try again or contact me directly.');
  }
};

// Check if EmailJS is configured
export const isEmailJSConfigured = (): boolean => {
  return !!(EMAILJS_CONFIG.serviceId && EMAILJS_CONFIG.templateId && EMAILJS_CONFIG.publicKey);
};