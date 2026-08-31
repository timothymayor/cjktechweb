import React, { useState } from 'react';
import { Cpu, ArrowUp, Sparkles, Shield, Heart } from 'lucide-react';
import { companyConfig } from '../../data/config';
import { LegalModal } from '../legal/LegalModal';

interface FooterProps {
  onOpenAssessment: () => void;
  onSelectSolution: (solutionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenAssessment, onSelectSolution }) => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | 'cookie' | 'accessibility' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer id="main-footer" className="bg-[#070A11] border-t border-slate-800 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-slate-800/80">
          
          {/* Column 1: Company Logo & Short Description (Span 4) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-cyan-500 to-indigo-600 p-[1px] shadow-sm flex items-center justify-center flex-shrink-0">
                <div className="w-full h-full bg-[#0B0F19] rounded-[11px] flex items-center justify-center">
                  <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                </div>
              </div>
              <div className="flex flex-col text-left">
                <div className="text-base font-bold text-white tracking-tight font-sans flex items-center gap-1 leading-none">
                  <span className="font-extrabold text-white">CJK</span>
                  <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent font-bold">
                    Technologies
                  </span>
                </div>
                <span className="text-[10px] font-mono text-slate-400 tracking-tight mt-1">
                  (a division of CJKonsultants)
                </span>
              </div>
            </div>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Strategic AI Automation Consultancy helping businesses design, build, and scale autonomous AI agents, omnichannel customer engagement, and intelligent workflow systems.
            </p>

            <div className="pt-2 flex items-center gap-2 text-slate-500 font-mono text-[11px]">
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>Enterprise-Grade Security & Governance</span>
            </div>
          </div>

          {/* Column 2: Company Navigation (Span 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Company
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-cyan-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#solutions" onClick={(e) => scrollToSection(e, '#solutions')} className="hover:text-cyan-400 transition-colors">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-cyan-400 transition-colors">
                  Projects & Cases
                </a>
              </li>
              <li>
                <a href="#testimonials" onClick={(e) => scrollToSection(e, '#testimonials')} className="hover:text-cyan-400 transition-colors">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => scrollToSection(e, '#blog')} className="hover:text-cyan-400 transition-colors">
                  Expert Insights
                </a>
              </li>
              <li>
                <a href="#contact" onClick={(e) => scrollToSection(e, '#contact')} className="hover:text-cyan-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Solutions (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Solutions
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onSelectSolution('customer-service')}
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  AI Customer Support Agents
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSolution('whatsapp-business')}
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  WhatsApp AI Commerce
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSolution('marketing-automation')}
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Marketing Automation Platform
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSolution('workflow-automation')}
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Workflow & Process Automation
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSolution('agentic-commerce')}
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Agentic Commerce Integration
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectSolution('generative-engine-seo')}
                  className="hover:text-cyan-400 transition-colors text-left cursor-pointer"
                >
                  Generative Engine Optimization (GEO)
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Resources & Diagnostic (Span 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Resources & Diagnostics
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenAssessment}
                  className="text-cyan-400 hover:text-cyan-300 font-semibold flex items-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>AI Readiness Assessment</span>
                </button>
              </li>
              <li>
                <a href="#projects" onClick={(e) => scrollToSection(e, '#projects')} className="hover:text-cyan-400 transition-colors">
                  Illustrative Case Studies
                </a>
              </li>
              <li>
                <a href="#blog" onClick={(e) => scrollToSection(e, '#blog')} className="hover:text-cyan-400 transition-colors">
                  Technical Blog & Architecture
                </a>
              </li>
              <li>
                <a href="#ecosystem" onClick={(e) => scrollToSection(e, '#ecosystem')} className="hover:text-cyan-400 transition-colors">
                  Integration Ecosystem
                </a>
              </li>
            </ul>

            <div className="pt-3">
              <button
                onClick={scrollToTop}
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white transition-colors flex items-center gap-1 text-[11px] cursor-pointer"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 {companyConfig.name}. </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="font-mono text-cyan-400 font-medium">
              All Rights Reserved.
            </span>
          </div>

          {/* Legal Modals Triggers */}
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <button
              onClick={() => setLegalModalType('privacy')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setLegalModalType('terms')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setLegalModalType('cookie')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Cookie Policy
            </button>
            <button
              onClick={() => setLegalModalType('accessibility')}
              className="hover:text-slate-200 transition-colors cursor-pointer"
            >
              Accessibility
            </button>
          </div>

        </div>

      </div>

      {/* Legal Dialog Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </footer>
  );
};
