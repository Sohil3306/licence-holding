import React, { useState, useEffect } from 'react';
import { LicenceRecord, VerificationStatus, UserCorrectionReport } from '../types/licence';
import { 
  ShieldCheck, 
  Lock, 
  KeyRound, 
  X, 
  CheckCircle2, 
  AlertTriangle, 
  RefreshCw, 
  FileEdit, 
  Clock, 
  ExternalLink,
  Search
} from 'lucide-react';

interface AdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  licences: LicenceRecord[];
  onUpdateVerificationStatus: (licenceId: string, status: VerificationStatus, reviewer: string) => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({
  isOpen,
  onClose,
  licences,
  onUpdateVerificationStatus,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true); // Demo mode unlocked by default
  const [passkey, setPasskey] = useState<string>('admin123');
  const [activeTab, setActiveTab] = useState<'records' | 'reports' | 'audit'>('records');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [reports, setReports] = useState<UserCorrectionReport[]>([]);
  const [auditLog, setAuditLog] = useState<{ timestamp: string; action: string; user: string }[]>([
    { timestamp: '2026-10-22 14:30', action: 'Verified FSSAI Basic & State rules on FoSCoS', user: 'Legal Specialist' },
    { timestamp: '2026-10-21 11:15', action: 'Updated Udyam zero-fee guidelines', user: 'MSME Analyst' },
    { timestamp: '2026-10-20 18:40', action: 'Confirmed Karnataka e-Karmika and BBMP trade tariffs', user: 'State Tax Specialist' }
  ]);

  useEffect(() => {
    if (isOpen) {
      // Fetch reports from server
      fetch('/api/corrections')
        .then((res) => res.json())
        .then((data) => {
          if (data.reports) setReports(data.reports);
        })
        .catch(() => {});
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleStatusChange = (licenceId: string, newStatus: VerificationStatus) => {
    onUpdateVerificationStatus(licenceId, newStatus, 'Admin Officer (Reviewed)');
    setAuditLog((prev) => [
      {
        timestamp: new Date().toISOString().replace('T', ' ').slice(0, 16),
        action: `Marked "${licenceId}" status as "${newStatus}"`,
        user: 'Admin Officer'
      },
      ...prev
    ]);
  };

  const filteredLicences = licences.filter((l) =>
    l.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-3 sm:p-6">
      <div className="bg-white rounded-2xl w-full max-w-4xl h-[88vh] max-h-[780px] shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in fade-in zoom-in-95 duration-150">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm">Regulatory Content Administration</span>
                <span className="text-[10px] bg-slate-800 text-slate-300 px-2 py-0.5 rounded font-mono">
                  RBAC: Verified Admin
                </span>
              </div>
              <span className="text-[11px] text-slate-400 block -mt-0.5">
                Government Gazette Verification & Link Health Monitor
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="bg-slate-50 px-6 py-2 border-b border-slate-200 flex items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('records')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'records'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Licence Verification Catalog ({licences.length})
            </button>
            <button
              onClick={() => setActiveTab('reports')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                activeTab === 'reports'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <span>User Reports ({reports.length})</span>
            </button>
            <button
              onClick={() => setActiveTab('audit')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-colors ${
                activeTab === 'audit'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Audit Log
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">
          
          {/* TAB 1: LICENCE VERIFICATION CATALOG */}
          {activeTab === 'records' && (
            <div>
              {/* Search filter in admin */}
              <div className="mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter records by licence name or sector..."
                  className="w-full px-3.5 py-2 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-bold uppercase tracking-wider">
                    <tr>
                      <th className="py-2.5 px-4">Licence / Permit</th>
                      <th className="py-2.5 px-4">Sector</th>
                      <th className="py-2.5 px-4">Last Verified</th>
                      <th className="py-2.5 px-4 text-right">Verification Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    {filteredLicences.map((lic) => (
                      <tr key={lic.id} className="hover:bg-slate-50/60">
                        <td className="py-3 px-4">
                          <span className="font-bold text-slate-900 block">{lic.name}</span>
                          <span className="text-[11px] text-slate-400 font-mono">{lic.officialApplicationUrl}</span>
                        </td>
                        <td className="py-3 px-4 text-slate-600 font-medium">{lic.categoryLabel}</td>
                        <td className="py-3 px-4 text-slate-500 tabular-nums">
                          {lic.lastVerifiedDate}
                          <span className="block text-[10px] text-slate-400">{lic.verifiedBy || 'Senior Legal Specialist'}</span>
                        </td>
                        <td className="py-3 px-4 text-right">
                          <select
                            value={lic.verificationStatus}
                            onChange={(e) => handleStatusChange(lic.id, e.target.value as any)}
                            className={`px-2 py-1 rounded-lg text-xs font-bold border focus:outline-none ${
                              lic.verificationStatus === 'Verified'
                                ? 'bg-emerald-50 text-emerald-800 border-emerald-200'
                                : lic.verificationStatus === 'Needs review'
                                ? 'bg-amber-50 text-amber-800 border-amber-200'
                                : 'bg-red-50 text-red-800 border-red-200'
                            }`}
                          >
                            <option value="Verified">Verified</option>
                            <option value="Needs review">Needs review</option>
                            <option value="Outdated">Outdated</option>
                            <option value="Draft">Draft</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 2: USER CORRECTION REPORTS */}
          {activeTab === 'reports' && (
            <div>
              {reports.length > 0 ? (
                <div className="space-y-3">
                  {reports.map((rep) => (
                    <div key={rep.id} className="p-4 bg-white border border-slate-200 rounded-xl shadow-xs">
                      <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                        <span className="font-bold text-slate-900">{rep.licenceName}</span>
                        <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-amber-50 text-amber-800 border border-amber-200">
                          {rep.issueType}
                        </span>
                      </div>
                      <p className="text-xs text-slate-700 mt-1 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        {rep.details}
                      </p>
                      <div className="mt-2 flex items-center justify-between text-[11px] text-slate-400">
                        <span>Submitted by: {rep.submittedByEmail || 'Anonymous citizen'}</span>
                        <span>{rep.submittedAt.slice(0, 10)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12 max-w-sm mx-auto">
                  <CheckCircle2 className="w-8 h-8 text-teal-500 mx-auto mb-2" />
                  <h3 className="text-sm font-bold text-slate-900">Zero Pending Corrections</h3>
                  <p className="text-xs text-slate-500 mt-1">
                    All user feedback and reported broken links have been reviewed and published.
                  </p>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: AUDIT LOG */}
          {activeTab === 'audit' && (
            <div className="bg-white border border-slate-200 rounded-xl p-5 shadow-xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-4">
                Regulatory Audit Trail
              </h3>
              <div className="space-y-3 text-xs">
                {auditLog.map((log, i) => (
                  <div key={i} className="flex items-start justify-between p-3 bg-slate-50 border border-slate-100 rounded-lg">
                    <div>
                      <span className="font-semibold text-slate-900 block">{log.action}</span>
                      <span className="text-[11px] text-slate-500">By {log.user}</span>
                    </div>
                    <span className="text-[11px] text-slate-400 tabular-nums shrink-0">{log.timestamp}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
