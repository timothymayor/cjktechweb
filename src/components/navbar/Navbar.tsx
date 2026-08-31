import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu, Sparkles, ArrowRight } from 'lucide-react';
import { companyConfig, navItems } from '../../data/config';

interface NavbarProps {
  onOpenAssessment: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAssessment }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section detection
      const sections = ['hero', 'about', 'solutions', 'outcomes', 'projects', 'ecosystem', 'testimonials', 'blog', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0F19]/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Wordmark */}
          <a
            href="#hero"
            onClick={(e) => scrollToSection(e, '#hero')}
            className="flex items-center gap-2.5 sm:gap-3 group focus:outline-none"
            aria-label="CJK Technologies (a division of CJKonsultants) Home"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-cyan-500 to-indigo-600 p-[1px] shadow-md shadow-cyan-500/15 flex items-center justify-center flex-shrink-0">
              <div className="w-full h-full bg-[#0B0F19] rounded-[11px] flex items-center justify-center transition-colors group-hover:bg-[#0f172a]">
                <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
              </div>
            </div>
            <div className="flex flex-col text-left">
              <div className="text-base sm:text-lg font-bold tracking-tight text-white flex items-center gap-1 font-sans leading-none">
                <span className="font-extrabold text-white">CJK</span>
                <span className="bg-gradient-to-r from-cyan-400 to-sky-300 bg-clip-text text-transparent font-bold">
                  Technologies
                </span>
              </div>
              <span className="text-[9.5px] sm:text-[10.5px] font-normal text-slate-400 tracking-tight font-mono mt-1 whitespace-nowrap">
                (a division of CJKonsultants)
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 border border-cyan-800/40'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenAssessment}
              className="px-3.5 py-2 text-xs font-semibold rounded-lg text-slate-300 bg-slate-800/80 hover:bg-slate-700/80 hover:text-white border border-slate-700/60 transition-all flex items-center gap-1.5 cursor-pointer"
              title="Assess your company's AI Automation readiness"
            >
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>AI Readiness Score</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-1.5"
            >
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenAssessment}
              className="px-2.5 py-1.5 text-xs font-medium rounded-lg text-cyan-300 bg-cyan-950/40 border border-cyan-800/50 flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Score</span>
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F19]/98 border-b border-slate-800/80 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium flex items-center justify-between ${
                    isActive
                      ? 'text-cyan-400 bg-cyan-950/40 font-semibold'
                      : 'text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-slate-800/80 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenAssessment();
              }}
              className="w-full py-2.5 text-center text-sm font-semibold rounded-lg text-cyan-300 bg-slate-800/80 border border-slate-700/60 flex items-center justify-center gap-2"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Calculate AI Readiness Assessment</span>
            </button>

            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, '#contact')}
              className="w-full py-2.5 text-center text-sm font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2"
            >
              <span>Book an AI Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
