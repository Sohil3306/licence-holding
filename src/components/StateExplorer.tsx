import React, { useState } from 'react';
import { INDIAN_STATES, StateData } from '../data/indianStates';
import { MapPin, Building, ShieldAlert, ArrowRight, ExternalLink, CheckCircle } from 'lucide-react';
import { LicenceRecord } from '../types/licence';

interface StateExplorerProps {
  licences: LicenceRecord[];
  onSelectLicence: (licence: LicenceRecord) => void;
  onOpenAI: () => void;
}

export const StateExplorer: React.FC<StateExplorerProps> = ({
  licences,
  onSelectLicence,
  onOpenAI,
}) => {
  const [selectedStateCode, setSelectedStateCode] = useState<string>('KA'); // Default to Karnataka
  const [selectedCity, setSelectedCity] = useState<string>('Bengaluru');

  const currentState: StateData =
    INDIAN_STATES.find((s) => s.code === selectedStateCode) || INDIAN_STATES[0];

  // Handle state change
  const handleStateChange = (code: string) => {
    setSelectedStateCode(code);
    const st = INDIAN_STATES.find((s) => s.code === code);
    if (st && st.majorCities && st.majorCities.length > 0) {
      setSelectedCity(st.majorCities[0]);
    } else {
      setSelectedCity('');
    }
  };

  // Filter licences by jurisdiction
  const centralLicences = licences.filter((l) => l.jurisdiction === 'Central');
  const stateLicences = licences.filter(
    (l) => l.jurisdiction === 'State' && (!l.state || l.state === currentState.name)
  );
  const municipalLicences = licences.filter(
    (l) => l.jurisdiction === 'Municipal / Local'
  );

  return (
    <div className="py-10 bg-slate-50 min-h-[80vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
            Jurisdiction Navigator
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            State & Municipal Licence Explorer
          </h1>
          <p className="text-sm text-slate-600 mt-1.5 max-w-3xl">
            Licensing laws in India operate across three distinct tiers: Central Ministries, State Government Departments, and City Municipal Corporations. Select any state or union territory to inspect specific legal channels.
          </p>
        </div>

        {/* State and City Selector Bar */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
            
            {/* State Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Select Indian State or UT:
              </label>
              <div className="relative">
                <MapPin className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={selectedStateCode}
                  onChange={(e) => handleStateChange(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                >
                  {INDIAN_STATES.map((state) => (
                    <option key={state.code} value={state.code}>
                      {state.name} ({state.type})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* City Dropdown */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                Select City or Municipality:
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                >
                  {currentState.majorCities.map((city) => (
                    <option key={city} value={city}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Official State Portal Shortcut */}
            <div className="bg-slate-50 p-3 rounded-xl border border-slate-200/80 flex flex-col justify-center">
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                Official State Portal
              </span>
              <a
                href={currentState.portalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-700 hover:text-teal-800 hover:underline mt-0.5"
              >
                <span>{currentState.officialCitizenPortal}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-[10px] text-slate-400 truncate mt-0.5">{currentState.portalUrl}</span>
            </div>

          </div>

          {/* Jurisdictional Note */}
          <div className="mt-4 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-600">
            <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
            <p>
              <span className="font-semibold text-slate-800">{currentState.name} Specific Note:</span> {currentState.notes}
            </p>
          </div>
        </div>

        {/* 3-Tier Jurisdictional Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          
          {/* Column 1: Central Licences (Applicable All-India) */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <div className="pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Tier 1: Central</span>
                <span className="text-xs text-slate-500">All India Uniform</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-1">National Registrations</h3>
              <p className="text-xs text-slate-500 mt-0.5">Uniform guidelines under Union Ministries.</p>
            </div>

            <div className="space-y-3 flex-1">
              {centralLicences.slice(0, 4).map((licence) => (
                <div
                  key={licence.id}
                  onClick={() => onSelectLicence(licence)}
                  className="p-3 bg-slate-50/70 hover:bg-slate-100/70 border border-slate-200/80 rounded-xl cursor-pointer transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                      {licence.name}
                    </h4>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-1">
                    {licence.issuingAuthority}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: State Licences */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <div className="pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Tier 2: State</span>
                <span className="text-xs text-slate-500">{currentState.name}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-1">State Level Clearances</h3>
              <p className="text-xs text-slate-500 mt-0.5">Enacted under state-specific legislative acts.</p>
            </div>

            <div className="space-y-3 flex-1">
              <div
                onClick={() => {
                  const item = licences.find((l) => l.slug === 'shop-and-establishment-registration');
                  if (item) onSelectLicence(item);
                }}
                className="p-3 bg-slate-50/70 hover:bg-slate-100/70 border border-slate-200/80 rounded-xl cursor-pointer transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                    Shops & Commercial Establishments Act
                  </h4>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {currentState.code === 'KA'
                    ? 'Karnataka e-Karmika Labour Department'
                    : currentState.code === 'MH'
                    ? 'Maharashtra Gumasta Registration'
                    : `${currentState.name} Department of Labour`}
                </p>
              </div>

              <div
                onClick={() => {
                  const item = licences.find((l) => l.slug === 'karnataka-professional-tax-registration');
                  if (item) onSelectLicence(item);
                }}
                className="p-3 bg-slate-50/70 hover:bg-slate-100/70 border border-slate-200/80 rounded-xl cursor-pointer transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                    Professional Tax (PT) Enrolment & Registration
                  </h4>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {currentState.code === 'KA'
                    ? 'Karnataka Commercial Taxes (e-Prerana Form 1/4)'
                    : 'State Commercial Taxes Department (where applicable)'}
                </p>
              </div>

              <div
                onClick={() => {
                  const item = licences.find((l) => l.slug === 'pollution-consent-to-establish-operate');
                  if (item) onSelectLicence(item);
                }}
                className="p-3 bg-slate-50/70 hover:bg-slate-100/70 border border-slate-200/80 rounded-xl cursor-pointer transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                    State Pollution Control Board Consent (CTE/CTO)
                  </h4>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {currentState.code === 'KA' ? 'KSPCB Karnataka' : `${currentState.name} SPCB`}
                </p>
              </div>

              <div
                onClick={() => {
                  const item = licences.find((l) => l.slug === 'retail-drug-licence');
                  if (item) onSelectLicence(item);
                }}
                className="p-3 bg-slate-50/70 hover:bg-slate-100/70 border border-slate-200/80 rounded-xl cursor-pointer transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                    Retail Allopathic Drug Licence (Form 20/21)
                  </h4>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  {currentState.name} Drugs Control Department
                </p>
              </div>
            </div>
          </div>

          {/* Column 3: Municipal / City Corporation Licences */}
          <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col">
            <div className="pb-3 border-b border-slate-100 mb-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-teal-700">Tier 3: Municipal</span>
                <span className="text-xs text-slate-500">{selectedCity || currentState.capital}</span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mt-1">Municipal City Clearances</h3>
              <p className="text-xs text-slate-500 mt-0.5">Administered by Urban Local Bodies (ULB).</p>
            </div>

            <div className="space-y-3 flex-1">
              <div
                onClick={() => {
                  const item = licences.find((l) => l.slug === 'municipal-trade-licence');
                  if (item) onSelectLicence(item);
                }}
                className="p-3 bg-slate-50/70 hover:bg-slate-100/70 border border-slate-200/80 rounded-xl cursor-pointer transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                    {currentState.municipalCorporationName || `${selectedCity} Municipal`} Trade Licence
                  </h4>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Mandatory annual operating certificate based on premises area and zoning.
                </p>
              </div>

              <div
                onClick={() => {
                  const item = licences.find((l) => l.slug === 'fire-safety-noc');
                  if (item) onSelectLicence(item);
                }}
                className="p-3 bg-slate-50/70 hover:bg-slate-100/70 border border-slate-200/80 rounded-xl cursor-pointer transition-colors group"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-xs font-bold text-slate-900 group-hover:text-teal-700">
                    Fire Safety NOC for Commercial Venues
                  </h4>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-teal-700 group-hover:translate-x-0.5 transition-transform" />
                </div>
                <p className="text-[11px] text-slate-500 mt-1">
                  Required for restaurants, auditoriums, and high-rise premises.
                </p>
              </div>

              <div className="p-3 bg-slate-50/50 border border-dashed border-slate-200 rounded-xl text-xs text-slate-600">
                <span className="font-semibold text-slate-800">Gram Panchayat vs Municipal:</span>
                <p className="mt-1 text-[11px] leading-relaxed text-slate-500">
                  If operating outside municipal corporation limits in a village / rural area, you will require a Gram Panchayat Trade NOC and property tax record instead of corporation trade permits.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* AI Assistance Callout for Complex State Rules */}
        <div className="p-6 bg-teal-900 text-white rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h3 className="text-lg font-bold">Unsure which authority applies to your specific location?</h3>
            <p className="text-xs text-teal-200 mt-1">
              Ask Licence Mitra: &ldquo;I am opening a coffee shop in Indiranagar, Bengaluru. What municipal clearances do I need?&rdquo;
            </p>
          </div>
          <button
            onClick={onOpenAI}
            className="px-5 py-2.5 bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs rounded-xl transition-colors shrink-0 shadow-sm"
          >
            Ask Licence Mitra
          </button>
        </div>

      </div>
    </div>
  );
};
