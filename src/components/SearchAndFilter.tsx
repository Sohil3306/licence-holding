import React, { useState, useMemo } from 'react';
import { LicenceRecord, LicenceCategory, JurisdictionLevel, ApplicantType } from '../types/licence';
import { CATEGORIES } from '../data/categories';
import { Search, Filter, ShieldCheck, IndianRupee, Clock, ArrowRight, X, AlertCircle } from 'lucide-react';

interface SearchAndFilterProps {
  licences: LicenceRecord[];
  onSelectLicence: (licence: LicenceRecord) => void;
  initialQuery?: string;
  initialCategory?: LicenceCategory | 'all';
}

export const SearchAndFilter: React.FC<SearchAndFilterProps> = ({
  licences,
  onSelectLicence,
  initialQuery = '',
  initialCategory = 'all',
}) => {
  const [searchQuery, setSearchQuery] = useState<string>(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<LicenceCategory | 'all'>(initialCategory);
  const [selectedJurisdiction, setSelectedJurisdiction] = useState<JurisdictionLevel | 'all'>('all');
  const [selectedApplicantType, setSelectedApplicantType] = useState<ApplicantType | 'all'>('all');
  const [verifiedOnly, setVerifiedOnly] = useState<boolean>(false);

  // Filter and search logic
  const filteredLicences = useMemo(() => {
    return licences.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }

      // Jurisdiction filter
      if (selectedJurisdiction !== 'all' && item.jurisdiction !== selectedJurisdiction) {
        return false;
      }

      // Applicant Type filter
      if (selectedApplicantType !== 'all' && !item.applicantTypes.includes(selectedApplicantType)) {
        return false;
      }

      // Verified only
      if (verifiedOnly && item.verificationStatus !== 'Verified') {
        return false;
      }

      // Query search
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();

      // Check name and aliases
      if (item.name.toLowerCase().includes(q)) return true;
      if (item.aliases.some((a) => a.toLowerCase().includes(q))) return true;
      if (item.overview.toLowerCase().includes(q)) return true;
      if (item.tagline.toLowerCase().includes(q)) return true;
      if (item.issuingAuthority.toLowerCase().includes(q)) return true;

      // Natural language keywords matching
      if (q.includes('restaurant') || q.includes('cafe') || q.includes('kitchen') || q.includes('food')) {
        if (item.category === 'food-restaurant' || item.slug.includes('trade')) return true;
      }
      if (q.includes('driving') || q.includes('car') || q.includes('bike') || q.includes('vehicle')) {
        if (item.category === 'transport-driving') return true;
      }
      if (q.includes('factory') || q.includes('industry') || q.includes('manufacturing')) {
        if (item.category === 'construction-factory-industrial') return true;
      }
      if (q.includes('export') || q.includes('import') || q.includes('foreign')) {
        if (item.slug === 'import-export-code' || item.category === 'import-export-special') return true;
      }
      if (q.includes('gst') || q.includes('tax')) {
        if (item.slug === 'gst-registration' || item.slug.includes('tax')) return true;
      }
      if (q.includes('msme') || q.includes('small business') || q.includes('startup')) {
        if (item.slug === 'udyam-msme-registration' || item.slug === 'private-limited-company-incorporation') return true;
      }
      if (q.includes('bangalore') || q.includes('bengaluru') || q.includes('karnataka')) {
        if (item.state === 'Karnataka' || item.municipality?.includes('BBMP') || item.slug.includes('karnataka') || item.slug.includes('trade')) return true;
      }

      return false;
    });
  }, [
    licences,
    searchQuery,
    selectedCategory,
    selectedJurisdiction,
    selectedApplicantType,
    verifiedOnly,
  ]);

  const hasActiveFilters =
    searchQuery.trim() !== '' ||
    selectedCategory !== 'all' ||
    selectedJurisdiction !== 'all' ||
    selectedApplicantType !== 'all' ||
    verifiedOnly;

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSelectedJurisdiction('all');
    setSelectedApplicantType('all');
    setVerifiedOnly(false);
  };

  return (
    <div className="py-8 bg-slate-50 min-h-[85vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Explore All Licences & Registrations
          </h1>
          <p className="text-sm text-slate-600 mt-1">
            Search across central and state catalogues by activity, industry, authority, or keywords.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl border border-slate-200 shadow-xs mb-6 space-y-4">
          
          {/* Main search bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by licence name, business activity (e.g. 'open restaurant in Bengaluru', 'sell fertiliser', 'driver DL')..."
              className="w-full pl-11 pr-10 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Filter dropdowns row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
            
            {/* Category Filter */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:border-teal-500"
              >
                <option value="all">All Sectors & Categories</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Jurisdiction Level Filter */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Authority Level
              </label>
              <select
                value={selectedJurisdiction}
                onChange={(e) => setSelectedJurisdiction(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:border-teal-500"
              >
                <option value="all">All Jurisdictions (Central & State)</option>
                <option value="Central">Central Ministries</option>
                <option value="State">State Government Departments</option>
                <option value="Municipal / Local">Municipal / Local Urban Bodies</option>
              </select>
            </div>

            {/* Applicant Type Filter */}
            <div>
              <label className="block text-[11px] font-semibold text-slate-500 uppercase tracking-wider mb-1">
                Applicant Type
              </label>
              <select
                value={selectedApplicantType}
                onChange={(e) => setSelectedApplicantType(e.target.value as any)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-medium text-slate-900 focus:outline-none focus:border-teal-500"
              >
                <option value="all">All Applicant Types</option>
                <option value="Individual">Individual Citizen</option>
                <option value="Sole Proprietorship">Sole Proprietorship</option>
                <option value="Partnership">Partnership Firm</option>
                <option value="LLP">Limited Liability Partnership</option>
                <option value="Private Limited">Private Limited Company</option>
              </select>
            </div>

            {/* Verified toggle and reset */}
            <div className="flex items-end justify-between gap-2">
              <label className="flex items-center gap-2 text-xs font-medium text-slate-700 py-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                  className="rounded text-teal-600 focus:ring-teal-500 w-4 h-4"
                />
                <span>Verified records only</span>
              </label>

              {hasActiveFilters && (
                <button
                  onClick={handleClearFilters}
                  className="text-xs text-teal-700 hover:text-teal-900 font-medium py-2 px-1 underline"
                >
                  Reset all
                </button>
              )}
            </div>

          </div>

          {/* Results count & active search indicator */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>
              Showing <strong className="text-slate-900 tabular-nums">{filteredLicences.length}</strong> matching licences
            </span>
            {searchQuery && (
              <span className="truncate max-w-xs text-slate-600">
                Filtered by query: &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>

        </div>

        {/* Results List / Grid */}
        {filteredLicences.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredLicences.map((licence) => (
              <div
                key={licence.id}
                onClick={() => onSelectLicence(licence)}
                className="bg-white border border-slate-200 rounded-xl p-5 hover:border-slate-300 hover:shadow-sm transition-all cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  {/* Quiet unboxed metadata header */}
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                    <span className="font-medium text-slate-700">{licence.categoryLabel}</span>
                    <span className="flex items-center gap-1 text-emerald-700 text-[11px]">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>{licence.verificationStatus}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-700 transition-colors mb-1.5 leading-snug">
                    {licence.name}
                  </h3>

                  {/* Overview */}
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed mb-4">
                    {licence.tagline || licence.overview}
                  </p>

                  {/* Metadata Specs */}
                  <div className="space-y-1.5 py-2.5 border-y border-slate-100 text-xs">
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-slate-600">Issuing Authority</span>
                      <span className="font-medium text-slate-800 truncate max-w-[170px]" title={licence.issuingAuthority}>
                        {licence.issuingAuthority}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-slate-600 flex items-center gap-1">
                        <IndianRupee className="w-3 h-3 text-slate-600" />
                        <span>Govt Fee</span>
                      </span>
                      <span className="font-semibold text-slate-900 tabular-nums">
                        {licence.governmentFees.summary.split('.')[0]}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600">
                      <span className="text-slate-600 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-slate-600" />
                        <span>Duration</span>
                      </span>
                      <span className="font-medium text-slate-800">
                        {licence.processingTimeEstimate.split('(')[0].trim()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-1 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                  <span>View Details & Checklist</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center max-w-lg mx-auto">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mx-auto mb-4 text-slate-400">
              <AlertCircle className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">No matching licences found</h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              We couldn&apos;t find any licence matching &ldquo;{searchQuery}&rdquo;. Try broader terms like &ldquo;restaurant&rdquo;, &ldquo;driving&rdquo;, &ldquo;factory&rdquo;, or &ldquo;GST&rdquo;.
            </p>
            <button
              onClick={handleClearFilters}
              className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl hover:bg-slate-800 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
