export type LicenceCategory =
  | 'transport-driving'
  | 'food-restaurant'
  | 'business-trade'
  | 'construction-factory-industrial'
  | 'health-pharmacy-medical'
  | 'education-professional'
  | 'agriculture-environment'
  | 'import-export-special'
  | 'state-local-services';

export type ApplicantType =
  | 'Individual'
  | 'Sole Proprietorship'
  | 'Partnership'
  | 'LLP'
  | 'Private Limited'
  | 'Public Limited'
  | 'Farmer'
  | 'Co-operative / NGO';

export type JurisdictionLevel = 'Central' | 'State' | 'Municipal / Local';

export type VerificationStatus = 'Verified' | 'Needs review' | 'Outdated' | 'Draft' | 'Unavailable';

export type ApplicationMode = 'Online' | 'Offline' | 'Online & Offline (Hybrid)';

export interface DocumentRequirement {
  id: string;
  name: string;
  description: string;
  isMandatory: boolean;
  conditionalNote?: string;
  acceptedFormats?: string[];
  maxSizeMb?: number;
  validityFreshness?: string;
}

export interface ApplicationStep {
  stepNumber: number;
  title: string;
  description: string;
  officialPortalUrl?: string;
  actionHint?: string;
  estimatedDuration?: string;
}

export interface FeeItem {
  particular: string;
  amount: string;
  notes?: string;
}

export interface SourceReference {
  name: string;
  url: string;
  type: 'Application Portal' | 'Department Website' | 'Official Gazette / Act' | 'Information Guide';
  department: string;
  lastCheckedDate: string;
  isOfficialGovDomain: boolean;
}

export interface LicenceFAQ {
  question: string;
  answer: string;
}

export interface LicenceRecord {
  id: string;
  slug: string;
  name: string;
  aliases: string[];
  category: LicenceCategory;
  categoryLabel: string;
  tagline: string;
  overview: string;
  whatItAllows: string[];
  whoNeedsIt: string[];
  whoIsExempt: string[];
  eligibilityCriteria: string[];
  applicantTypes: ApplicantType[];
  activitiesCovered: string[];
  jurisdiction: JurisdictionLevel;
  state?: string; // Optional for central
  municipality?: string; // Optional
  issuingAuthority: string;
  governingMinistry: string;
  relevantLegislation: string;
  applicationMode: ApplicationMode;
  officialApplicationUrl: string;
  officialInfoUrl: string;
  governmentFees: {
    summary: string;
    items: FeeItem[];
    professionalFeeNote?: string;
  };
  processingTimeEstimate: string;
  validityPeriod: string;
  renewalRequirements: {
    leadTime: string;
    procedure: string;
    gracePeriod?: string;
    penaltyForDelay?: string;
  };
  inspectionRequirements: string;
  modificationAndTransfer: string;
  commonRejectionReasons: string[];
  requiredDocuments: DocumentRequirement[];
  steps: ApplicationStep[];
  sources: SourceReference[];
  faqs: LicenceFAQ[];
  relatedLicenceIds: string[];
  verificationStatus: VerificationStatus;
  verifiedBy?: string;
  lastVerifiedDate: string;
  isPopular?: boolean;
}

export interface OfficialSourceEntry {
  id: string;
  name: string;
  domain: string;
  url: string;
  department: string;
  jurisdiction: JurisdictionLevel;
  supportedCategories: LicenceCategory[];
  linkType: 'Application Portal' | 'Informational Service' | 'Verification Utility';
  status: 'Active & Verified' | 'Needs Review' | 'Maintenance';
  lastCheckedDate: string;
  description: string;
}

export interface DiscoveryState {
  applicantType?: ApplicantType;
  activitySector?: string;
  specificActivity?: string;
  state?: string;
  city?: string;
  applicationKind?: 'New' | 'Renewal' | 'Modification' | 'Replacement';
  annualTurnover?: string;
  hasExistingGst?: boolean;
  hasExistingUdyam?: boolean;
}

export interface DiscoveryRecommendation {
  licenceId: string;
  tier: 'Mandatory' | 'Conditional' | 'Recommended';
  reason: string;
  actionNeeded: string;
}

export interface RenewalReminder {
  id: string;
  licenceId: string;
  licenceName: string;
  registrationNumber?: string;
  issueDate: string;
  expiryDate: string;
  reminderLeadDays: number;
  notes?: string;
  createdAt: string;
}

export interface UserCorrectionReport {
  id: string;
  licenceId: string;
  licenceName: string;
  issueType: 'Outdated Fee' | 'Broken Link' | 'Document Requirement Changed' | 'Procedure Changed' | 'Other';
  details: string;
  submittedByEmail?: string;
  submittedAt: string;
  status: 'Pending' | 'Reviewed' | 'Resolved';
}
