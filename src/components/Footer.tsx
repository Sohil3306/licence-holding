import React, { useState } from 'react';
import { FileCheck2, ShieldCheck, ExternalLink, X, Heart } from 'lucide-react';

interface FooterProps {
  onSelectTab: (tab: string) => void;
  onOpenAI: () => void;
  onOpenAdmin: () => void;
  onReportErrorGeneral: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onOpenAI,
  onOpenAdmin,
  onReportErrorGeneral,
}) => {
  const [modalView, setModalView] = useState<'privacy' | 'terms' | null>(null);

  return (
    <footer className="bg-slate-900 text-slate-300 text-xs border-t border-slate-800">
      
      {/* Upper Footer: Directory Links & Disclaimers */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand & Purpose */}
          <div className="space-y-3 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-teal-600 flex items-center justify-center text-white">
                <FileCheck2 className="w-4 h-4" />
              </div>
              <span className="text-base font-bold text-white tracking-tight">Licence Holding</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-[11px]">
              Every Licence. One Platform. Discover, understand, prepare for, and apply for Indian licences and registrations through verified official channels.
            </p>
            <div className="pt-2 text-[11px] text-teal-400">
              English (Primary) · Supporting Pan-India Digital Citizens
            </div>
          </div>

          {/* Quick Nav */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Explore Platform
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => onSelectTab('explore')} className="hover:text-white transition-colors">
                  All Licences Directory
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('categories')} className="hover:text-white transition-colors">
                  Sectors & Categories
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('state-explorer')} className="hover:text-white transition-colors">
                  State-wise Clearances
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('wizard')} className="hover:text-white transition-colors">
                  Discovery Wizard
                </button>
              </li>
              <li>
                <button onClick={() => onSelectTab('sources')} className="hover:text-white transition-colors">
                  Official Portal Registry
                </button>
              </li>
            </ul>
          </div>

          {/* Official Key Resources */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Official Central Portals
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="https://parivahan.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white inline-flex items-center gap-1">
                  <span>Parivahan Sewa</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://foscos.fssai.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white inline-flex items-center gap-1">
                  <span>FSSAI FoSCoS Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.gst.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white inline-flex items-center gap-1">
                  <span>GST Portal (GSTN)</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://udyamregistration.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white inline-flex items-center gap-1">
                  <span>Udyam MSME Portal</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <a href="https://www.mca.gov.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white inline-flex items-center gap-1">
                  <span>Ministry of Corporate Affairs</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
            </ul>
          </div>

          {/* Legal, Feedback & Support */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Legal & Support
            </h4>
            <ul className="space-y-2 text-slate-400">
              <li>
                <button onClick={() => setModalView('privacy')} className="hover:text-white transition-colors">
                  Privacy Policy & Data Security
                </button>
              </li>
              <li>
                <button onClick={() => setModalView('terms')} className="hover:text-white transition-colors">
                  Terms of Use & Disclaimer
                </button>
              </li>
              <li>
                <button onClick={onReportErrorGeneral} className="hover:text-white transition-colors">
                  Report Broken Link / Outdated Fee
                </button>
              </li>
              <li>
                <button onClick={onOpenAdmin} className="hover:text-white transition-colors">
                  Reviewer Workspace (Admin)
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Mandatory Statutory Disclaimer Banner */}
        <div className="mt-10 pt-6 border-t border-slate-800 text-[11px] text-slate-400 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
          <p className="font-semibold text-slate-300 mb-1">
            Statutory Public Disclaimer:
          </p>
          <p>
            Licence Holding is an independent information and guidance platform. It is not a government website and is not affiliated with any government authority unless explicitly stated. Requirements, fees, eligibility, and procedures may change. Always confirm the latest requirements with the relevant official authority before applying or making payments.
          </p>
        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © {new Date().getFullYear()} Licence Holding. All rights reserved.
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <span>Discover · Understand · Prepare · Apply</span>
          </div>
        </div>

      </div>

      {/* Privacy Policy Modal */}
      {modalView === 'privacy' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white text-slate-900 rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-slate-900">Privacy Policy & Data Protection</h3>
              <button onClick={() => setModalView(null)} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <p>
                <strong>1. Data Minimization:</strong> Licence Holding does not require, collect, or store sensitive government credentials, Aadhaar numbers, PAN numbers, or portal passwords.
              </p>
              <p>
                <strong>2. Document Safety:</strong> Our interactive document checklist builder operates entirely client-side. We do not prompt or require you to upload personal identity scans to our servers.
              </p>
              <p>
                <strong>3. Local Storage:</strong> Saved licences and renewal reminders are stored locally in your browser storage. You can export or clear this data at any time from your personal dashboard.
              </p>
              <p>
                <strong>4. AI Interactions:</strong> Queries sent to Licence Mitra are processed securely on our server to retrieve relevant regulatory articles without storing your identity.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 text-right">
              <button
                onClick={() => setModalView(null)}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl"
              >
                Understood
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Terms of Use Modal */}
      {modalView === 'terms' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 backdrop-blur-xs p-4">
          <div className="bg-white text-slate-900 rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-slate-200 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
              <h3 className="text-base font-bold text-slate-900">Terms of Use & Legal Transparency</h3>
              <button onClick={() => setModalView(null)} className="p-1 rounded-lg hover:bg-slate-100 text-slate-400">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="space-y-3 text-xs text-slate-600 leading-relaxed">
              <p>
                <strong>1. Informational Purpose Only:</strong> All content, checklists, fee guides, and AI assistant responses provided on Licence Holding are intended solely for educational and navigational purposes.
              </p>
              <p>
                <strong>2. No Guarantee of Approval:</strong> Holding or following a preparation checklist does not constitute official approval by any government department. Clearances are subject to official discretion, inspection, and verification.
              </p>
              <p>
                <strong>3. No Direct Payments:</strong> Licence Holding never collects statutory government fees. All payments must be remitted directly to the authorized government treasury on verified official portals.
              </p>
            </div>
            <div className="mt-6 pt-3 border-t border-slate-100 text-right">
              <button
                onClick={() => setModalView(null)}
                className="px-4 py-2 bg-slate-900 text-white text-xs font-semibold rounded-xl"
              >
                Accept Terms
              </button>
            </div>
          </div>
        </div>
      )}

    </footer>
  );
};
