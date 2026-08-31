import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  MessageSquare,
  X,
  Send,
  Sparkles,
  RotateCcw,
  Bot,
  User,
  ChevronDown,
  ArrowRight,
  ExternalLink,
  Volume2,
  VolumeX,
  Copy,
  Check,
  Zap,
} from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
  action?: {
    type: 'assessment' | 'contact' | 'solutions';
    label: string;
  };
}

interface LiveChatWidgetProps {
  onOpenAssessment?: () => void;
  onSelectSolution?: (solutionId: string) => void;
  onConsultationClick?: () => void;
}

const STARTER_PROMPTS = [
  "What AI automation solutions do you offer?",
  "How does Generative Engine Optimization (GEO) work?",
  "Can you automate customer support on WhatsApp?",
  "What are project timelines and typical pricing?",
];

export const LiveChatWidget: React.FC<LiveChatWidgetProps> = ({
  onOpenAssessment,
  onSelectSolution,
  onConsultationClick,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasOpenedBefore, setHasOpenedBefore] = useState(false);
  const [showNotificationToast, setShowNotificationToast] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome-msg',
      role: 'model',
      text: "Hello! 👋 I'm the **CJKonsultants AI Strategy Agent**. \n\nI can help you explore our 8 enterprise AI agent solutions, estimate project scopes, or answer questions about **Generative Engine Optimization (GEO)**.\n\nHow can I help accelerate your business today?",
      timestamp: 'Just now',
      action: {
        type: 'assessment',
        label: 'Take Free AI Readiness Assessment',
      },
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of conversation
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      inputRef.current?.focus();
    }
  }, [messages, isOpen, isLoading]);

  // Show a polite floating prompt after 3.5 seconds if user hasn't opened chat
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!hasOpenedBefore && !isOpen) {
        setShowNotificationToast(true);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [hasOpenedBefore, isOpen]);

  // Play subtle web audio notification chime
  const playChime = () => {
    if (!soundEnabled || typeof window === 'undefined') return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime); // D5
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15); // A5

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    } catch {
      // AudioContext blocked or not supported
    }
  };

  const handleOpenChat = () => {
    setIsOpen(true);
    setHasOpenedBefore(true);
    setShowNotificationToast(false);
  };

  const handleCloseChat = () => {
    setIsOpen(false);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: 'reset-welcome',
        role: 'model',
        text: "Chat refreshed! How may I assist you with CJK Technologies AI automation services today?",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const handleCopyMessage = (id: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSendMessage = async (textToSend?: string) => {
    const query = (textToSend || inputMessage).trim();
    if (!query || isLoading) return;

    const userTimestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: query,
      timestamp: userTimestamp,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputMessage('');
    setIsLoading(true);

    try {
      // Build conversation history payload
      const history = messages
        .filter((m) => m.id !== 'welcome-msg' && m.id !== 'reset-welcome')
        .slice(-6)
        .map((m) => ({
          role: m.role,
          text: m.text,
        }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          message: query,
          history,
        }),
      });

      let replyText = '';
      if (res.ok) {
        const data = await res.json();
        replyText = data.text || '';
      }

      if (!replyText) {
        replyText = getClientFallbackResponse(query);
      }

      // Check if response suggests actions
      let action: ChatMessage['action'] = undefined;
      const lowerReply = replyText.toLowerCase();
      if (lowerReply.includes('assessment') || lowerReply.includes('readiness diagnostic')) {
        action = { type: 'assessment', label: 'Launch AI Readiness Diagnostic' };
      } else if (lowerReply.includes('contact') || lowerReply.includes('consultation') || lowerReply.includes('discovery call')) {
        action = { type: 'contact', label: 'Schedule Discovery Consultation' };
      } else if (lowerReply.includes('solutions') || lowerReply.includes('agents')) {
        action = { type: 'solutions', label: 'Explore All 8 AI Solutions' };
      }

      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: replyText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action,
      };

      setMessages((prev) => [...prev, botMsg]);
      playChime();
    } catch (err) {
      console.error('Chat error:', err);
      const fallbackText = getClientFallbackResponse(query);
      const botMsg: ChatMessage = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: fallbackText,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        action: {
          type: 'contact',
          label: 'Book Consultation with AI Team',
        },
      };
      setMessages((prev) => [...prev, botMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleActionClick = (actionType: 'assessment' | 'contact' | 'solutions') => {
    if (actionType === 'assessment') {
      onOpenAssessment?.();
    } else if (actionType === 'contact') {
      onConsultationClick ? onConsultationClick() : document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    } else if (actionType === 'solutions') {
      document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
    }
    // Optionally close or keep open
  };

  // Client-side fallback for static previews
  const getClientFallbackResponse = (query: string): string => {
    const q = query.toLowerCase();
    if (q.includes('price') || q.includes('cost') || q.includes('pricing') || q.includes('budget')) {
      return "CJK Technologies projects typically range from **$5,000 to $50,000+** depending on integration depth, security requirements, and custom automation complexity.\n\nWe provide fixed-milestone scopes with guaranteed ROI benchmarks during our initial discovery audit.";
    }
    if (q.includes('geo') || q.includes('generative engine') || q.includes('perplexity') || q.includes('chatgpt')) {
      return "Our **Generative Engine Optimization (GEO)** service ensures your company is cited as the authoritative source inside **ChatGPT Search, Perplexity AI, Google Gemini Overviews, and Microsoft Copilot**.\n\nWe structure entity knowledge, authoritative citations, and multi-modal semantic data.";
    }
    if (q.includes('whatsapp') || q.includes('support') || q.includes('customer service')) {
      return "We engineer **24/7 AI Customer Support & WhatsApp Agents** using the official Meta Cloud API and enterprise LLMs. They connect directly to your Zendesk, Salesforce, or ERP to resolve up to 80% of tier-1 inquiries automatically.";
    }
    if (q.includes('workflow') || q.includes('process') || q.includes('n8n') || q.includes('make')) {
      return "We build autonomous agentic workflows using Python, n8n, LangChain, and Make.com to eliminate repetitive back-office tasks, invoice processing, document extraction, and cross-platform data syncing.";
    }
    return "Thank you for asking! CJK Technologies specializes in **Enterprise AI Agents, Workflow Automation, WhatsApp Commerce Bots, and Generative Engine Optimization (GEO)**.\n\nWould you like to take our 2-minute AI Readiness Diagnostic or speak with our solutions architect?";
  };

  // Helper to format basic markdown (bold text and line breaks)
  const renderFormattedText = (text: string) => {
    const parts = text.split('\n');
    return (
      <div className="space-y-2">
        {parts.map((paragraph, idx) => {
          if (!paragraph.trim()) return <div key={idx} className="h-1" />;
          
          // Format **bold**
          const boldFormatted = paragraph.split(/(\*\*.*?\*\*)/g).map((segment, sIdx) => {
            if (segment.startsWith('**') && segment.endsWith('**')) {
              return (
                <strong key={sIdx} className="text-cyan-200 font-semibold">
                  {segment.slice(2, -2)}
                </strong>
              );
            }
            return segment;
          });

          // Check if bullet point
          if (paragraph.trim().startsWith('- ') || paragraph.trim().startsWith('• ')) {
            return (
              <div key={idx} className="flex items-start gap-2 pl-1">
                <span className="text-cyan-400 mt-1">•</span>
                <span className="flex-1">{boldFormatted}</span>
              </div>
            );
          }

          return <p key={idx} className="leading-relaxed">{boldFormatted}</p>;
        })}
      </div>
    );
  };

  return (
    <>
      {/* Floating Trigger Container (Bottom Right) */}
      <div id="cjk-live-chat-launcher" className="fixed bottom-6 right-6 z-50 flex flex-col items-end pointer-events-auto">
        
        {/* Proactive Greeting Toast */}
        <AnimatePresence>
          {showNotificationToast && !isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 15, scale: 0.92 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.92 }}
              className="mb-3 max-w-[290px] p-3.5 rounded-2xl bg-[#0F172A]/95 border border-cyan-500/40 text-slate-100 shadow-2xl backdrop-blur-md relative flex items-start gap-3 cursor-pointer group hover:border-cyan-400 transition-all"
              onClick={handleOpenChat}
            >
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 shadow-md">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 text-xs">
                <div className="flex items-center justify-between font-semibold text-cyan-300 mb-0.5">
                  <span>CJKonsultants AI Support</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowNotificationToast(false);
                    }}
                    className="text-slate-400 hover:text-white p-0.5 rounded"
                    aria-label="Dismiss greeting"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
                <p className="text-slate-300 leading-snug">
                  Have questions about AI Automation, WhatsApp Bots, or GEO? Chat with our 24/7 AI agent!
                </p>
                <div className="mt-1.5 flex items-center gap-1 text-[11px] font-medium text-cyan-400 group-hover:translate-x-0.5 transition-transform">
                  <span>Start conversation</span>
                  <ArrowRight className="w-3 h-3" />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Launcher Button */}
        <motion.button
          id="live-chat-toggle-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => (isOpen ? handleCloseChat() : handleOpenChat())}
          className={`relative group flex items-center justify-center w-14 h-14 rounded-full shadow-2xl transition-all duration-300 ${
            isOpen
              ? 'bg-slate-800 border border-slate-600 text-slate-200'
              : 'bg-gradient-to-tr from-cyan-600 via-cyan-500 to-blue-600 text-white border-2 border-cyan-300/40 shadow-cyan-500/30'
          }`}
          aria-label={isOpen ? "Close live chat" : "Open 24/7 AI live chat agent"}
        >
          {/* Animated Glow Rings when closed */}
          {!isOpen && (
            <>
              <span className="absolute inset-0 rounded-full bg-cyan-400 opacity-30 animate-ping" />
              <span className="absolute -top-1 -right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500 border-2 border-[#0B0F19]"></span>
              </span>
            </>
          )}

          {isOpen ? (
            <ChevronDown className="w-6 h-6 transition-transform" />
          ) : (
            <div className="relative">
              <MessageSquare className="w-6 h-6 text-white" />
              <Sparkles className="w-3 h-3 text-cyan-200 absolute -top-1.5 -right-1.5 animate-pulse" />
            </div>
          )}
        </motion.button>
      </div>

      {/* Floating Chat Modal Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="cjk-live-chat-window"
            initial={{ opacity: 0, y: 25, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[600px] max-h-[calc(100vh-7.5rem)] rounded-3xl bg-[#0D1527]/98 border border-cyan-500/30 shadow-[0_20px_60px_rgba(0,0,0,0.8),0_0_30px_rgba(6,182,212,0.15)] backdrop-blur-2xl flex flex-col overflow-hidden text-slate-100 font-sans"
          >
            {/* Header */}
            <div className="px-4 py-3.5 bg-gradient-to-r from-slate-900 via-[#101D36] to-slate-900 border-b border-cyan-500/20 flex items-center justify-between shrink-0">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-cyan-500 to-blue-600 p-0.5 shadow-md">
                    <div className="w-full h-full bg-slate-950 rounded-[14px] flex items-center justify-center">
                      <Bot className="w-5 h-5 text-cyan-400" />
                    </div>
                  </div>
                  <span className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 border-2 border-slate-950 rounded-full" />
                </div>

                <div>
                  <div className="flex items-center gap-1.5">
                    <h3 className="font-semibold text-sm text-white tracking-wide">
                      CJKonsultants AI Agent
                    </h3>
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-mono font-medium bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                      LIVE
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Online • Enterprise AI Consultant
                  </p>
                </div>
              </div>

              {/* Action Controls */}
              <div className="flex items-center gap-1 text-slate-400">
                <button
                  onClick={() => setSoundEnabled(!soundEnabled)}
                  className="p-1.5 hover:text-cyan-300 hover:bg-slate-800/60 rounded-lg transition-colors"
                  title={soundEnabled ? "Mute notification sounds" : "Enable notification sounds"}
                  aria-label="Toggle sound"
                >
                  {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4 text-slate-500" />}
                </button>

                <button
                  onClick={handleResetChat}
                  className="p-1.5 hover:text-cyan-300 hover:bg-slate-800/60 rounded-lg transition-colors"
                  title="Clear & Restart Chat"
                  aria-label="Restart chat"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>

                <button
                  onClick={handleCloseChat}
                  className="p-1.5 hover:text-white hover:bg-slate-800/60 rounded-lg transition-colors ml-0.5"
                  title="Minimize chat"
                  aria-label="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Conversation Messages Thread */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700/60 scrollbar-track-transparent">
              
              {/* Trust Tag */}
              <div className="text-center py-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono text-cyan-300/80 bg-cyan-950/40 border border-cyan-800/40">
                  <Zap className="w-3 h-3 text-cyan-400" />
                  Real-Time AI • Powered by CJK Technologies
                </span>
              </div>

              {messages.map((msg) => {
                const isBot = msg.role === 'model';
                return (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex items-start gap-2.5 ${isBot ? 'justify-start' : 'justify-end'}`}
                  >
                    {isBot && (
                      <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                        <Bot className="w-4 h-4 text-white" />
                      </div>
                    )}

                    <div className={`group relative max-w-[85%] ${isBot ? 'items-start' : 'items-end'} flex flex-col`}>
                      <div
                        className={`rounded-2xl px-4 py-3 text-xs md:text-[13px] leading-relaxed shadow-sm transition-all ${
                          isBot
                            ? 'bg-[#131F38] text-slate-200 border border-slate-700/60 rounded-tl-sm'
                            : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-medium rounded-tr-sm shadow-cyan-900/20'
                        }`}
                      >
                        {isBot ? renderFormattedText(msg.text) : msg.text}

                        {/* Interactive Call-to-Action Pill if present */}
                        {msg.action && (
                          <div className="mt-3 pt-2.5 border-t border-slate-700/50">
                            <button
                              onClick={() => handleActionClick(msg.action!.type)}
                              className="w-full py-2 px-3 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-400/40 text-cyan-300 font-semibold text-xs flex items-center justify-center gap-1.5 transition-all shadow-sm"
                            >
                              <span>{msg.action.label}</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        )}
                      </div>

                      {/* Meta Footer (Timestamp & Copy) */}
                      <div className="flex items-center gap-2 mt-1 px-1 text-[10px] text-slate-400">
                        <span>{msg.timestamp}</span>
                        {isBot && (
                          <button
                            onClick={() => handleCopyMessage(msg.id, msg.text)}
                            className="opacity-0 group-hover:opacity-100 hover:text-cyan-300 transition-opacity p-0.5"
                            title="Copy message"
                          >
                            {copiedId === msg.id ? (
                              <Check className="w-3 h-3 text-emerald-400" />
                            ) : (
                              <Copy className="w-3 h-3" />
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    {!isBot && (
                      <div className="w-7 h-7 rounded-xl bg-slate-700 border border-slate-600 flex items-center justify-center shrink-0 mt-0.5">
                        <User className="w-4 h-4 text-slate-300" />
                      </div>
                    )}
                  </motion.div>
                );
              })}

              {/* Typing / Thinking Indicator */}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2.5"
                >
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-[#131F38] border border-slate-700/60 rounded-2xl rounded-tl-sm px-4 py-3 text-xs flex items-center gap-1.5 text-cyan-300">
                    <span className="text-[11px] text-slate-400 font-mono">Agent analyzing</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </motion.div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Starter Suggestions */}
            {messages.length <= 3 && !isLoading && (
              <div className="px-4 py-2 border-t border-slate-800/80 bg-slate-950/40 shrink-0">
                <div className="text-[10px] uppercase font-mono tracking-wider text-slate-400 mb-1.5 flex items-center gap-1">
                  <Sparkles className="w-3 h-3 text-cyan-400" />
                  <span>Suggested inquiries</span>
                </div>
                <div className="flex gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                  {STARTER_PROMPTS.map((prompt, i) => (
                    <button
                      key={i}
                      onClick={() => handleSendMessage(prompt)}
                      className="whitespace-nowrap px-2.5 py-1 rounded-full text-[11px] bg-slate-800/80 hover:bg-cyan-950/70 border border-slate-700/60 hover:border-cyan-500/50 text-slate-300 hover:text-cyan-200 transition-all shrink-0"
                    >
                      {prompt}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input Footer */}
            <div className="p-3 bg-[#090F1E] border-t border-cyan-500/20 shrink-0">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="flex items-center gap-2"
              >
                <div className="relative flex-1">
                  <input
                    ref={inputRef}
                    id="chat-user-input"
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    placeholder="Ask about AI agents, GEO, or pricing..."
                    disabled={isLoading}
                    className="w-full pl-3.5 pr-10 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-xs md:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none transition-all disabled:opacity-60"
                  />
                  {inputMessage.trim() && (
                    <button
                      type="button"
                      onClick={() => setInputMessage('')}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-500 hover:text-slate-300"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <button
                  id="chat-send-btn"
                  type="submit"
                  disabled={!inputMessage.trim() || isLoading}
                  className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white flex items-center justify-center shadow-md shadow-cyan-900/30 hover:from-cyan-400 hover:to-blue-500 disabled:opacity-40 disabled:cursor-not-allowed transition-all shrink-0 active:scale-95"
                  aria-label="Send chat message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-2 flex items-center justify-between text-[10px] text-slate-400 px-1">
                <span>Enterprise SLA • Confidential</span>
                <span className="font-mono text-cyan-400">cjkonsultants.nigeria@gmail.com</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
