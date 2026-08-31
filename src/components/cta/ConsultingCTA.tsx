import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ConsultingCTAProps {
  onOpenAssessment: () => void;
}

export const ConsultingCTA: React.FC<ConsultingCTAProps> = ({ onOpenAssessment }) => {
  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="consulting-cta" className="py-20 relative overflow-hidden bg-gradient-to-b from-[#090D16] via-slate-900 to-[#0B0F19]">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-tech-dots opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-600/15 via-indigo-600/15 to-purple-600/15 blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-slate-900/90 border border-cyan-500/30 backdrop-blur-xl shadow-2xl text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-800/60 text-cyan-300 text-xs font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>EXECUTIVE ADVISORY & IMPLEMENTATION</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Ready to Automate <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
              Your Business?
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Let's identify the processes where AI can create measurable business value and design a practical roadmap for implementation.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={scrollToContact}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-indigo-500 shadow-xl shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Book an AI Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={onOpenAssessment}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Request an AI Readiness Assessment</span>
            </button>
          </div>

          {/* Guarantees */}
          <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tailored Architecture Blueprint</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>No Vendor Lock-in</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>Direct Access to Senior Solutions Architects</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
