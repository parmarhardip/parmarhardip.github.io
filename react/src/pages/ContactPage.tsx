import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import type { GlobalSiteData } from '../types/content';
import { Icon } from '../components/ui/Icon';
import { sendContactEmail, isEmailJSConfigured, type ContactFormData } from '../services/emailService';

interface ContactPageProps {
  globalData: GlobalSiteData;
}

// Use ContactFormData from emailService
type FormData = ContactFormData;

export const ContactPage = ({ globalData }: ContactPageProps) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    projectType: 'Enterprise WordPress Consultation',
    projectDetails: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Check if EmailJS is configured
      if (!isEmailJSConfigured()) {
        throw new Error('Email service is not configured. Please contact me directly via email.');
      }

      // Send email using EmailJS
      await sendContactEmail(formData);

      setSubmitStatus('success');

      // Reset form on successful submission
      setFormData({
        name: '',
        email: '',
        projectType: 'Enterprise WordPress Consultation',
        projectDetails: ''
      });
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 8 seconds
      setTimeout(() => setSubmitStatus('idle'), 8000);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact & Inquiry | {globalData.seo.titleTemplate.replace('%s', '')}</title>
        <meta name="description" content="Get in touch for enterprise WordPress consultation, LMS architecture, or high-performance plugin development. Let's discuss your project requirements." />
        <meta name="keywords" content="WordPress Consultation, Contact, LMS Development, Custom Plugin Development, Enterprise WordPress" />
        <meta property="og:title" content="Contact & Inquiry | Hardip Parmar" />
        <meta property="og:description" content="Get in touch for enterprise WordPress consultation, LMS architecture, or high-performance plugin development." />
        <meta property="og:url" content={`${globalData.seo.siteUrl}/contact`} />
      </Helmet>

      <main className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Organic Shapes */}
        <div className="absolute -top-24 -right-24 w-[600px] h-[600px] bg-secondary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute top-[40%] -left-24 w-[400px] h-[400px] bg-primary-container/10 rounded-full blur-3xl -z-10"></div>

        <div className="max-w-[1200px] mx-auto px-6">
          {/* Header Section */}
          <header className="max-w-3xl mb-20">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-[2px] bg-secondary"></span>
              <span className="text-secondary font-bold tracking-widest text-xs uppercase">Strategic Engineering Partner</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold font-headline tracking-tight mb-8 leading-[1.1]">
              Let's Build Something <span className="accent-underline">Scalable</span>
            </h1>
            <p className="text-xl md:text-2xl text-on-surface-variant font-body leading-relaxed">
              Reach out for enterprise WordPress consultation, LMS architecture, or high-performance plugin development.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            {/* Contact Form */}
            <div className="lg:col-span-7 contact-card !p-8 md:!p-12">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-secondary">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                      className="input-field"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-bold tracking-widest uppercase text-secondary">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                      className="input-field"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-secondary">
                    Project Type
                  </label>
                  <div className="relative">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="input-field appearance-none cursor-pointer"
                    >
                      <option>Enterprise WordPress Consultation</option>
                      <option>LMS Architecture & Setup</option>
                      <option>Custom Plugin Development</option>
                      <option>Performance Optimization</option>
                      <option>Other Inquiry</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                      <Icon name="expand_more" className="text-xl text-on-surface-variant" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-secondary">
                    Project Details
                  </label>
                  <textarea
                    name="projectDetails"
                    value={formData.projectDetails}
                    onChange={handleInputChange}
                    placeholder="Tell me about your goals, timeline, and current technical challenges..."
                    rows={5}
                    required
                    className="input-field resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto bg-primary-container text-on-primary-container px-12 py-5 rounded-full font-headline font-extrabold text-lg tracking-tight hover:shadow-xl hover:translate-y-[-2px] transition-all active:scale-[0.98] shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Icon name="hourglass_top" className="animate-spin" />
                      Submitting...
                    </span>
                  ) : (
                    'Submit Inquiry'
                  )}
                </button>

                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                    <Icon name="check_circle" className="text-green-600" />
                    <span>Thank you! Your inquiry has been submitted successfully. I'll get back to you soon.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                    <Icon name="error" className="text-red-600" />
                    <span>There was an error submitting your inquiry. Please try again or contact me directly.</span>
                  </div>
                )}
              </form>
            </div>

            {/* Alternative Actions (Right Column) */}
            <div className="lg:col-span-5 space-y-12">
              {/* Profile Subtle Integration */}
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-tr from-primary-container to-secondary rounded-full opacity-20"></div>
                  <img
                    alt="Hardip Parmar"
                    className="relative w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                    src="/assets/images/hardip-parmar.jpg"
                  />
                </div>
                <div>
                  <p className="font-headline font-extrabold text-xl text-on-surface">Hardip Parmar</p>
                  <p className="text-sm font-medium text-secondary">Senior WordPress Engineer</p>
                </div>
              </div>

              {/* Schedule a Call */}
              <section className="bg-surface-container-low rounded-2xl p-10 border border-surface-container shadow-sm">
                <div className="flex items-center gap-4 mb-6 text-secondary">
                  <div className="p-3 bg-secondary/10 rounded-xl">
                    <Icon name="calendar_month" className="text-2xl" />
                  </div>
                  <h3 className="font-headline font-extrabold text-xl">Schedule a Call</h3>
                </div>
                <p className="text-on-surface-variant mb-8 leading-relaxed">
                  Prefer a face-to-face discussion? Skip the queue and book a 30-minute strategy session directly on my calendar.
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-3 text-on-surface font-headline font-extrabold accent-underline pb-1 transition-all group"
                >
                  Book a Strategy Call
                  <Icon name="arrow_forward" className="text-sm group-hover:translate-x-1 transition-transform" />
                </a>
              </section>

              {/* Direct Contact */}
              <section className="px-2 space-y-10">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary/60 mb-6">
                    Direct Contact
                  </h4>
                  <div className="space-y-4">
                    <a
                      href="mailto:parmarhardip1995@gmail.com"
                      className="flex items-center gap-4 text-xl font-headline font-extrabold text-on-surface hover:text-secondary transition-colors"
                    >
                      <Icon name="mail" className="text-secondary/40" />
                      parmarhardip1995@gmail.com
                    </a>
                    <a
                      href="tel:+918511202301"
                      className="flex items-center gap-4 text-xl font-headline font-extrabold text-on-surface hover:text-secondary transition-colors"
                    >
                      <Icon name="phone" className="text-secondary/40" />
                      +91 8511202301
                    </a>
                  </div>
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-secondary/60 mb-6">
                    Digital Presence
                  </h4>
                  <div className="flex flex-wrap gap-8">
                    <a
                      href="https://linkedin.com/in/parmarhardipr"
                      target="_blank"
                      rel="noopener"
                      className="font-headline font-extrabold text-on-surface hover:text-secondary transition-colors accent-underline"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="https://github.com/parmarhardip"
                      target="_blank"
                      rel="noopener"
                      className="font-headline font-extrabold text-on-surface hover:text-secondary transition-colors accent-underline"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>

          {/* Reassurance/Trust Bar */}
          <footer className="mt-32 pt-12 border-t border-surface-container-high flex flex-col md:flex-row items-center justify-between gap-8 text-on-surface-variant">
            <div className="flex items-center gap-3">
              <Icon name="verified" className="text-secondary text-3xl" />
              <span className="font-headline font-bold tracking-tight text-on-surface">
                10+ years of engineering excellence and architectural oversight.
              </span>
            </div>
            <div className="flex items-center gap-8 text-sm font-bold uppercase tracking-widest text-secondary/80">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                Available for Q2 2026
              </span>
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                Global Consultation
              </span>
            </div>
          </footer>
        </div>
      </main>
    </>
  );
};