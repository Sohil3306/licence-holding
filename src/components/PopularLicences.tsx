import React from 'react';
import { LicenceRecord } from '../types/licence';
import { ArrowRight, ShieldCheck, Clock, IndianRupee } from 'lucide-react';

interface PopularLicencesProps {
  licences: LicenceRecord[];
  onSelectLicence: (licence: LicenceRecord) => void;
  onExploreAll: () => void;
}

export const PopularLicences: React.FC<PopularLicencesProps> = ({
  licences,
  onSelectLicence,
  onExploreAll,
}) => {
  const popularList = licences.filter((l) => l.isPopular);

  return (
    <section className="py-12 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
              High Demand Services
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Popular Licences & Registrations
            </h2>
            <p className="text-sm text-slate-600 mt-1">
              Essential personal permits and commercial business clearances applied across India.
            </p>
          </div>
          <button
            onClick={onExploreAll}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700 hover:text-teal-800 transition-colors shrink-0 group"
          >
            <span>View all directory items</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Licence Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularList.map((licence) => (
            <div
              key={licence.id}
              onClick={() => onSelectLicence(licence)}
              className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-md transition-all cursor-pointer flex flex-col justify-between group"
            >
              <div>
                {/* Quiet unboxed metadata header */}
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2.5">
                  <span className="font-medium text-slate-700">{licence.categoryLabel}</span>
                  <span className="flex items-center gap-1 text-emerald-700">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{licence.verificationStatus}</span>
                  </span>
                </div>

                {/* Licence Title */}
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-700 transition-colors leading-snug mb-2">
                  {licence.name}
                </h3>

                {/* Short overview */}
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                  {licence.tagline || licence.overview}
                </p>

                {/* Key metadata grid */}
                <div className="space-y-2 py-3 border-y border-slate-100 text-xs">
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-slate-600">Jurisdiction</span>
                    <span className="font-medium text-slate-800">{licence.jurisdiction} Authority</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-slate-600 flex items-center gap-1">
                      <IndianRupee className="w-3.5 h-3.5 text-slate-600" />
                      <span>Govt Fee</span>
                    </span>
                    <span className="font-semibold text-slate-900 tabular-nums">
                      {licence.governmentFees.summary.split('.')[0]}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span className="text-slate-600 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-600" />
                      <span>Timeline</span>
                    </span>
                    <span className="font-medium text-slate-800">
                      {licence.processingTimeEstimate.split('(')[0].trim()}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action link */}
              <div className="mt-4 pt-2 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                <span>View Requirements & Portal</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
