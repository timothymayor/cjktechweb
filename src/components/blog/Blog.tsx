import React, { useState } from 'react';
import { Calendar, Clock, ArrowRight, BookOpen } from 'lucide-react';
import { blogPosts } from '../../data/blog';
import { BlogPost } from '../../types';
import { BlogModal } from './BlogModal';

interface BlogProps {
  onConsultationClick: () => void;
}

export const Blog: React.FC<BlogProps> = ({ onConsultationClick }) => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-20 lg:py-28 relative bg-[#0B0F19]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-slate-800/80">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/40 text-cyan-400 text-xs font-mono font-medium">
              <span>THOUGHT LEADERSHIP</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-sans">
              AI Insights & <br />
              <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">
                Expert Perspectives
              </span>
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-400 max-w-sm">
            Architectural perspectives, best practices, and actionable frameworks for deploying AI automation in enterprise environments.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-200 hover:-translate-y-1 cursor-pointer group flex flex-col justify-between shadow-lg shadow-black/20"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedPost(post);
                }
              }}
              aria-label={`Read article: ${post.title}`}
            >
              <div className="space-y-4">
                {/* Meta info */}
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span className="px-2 py-0.5 rounded bg-cyan-950/70 text-cyan-300 border border-cyan-800/40">
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>

                {/* Title & Excerpt */}
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                    {post.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-2.5 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              {/* Action */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
                <span>Read Article</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Article Reading Dialog Modal */}
      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
        onConsultationClick={onConsultationClick}
      />
    </section>
  );
};
