import React from 'react';
import { Clock, ShieldCheck, ArrowRight, ExternalLink } from 'lucide-react';

interface RecentUpdatesProps {
  onExploreTopic: (topicQuery: string) => void;
}

export const RecentUpdates: React.FC<RecentUpdatesProps> = ({ onExploreTopic }) => {
  const updates = [
    {
      date: 'Oct 2026',
      authority: 'FSSAI Notification',
      title: 'FSSAI Number Display on Invoices & Bill Slips',
      summary: 'All food business operators, restaurants, and cloud kitchens must print their 14-digit FSSAI registration number on food packaging and invoice bills.',
      relatedQuery: 'FSSAI Registration',
      sourceDomain: 'fssai.gov.in',
    },
    {
      date: 'Oct 2026',
      authority: 'MoRTH Parivahan',
      title: 'Paperless Aadhaar-eKYC Learner Driving Licence Test',
      summary: 'Applicants can now take the computerised traffic signs & regulation test from home without visiting RTO in participating states.',
      relatedQuery: 'Learners Driving Licence',
      sourceDomain: 'parivahan.gov.in',
    },
    {
      date: 'Sep 2026',
      authority: 'Ministry of MSME',
      title: 'Re-confirmation of Zero Government Fee on Udyam',
      summary: 'Public advisory warning citizens against fraudulent copycat portals charging fees for MSME certificates; Udyam remains 100% free.',
      relatedQuery: 'Udyam MSME',
      sourceDomain: 'udyamregistration.gov.in',
    },
    {
      date: 'Aug 2026',
      authority: 'Government of Karnataka',
      title: 'Commercial Nameboard 60% State Language Compliance',
      summary: 'Karnataka Shops & Commercial Establishments Act mandates 60% upper half of name display board in Kannada script.',
      relatedQuery: 'Shop and Establishment',
      sourceDomain: 'sevasindhu.karnataka.gov.in',
    },
  ];

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
              Regulatory Intelligence
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Recently Updated Government Requirements
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Latest statutory amendments, fee updates, and procedural circulars verified from official gazettes.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {updates.map((item, i) => (
            <div
              key={i}
              className="p-5 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                  <span className="font-semibold text-teal-800">{item.authority}</span>
                  <span className="tabular-nums font-medium text-slate-600">{item.date}</span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="font-mono text-[11px] text-slate-600">{item.sourceDomain}</span>
                <button
                  onClick={() => onExploreTopic(item.relatedQuery)}
                  className="font-semibold text-teal-700 hover:text-teal-900 inline-flex items-center gap-1"
                >
                  <span>View Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
