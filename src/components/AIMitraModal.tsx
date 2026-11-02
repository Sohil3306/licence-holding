import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Send, X, Bot, User, RotateCcw, ExternalLink, ShieldCheck, Copy, Check } from 'lucide-react';

interface AIMitraModalProps {
  isOpen: boolean;
  onClose: () => void;
  contextLicenceId?: string;
  contextLicenceName?: string;
}

interface Message {
  id: string;
  sender: 'user' | 'mitra';
  text: string;
  timestamp: string;
}

export const AIMitraModal: React.FC<AIMitraModalProps> = ({
  isOpen,
  onClose,
  contextLicenceId,
  contextLicenceName,
}) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-welcome',
      sender: 'mitra',
      text: contextLicenceName
        ? `Namaste! I am **Licence Mitra**, your digital licence guide for India.\n\nI see you are viewing **${contextLicenceName}**. How can I help you understand its eligibility, required documents, fee structures, or official application process?`
        : `Namaste! I am **Licence Mitra**, your digital licence assistant for India.\n\nI can help you discover required licences, clarify government fees, prepare document checklists, and guide you to official government application portals.\n\nWhat activity, business, or permit are you planning today?`,
      timestamp: 'Just now',
    },
  ]);

  const [inputPrompt, setInputPrompt] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [copiedMsgId, setCopiedMsgId] = useState<string | null>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'What licences do I need to open a cloud kitchen in Bengaluru?',
    'How do I get a driving licence in Karnataka without a middleman?',
    'What is the difference between FSSAI Basic and State Licence?',
    'Is GST registration mandatory for a software freelancer?',
    'What permissions are needed to open a manufacturing factory?',
  ];

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || inputPrompt;
    if (!query.trim() || isLoading) return;

    const userMessage: Message = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: query.trim(),
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputPrompt('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/mitra', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: query.trim(),
          contextLicenceId: contextLicenceId || null,
          conversationHistory: messages.map((m) => ({
            role: m.sender === 'user' ? 'user' : 'model',
            content: m.text,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Server responded with an error');
      }

      const data = await response.json();
      const mitraReply: Message = {
        id: `mitra-${Date.now()}`,
        sender: 'mitra',
        text: data.reply || 'I could not generate an answer right now. Please check the official government portal.',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, mitraReply]);
    } catch (err) {
      const errorMsg: Message = {
        id: `mitra-err-${Date.now()}`,
        sender: 'mitra',
        text: "I am having trouble connecting to the advisory server. You can still explore all verified fees, documents, and official application portals in the directory.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopyMessage = (msgId: string, text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedMsgId(msgId);
    setTimeout(() => setCopiedMsgId(null), 2000);
  };

  const handleResetChat = () => {
    setMessages([
      {
        id: `msg-${Date.now()}`,
        sender: 'mitra',
        text: 'Chat history cleared. How can I help you find or understand Indian licences today?',
        timestamp: 'Just now',
      },
    ]);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-6">
      <div className="bg-white rounded-2xl w-full max-w-3xl h-[85vh] max-h-[750px] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-5 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">Licence Mitra</span>
                <span className="text-[10px] bg-teal-900/80 text-teal-300 font-semibold px-1.5 py-0.2 rounded border border-teal-700/50">
                  AI Guide
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block -mt-0.5">
                Indian Digital Licensing & Compliance Assistant
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleResetChat}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
              title="Reset conversation"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
              title="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Advisory Sub-bar */}
        <div className="bg-amber-50/80 px-4 py-1.5 border-b border-amber-200/80 text-[11px] text-amber-900 flex items-center gap-2 shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-amber-700 shrink-0" />
          <p className="truncate">
            Licence Mitra references verified official acts. It provides guidance, not formal legal determination.
          </p>
        </div>

        {/* Message Log */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-5 space-y-4 bg-slate-50/60">
          {messages.map((msg) => {
            const isUser = msg.sender === 'user';
            return (
              <div
                key={msg.id}
                className={`flex items-start gap-2.5 ${isUser ? 'flex-row-reverse' : ''}`}
              >
                {/* Avatar */}
                <div
                  className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs shrink-0 mt-0.5 ${
                    isUser ? 'bg-slate-900 text-white' : 'bg-teal-600 text-white'
                  }`}
                >
                  {isUser ? <User className="w-3.5 h-3.5" /> : <Bot className="w-4 h-4" />}
                </div>

                {/* Message Bubble */}
                <div
                  className={`max-w-[85%] rounded-2xl p-4 text-xs leading-relaxed shadow-xs ${
                    isUser
                      ? 'bg-slate-900 text-white rounded-tr-xs'
                      : 'bg-white border border-slate-200 text-slate-800 rounded-tl-xs space-y-2'
                  }`}
                >
                  <div className="whitespace-pre-wrap font-sans">
                    {msg.text}
                  </div>

                  <div className="flex items-center justify-between pt-1 border-t border-slate-100 text-[10px] text-slate-400 mt-2">
                    <span>{msg.timestamp}</span>
                    {!isUser && (
                      <button
                        onClick={() => handleCopyMessage(msg.id, msg.text)}
                        className="hover:text-slate-600 flex items-center gap-1 transition-colors"
                        title="Copy answer"
                      >
                        {copiedMsgId === msg.id ? (
                          <>
                            <Check className="w-3 h-3 text-teal-600" />
                            <span className="text-teal-600">Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Typing Indicator */}
          {isLoading && (
            <div className="flex items-start gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-teal-600 text-white flex items-center justify-center text-xs shrink-0">
                <Bot className="w-4 h-4" />
              </div>
              <div className="bg-white border border-slate-200 rounded-2xl rounded-tl-xs px-4 py-3 text-xs text-slate-500 shadow-xs flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-teal-600 animate-bounce" />
                <div className="w-2 h-2 rounded-full bg-teal-600 animate-bounce [animation-delay:0.2s]" />
                <div className="w-2 h-2 rounded-full bg-teal-600 animate-bounce [animation-delay:0.4s]" />
                <span className="ml-1 text-[11px]">Searching official regulations...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Suggested Quick Prompts */}
        {messages.length <= 2 && (
          <div className="px-4 py-2 bg-white border-t border-slate-100 overflow-x-auto flex items-center gap-2 shrink-0 no-scrollbar">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider shrink-0">
              Suggestions:
            </span>
            {suggestedQuestions.map((sq, i) => (
              <button
                key={i}
                onClick={() => handleSendMessage(sq)}
                className="px-2.5 py-1 bg-slate-100 hover:bg-teal-50 hover:text-teal-900 border border-slate-200 rounded-lg text-[11px] text-slate-700 whitespace-nowrap shrink-0 transition-colors"
              >
                {sq}
              </button>
            ))}
          </div>
        )}

        {/* Input box */}
        <div className="p-3 bg-white border-t border-slate-200 shrink-0">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
            className="flex items-center gap-2"
          >
            <input
              type="text"
              value={inputPrompt}
              onChange={(e) => setInputPrompt(e.target.value)}
              placeholder="Ask about licences, official fees, eligibility, or documents..."
              disabled={isLoading}
              className="flex-1 px-4 py-2.5 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={!inputPrompt.trim() || isLoading}
              className="p-2.5 bg-teal-600 hover:bg-teal-700 disabled:bg-slate-300 text-white rounded-xl transition-colors shrink-0 shadow-xs"
              aria-label="Send message to Licence Mitra"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};
