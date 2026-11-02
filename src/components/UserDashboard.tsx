import React, { useState } from 'react';
import { LicenceRecord, RenewalReminder } from '../types/licence';
import { 
  Bookmark, 
  Bell, 
  Trash2, 
  Calendar, 
  Plus, 
  Clock, 
  AlertCircle, 
  CheckCircle2, 
  X, 
  ArrowRight,
  ExternalLink,
  ShieldCheck,
  Download
} from 'lucide-react';

interface UserDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  savedLicenceIds: string[];
  allLicences: LicenceRecord[];
  onSelectLicence: (licence: LicenceRecord) => void;
  onRemoveSaved: (licenceId: string) => void;
  reminders: RenewalReminder[];
  onAddReminder: (reminder: Omit<RenewalReminder, 'id' | 'createdAt'>) => void;
  onDeleteReminder: (reminderId: string) => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({
  isOpen,
  onClose,
  savedLicenceIds,
  allLicences,
  onSelectLicence,
  onRemoveSaved,
  reminders,
  onAddReminder,
  onDeleteReminder,
}) => {
  const [activeTab, setActiveTab] = useState<'saved' | 'reminders' | 'new-reminder'>('saved');

  // New reminder form state
  const [selectedLicenceId, setSelectedLicenceId] = useState<string>(
    allLicences[0]?.id || ''
  );
  const [registrationNumber, setRegistrationNumber] = useState<string>('');
  const [issueDate, setIssueDate] = useState<string>('');
  const [expiryDate, setExpiryDate] = useState<string>('');
  const [leadDays, setLeadDays] = useState<number>(30);
  const [notes, setNotes] = useState<string>('');

  if (!isOpen) return null;

  const savedLicences = allLicences.filter((l) => savedLicenceIds.includes(l.id));

  // Compute days remaining and status for reminders
  const getReminderStatus = (expDateStr: string, lead: number) => {
    if (!expDateStr) return { days: 0, label: 'Unknown', color: 'text-slate-500' };
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const exp = new Date(expDateStr);
    const diffTime = exp.getTime() - today.getTime();
    const days = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (days < 0) {
      return { days, label: `Expired ${Math.abs(days)} days ago`, color: 'text-red-700 bg-red-50 border-red-200' };
    }
    if (days <= lead) {
      return { days, label: `Due in ${days} days`, color: 'text-amber-800 bg-amber-50 border-amber-200' };
    }
    return { days, label: `${days} days left`, color: 'text-teal-800 bg-teal-50 border-teal-200' };
  };

  const handleCreateReminder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedLicenceId || !expiryDate) return;

    const lic = allLicences.find((l) => l.id === selectedLicenceId);
    if (!lic) return;

    onAddReminder({
      licenceId: lic.id,
      licenceName: lic.name,
      registrationNumber: registrationNumber.trim(),
      issueDate: issueDate || new Date().toISOString().split('T')[0],
      expiryDate,
      reminderLeadDays: Number(leadDays) || 30,
      notes: notes.trim(),
    });

    // Reset and switch
    setRegistrationNumber('');
    setIssueDate('');
    setExpiryDate('');
    setNotes('');
    setActiveTab('reminders');
  };

  const handleExportData = () => {
    const data = {
      savedLicences: savedLicences.map((l) => ({ id: l.id, name: l.name, category: l.category })),
      reminders,
      exportedAt: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `licence-holding-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-6">
      <div className="bg-white rounded-2xl w-full max-w-3xl h-[85vh] max-h-[720px] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Personal Licence Dashboard
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Saved clearances, document preparation status, and renewal trackers.
            </p>
          </div>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-slate-600 p-1.5 rounded-lg hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Controls Bar */}
        <div className="bg-slate-50 px-6 py-2 border-b border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-1">
            <button
              onClick={() => setActiveTab('saved')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === 'saved'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bookmark className="w-3.5 h-3.5" />
              <span>Saved Licences ({savedLicences.length})</span>
            </button>

            <button
              onClick={() => setActiveTab('reminders')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === 'reminders'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Bell className="w-3.5 h-3.5" />
              <span>Renewal Reminders ({reminders.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('new-reminder')}
              className="inline-flex items-center gap-1 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg transition-colors shadow-xs"
            >
              <Plus className="w-3.5 h-3.5" />
              <span>Add Reminder</span>
            </button>

            <button
              onClick={handleExportData}
              className="p-1.5 text-slate-500 hover:text-slate-700 hover:bg-slate-200/60 rounded-lg transition-colors"
              title="Export my records backup (JSON)"
            >
              <Download className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          
          {/* TAB 1: SAVED LICENCES */}
          {activeTab === 'saved' && (
            <div>
              {savedLicences.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {savedLicences.map((lic) => (
                    <div
                      key={lic.id}
                      className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                          <span className="font-medium text-slate-600">{lic.categoryLabel}</span>
                          <button
                            onClick={() => onRemoveSaved(lic.id)}
                            className="text-slate-400 hover:text-red-600 transition-colors"
                            title="Remove from saved"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <h3 className="text-sm font-bold text-slate-900 mb-1 leading-snug">
                          {lic.name}
                        </h3>
                        <p className="text-xs text-slate-500 line-clamp-2 mb-3">
                          {lic.tagline || lic.overview}
                        </p>
                      </div>

                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-teal-700">
                        <button
                          onClick={() => {
                            onSelectLicence(lic);
                            onClose();
                          }}
                          className="hover:underline flex items-center gap-1"
                        >
                          <span>Open Checklist & Roadmap</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 max-w-sm mx-auto">
                  <Bookmark className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <h3 className="text-sm font-bold text-slate-900">No saved licences yet</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Click &ldquo;Save Licence&rdquo; on any detailed information page to keep track of your active application requirements.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: RENEWAL REMINDERS */}
          {activeTab === 'reminders' && (
            <div>
              <div className="p-3 bg-amber-50 border border-amber-200/80 rounded-xl text-xs text-amber-900 mb-4 flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  <span className="font-semibold">Compliance Note:</span> Reminders are a personal convenience tool stored locally. Licence Holding does not guarantee notification delivery; you remain legally responsible for tracking statutory deadlines with issuing departments.
                </p>
              </div>

              {reminders.length > 0 ? (
                <div className="space-y-3">
                  {reminders.map((rem) => {
                    const status = getReminderStatus(rem.expiryDate, rem.reminderLeadDays);
                    return (
                      <div
                        key={rem.id}
                        className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                      >
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <h3 className="text-sm font-bold text-slate-900">
                              {rem.licenceName}
                            </h3>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${status.color}`}>
                              {status.label}
                            </span>
                          </div>

                          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                            {rem.registrationNumber && (
                              <span>Reg / DL No: <strong className="text-slate-800">{rem.registrationNumber}</strong></span>
                            )}
                            <span>Expiry Date: <strong className="text-slate-800 tabular-nums">{rem.expiryDate}</strong></span>
                            <span>Notice Lead: {rem.reminderLeadDays} days</span>
                          </div>

                          {rem.notes && (
                            <p className="text-xs text-slate-600 italic">
                              &ldquo;{rem.notes}&rdquo;
                            </p>
                          )}
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            onClick={() => onDeleteReminder(rem.id)}
                            className="p-1.5 text-slate-400 hover:text-red-600 rounded-lg hover:bg-slate-100 transition-colors"
                            title="Delete reminder"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-12 max-w-sm mx-auto">
                  <Bell className="w-8 h-8 text-slate-300 mx-auto mb-2" />
                  <h3 className="text-sm font-bold text-slate-900">No renewal reminders recorded</h3>
                  <p className="text-xs text-slate-500 mt-1 mb-4">
                    Record your driving licence, FSSAI registration, or municipal trade licence expiry dates to track renewal windows.
                  </p>
                  <button
                    onClick={() => setActiveTab('new-reminder')}
                    className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl"
                  >
                    Add First Reminder
                  </button>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: NEW REMINDER FORM */}
          {activeTab === 'new-reminder' && (
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs max-w-lg mx-auto">
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Record Licence Renewal Deadline
              </h3>
              <p className="text-xs text-slate-500 mb-5">
                Calculate remaining validity and avoid statutory late penalties.
              </p>

              <form onSubmit={handleCreateReminder} className="space-y-4 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Select Licence or Registration:
                  </label>
                  <select
                    value={selectedLicenceId}
                    onChange={(e) => setSelectedLicenceId(e.target.value)}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-teal-500"
                    required
                  >
                    {allLicences.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.name} ({l.categoryLabel})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Registration / Certificate / DL Number (Optional):
                  </label>
                  <input
                    type="text"
                    value={registrationNumber}
                    onChange={(e) => setRegistrationNumber(e.target.value)}
                    placeholder="e.g. KA01 20220001234 or 11223344000001"
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Issue Date:
                    </label>
                    <input
                      type="date"
                      value={issueDate}
                      onChange={(e) => setIssueDate(e.target.value)}
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-500"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-slate-700 mb-1">
                      Expiry Date: *
                    </label>
                    <input
                      type="date"
                      value={expiryDate}
                      onChange={(e) => setExpiryDate(e.target.value)}
                      required
                      className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-500 font-semibold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Renewal Notice Lead Time (Days):
                  </label>
                  <select
                    value={leadDays}
                    onChange={(e) => setLeadDays(Number(e.target.value))}
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-900 focus:outline-none focus:border-teal-500"
                  >
                    <option value={15}>15 Days before expiry</option>
                    <option value={30}>30 Days before expiry (Recommended)</option>
                    <option value={60}>60 Days before expiry</option>
                    <option value={90}>90 Days before expiry</option>
                  </select>
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Notes / Location Details:
                  </label>
                  <textarea
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    rows={2}
                    placeholder="e.g. Registered for Indiranagar kitchen branch."
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-500"
                  />
                </div>

                <div className="pt-2 flex items-center justify-end gap-2">
                  <button
                    type="button"
                    onClick={() => setActiveTab('reminders')}
                    className="px-4 py-2 text-xs font-medium text-slate-600 hover:bg-slate-100 rounded-xl transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-5 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-xl transition-colors shadow-xs"
                  >
                    Save Reminder
                  </button>
                </div>
              </form>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
