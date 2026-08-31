import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Bot, 
  MessageSquare, 
  Workflow, 
  ShoppingBag,
  Sparkles,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { HeroVisual } from './HeroVisual';

interface HeroProps {
  onSelectSolution: (solutionId: string) => void;
  onOpenAssessment: () => void;
}

interface Slide {
  id: string;
  tagline: string;
  headline: string;
  description: string;
  ctaText: string;
  targetSolutionId: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const HERO_SLIDES: Slide[] = [
  {
    id: 'slide-1',
    tagline: 'Autonomous AI Agents',
    headline: 'AI Agents That Work for Your Business',
    description: 'Automate customer interactions, Tier-1 support, sales qualification, and complex multi-step operational workflows with human-grade precision.',
    ctaText: 'Explore AI Agents',
    targetSolutionId: 'customer-service',
    icon: Bot,
    accentColor: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'slide-2',
    tagline: 'Conversational Sales Hub',
    headline: 'Turn WhatsApp into a Digital Sales Assistant',
    description: 'Connect customers with intelligent AI-powered conversations, instant product discovery, catalog browsing, and seamless in-chat transactions.',
    ctaText: 'Explore WhatsApp AI',
    targetSolutionId: 'whatsapp-business',
    icon: MessageSquare,
    accentColor: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'slide-3',
    tagline: 'Enterprise Process Automation',
    headline: 'Automate Your Business Workflows',
    description: 'Connect people, systems, and AI agents to eliminate repetitive manual processes, document extraction friction, and cross-team approval delays.',
    ctaText: 'Automate Your Operations',
    targetSolutionId: 'workflow-automation',
    icon: Workflow,
    accentColor: 'from-indigo-500 to-purple-600',
  },
  {
    id: 'slide-4',
    tagline: 'Next-Gen Commerce',
    headline: 'Build the Next Generation of Digital Commerce',
    description: 'Deploy intelligent AI-powered experiences across websites, WhatsApp, email, and customer channels that guide buyers to purchase effortlessly.',
    ctaText: 'Explore Agentic Commerce',
    targetSolutionId: 'agentic-commerce',
    icon: ShoppingBag,
    accentColor: 'from-violet-500 to-pink-600',
  },
];

export const Hero: React.FC<HeroProps> = ({ onSelectSolution, onOpenAssessment }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const activeSlide = HERO_SLIDES[currentSlide];
  const SlideIcon = activeSlide.icon;

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToSolutions = () => {
    const el = document.getElementById('solutions');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-[90vh] lg:min-h-screen pt-24 lg:pt-32 pb-16 flex items-center bg-tech-grid overflow-hidden">
      {/* Ambient background gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-br from-cyan-600/10 via-indigo-600/10 to-transparent blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 right-[-10%] w-[450px] h-[450px] bg-purple-600/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Messaging & Automated Slide Carousel */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Top Strategic Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-cyan-300 text-xs font-medium backdrop-blur-md shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="font-semibold text-slate-200">Enterprise AI Engineering & Consulting</span>
              <span className="text-slate-600">•</span>
              <span className="text-cyan-400 font-mono text-[11px]">Production Ready</span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white tracking-tight leading-[1.15] font-sans">
              Transform Your Business with <br />
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                Intelligent AI Automation
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Design, build, integrate and deploy AI-powered solutions that automate customer engagement, sales, marketing, operations and business workflows.
            </p>

            {/* Primary & Secondary Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                id="hero-primary-cta"
                onClick={scrollToContact}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-sm hover:from-cyan-400 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 cursor-pointer"
              >
                <span>Book an AI Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                id="hero-secondary-cta"
                onClick={scrollToSolutions}
                className="px-6 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-sm border border-slate-700/80 transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Our Solutions</span>
              </button>

              <button
                onClick={onOpenAssessment}
                className="px-4 py-3.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/40 text-cyan-300 font-semibold text-xs border border-cyan-800/50 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>AI Readiness Audit</span>
              </button>
            </div>

            {/* Automated Carousel Slide Card */}
            <div 
              className="mt-6 p-5 rounded-2xl bg-slate-900/80 border border-slate-800 backdrop-blur-md relative overflow-hidden transition-all group"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Slide Progress Timer Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-slate-800 overflow-hidden">
                <div 
                  key={currentSlide}
                  className={`h-full bg-gradient-to-r ${activeSlide.accentColor} ${!isPaused ? 'animate-[progress_5s_linear]' : 'w-full'}`}
                  style={{ animationDuration: '5s' }}
                />
              </div>

              <div className="flex items-start justify-between gap-4 pt-1">
                <div className="flex items-start gap-3.5">
                  <div className={`p-2.5 rounded-xl bg-gradient-to-br ${activeSlide.accentColor} text-white shadow-md flex-shrink-0`}>
                    <SlideIcon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 font-semibold">
                        {activeSlide.tagline}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {activeSlide.headline}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                      {activeSlide.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Slide Controls & Action */}
              <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
                <button
                  onClick={() => onSelectSolution(activeSlide.targetSolutionId)}
                  className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1 group/btn cursor-pointer"
                >
                  <span>{activeSlide.ctaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                </button>

                <div className="flex items-center gap-3">
                  {/* Slide Indicators */}
                  <div className="flex items-center gap-1.5">
                    {HERO_SLIDES.map((slide, idx) => (
                      <button
                        key={slide.id}
                        onClick={() => setCurrentSlide(idx)}
                        className={`h-1.5 rounded-full transition-all cursor-pointer ${
                          currentSlide === idx ? 'w-6 bg-cyan-400' : 'w-2 bg-slate-700 hover:bg-slate-600'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>

                  {/* Manual Arrow Controls */}
                  <div className="flex items-center gap-1">
                    <button
                      onClick={prevSlide}
                      className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      aria-label="Previous hero slide"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                      aria-label="Next hero slide"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick credibility check */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs text-slate-400">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Enterprise Security & SOC2 Compliant Architectures</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span>Rapid 2-4 Week Deployment Cycles</span>
              </div>
            </div>
          </div>

          {/* Right Column: Original Animated AI Ecosystem Diagram */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <HeroVisual />
          </div>

        </div>
      </div>
    </section>
  );
};
