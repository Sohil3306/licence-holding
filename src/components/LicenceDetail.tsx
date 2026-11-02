import React, { useState } from 'react';
import { LicenceRecord } from '../types/licence';
import { 
  ShieldCheck, 
  ArrowLeft, 
  ExternalLink, 
  Bookmark, 
  BookmarkCheck, 
  Bell, 
  Printer, 
  Download, 
  CheckSquare, 
  Square, 
  AlertTriangle, 
  Info, 
  HelpCircle, 
  FileText, 
  Clock, 
  IndianRupee, 
  MapPin, 
  Building2, 
  ChevronDown, 
  ChevronUp,
  Share2,
  Sparkles,
  Flag
} from 'lucide-react';

interface LicenceDetailProps {
  licence: LicenceRecord;
  onBack: () => void;
  onSelectRelated: (relatedLicence: LicenceRecord) => void;
  allLicences: LicenceRecord[];
  isSaved: boolean;
  onToggleSave: (licenceId: string) => void;
  onAddReminder: (licence: LicenceRecord) => void;
  onOpenAIWithContext: (licenceId: string) => void;
  onReportError: (licence: LicenceRecord) => void;
}

export const LicenceDetail: React.FC<LicenceDetailProps> = ({
  licence,
  onBack,
  onSelectRelated,
  allLicences,
  isSaved,
  onToggleSave,
  onAddReminder,
  onOpenAIWithContext,
  onReportError,
}) => {
  // Document checklist local ready states
  const [checkedDocs, setCheckedDocs] = useState<Record<string, boolean>>({});
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [showPortalWarningModal, setShowPortalWarningModal] = useState<boolean>(false);
  const [copiedLink, setCopiedLink] = useState<boolean>(false);

  // Toggle document checked state
  const toggleDoc = (docId: string) => {
    setCheckedDocs((prev) => ({
      ...prev,
      [docId]: !prev[docId],
    }));
  };

  const totalMandatoryDocs = licence.requiredDocuments.filter((d) => d.isMandatory).length;
  const readyMandatoryDocs = licence.requiredDocuments.filter(
    (d) => d.isMandatory && checkedDocs[d.id]
  ).length;

  const progressPercent =
    totalMandatoryDocs > 0 ? Math.round((readyMandatoryDocs / totalMandatoryDocs) * 100) : 100;

  const handlePrintChecklist = () => {
    window.print();
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2000);
  };

  const relatedLicenceObjects = licence.relatedLicenceIds
    .map((id) => allLicences.find((l) => l.id === id || l.slug === id))
    .filter(Boolean) as LicenceRecord[];

  return (
    <div className="py-8 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back navigation & Action Buttons Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 no-print">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 px-3 py-1.5 bg-white border border-slate-200 rounded-lg hover:bg-slate-50 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Directory</span>
          </button>

          <div className="flex items-center gap-2">
            {/* Bookmark button */}
            <button
              onClick={() => onToggleSave(licence.id)}
              className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg border transition-colors ${
                isSaved
                  ? 'bg-teal-50 text-teal-800 border-teal-200'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
              }`}
              title={isSaved ? 'Remove from saved licences' : 'Save to My Dashboard'}
            >
              {isSaved ? <BookmarkCheck className="w-3.5 h-3.5 text-teal-600" /> : <Bookmark className="w-3.5 h-3.5 text-slate-500" />}
              <span>{isSaved ? 'Saved' : 'Save Licence'}</span>
            </button>

            {/* Set Renewal Reminder */}
            <button
              onClick={() => onAddReminder(licence)}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
              title="Add a renewal reminder for this licence"
            >
              <Bell className="w-3.5 h-3.5 text-slate-500" />
              <span className="hidden sm:inline">Set Renewal Reminder</span>
              <span className="sm:hidden">Reminder</span>
            </button>

            {/* Share button */}
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-lg bg-white text-slate-700 border border-slate-200 hover:bg-slate-50 transition-colors"
              title="Copy shareable link"
            >
              <Share2 className="w-3.5 h-3.5 text-slate-500" />
              <span>{copiedLink ? 'Copied' : 'Share'}</span>
            </button>

            {/* Report error */}
            <button
              onClick={() => onReportError(licence)}
              className="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
              title="Report an error or outdated link"
            >
              <Flag className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Hero Card / Title Block */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs mb-8">
          
          {/* Metadata quiet row */}
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 mb-3">
            <span className="font-semibold text-slate-800">{licence.categoryLabel}</span>
            <span>·</span>
            <span className="font-medium text-slate-600">{licence.jurisdiction} Authority</span>
            <span>·</span>
            <span className="text-slate-500">Mode: {licence.applicationMode}</span>
            <span>·</span>
            <span className="inline-flex items-center gap-1 text-emerald-700 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>{licence.verificationStatus}</span>
            </span>
            <span>·</span>
            <span className="text-slate-600 font-medium">Verified: {licence.lastVerifiedDate}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
            {licence.name}
          </h1>

          {/* Aliases */}
          {licence.aliases.length > 0 && (
            <div className="flex flex-wrap items-center gap-1 text-xs text-slate-500 mb-4">
              <span className="font-medium text-slate-600">Also known as:</span>
              <span>{licence.aliases.join(' / ')}</span>
            </div>
          )}

          {/* Tagline / Overview */}
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
            {licence.overview}
          </p>

          {/* Key Facts Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 bg-slate-50 border border-slate-200/80 rounded-xl text-xs mb-6">
            <div>
              <span className="text-slate-600 block mb-0.5">Issuing Authority</span>
              <span className="font-bold text-slate-900">{licence.issuingAuthority}</span>
            </div>
            <div>
              <span className="text-slate-600 block mb-0.5">Government Fee</span>
              <span className="font-bold text-slate-900 tabular-nums">{licence.governmentFees.summary.split('.')[0]}</span>
            </div>
            <div>
              <span className="text-slate-600 block mb-0.5">Processing Time</span>
              <span className="font-bold text-slate-900">{licence.processingTimeEstimate.split('(')[0].trim()}</span>
            </div>
            <div>
              <span className="text-slate-600 block mb-0.5">Validity Period</span>
              <span className="font-bold text-slate-900">{licence.validityPeriod.split('(')[0].trim()}</span>
            </div>
          </div>

          {/* Primary Action Row: Apply on Official Portal + Ask AI */}
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowPortalWarningModal(true)}
              className="inline-flex items-center gap-2 px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white text-sm font-bold rounded-xl transition-colors shadow-xs"
            >
              <span>Apply on Official Portal</span>
              <ExternalLink className="w-4 h-4" />
            </button>

            <button
              onClick={() => onOpenAIWithContext(licence.id)}
              className="inline-flex items-center gap-2 px-5 py-3 bg-slate-900 hover:bg-slate-800 text-white text-sm font-semibold rounded-xl transition-colors shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span>Ask Mitra About This Licence</span>
            </button>
          </div>

        </div>

        {/* Structured Sections */}
        <div className="space-y-8">
          
          {/* Section 1: Scope & Eligibility */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100 mb-5">
              1. Scope & Legal Authority
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  What this Licence Authorizes
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {licence.whatItAllows.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  Who Needs It
                </h3>
                <ul className="space-y-2 text-xs text-slate-600">
                  {licence.whoNeedsIt.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0 mt-1.5" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Who is exempt */}
            <div className="mb-6 p-4 bg-slate-50 border border-slate-200/80 rounded-xl">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                Exemptions & Exceptions
              </h3>
              <ul className="space-y-1 text-xs text-slate-600">
                {licence.whoIsExempt.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-slate-400">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Eligibility criteria */}
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Eligibility Criteria
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-700">
                {licence.eligibilityCriteria.map((item, i) => (
                  <div key={i} className="p-3 bg-white border border-slate-200 rounded-lg flex items-start gap-2">
                    <CheckSquare className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Relevant legislation */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500">
              <span>Governing Law: <strong className="text-slate-800">{licence.relevantLegislation}</strong></span>
              <span>Ministry: <strong className="text-slate-800">{licence.governingMinistry}</strong></span>
            </div>
          </div>

          {/* Section 2: Document Checklist Builder */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-100 mb-6">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  2. Document Checklist Builder
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Prepare and mark your documents before beginning the online government application.
                </p>
              </div>

              {/* Progress and Print buttons */}
              <div className="flex items-center gap-3 shrink-0">
                <div className="text-right">
                  <span className="text-xs font-bold text-slate-900 tabular-nums">
                    {readyMandatoryDocs} of {totalMandatoryDocs} Ready
                  </span>
                  <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden mt-1">
                    <div
                      className="bg-teal-600 h-1.5 rounded-full transition-all"
                      style={{ width: `${progressPercent}%` }}
                    />
                  </div>
                </div>

                <button
                  onClick={handlePrintChecklist}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors no-print"
                  title="Print or save checklist as PDF"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Checklist</span>
                </button>
              </div>
            </div>

            {/* Interactive Document items */}
            <div className="space-y-3">
              {licence.requiredDocuments.map((doc) => {
                const isReady = !!checkedDocs[doc.id];
                return (
                  <div
                    key={doc.id}
                    onClick={() => toggleDoc(doc.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer select-none flex items-start gap-3.5 ${
                      isReady
                        ? 'bg-teal-50/40 border-teal-200'
                        : 'bg-white border-slate-200 hover:border-slate-300'
                    }`}
                  >
                    <div className="mt-0.5">
                      {isReady ? (
                        <CheckSquare className="w-5 h-5 text-teal-600 shrink-0" />
                      ) : (
                        <Square className="w-5 h-5 text-slate-300 shrink-0 hover:text-slate-400" />
                      )}
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className={`text-sm font-bold ${isReady ? 'text-teal-950 line-through opacity-80' : 'text-slate-900'}`}>
                          {doc.name}
                        </span>
                        {doc.isMandatory ? (
                          <span className="text-[10px] font-bold text-red-700 bg-red-50 border border-red-200 px-1.5 py-0.2 rounded">
                            Mandatory
                          </span>
                        ) : (
                          <span className="text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded">
                            Conditional
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed">
                        {doc.description}
                      </p>

                      {/* Technical format constraints */}
                      {(doc.acceptedFormats || doc.maxSizeMb || doc.validityFreshness || doc.conditionalNote) && (
                        <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-500 pt-1">
                          {doc.conditionalNote && (
                            <span className="text-amber-800 font-medium">Condition: {doc.conditionalNote}</span>
                          )}
                          {doc.acceptedFormats && (
                            <span>Formats: {doc.acceptedFormats.join(', ')}</span>
                          )}
                          {doc.maxSizeMb && (
                            <span>Max Size: {doc.maxSizeMb} MB</span>
                          )}
                          {doc.validityFreshness && (
                            <span>Validity: {doc.validityFreshness}</span>
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] text-slate-400 italic">
              Note: Marking a document as ready saves your progress locally for reference. Licence Holding does not collect or upload your identity documents.
            </div>
          </div>

          {/* Section 3: 10-Step Application Roadmap */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100 mb-6">
              3. Application Roadmap & Timeline
            </h2>

            <div className="relative pl-6 border-l-2 border-slate-200 space-y-6">
              {licence.steps.map((step) => (
                <div key={step.stepNumber} className="relative">
                  {/* Step circle marker */}
                  <div className="absolute -left-[31px] top-0 w-6 h-6 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center border-2 border-white shadow-xs">
                    {step.stepNumber}
                  </div>

                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-sm font-bold text-slate-900">
                        {step.title}
                      </h3>
                      {step.estimatedDuration && (
                        <span className="text-[11px] text-slate-500 font-medium tabular-nums">
                          ⏱ {step.estimatedDuration}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {step.description}
                    </p>

                    {step.actionHint && (
                      <div className="p-2.5 bg-slate-50 rounded-lg text-[11px] text-teal-800 font-medium flex items-center gap-1.5 mt-1.5">
                        <Info className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{step.actionHint}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Official link box */}
            <div className="mt-8 p-4 bg-teal-50 border border-teal-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-xs font-bold text-slate-900">Ready to start the official application?</h4>
                <p className="text-xs text-slate-600 mt-0.5">
                  Access the verified government portal directly on: <span className="font-semibold text-teal-900">{licence.officialApplicationUrl}</span>
                </p>
              </div>
              <button
                onClick={() => setShowPortalWarningModal(true)}
                className="px-4 py-2 bg-teal-700 hover:bg-teal-800 text-white text-xs font-bold rounded-lg transition-colors shrink-0 flex items-center gap-1.5 shadow-xs"
              >
                <span>Open Government Portal</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Section 4: Government Fees & Processing Breakdown */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100 mb-5">
              4. Fees, Validity & Renewal Deadlines
            </h2>

            {/* Fee table */}
            <div className="border border-slate-200 rounded-xl overflow-hidden mb-5">
              <table className="w-full text-left text-xs">
                <thead className="bg-slate-50 border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider">
                  <tr>
                    <th className="py-2.5 px-4">Particular / Service</th>
                    <th className="py-2.5 px-4 text-right">Official Government Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800">
                  {licence.governmentFees.items.map((fee, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50">
                      <td className="py-2.5 px-4 font-medium">{fee.particular}</td>
                      <td className="py-2.5 px-4 text-right font-bold tabular-nums text-slate-900">{fee.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {licence.governmentFees.professionalFeeNote && (
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-600 mb-6">
                <span className="font-semibold text-slate-800">Intermediary Fee Advisory:</span> {licence.governmentFees.professionalFeeNote}
              </div>
            )}

            {/* Validity and renewal grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
                <span className="font-bold text-slate-900 block">Validity & Renewal Policy</span>
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-medium text-slate-700">Validity:</span> {licence.validityPeriod}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-medium text-slate-700">Renewal Lead Time:</span> {licence.renewalRequirements.leadTime}
                </p>
                <p className="text-slate-600 leading-relaxed">
                  <span className="font-medium text-slate-700">Procedure:</span> {licence.renewalRequirements.procedure}
                </p>
                {licence.renewalRequirements.penaltyForDelay && (
                  <p className="text-amber-800 font-medium">
                    Late Penalty: {licence.renewalRequirements.penaltyForDelay}
                  </p>
                )}
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200/80 rounded-xl space-y-1">
                <span className="font-bold text-slate-900 block">Inspection & Verification Requirements</span>
                <p className="text-slate-600 leading-relaxed">
                  {licence.inspectionRequirements}
                </p>
                <div className="pt-2">
                  <span className="font-bold text-slate-900 block">Amendments & Modifications</span>
                  <p className="text-slate-600 leading-relaxed">
                    {licence.modificationAndTransfer}
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Section 5: Common Rejection Reasons & Traps */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <div className="flex items-center gap-2 mb-4 pb-3 border-b border-slate-100">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              <h2 className="text-lg font-bold text-slate-900">
                5. Common Mistakes & Rejection Traps
              </h2>
            </div>
            <p className="text-xs text-slate-500 mb-4">
              Over 40% of government application queries stem from avoidable clerical mistakes. Review these pitfalls before submitting:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {licence.commonRejectionReasons.map((reason, idx) => (
                <div key={idx} className="p-3 bg-red-50/50 border border-red-200/80 rounded-xl text-xs text-red-950 flex items-start gap-2.5">
                  <span className="font-bold text-red-700 shrink-0">#{idx + 1}</span>
                  <span className="leading-relaxed">{reason}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 6: Official Verified Sources & FAQ */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
            <h2 className="text-lg font-bold text-slate-900 pb-3 border-b border-slate-100 mb-6">
              6. Official Sources & Frequently Asked Questions
            </h2>

            {/* Verified Sources list */}
            <div className="mb-6 space-y-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                Traceable Authoritative Sources
              </span>
              {licence.sources.map((src, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs">
                  <div>
                    <span className="font-bold text-slate-900">{src.name}</span>
                    <span className="text-slate-500 block text-[11px]">{src.department} · Verified {src.lastCheckedDate}</span>
                  </div>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:text-teal-800"
                  >
                    <span>Visit Source</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>

            {/* FAQs Accordion */}
            <div className="space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-700 block mb-2">
                Frequently Asked Questions
              </span>
              {licence.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="border border-slate-200 rounded-xl overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left bg-slate-50/60 hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-xs sm:text-sm font-bold text-slate-900 pr-2">
                        {faq.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-500 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-500 shrink-0" />
                      )}
                    </button>
                    {isOpen && (
                      <div className="p-4 bg-white border-t border-slate-100 text-xs text-slate-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

          {/* Related Licences */}
          {relatedLicenceObjects.length > 0 && (
            <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="text-base font-bold text-slate-900 mb-4">
                Related Licences & Complementary Clearances
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedLicenceObjects.map((rel) => (
                  <div
                    key={rel.id}
                    onClick={() => onSelectRelated(rel)}
                    className="p-4 border border-slate-200 rounded-xl hover:border-teal-500 hover:shadow-xs transition-all cursor-pointer group"
                  >
                    <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1">
                      {rel.categoryLabel}
                    </span>
                    <h3 className="text-xs font-bold text-slate-900 group-hover:text-teal-700 mb-1">
                      {rel.name}
                    </h3>
                    <span className="text-[11px] text-teal-700 font-semibold group-hover:underline">
                      View Requirements →
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Portal Safety Warning Modal before external navigation */}
        {showPortalWarningModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
              <div className="w-10 h-10 rounded-full bg-teal-50 border border-teal-200 flex items-center justify-center mb-4 text-teal-700">
                <ExternalLink className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Redirecting to Official Government Portal
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-4">
                You are about to leave Licence Holding to access the official issuing portal:
              </p>
              <div className="p-3 bg-slate-100 rounded-lg text-xs font-mono text-slate-800 break-all mb-4 select-all">
                {licence.officialApplicationUrl}
              </div>
              <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg text-xs text-amber-900 mb-6">
                <strong>Safety Verification:</strong> Always ensure the destination website ends in <strong>.gov.in</strong> or <strong>.nic.in</strong> before entering personal details, Aadhaar OTPs, or payment information.
              </div>
              <div className="flex items-center justify-end gap-3">
                <button
                  onClick={() => setShowPortalWarningModal(false)}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-100 rounded-xl transition-colors"
                >
                  Stay on Licence Holding
                </button>
                <a
                  href={licence.officialApplicationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setShowPortalWarningModal(false)}
                  className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Proceed to Official Website</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
