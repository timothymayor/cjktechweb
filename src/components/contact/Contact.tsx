import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Linkedin, 
  Twitter, 
  Facebook, 
  Instagram, 
  Youtube, 
  MessageSquare,
  Sparkles,
  Shield
} from 'lucide-react';
import { companyConfig } from '../../data/config';
import { ContactFormData } from '../../types';
import { solutions } from '../../data/solutions';

interface ContactProps {
  preSelectedService: string;
  onClearPreSelectedService?: () => void;
}

export const Contact: React.FC<ContactProps> = ({ preSelectedService }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    industry: '',
    serviceRequired: preSelectedService || 'AI Customer Service & Support Agents',
    projectBudget: '$15,000 – $50,000',
    message: '',
    consent: true,
    honeypot: '', // anti-spam bot trap
  });

  // Update service if prop changes
  React.useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({ ...prev, serviceRequired: preSelectedService }));
    }
  }, [preSelectedService]);

  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required.';
    if (!formData.company.trim()) newErrors.company = 'Company name is required.';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid work email address.';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required.';
    if (!formData.message.trim()) newErrors.message = 'Please provide a brief project summary or inquiry.';
    if (!formData.consent) newErrors.consent = 'You must agree to be contacted.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot check
    if (formData.honeypot) {
      setFormStatus('success');
      return;
    }

    if (!validateForm()) {
      return;
    }

    setFormStatus('loading');
    setErrorMessage('');

    try {
      // Simulate real server API route / integration with Resend/SendGrid/HubSpot
      await new Promise((resolve) => setTimeout(resolve, 1200));

      setFormStatus('success');
      setFormData({
        fullName: '',
        company: '',
        email: '',
        phone: '',
        industry: '',
        serviceRequired: 'AI Customer Service & Support Agents',
        projectBudget: '$15,000 – $50,000',
        message: '',
        consent: true,
        honeypot: '',
      });
      setErrors({});
    } catch (err: any) {
      setFormStatus('error');
      setErrorMessage('Unable to submit your enquiry at this time. Please try again or email us directly.');
    }
  };

  const industryOptions = [
    'Retail & E-commerce',
    'Financial Services & Fintech',
    'Real Estate & Property',
    'Professional & Legal Services',
    'Healthcare & Life Sciences',
    'Logistics & Supply Chain',
    'Technology & SaaS',
    'Manufacturing & Industrial',
    'Other / Enterprise Sector'
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 relative bg-[#090D16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl space-y-3 pb-12 border-b border-slate-800/80">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium">
            <span>GET IN TOUCH</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Let's Build Your <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              AI Advantage
            </span>
          </h2>
          
          <p className="text-base text-slate-300 leading-relaxed">
            Connect with our AI solutions architects to discuss your workflows, evaluate technical feasibility, and receive a dedicated automation proposal.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Company Information, Map & Socials */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-slate-800 pb-3">
                Company Information
              </h3>

              <div className="space-y-4 text-sm text-slate-300">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">Headquarters & Global Hub</strong>
                    <span className="text-slate-400">{companyConfig.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">Direct Inquiries</strong>
                    <a href={`mailto:${companyConfig.email}`} className="text-cyan-400 hover:underline">
                      {companyConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">Advisory Line</strong>
                    <a href={`tel:${companyConfig.phone}`} className="text-slate-300 hover:text-white">
                      {companyConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-white block font-medium">Consulting Hours</strong>
                    <span className="text-slate-400">{companyConfig.businessHours}</span>
                  </div>
                </div>
              </div>

              {/* Social Channels Strip */}
              <div className="pt-4 border-t border-slate-800">
                <span className="text-xs font-mono text-slate-400 block mb-3">
                  Official Channels & Direct Messaging
                </span>
                <div className="flex items-center gap-2.5 flex-wrap">
                  <a
                    href={companyConfig.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-cyan-950 text-slate-300 hover:text-cyan-400 border border-slate-700 hover:border-cyan-800 transition-all"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={companyConfig.social.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-cyan-950 text-slate-300 hover:text-cyan-400 border border-slate-700 hover:border-cyan-800 transition-all"
                    aria-label="Twitter / X"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a
                    href={companyConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-emerald-950 text-slate-300 hover:text-emerald-400 border border-slate-700 hover:border-emerald-800 transition-all"
                    aria-label="WhatsApp Direct"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                  <a
                    href={companyConfig.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-rose-950 text-slate-300 hover:text-rose-400 border border-slate-700 hover:border-rose-800 transition-all"
                    aria-label="YouTube Channel"
                  >
                    <Youtube className="w-4 h-4" />
                  </a>
                  <a
                    href={companyConfig.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-indigo-950 text-slate-300 hover:text-indigo-400 border border-slate-700 hover:border-indigo-800 transition-all"
                    aria-label="Facebook"
                  >
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a
                    href={companyConfig.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 rounded-xl bg-slate-800 hover:bg-pink-950 text-slate-300 hover:text-pink-400 border border-slate-700 hover:border-pink-800 transition-all"
                    aria-label="Instagram"
                  >
                    <Instagram className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Embedded Map Section */}
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 overflow-hidden shadow-lg space-y-2">
              <div className="flex items-center justify-between px-2 text-xs font-mono text-slate-400">
                <span>Location Hub Map</span>
                <span className="text-cyan-400">Global Coverage</span>
              </div>
              <div className="w-full h-48 rounded-xl overflow-hidden bg-slate-950 relative border border-slate-800">
                <iframe
                  title="Company Location Map"
                  src={companyConfig.mapEmbedUrl}
                  className="w-full h-full border-0 filter invert contrast-125 opacity-80 hover:opacity-100 transition-opacity"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 lg:p-10 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md shadow-2xl space-y-6">
              
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">
                    Book an AI Consultation & Request Proposal
                  </h3>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Fill out the parameters below and our lead AI architect will respond within 24 hours.
                  </p>
                </div>
                <Shield className="w-5 h-5 text-cyan-400 hidden sm:block" />
              </div>

              {/* Form Success Banner */}
              {formStatus === 'success' && (
                <div className="p-5 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-200 space-y-2 animate-in fade-in">
                  <div className="flex items-center gap-2 font-bold text-sm text-emerald-300">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                    <span>Enquiry Received Successfully!</span>
                  </div>
                  <p className="text-xs text-emerald-300/90 leading-relaxed">
                    Thank you for reaching out to CJ Konsultants. Our AI Solutions Engineering team is reviewing your requirements and will reach out via email/phone shortly with a customized technical discussion blueprint.
                  </p>
                  <button
                    onClick={() => setFormStatus('idle')}
                    className="mt-2 text-xs underline font-semibold hover:text-white cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              )}

              {/* Form Error Banner */}
              {formStatus === 'error' && (
                <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 flex items-center gap-3 text-xs">
                  <AlertCircle className="w-5 h-5 text-rose-400 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {formStatus !== 'success' && (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {/* Honeypot field (hidden from normal users, catches spam bots) */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_url_hp">Leave this field empty</label>
                    <input
                      type="text"
                      id="website_url_hp"
                      name="website_url_hp"
                      value={formData.honeypot}
                      onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
                      tabIndex={-1}
                      autoComplete="off"
                    />
                  </div>

                  {/* Name & Company */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="e.g. Adeola Adeleke"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.fullName ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.fullName && <p className="text-[11px] text-rose-400 mt-1">{errors.fullName}</p>}
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-xs font-semibold text-slate-300 mb-1">
                        Company Name *
                      </label>
                      <input
                        type="text"
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="e.g. Apex Enterprises Ltd"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.company ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.company && <p className="text-[11px] text-rose-400 mt-1">{errors.company}</p>}
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="name@company.com"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.email && <p className="text-[11px] text-rose-400 mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1">
                        Phone / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+234 XXX XXX XXXX"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                          errors.phone ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                        }`}
                      />
                      {errors.phone && <p className="text-[11px] text-rose-400 mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  {/* Industry & Service Required */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="industry" className="block text-xs font-semibold text-slate-300 mb-1">
                        Industry
                      </label>
                      <select
                        id="industry"
                        value={formData.industry}
                        onChange={(e) => setFormData({ ...formData, industry: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                      >
                        <option value="">Select Industry</option>
                        {industryOptions.map((ind) => (
                          <option key={ind} value={ind} className="bg-slate-900 text-white">
                            {ind}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="serviceRequired" className="block text-xs font-semibold text-slate-300 mb-1">
                        Service Required *
                      </label>
                      <select
                        id="serviceRequired"
                        value={formData.serviceRequired}
                        onChange={(e) => setFormData({ ...formData, serviceRequired: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                      >
                        {solutions.map((sol) => (
                          <option key={sol.id} value={sol.title} className="bg-slate-900 text-white">
                            {sol.title}
                          </option>
                        ))}
                        <option value="Full Enterprise AI Transformation" className="bg-slate-900 text-white">
                          Full Enterprise AI Transformation
                        </option>
                        <option value="AI Readiness Assessment & Advisory" className="bg-slate-900 text-white">
                          AI Readiness Assessment & Advisory
                        </option>
                        <option value="Custom AI Agent Engineering" className="bg-slate-900 text-white">
                          Custom AI Agent Engineering
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Project Budget */}
                  <div>
                    <label htmlFor="projectBudget" className="block text-xs font-semibold text-slate-300 mb-1">
                      Target Project Budget
                    </label>
                    <select
                      id="projectBudget"
                      value={formData.projectBudget}
                      onChange={(e) => setFormData({ ...formData, projectBudget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white focus:border-cyan-400 focus:outline-none"
                    >
                      <option value="$5,000 – $15,000" className="bg-slate-900 text-white">$5,000 – $15,000 (Agile Pilot / Single Agent)</option>
                      <option value="$15,000 – $50,000" className="bg-slate-900 text-white">$15,000 – $50,000 (Core Business Automation)</option>
                      <option value="$50,000 – $150,000" className="bg-slate-900 text-white">$50,000 – $150,000 (Multi-System Agentic Fabric)</option>
                      <option value="$150,000+" className="bg-slate-900 text-white">$150,000+ (Enterprise Custom Transformation)</option>
                      <option value="Exploring / Unsure" className="bg-slate-900 text-white">Exploring / Need Advisory Guidance</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-xs font-semibold text-slate-300 mb-1">
                      Project Goals & Specific Requirements *
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your existing process, current tools, pain points, and what you would like the AI automation to achieve..."
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border text-sm text-white placeholder-slate-500 focus:outline-none transition-colors ${
                        errors.message ? 'border-rose-500' : 'border-slate-800 focus:border-cyan-400'
                      }`}
                    />
                    {errors.message && <p className="text-[11px] text-rose-400 mt-1">{errors.message}</p>}
                  </div>

                  {/* Consent Checkbox */}
                  <div className="space-y-1">
                    <label className="flex items-start gap-2.5 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 rounded border-slate-700 bg-slate-950 text-cyan-500 focus:ring-cyan-400"
                      />
                      <span className="text-xs text-slate-300 select-none leading-relaxed">
                        I agree to be contacted regarding my enquiry and acknowledge the enterprise confidentiality policy.
                      </span>
                    </label>
                    {errors.consent && <p className="text-[11px] text-rose-400">{errors.consent}</p>}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formStatus === 'loading'}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {formStatus === 'loading' ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Consultation Request...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Enquiry</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
