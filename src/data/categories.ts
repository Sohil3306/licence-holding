import { LicenceCategory } from '../types/licence';

export interface CategoryInfo {
  id: LicenceCategory;
  name: string;
  shortDescription: string;
  iconName: string;
  examples: string[];
  scopeNote: string;
}

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'transport-driving',
    name: 'Transport and Driving',
    shortDescription: 'Learner licences, permanent driving licences, commercial badges, renewals, and vehicle registrations.',
    iconName: 'Car',
    examples: ['Learner Licence (LLR)', 'Permanent Driving Licence', 'Commercial Transport DL', 'International Driving Permit (IDP)'],
    scopeNote: 'Governed under Motor Vehicles Act, 1988 and Central Motor Vehicles Rules, 1989. Executed primarily via Parivahan Sarathi.'
  },
  {
    id: 'food-restaurant',
    name: 'Food and Restaurant Business',
    shortDescription: 'FSSAI registrations, state and central food safety licences, cloud kitchens, catering, and food processing.',
    iconName: 'Utensils',
    examples: ['FSSAI Basic Registration', 'FSSAI State Licence', 'FSSAI Central Licence', 'Food Manufacturing Permission'],
    scopeNote: 'Governed by Food Safety and Standards Authority of India (FSSAI). Category depends on annual turnover and production capacity.'
  },
  {
    id: 'business-trade',
    name: 'Business and Trade',
    shortDescription: 'Shop & Establishment, municipal trade licences, GST registration, Udyam MSME, company incorporation, and trademarks.',
    iconName: 'Store',
    examples: ['Shop & Establishment Act', 'Municipal Trade Licence', 'GST Registration', 'Udyam MSME Certificate', 'Company Incorporation (SPICe+)'],
    scopeNote: 'Differentiates legal registrations, municipal operating licences, tax registrations, and intellectual property.'
  },
  {
    id: 'construction-factory-industrial',
    name: 'Construction, Factory and Industrial',
    shortDescription: 'Factory licences under the Factories Act, building plan approvals, Fire Safety NOCs, and Pollution Control Board consents.',
    iconName: 'Factory',
    examples: ['Factory Licence', 'Fire Safety NOC', 'Consent to Establish (CTE / CTO)', 'Contractor Labour Licence'],
    scopeNote: 'Requires rigorous site inspection, plant layout approval, worker safety audits, and statutory environmental checks.'
  },
  {
    id: 'health-pharmacy-medical',
    name: 'Health, Pharmacy and Medical',
    shortDescription: 'Retail and wholesale drug licences, clinical establishment registrations, and bio-medical waste permissions.',
    iconName: 'HeartPulse',
    examples: ['Retail Drug Licence (Form 20/21)', 'Wholesale Drug Licence', 'Clinical Establishment Registration', 'Bio-Medical Waste Authorization'],
    scopeNote: 'Strictly mandates qualified registered pharmacists, cold-chain storage verification, and drug inspector physical inspections.'
  },
  {
    id: 'education-professional',
    name: 'Education and Professional Services',
    shortDescription: 'Private security agency licences (PSARA), coaching centre guidelines, travel agency approvals, and statutory memberships.',
    iconName: 'GraduationCap',
    examples: ['PSARA Security Licence', 'Coaching Centre Registration', 'Travel Agency Approval', 'Professional Statutory Registrations'],
    scopeNote: 'Subject to Home Department police verifications, local education department guidelines, and statutory body charters.'
  },
  {
    id: 'agriculture-environment',
    name: 'Agriculture and Environment',
    shortDescription: 'Fertiliser dealer licences, seed marketing permits, insecticide licences, groundwater extraction, and agri-processing.',
    iconName: 'Sprout',
    examples: ['Fertiliser Dealer Licence', 'Seed Dealer Licence', 'Insecticide / Pesticide Licence', 'Groundwater Extraction NOC'],
    scopeNote: 'Requires agricultural qualification certificates, state agriculture department stock storage audits, and CGWA approvals.'
  },
  {
    id: 'import-export-special',
    name: 'Import, Export and Special Activities',
    shortDescription: 'Import Export Code (IEC) from DGFT, ICEGATE customs registration, WPC telecom equipment type approval, and arms licences.',
    iconName: 'Globe',
    examples: ['DGFT Import Export Code (IEC)', 'ICEGATE Registration', 'WPC ETA Telecom Approval', 'Firearms Licence (Subject to MHA)'],
    scopeNote: 'Central government foreign trade and specialized statutory clearances with strict identity and port-of-entry checks.'
  },
  {
    id: 'state-local-services',
    name: 'State and Local Government Services',
    shortDescription: 'Municipal commercial permits, state professional tax (PT), occupancy certificates, and state-specific portals.',
    iconName: 'Building2',
    examples: ['State Professional Tax (PT)', 'BBMP e-Aasthi Trade Permit', 'Labour e-Karmika', 'State Transport Badges'],
    scopeNote: 'Varies by Indian state and municipality. Features Karnataka and Bengaluru municipal workflows as standard reference implementations.'
  }
];
