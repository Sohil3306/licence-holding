import React, { useState } from 'react';
import { ApplicantType, LicenceRecord } from '../types/licence';
import { INDIAN_STATES } from '../data/indianStates';
import { 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  CheckCircle2, 
  AlertCircle, 
  Info,
  ExternalLink,
  ShieldCheck,
  Building2,
  FileCheck2
} from 'lucide-react';

interface DiscoveryWizardProps {
  licences: LicenceRecord[];
  onSelectLicence: (licence: LicenceRecord) => void;
  onOpenAI: () => void;
}

interface RecommendationItem {
  licence: LicenceRecord;
  tier: 'Mandatory' | 'Conditional' | 'Recommended';
  reason: string;
  actionNeeded: string;
}

export const DiscoveryWizard: React.FC<DiscoveryWizardProps> = ({
  licences,
  onSelectLicence,
  onOpenAI,
}) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  // User state
  const [applicantType, setApplicantType] = useState<ApplicantType>('Sole Proprietorship');
  const [activitySector, setActivitySector] = useState<string>('food-hospitality');
  const [specificDetails, setSpecificDetails] = useState<string>('Dine-in restaurant & takeaway');
  const [stateCode, setStateCode] = useState<string>('KA');
  const [cityName, setCityName] = useState<string>('Bengaluru');
  const [applicationKind, setApplicationKind] = useState<'New' | 'Renewal' | 'Modification'>('New');
  const [turnoverScale, setTurnoverScale] = useState<string>('12L-to-1Cr');
  const [hasGST, setHasGST] = useState<boolean>(false);
  const [hasUdyam, setHasUdyam] = useState<boolean>(false);

  const [isCompleted, setIsCompleted] = useState<boolean>(false);

  const totalSteps = 6;

  // Sectors list
  const sectors = [
    { id: 'driving-personal', title: 'Personal Driving & Vehicle Transit', desc: 'Cars, bikes, commercial transport, international permits.' },
    { id: 'food-hospitality', title: 'Food, Restaurant & Cloud Kitchen', desc: 'Eateries, cafes, cloud kitchens, bakeries, food processing.' },
    { id: 'retail-trade', title: 'Retail Shop, Trading & Wholesale', desc: 'Commercial shops, grocery, apparel, e-commerce, consumer goods.' },
    { id: 'tech-services', title: 'IT, Software & Professional Services', desc: 'Software firms, consulting, agencies, freelance offices.' },
    { id: 'manufacturing', title: 'Factory, Assembly & Manufacturing', desc: 'Fabrication, chemical processing, machinery, engineering.' },
    { id: 'import-export', title: 'International Import & Export', desc: 'Cross-border trading, overseas sourcing, foreign sales.' },
    { id: 'healthcare', title: 'Pharmacy, Healthcare & Medical', desc: 'Retail chemists, clinics, pharmaceutical wholesale.' },
    { id: 'agriculture', title: 'Agriculture, Seeds & Fertiliser', desc: 'Fertiliser dealership, seeds, farm inputs distribution.' },
  ];

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsCompleted(true);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIsCompleted(false);
  };

  // Generate tailored recommendations
  const getRecommendations = (): RecommendationItem[] => {
    const list: RecommendationItem[] = [];

    const findLicence = (id: string) => licences.find((l) => l.id === id);

    if (activitySector === 'driving-personal') {
      const llr = findLicence('learners-driving-licence');
      const dl = findLicence('permanent-driving-licence');
      if (applicationKind === 'New') {
        if (llr) {
          list.push({
            licence: llr,
            tier: 'Mandatory',
            reason: 'Mandatory initial step before practical test in India. Must hold for at least 30 days.',
            actionNeeded: 'Apply online on Parivahan Sarathi with Aadhaar e-KYC.'
          });
        }
        if (dl) {
          list.push({
            licence: dl,
            tier: 'Mandatory',
            reason: 'Permanent authorisation to drive independently once LLR completes 30 days.',
            actionNeeded: 'Book driving track test slot on Parivahan Sarathi.'
          });
        }
      } else {
        const renewal = findLicence('permanent-driving-licence');
        if (renewal) {
          list.push({
            licence: renewal,
            tier: 'Mandatory',
            reason: 'DL validity renewal required within 1 year before or after expiry.',
            actionNeeded: 'Submit Form 9 and Form 1A on Parivahan Sarathi.'
          });
        }
      }
      return list;
    }

    // Business Activities
    if (activitySector === 'food-hospitality') {
      if (turnoverScale === 'under-12L') {
        const fssaiBasic = findLicence('fssai-basic-registration');
        if (fssaiBasic) {
          list.push({
            licence: fssaiBasic,
            tier: 'Mandatory',
            reason: 'Mandatory 14-digit registration for petty food vendors & small cloud kitchens with turnover up to ₹12 Lakh/yr.',
            actionNeeded: 'File Form A on foscos.fssai.gov.in (₹100/yr).'
          });
        }
      } else {
        const fssaiState = findLicence('fssai-state-licence');
        if (fssaiState) {
          list.push({
            licence: fssaiState,
            tier: 'Mandatory',
            reason: 'Mandatory state licence for restaurants & commercial kitchens with turnover between ₹12 Lakh and ₹20 Crore.',
            actionNeeded: 'File Form B on FoSCoS; get water potability tested at a NABL lab.'
          });
        }
      }

      const trade = findLicence('municipal-trade-licence');
      if (trade) {
        list.push({
          licence: trade,
          tier: 'Mandatory',
          reason: `Mandatory municipal permission to operate food service premises in ${cityName} corporation limits.`,
          actionNeeded: 'Apply on city corporation portal with property tax PID and rental lease.'
        });
      }

      const shop = findLicence('shop-and-establishment-registration');
      if (shop) {
        list.push({
          licence: shop,
          tier: 'Mandatory',
          reason: 'State labour department registration regulating restaurant staff hours and working days.',
          actionNeeded: 'Register on state labour portal (e-Karmika in Karnataka).'
        });
      }

      const fire = findLicence('fire-safety-noc');
      if (fire && (turnoverScale === '1Cr-to-20Cr' || turnoverScale === 'above-20Cr')) {
        list.push({
          licence: fire,
          tier: 'Conditional',
          reason: 'Mandatory for restaurants seating >= 50 persons or exceeding 100 sq meters floor area.',
          actionNeeded: 'Submit floor plans to Fire & Emergency Services.'
        });
      }
    }

    // Retail or Trade
    if (activitySector === 'retail-trade' || activitySector === 'tech-services') {
      const shop = findLicence('shop-and-establishment-registration');
      if (shop) {
        list.push({
          licence: shop,
          tier: 'Mandatory',
          reason: 'Statutory proof of business premises and operational commencement needed for commercial operations and current bank account.',
          actionNeeded: 'Apply on state labour portal within 30 days of opening.'
        });
      }

      const trade = findLicence('municipal-trade-licence');
      if (trade && activitySector === 'retail-trade') {
        list.push({
          licence: trade,
          tier: 'Mandatory',
          reason: `Municipal clearance for physical retail store inside ${cityName} corporation.`,
          actionNeeded: 'Submit property tax receipt and lease agreement to municipal ward.'
        });
      }
    }

    // Manufacturing / Factory
    if (activitySector === 'manufacturing') {
      const factory = findLicence('factory-licence');
      if (factory) {
        list.push({
          licence: factory,
          tier: 'Mandatory',
          reason: 'Mandatory under Factories Act, 1948 for manufacturing units employing 10+ workers with power.',
          actionNeeded: 'Submit factory building plans to DISH for plan approval.'
        });
      }

      const pcb = findLicence('pollution-consent-to-establish-operate');
      if (pcb) {
        list.push({
          licence: pcb,
          tier: 'Mandatory',
          reason: 'Statutory environmental clearance for industrial emissions and effluent treatment.',
          actionNeeded: 'Apply for Consent to Establish (CTE) on state SPCB portal before installing machinery.'
        });
      }

      const fire = findLicence('fire-safety-noc');
      if (fire) {
        list.push({
          licence: fire,
          tier: 'Mandatory',
          reason: 'Industrial fire prevention and hazardous material life-safety clearance.',
          actionNeeded: 'Install compliant fire suppression systems and request inspection.'
        });
      }
    }

    // Import / Export
    if (activitySector === 'import-export') {
      const iec = findLicence('import-export-code');
      if (iec) {
        list.push({
          licence: iec,
          tier: 'Mandatory',
          reason: '10-digit DGFT code mandatory to clear shipments through Indian Customs and receive foreign forex remittances.',
          actionNeeded: 'Apply on dgft.gov.in (₹500 one-time fee) with pre-printed cancelled cheque.'
        });
      }
    }

    // Healthcare
    if (activitySector === 'healthcare') {
      const drug = findLicence('retail-drug-licence');
      if (drug) {
        list.push({
          licence: drug,
          tier: 'Mandatory',
          reason: 'Mandatory permit to dispense allopathic medicines under supervision of a Registered Pharmacist.',
          actionNeeded: 'Submit Form 19 on state drugs portal with pharmacist credentials and deep-freeze invoice.'
        });
      }
    }

    // Core Tax & MSME Recommendations
    const gst = findLicence('gst-registration');
    if (gst && !hasGST) {
      const isHighTurnover = turnoverScale !== 'under-12L';
      list.push({
        licence: gst,
        tier: isHighTurnover ? 'Mandatory' : 'Recommended',
        reason: isHighTurnover 
          ? 'Required once turnover exceeds threshold (₹40L for goods, ₹20L for services) or for inter-state and e-commerce selling.'
          : 'Enables Input Tax Credit (ITC) on capital assets and voluntary inter-state supplies.',
        actionNeeded: 'Apply for free on gst.gov.in using Aadhaar e-KYC.'
      });
    }

    const udyam = findLicence('udyam-msme-registration');
    if (udyam && !hasUdyam) {
      list.push({
        licence: udyam,
        tier: 'Recommended',
        reason: 'Zero-cost official recognition as an MSME unlocking 1-2% bank loan interest subsidies, 50% patent/trademark discount, and payment protection.',
        actionNeeded: 'Register for ₹0 on udyamregistration.gov.in using Aadhaar & PAN.'
      });
    }

    // Professional Tax in Applicable States (Karnataka)
    if (stateCode === 'KA' && applicantType !== 'Individual') {
      const pt = findLicence('karnataka-professional-tax-registration');
      if (pt) {
        list.push({
          licence: pt,
          tier: 'Mandatory',
          reason: 'Mandatory in Karnataka for employers to register on e-Prerana and deduct ₹200/mo for staff earning >= ₹25,000.',
          actionNeeded: 'Complete e-Registration on karnatakatax.gov.in.'
        });
      }
    }

    // Corporate entity incorporation if company selected
    if (applicantType === 'Private Limited') {
      const pvt = findLicence('private-limited-company-incorporation');
      if (pvt) {
        list.push({
          licence: pvt,
          tier: 'Mandatory',
          reason: 'Corporate legal personality, limited liability, and institutional fundraising readiness.',
          actionNeeded: 'File SPICe+ Part A & B on mca.gov.in.'
        });
      }
    }

    return list;
  };

  const recommendations = getRecommendations();
  const mandatoryItems = recommendations.filter((r) => r.tier === 'Mandatory');
  const conditionalItems = recommendations.filter((r) => r.tier === 'Conditional');
  const recommendedItems = recommendations.filter((r) => r.tier === 'Recommended');

  return (
    <div className="py-10 bg-slate-50 min-h-[85vh]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-700 bg-teal-50 border border-teal-200/80 px-3 py-1 rounded-full mb-2">
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Intelligent Eligibility Evaluation</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Find the Licences You Need
          </h1>
          <p className="text-sm text-slate-600 mt-1 max-w-xl mx-auto">
            Answer a few tailored questions about your planned activity to generate a personalized regulatory roadmap.
          </p>
        </div>

        {/* Wizard Card Container */}
        <div className="bg-white border border-slate-200 rounded-2xl shadow-xs overflow-hidden">
          
          {!isCompleted ? (
            <div>
              {/* Progress Bar */}
              <div className="bg-slate-50 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 uppercase tracking-wider">
                  Step {currentStep} of {totalSteps}
                </span>
                <span className="text-xs text-slate-500 font-medium tabular-nums">
                  {Math.round((currentStep / totalSteps) * 100)}% Complete
                </span>
              </div>
              <div className="w-full bg-slate-100 h-1">
                <div
                  className="bg-teal-600 h-1 transition-all duration-300"
                  style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                />
              </div>

              {/* Step Content */}
              <div className="p-6 sm:p-8">
                
                {/* Step 1: Entity Type */}
                {currentStep === 1 && (
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-1">
                      1. How will you or your business operate?
                    </h2>
                    <p className="text-xs text-slate-500 mb-5">
                      Select your legal business constitution or individual status.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { type: 'Individual' as ApplicantType, label: 'Individual Citizen', desc: 'Personal permits, driving licence, individual professional.' },
                        { type: 'Sole Proprietorship' as ApplicantType, label: 'Sole Proprietorship', desc: 'Single-owner business, retail shop, small enterprise.' },
                        { type: 'Partnership' as ApplicantType, label: 'Partnership Firm', desc: 'Two or more co-founders under a Partnership Deed.' },
                        { type: 'LLP' as ApplicantType, label: 'Limited Liability Partnership (LLP)', desc: 'Incorporated partnership with limited liability protection.' },
                        { type: 'Private Limited' as ApplicantType, label: 'Private Limited Company', desc: 'Corporate startup, institutional entity, multi-shareholder.' },
                        { type: 'Farmer' as ApplicantType, label: 'Farmer / Producer Co-op', desc: 'Agricultural producer, FPO, farming community.' },
                      ].map((item) => (
                        <div
                          key={item.type}
                          onClick={() => setApplicantType(item.type)}
                          className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                            applicantType === item.type
                              ? 'border-teal-600 bg-teal-50/50 ring-1 ring-teal-600'
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-bold text-slate-900">{item.label}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              applicantType === item.type ? 'border-teal-600 bg-teal-600' : 'border-slate-300'
                            }`}>
                              {applicantType === item.type && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 2: Activity Sector */}
                {currentStep === 2 && (
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-1">
                      2. What primary activity do you intend to perform?
                    </h2>
                    <p className="text-xs text-slate-500 mb-5">
                      Licensing authorities are divided strictly by operational sector.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {sectors.map((sec) => (
                        <div
                          key={sec.id}
                          onClick={() => setActivitySector(sec.id)}
                          className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                            activitySector === sec.id
                              ? 'border-teal-600 bg-teal-50/50 ring-1 ring-teal-600'
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-bold text-slate-900">{sec.title}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              activitySector === sec.id ? 'border-teal-600 bg-teal-600' : 'border-slate-300'
                            }`}>
                              {activitySector === sec.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">{sec.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 3: Location (State and Municipality) */}
                {currentStep === 3 && (
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-1">
                      3. Where will the activity or business be located?
                    </h2>
                    <p className="text-xs text-slate-500 mb-5">
                      State labour laws, municipal trade licences, and pollution rules depend on exact location.
                    </p>
                    <div className="space-y-4 max-w-lg">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          State or Union Territory:
                        </label>
                        <select
                          value={stateCode}
                          onChange={(e) => {
                            setStateCode(e.target.value);
                            const st = INDIAN_STATES.find((s) => s.code === e.target.value);
                            if (st && st.majorCities.length > 0) {
                              setCityName(st.majorCities[0]);
                            }
                          }}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                        >
                          {INDIAN_STATES.map((s) => (
                            <option key={s.code} value={s.code}>
                              {s.name} ({s.type})
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                          City / Municipality:
                        </label>
                        <select
                          value={cityName}
                          onChange={(e) => setCityName(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500"
                        >
                          {INDIAN_STATES.find((s) => s.code === stateCode)?.majorCities.map((city) => (
                            <option key={city} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Application Kind */}
                {currentStep === 4 && (
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-1">
                      4. What kind of application is this?
                    </h2>
                    <p className="text-xs text-slate-500 mb-5">
                      New applications, renewals, and modifications have distinct fee schedules and procedures.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {[
                        { id: 'New' as const, label: 'Fresh / New Application', desc: 'Applying for the very first time for this permit.' },
                        { id: 'Renewal' as const, label: 'Renewal of Existing', desc: 'Extending validity of an expiring licence or certificate.' },
                        { id: 'Modification' as const, label: 'Modification / Amendment', desc: 'Updating address, partners, or vehicle class.' }
                      ].map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setApplicationKind(item.id)}
                          className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                            applicationKind === item.id
                              ? 'border-teal-600 bg-teal-50/50 ring-1 ring-teal-600'
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-bold text-slate-900">{item.label}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              applicationKind === item.id ? 'border-teal-600 bg-teal-600' : 'border-slate-300'
                            }`}>
                              {applicationKind === item.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 5: Turnover & Scale */}
                {currentStep === 5 && (
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-1">
                      5. What is your approximate annual business turnover or scale?
                    </h2>
                    <p className="text-xs text-slate-500 mb-5">
                      Statutory thresholds (e.g. FSSAI Basic vs State Licence; GST exemption thresholds) are tied directly to turnover.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {[
                        { id: 'under-12L', label: 'Under ₹12 Lakh / year', desc: 'Eligible for FSSAI Basic Registration (₹100/yr) and small vendor exemptions.' },
                        { id: '12L-to-40L', label: '₹12 Lakh to ₹40 Lakh / year', desc: 'Requires FSSAI State Licence for food; below general GST mandatory threshold for goods.' },
                        { id: '40L-to-1Cr', label: '₹40 Lakh to ₹1 Crore / year', desc: 'Mandatory GST registration; Micro enterprise classification under Udyam.' },
                        { id: '1Cr-to-20Cr', label: '₹1 Crore to ₹20 Crore / year', desc: 'Small enterprise tier; full commercial accounting & tax audits.' },
                        { id: 'above-20Cr', label: 'Above ₹20 Crore / year', desc: 'Mandates FSSAI Central Licence for food businesses; Medium enterprise scale.' }
                      ].map((item) => (
                        <div
                          key={item.id}
                          onClick={() => setTurnoverScale(item.id)}
                          className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                            turnoverScale === item.id
                              ? 'border-teal-600 bg-teal-50/50 ring-1 ring-teal-600'
                              : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-sm font-bold text-slate-900">{item.label}</span>
                            <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                              turnoverScale === item.id ? 'border-teal-600 bg-teal-600' : 'border-slate-300'
                            }`}>
                              {turnoverScale === item.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                            </div>
                          </div>
                          <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Step 6: Existing Registrations */}
                {currentStep === 6 && (
                  <div>
                    <h2 className="text-lg font-bold text-slate-900 mb-1">
                      6. Do you already hold any of these common registrations?
                    </h2>
                    <p className="text-xs text-slate-500 mb-5">
                      This prevents recommending duplicate clearances.
                    </p>
                    <div className="space-y-3 max-w-lg">
                      <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                        <input
                          type="checkbox"
                          checked={hasGST}
                          onChange={(e) => setHasGST(e.target.checked)}
                          className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <div>
                          <span className="text-sm font-bold text-slate-900">I already have an active GST Registration (GSTIN)</span>
                          <p className="text-xs text-slate-500">Issued by CBIC / State Commercial Taxes.</p>
                        </div>
                      </label>

                      <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50 transition-colors">
                        <input
                          type="checkbox"
                          checked={hasUdyam}
                          onChange={(e) => setHasUdyam(e.target.checked)}
                          className="w-4 h-4 text-teal-600 rounded focus:ring-teal-500"
                        />
                        <div>
                          <span className="text-sm font-bold text-slate-900">I already have an active Udyam MSME Certificate</span>
                          <p className="text-xs text-slate-500">Issued by Ministry of MSME.</p>
                        </div>
                      </label>
                    </div>
                  </div>
                )}

              </div>

              {/* Wizard Navigation Footer */}
              <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
                <button
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={`inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 rounded-xl transition-colors ${
                    currentStep === 1
                      ? 'text-slate-300 cursor-not-allowed'
                      : 'text-slate-700 hover:bg-slate-200/70'
                  }`}
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back</span>
                </button>

                <button
                  onClick={handleNext}
                  className="inline-flex items-center gap-1.5 text-xs font-bold px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl shadow-xs transition-colors"
                >
                  <span>{currentStep === totalSteps ? 'View Tailored Results' : 'Continue'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="p-6 sm:p-8">
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-6">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-teal-700">
                    Evaluation Complete
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900 mt-0.5">
                    Your Personalized Licensing Roadmap
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Based on: <span className="font-semibold text-slate-700">{applicantType}</span> · <span className="font-semibold text-slate-700">{cityName}, {INDIAN_STATES.find(s => s.code === stateCode)?.name}</span>
                  </p>
                </div>

                <button
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 hover:text-slate-900 px-3 py-2 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors shrink-0"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Start New Assessment</span>
                </button>
              </div>

              {/* Transparent Legal Disclaimer */}
              <div className="p-4 bg-amber-50/70 border border-amber-200 rounded-xl mb-6 text-xs text-amber-900 flex items-start gap-3">
                <Info className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
                <p>
                  <span className="font-semibold">Legal Guidance Disclaimer:</span> This assessment identifies clearances commonly applicable to your declared parameters. It is an educational tool and does not constitute formal legal counsel. Always verify with official authorities before commencing operations.
                </p>
              </div>

              {/* Section 1: Mandatory Licences */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-600" />
                  <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                    Mandatory Requirements ({mandatoryItems.length})
                  </h3>
                </div>
                <div className="space-y-3">
                  {mandatoryItems.length > 0 ? (
                    mandatoryItems.map(({ licence, reason, actionNeeded }) => (
                      <div
                        key={licence.id}
                        className="p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-all shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1 max-w-xl">
                          <div className="flex items-center gap-2 text-xs">
                            <span className="font-bold text-slate-900 text-sm hover:text-teal-700 cursor-pointer" onClick={() => onSelectLicence(licence)}>
                              {licence.name}
                            </span>
                            <span className="text-slate-400">·</span>
                            <span className="text-slate-500 font-medium">{licence.jurisdiction} Authority</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            <span className="font-medium text-slate-700">Why it applies:</span> {reason}
                          </p>
                          <p className="text-[11px] text-teal-800">
                            <span className="font-semibold">Action:</span> {actionNeeded}
                          </p>
                        </div>
                        <button
                          onClick={() => onSelectLicence(licence)}
                          className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-lg shrink-0 transition-colors"
                        >
                          View Requirements
                        </button>
                      </div>
                    ))
                  ) : (
                    <p className="text-xs text-slate-500 italic">No mandatory clearances found for this exact combination.</p>
                  )}
                </div>
              </div>

              {/* Section 2: Conditional Licences */}
              {conditionalItems.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                      Conditional Requirements ({conditionalItems.length})
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {conditionalItems.map(({ licence, reason, actionNeeded }) => (
                      <div
                        key={licence.id}
                        className="p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-all shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1 max-w-xl">
                          <div className="flex items-center gap-2 text-xs">
                            <span className="font-bold text-slate-900 text-sm hover:text-teal-700 cursor-pointer" onClick={() => onSelectLicence(licence)}>
                              {licence.name}
                            </span>
                            <span className="text-slate-400">·</span>
                            <span className="text-slate-500 font-medium">{licence.jurisdiction} Authority</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            <span className="font-medium text-slate-700">Trigger condition:</span> {reason}
                          </p>
                          <p className="text-[11px] text-teal-800">
                            <span className="font-semibold">Action:</span> {actionNeeded}
                          </p>
                        </div>
                        <button
                          onClick={() => onSelectLicence(licence)}
                          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg shrink-0 transition-colors"
                        >
                          Check Thresholds
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Section 3: Recommended Registrations */}
              {recommendedItems.length > 0 && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-2.5 h-2.5 rounded-full bg-teal-600" />
                    <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                      Recommended Registrations ({recommendedItems.length})
                    </h3>
                  </div>
                  <div className="space-y-3">
                    {recommendedItems.map(({ licence, reason, actionNeeded }) => (
                      <div
                        key={licence.id}
                        className="p-4 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-all shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                      >
                        <div className="space-y-1 max-w-xl">
                          <div className="flex items-center gap-2 text-xs">
                            <span className="font-bold text-slate-900 text-sm hover:text-teal-700 cursor-pointer" onClick={() => onSelectLicence(licence)}>
                              {licence.name}
                            </span>
                            <span className="text-slate-400">·</span>
                            <span className="text-slate-500 font-medium">Voluntary / Recommended</span>
                          </div>
                          <p className="text-xs text-slate-600 leading-relaxed">
                            <span className="font-medium text-slate-700">Benefit:</span> {reason}
                          </p>
                          <p className="text-[11px] text-teal-800">
                            <span className="font-semibold">Next Step:</span> {actionNeeded}
                          </p>
                        </div>
                        <button
                          onClick={() => onSelectLicence(licence)}
                          className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold rounded-lg shrink-0 transition-colors"
                        >
                          View Details
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Ask Mitra AI Button */}
              <div className="p-5 bg-teal-50 border border-teal-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Need clarification on your exact setup?</h4>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Ask Licence Mitra to generate a personalized document checklist or explain specific exemptions.
                  </p>
                </div>
                <button
                  onClick={onOpenAI}
                  className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white text-xs font-bold rounded-lg transition-colors shrink-0 flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Ask Mitra AI</span>
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </div>
  );
};
