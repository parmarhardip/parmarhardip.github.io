import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import type { GlobalSiteData } from '../types/content';
import { Icon } from '../components/ui/Icon';

interface ContactPageProps {
  globalData: GlobalSiteData;
}

interface FormData {
  name: string;
  email: string;
  projectType: string;
  projectDetails: string;
}

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

    // For now, just simulate form submission
    // This is where email service integration will be added later
    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        projectType: 'Enterprise WordPress Consultation',
        projectDetails: ''
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
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
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-lg border border-surface-container shadow-sm hover:shadow-xl transition-all duration-500">
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
                      className="bg-surface-container-low border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary-container text-on-surface placeholder:text-on-surface-variant/50 outline-none w-full transition-all"
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
                      className="bg-surface-container-low border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary-container text-on-surface placeholder:text-on-surface-variant/50 outline-none w-full transition-all"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold tracking-widest uppercase text-secondary">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="bg-surface-container-low border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary-container text-on-surface appearance-none cursor-pointer outline-none w-full transition-all"
                  >
                    <option>Enterprise WordPress Consultation</option>
                    <option>LMS Architecture & Setup</option>
                    <option>Custom Plugin Development</option>
                    <option>Performance Optimization</option>
                    <option>Other Inquiry</option>
                  </select>
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
                    className="bg-surface-container-low border-none rounded-lg px-6 py-4 focus:ring-2 focus:ring-primary-container text-on-surface placeholder:text-on-surface-variant/50 outline-none w-full transition-all resize-none"
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
              {/* Quick Contact */}
              <section className="bg-white p-10 rounded-lg border border-surface-container shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="schedule" className="text-2xl text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-headline font-extrabold text-xl text-on-surface">Schedule a Call</h3>
                    <p className="text-on-surface-variant text-sm">Direct 1-on-1 consultation</p>
                  </div>
                </div>
                <p className="text-on-surface-variant mb-6 leading-relaxed">
                  Prefer to discuss your project in real-time? Let's schedule a strategic consultation call.
                </p>
                <a
                  href="#"
                  className="group flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors"
                >
                  Book a Strategy Call
                  <Icon name="arrow_forward" className="text-sm group-hover:translate-x-1 transition-transform" />
                </a>
              </section>

              {/* Direct Contact */}
              <section className="bg-white p-10 rounded-lg border border-surface-container shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-primary-container/20 rounded-full flex items-center justify-center">
                    <Icon name="alternate_email" className="text-2xl text-primary" />
                  </div>
                  <div>
                    <h3 className="font-headline font-extrabold text-xl text-on-surface">Direct Contact</h3>
                    <p className="text-on-surface-variant text-sm">Immediate response via email</p>
                  </div>
                </div>
                <p className="text-on-surface-variant mb-4 leading-relaxed">
                  For urgent inquiries or quick questions.
                </p>
                <div className="space-y-3">
                  <a
                    href="mailto:parmarhardip1995@gmail.com"
                    className="group flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors"
                  >
                    <Icon name="mail" className="text-sm" />
                    parmarhardip1995@gmail.com
                  </a>
                  <a
                    href="https://linkedin.com/in/parmarhardipr"
                    target="_blank"
                    rel="noopener"
                    className="group flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors"
                  >
                    <Icon name="link" className="text-sm" />
                    LinkedIn Profile
                  </a>
                </div>
              </section>

              {/* Response Time */}
              <section className="bg-surface-container-low p-8 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Icon name="schedule" className="text-2xl text-secondary" />
                  <h4 className="font-headline font-bold text-lg">Response Time</h4>
                </div>
                <p className="text-on-surface-variant text-sm">
                  I typically respond within <strong>24 hours</strong> during business days.
                  Complex project discussions may be scheduled for a dedicated call.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};