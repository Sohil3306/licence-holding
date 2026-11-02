import React, { useState } from 'react';
import { Search, Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Clock } from 'lucide-react';

interface HeroProps {
  onSearch: (query: string) => void;
  onExploreAll: () => void;
  onOpenAI: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch, onExploreAll, onOpenAI }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const popularTags = [
    'Driving Licence',
    'FSSAI Registration',
    'Trade Licence',
    'GST Registration',
    'Import Export Code',
    'Shop & Establishment',
    'Udyam MSME',
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };

  return (
    <section className="relative overflow-hidden bg-white border-b border-slate-200 pt-10 pb-14 md:pt-16 md:pb-20">
      {/* Subtle geometric background backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Subtle kicker text */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-800 bg-teal-50 border border-teal-200/80 px-3 py-1 rounded-full mb-5">
          <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
          <span>India&apos;s Comprehensive Digital Licence Directory</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 text-balance mb-5 leading-tight">
          Find the Right Licence. <br className="hidden sm:inline" />
          <span className="text-teal-700">Apply with Confidence.</span>
        </h1>

        {/* Supporting message */}
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto mb-8 text-balance">
          Discover the licences, registrations, documents, fees, eligibility requirements, and official application portals you need — all in one place.
        </p>

        {/* Intelligent Search Box */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto relative flex flex-col sm:flex-row items-stretch gap-2 p-2 bg-slate-50 border border-slate-300 rounded-2xl shadow-sm focus-within:border-teal-500 focus-within:ring-2 focus-within:ring-teal-100 transition-all mb-4"
        >
          <div className="relative flex-1 flex items-center pl-3">
            <Search className="w-5 h-5 text-slate-400 shrink-0" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search driving licence, FSSAI, trade licence, GST..."
              className="w-full bg-transparent px-3 py-2.5 text-sm sm:text-base text-slate-900 placeholder-slate-400 focus:outline-none"
            />
            {searchTerm && (
              <button
                type="button"
                onClick={() => setSearchTerm('')}
                className="text-xs text-slate-400 hover:text-slate-600 px-2 py-1"
              >
                Clear
              </button>
            )}
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 shadow-sm shrink-0"
          >
            <span>Search</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Popular searches tags */}
        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1.5 text-xs text-slate-500 mb-8 max-w-2xl mx-auto">
          <span className="font-medium text-slate-700">Popular:</span>
          {popularTags.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => onSearch(tag)}
              className="hover:text-teal-700 hover:underline transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Direct Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onExploreAll}
            className="px-5 py-2.5 bg-white text-slate-800 border border-slate-300 hover:bg-slate-50 text-sm font-medium rounded-xl transition-colors shadow-xs"
          >
            Explore All Licences
          </button>
          <button
            onClick={onOpenAI}
            className="px-5 py-2.5 bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium rounded-xl transition-colors shadow-xs flex items-center gap-2"
          >
            <Sparkles className="w-4 h-4" />
            <span>Ask AI Assistant</span>
          </button>
        </div>

        {/* Trust & Transparency Pillars */}
        <div className="mt-12 pt-8 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-4xl mx-auto">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-4 h-4 text-teal-600" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-slate-900">Official Portal Linkage</h3>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Direct verified redirects to official central and state government portals.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-slate-900">Zero Fabricated Fees</h3>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Statutory government fees clearly documented from official acts & rules.</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-50 flex items-center justify-center shrink-0">
              <Clock className="w-4 h-4 text-teal-600" />
            </div>
            <div>
              <h3 className="text-xs font-semibold text-slate-900">Step-by-Step Roadmaps</h3>
              <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">Document checklists and procedural timelines before you apply.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
