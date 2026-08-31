import React, { useEffect } from 'react';
import { X, ShieldCheck } from 'lucide-react';

interface LegalModalProps {
  type: 'privacy' | 'terms' | 'cookie' | 'accessibility' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (type) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  const getContent = () => {
    switch (type) {
      case 'privacy':
        return {
          title: 'Privacy Policy',
          tag: 'Data Governance & Confidentiality',
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                CJ Konsultants AI Automation ("we", "our", or "us") is dedicated to safeguarding enterprise customer privacy and proprietary intellectual property.
              </p>
              <h4 className="text-white font-bold text-sm pt-2">1. Client Data Protection & Zero Training Mandate</h4>
              <p>
                We do not use proprietary client data, conversational transcripts, database records, or business schemas to train public foundation AI models. All enterprise deployments utilize isolated compute instances with contractual zero-data-retention agreements.
              </p>
              <h4 className="text-white font-bold text-sm pt-2">2. Inquiries & Form Submissions</h4>
              <p>
                Information provided through consultation request forms (name, company, email, project parameters) is exclusively used to respond to your inquiry and formulate technical architectural recommendations. We never sell, rent, or trade client information.
              </p>
              <h4 className="text-white font-bold text-sm pt-2">3. Security Standards</h4>
              <p>
                All data transmission utilizes TLS 1.3 encryption, and API keys / credentials are encrypted at rest using industry-standard KMS architectures.
              </p>
            </div>
          )
        };
      case 'terms':
        return {
          title: 'Terms of Service',
          tag: 'Engagement & Advisory Terms',
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                By accessing this website or engaging CJ Konsultants AI Automation for consulting, architecture, or implementation services, you agree to these standard engagement principles.
              </p>
              <h4 className="text-white font-bold text-sm pt-2">1. Scope of Services</h4>
              <p>
                CJ Konsultants provides software architecture, AI agent development, workflow automation, and digital advisory services as defined in individual Statements of Work (SOW).
              </p>
              <h4 className="text-white font-bold text-sm pt-2">2. Intellectual Property</h4>
              <p>
                Custom software workflows, API connectors, and bespoke prompts developed under contract are transferred to the client upon full project settlement, subject to standard open-source framework licensing.
              </p>
              <h4 className="text-white font-bold text-sm pt-2">3. Representation of Case Studies</h4>
              <p>
                Case studies and performance models published on this website are illustrative representations of technical architectures and potential outcomes, pending individual client clearances.
              </p>
            </div>
          )
        };
      case 'cookie':
        return {
          title: 'Cookie & Tracking Policy',
          tag: 'Telemetry & User Experience',
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                We use minimal, privacy-centric cookies strictly to enable smooth single-page navigation, preserve theme settings, and protect against automated form abuse.
              </p>
              <h4 className="text-white font-bold text-sm pt-2">1. Essential Cookies</h4>
              <p>
                Necessary for secure form submission, bot prevention (honeypot/session protection), and interactive diagnostic states.
              </p>
              <h4 className="text-white font-bold text-sm pt-2">2. Analytics Tracking</h4>
              <p>
                Aggregated, anonymized performance metrics (Lighthouse telemetry) to optimize page load speeds across desktop and mobile devices.
              </p>
            </div>
          )
        };
      case 'accessibility':
        return {
          title: 'Accessibility Statement',
          tag: 'WCAG 2.2 AA Compliance',
          body: (
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
              <p>
                CJ Konsultants is committed to ensuring digital accessibility for all visitors, including those utilizing assistive technologies.
              </p>
              <h4 className="text-white font-bold text-sm pt-2">1. Standards Followed</h4>
              <p>
                This website targets conformance with the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA standards.
              </p>
              <h4 className="text-white font-bold text-sm pt-2">2. Features Implemented</h4>
              <p>
                - High-contrast typography exceeding 4.5:1 ratio for standard text.<br />
                - Full keyboard navigability and visible focus rings.<br />
                - Semantic HTML headings and ARIA landmarks across all dialogs and modals.<br />
                - Escape-to-close keyboard handlers for all modals.<br />
                - Support for user operating system reduced-motion preferences.
              </p>
            </div>
          )
        };
    }
  };

  const content = getContent();

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
    >
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-left space-y-5 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">
              {content.tag}
            </span>
            <h3 id="legal-modal-title" className="text-xl font-bold text-white">
              {content.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close legal modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="max-h-[60vh] overflow-y-auto pr-2">
          {content.body}
        </div>

        <div className="pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
