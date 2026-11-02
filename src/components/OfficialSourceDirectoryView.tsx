import React, { useState, useMemo } from 'react';
import { OFFICIAL_SOURCES } from '../data/officialSources';
import { OfficialSourceEntry } from '../types/licence';
import { ShieldCheck, ExternalLink, Search, CheckCircle2, AlertTriangle, Building, Globe } from 'lucide-react';

export const OfficialSourceDirectoryView: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');

  const filteredSources = useMemo(() => {
    return OFFICIAL_SOURCES.filter((src) => {
      if (filterType !== 'all' && src.linkType !== filterType) {
        return false;
      }
      if (!searchQuery.trim()) return true;
      const q = searchQuery.toLowerCase();
      return (
        src.name.toLowerCase().includes(q) ||
        src.domain.toLowerCase().includes(q) ||
        src.department.toLowerCase().includes(q) ||
        src.description.toLowerCase().includes(q)
      );
    });
  }, [searchQuery, filterType]);

  return (
    <div className="py-10 bg-slate-50 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200/80 px-3 py-1 rounded-full mb-2">
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            <span>Authoritative Government Registry</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Official Government Source Directory
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-3xl">
            To prevent fraud and deceptive clone portals, Licence Holding maintains a verified registry of authoritative Central and State Government digital portals with explicit audit timestamps.
          </p>
        </div>

        {/* Security Warning Notice */}
        <div className="p-4 bg-teal-50/80 border border-teal-200 rounded-2xl mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
          <div className="flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center shrink-0">
              <Globe className="w-4 h-4" />
            </div>
            <div>
              <span className="font-bold text-slate-900 block text-sm">Official Domain Verification Standard</span>
              <p className="text-slate-600 mt-0.5 leading-relaxed">
                Legitimate Indian Government digital portals predominantly use top-level domains ending in <strong className="text-slate-900">.gov.in</strong> or <strong className="text-slate-900">.nic.in</strong>. Never pay government fees on private <em>.com</em>, <em>.org</em>, or <em>.in</em> lookalike websites.
              </p>
            </div>
          </div>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="relative w-full sm:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by department name, portal domain (e.g. 'foscos', 'gst.gov.in')..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-teal-500"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <label className="text-xs text-slate-500 font-medium shrink-0">Portal Type:</label>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-800 focus:outline-none focus:border-teal-500"
            >
              <option value="all">All Portal Types</option>
              <option value="Application Portal">Application Portals</option>
              <option value="Informational Service">Informational Services</option>
            </select>
          </div>
        </div>

        {/* Sources Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredSources.map((src) => (
            <div
              key={src.id}
              className="bg-white border border-slate-200 rounded-2xl p-5 shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                {/* Header status */}
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className="font-semibold text-slate-500">{src.jurisdiction} Authority</span>
                  <span className="inline-flex items-center gap-1 text-emerald-700 font-bold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{src.status}</span>
                  </span>
                </div>

                {/* Source Name */}
                <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">
                  {src.name}
                </h3>

                {/* Domain & Department */}
                <div className="space-y-0.5 text-xs text-slate-500 mb-3">
                  <div className="font-mono text-teal-800 font-medium">
                    {src.domain}
                  </div>
                  <div className="text-[11px] text-slate-500 truncate">
                    {src.department}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {src.description}
                </p>

                {/* Categories & Type */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="font-semibold text-slate-700">{src.linkType}</span>
                  <span>Checked: {src.lastCheckedDate}</span>
                </div>
              </div>

              {/* Direct Link */}
              <div className="mt-4 pt-3 border-t border-slate-100">
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-slate-50 hover:bg-slate-100 text-teal-800 text-xs font-bold rounded-xl border border-slate-200/80 transition-colors"
                >
                  <span>Visit {src.domain}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
