import React, { useState } from 'react';
import { LicenceRecord } from '../types/licence';
import { X, Send, Flag, CheckCircle2 } from 'lucide-react';

interface ReportErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  licence?: LicenceRecord | null;
}

export const ReportErrorModal: React.FC<ReportErrorModalProps> = ({
  isOpen,
  onClose,
  licence,
}) => {
  const [issueType, setIssueType] = useState<string>('Outdated Fee');
  const [details, setDetails] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!details.trim()) return;

    setIsSubmitting(true);
    try {
      await fetch('/api/corrections', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          licenceId: licence?.id || 'general',
          licenceName: licence?.name || 'General Inquiry',
          issueType,
          details: details.trim(),
          submittedByEmail: email.trim() || undefined,
        }),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6 shadow-2xl border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
        
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-base">
            <Flag className="w-4 h-4 text-amber-600" />
            <span>Report Outdated Information</span>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="text-center py-6">
            <div className="w-12 h-12 rounded-full bg-teal-50 border border-teal-200 text-teal-600 flex items-center justify-center mx-auto mb-3">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1">
              Thank You for Your Correction
            </h3>
            <p className="text-xs text-slate-500 mb-6 leading-relaxed">
              Our research team inspects every community correction against the official gazette before publishing updates.
            </p>
            <button
              onClick={onClose}
              className="px-5 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 text-xs">
            {licence && (
              <div className="p-2.5 bg-slate-50 rounded-xl text-slate-600 text-xs">
                Licence: <strong className="text-slate-900">{licence.name}</strong>
              </div>
            )}

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Nature of Correction:
              </label>
              <select
                value={issueType}
                onChange={(e) => setIssueType(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:border-teal-500"
              >
                <option value="Outdated Fee">Outdated Government Fee</option>
                <option value="Broken Link">Broken Official Portal Link</option>
                <option value="Document Requirement Changed">Document Requirement Changed</option>
                <option value="Procedure Changed">Application Procedure Changed</option>
                <option value="Other">Other Policy Change</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Details & Official Source URL (if known): *
              </label>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                required
                rows={4}
                placeholder="Please describe what changed and cite the official government notification or department circular..."
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div>
              <label className="block font-semibold text-slate-700 mb-1">
                Your Email (Optional, for clarification):
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@example.com"
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-500"
              />
            </div>

            <div className="pt-2 flex items-center justify-end gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-slate-600 hover:bg-slate-100 rounded-xl"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isSubmitting || !details.trim()}
                className="px-5 py-2 bg-teal-600 hover:bg-teal-700 disabled:opacity-60 text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Report'}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
