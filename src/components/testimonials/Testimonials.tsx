import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const active = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative bg-[#090D16] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium">
            <span>CLIENT PERSPECTIVES</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
            Client Perspectives & <br />
            <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
              Implementation Feedback
            </span>
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400">
            What technology leaders say about partnering with our AI solutions architects.
          </p>
        </div>

        {/* Testimonials Carousel Box */}
        <div 
          className="mt-14 max-w-4xl mx-auto relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative p-8 sm:p-12 rounded-3xl bg-slate-900/90 border border-slate-800 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Ambient subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            {/* Top quote mark & stars */}
            <div className="flex items-center justify-between mb-8">
              <div className="p-3 rounded-2xl bg-slate-800 border border-slate-700 text-cyan-400">
                <Quote className="w-6 h-6" />
              </div>
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
            </div>

            {/* Testimonial Quote */}
            <blockquote className="text-lg sm:text-xl md:text-2xl text-slate-100 font-medium leading-relaxed font-sans">
              "{active.quote}"
            </blockquote>

            {/* Author Profile */}
            <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-md font-mono">
                  {active.avatarInitials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-base font-bold text-white">
                      {active.name}
                    </h4>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/60 text-amber-300 border border-amber-800/50">
                      Placeholder
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 font-mono">
                    {active.jobTitle} • <span className="text-slate-300">{active.company}</span>
                  </p>
                  <p className="text-[11px] text-cyan-400 font-mono">
                    {active.industry}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prevTestimonial}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-800 hover:bg-slate-700'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>

          <div className="text-center mt-3 text-[11px] text-slate-500 font-mono">
            * Testimonials shown above are representative placeholders pending enterprise customer client clearances.
          </div>
        </div>

      </div>
    </section>
  );
};
