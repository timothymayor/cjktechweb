import React, { useEffect } from 'react';
import { X, Clock, Calendar, Bookmark, CheckCircle2, ArrowRight, Share2 } from 'lucide-react';
import { BlogPost } from '../../types';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
  onConsultationClick: () => void;
}

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose, onConsultationClick }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 text-left space-y-6 animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-800 pb-5">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-xs font-mono">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                {post.category}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
              <span className="text-slate-400 flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {post.readTime}
              </span>
            </div>
            <h3 id="blog-modal-title" className="text-xl sm:text-2xl font-bold text-white leading-tight">
              {post.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close article modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Key Takeaways Box */}
        <div className="p-5 rounded-xl bg-slate-950/80 border border-cyan-900/40 space-y-2.5">
          <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-bold uppercase tracking-wider">
            <Bookmark className="w-4 h-4" />
            <span>EXECUTIVE SUMMARY & KEY TAKEAWAYS</span>
          </div>
          <div className="space-y-2">
            {post.keyTakeaways.map((takeaway) => (
              <div key={takeaway} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                <span>{takeaway}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Article Body */}
        <div className="space-y-4 text-sm sm:text-base text-slate-300 leading-relaxed">
          {post.content.map((paragraph, index) => (
            <p key={index} className="text-slate-200">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Headless CMS Architecture Indicator */}
        <div className="p-3 rounded-lg bg-slate-950 border border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
          <span>CMS Schema: Enterprise Knowledge Hub</span>
          <span className="text-cyan-400">Status: Published</span>
        </div>

        {/* Footer Actions */}
        <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors cursor-pointer"
          >
            Close Article
          </button>

          <button
            onClick={() => {
              onClose();
              onConsultationClick();
            }}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold text-xs hover:from-cyan-400 hover:to-indigo-500 shadow-md shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Consult With An AI Architect</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
