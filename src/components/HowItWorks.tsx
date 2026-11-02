import React from 'react';
import { Search, BookOpen, CheckSquare, ExternalLink, ArrowRight } from 'lucide-react';

interface HowItWorksProps {
  onStartWizard: () => void;
  onOpenAI: () => void;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ onStartWizard, onOpenAI }) => {
  const steps = [
    {
      step: '01',
      title: 'Discover Required Licences',
      desc: 'Search by natural language activity (e.g. "open a small restaurant in Bengaluru") or take our 2-minute Discovery Wizard.',
      icon: Search,
    },
    {
      step: '02',
      title: 'Understand Exact Eligibility & Fees',
      desc: 'View authoritative statutory fee tables, validity windows, renewal deadlines, and avoid common rejection mistakes.',
      icon: BookOpen,
    },
    {
      step: '03',
      title: 'Prepare Document Checklist',
      desc: 'Follow an interactive document checklist with accepted formats and sizes before starting the official government form.',
      icon: CheckSquare,
    },
    {
      step: '04',
      title: 'Apply on Official Portals',
      desc: 'Proceed directly to the verified central or state government portal with clear domain safety badges.',
      icon: ExternalLink,
    },
  ];

  return (
    <section className="py-14 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
            Simple 4-Step Journey
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            How Licence Holding Works
          </h2>
          <p className="text-sm text-slate-600 mt-1.5">
            Eliminating the confusion of scattered government websites through one structured platform.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 bg-slate-50 border border-slate-200/80 rounded-2xl relative flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-300 tabular-nums">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-teal-700 shadow-2xs">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onStartWizard}
            className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
          >
            Launch Discovery Wizard
          </button>
          <button
            onClick={onOpenAI}
            className="px-5 py-2.5 bg-teal-50 text-teal-800 border border-teal-200 hover:bg-teal-100 text-xs font-bold rounded-xl transition-colors"
          >
            Ask Licence Mitra AI
          </button>
        </div>

      </div>
    </section>
  );
};
