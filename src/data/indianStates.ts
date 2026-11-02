export interface StateData {
  code: string;
  name: string;
  type: 'State' | 'Union Territory';
  capital: string;
  majorCities: string[];
  officialCitizenPortal: string;
  portalUrl: string;
  municipalCorporationName?: string;
  notes: string;
}

export const INDIAN_STATES: StateData[] = [
  {
    code: 'KA',
    name: 'Karnataka',
    type: 'State',
    capital: 'Bengaluru',
    majorCities: ['Bengaluru', 'Mysuru', 'Hubballi-Dharwad', 'Mangaluru', 'Belagavi'],
    officialCitizenPortal: 'Seva Sindhu & e-Karmika',
    portalUrl: 'https://sevasindhu.karnataka.gov.in/',
    municipalCorporationName: 'Bruhat Bengaluru Mahanagara Palike (BBMP)',
    notes: 'Primary demonstration state. Features digitized portals for BBMP Trade Licence, e-Karmika Shops & Establishments, and e-Prerana Professional Tax.'
  },
  {
    code: 'MH',
    name: 'Maharashtra',
    type: 'State',
    capital: 'Mumbai',
    majorCities: ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik'],
    officialCitizenPortal: 'Aaple Sarkar & MahaOnline',
    portalUrl: 'https://aaplesarkar.mahaonline.gov.in/',
    municipalCorporationName: 'Brihanmumbai Municipal Corporation (BMC)',
    notes: 'Uses Gumasta Licence for Shops & Establishments under the Maharashtra Shops & Establishments Act.'
  },
  {
    code: 'DL',
    name: 'Delhi (NCT)',
    type: 'Union Territory',
    capital: 'New Delhi',
    majorCities: ['New Delhi', 'North Delhi', 'South Delhi', 'Dwarka'],
    officialCitizenPortal: 'e-District Delhi',
    portalUrl: 'https://edistrict.delhigovt.nic.in/',
    municipalCorporationName: 'Municipal Corporation of Delhi (MCD)',
    notes: 'Single portal for Municipal Health Trade Licences, Factory Licences, and DPCC environmental consents.'
  },
  {
    code: 'TN',
    name: 'Tamil Nadu',
    type: 'State',
    capital: 'Chennai',
    majorCities: ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem'],
    officialCitizenPortal: 'e-Sevai Portal',
    portalUrl: 'https://www.tnesevai.tn.gov.in/',
    municipalCorporationName: 'Greater Chennai Corporation (GCC)',
    notes: 'Commercial licences managed via GCC and Tamil Nadu single window portal Biz Buddy.'
  },
  {
    code: 'TG',
    name: 'Telangana',
    type: 'State',
    capital: 'Hyderabad',
    majorCities: ['Hyderabad', 'Warangal', 'Nizamabad', 'Karimnagar'],
    officialCitizenPortal: 'TS-iPASS & MeeSeva',
    portalUrl: 'https://ipass.telangana.gov.in/',
    municipalCorporationName: 'Greater Hyderabad Municipal Corporation (GHMC)',
    notes: 'Pioneered TS-iPASS single-window time-bound clearance for businesses and industries.'
  },
  {
    code: 'GJ',
    name: 'Gujarat',
    type: 'State',
    capital: 'Gandhinagar',
    majorCities: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar'],
    officialCitizenPortal: 'Investor Facilitation Portal (IFP) & Digital Gujarat',
    portalUrl: 'https://ifp.gujarat.gov.in/',
    municipalCorporationName: 'Ahmedabad Municipal Corporation (AMC)',
    notes: 'State single window system for industrial and shop registrations with high digital integration.'
  },
  {
    code: 'UP',
    name: 'Uttar Pradesh',
    type: 'State',
    capital: 'Lucknow',
    majorCities: ['Noida', 'Lucknow', 'Kanpur', 'Varanasi', 'Agra'],
    officialCitizenPortal: 'Nivesh Mitra',
    portalUrl: 'https://niveshmitra.up.nic.in/',
    notes: 'Single window clearance for 160+ commercial clearances across UP districts.'
  },
  {
    code: 'WB',
    name: 'West Bengal',
    type: 'State',
    capital: 'Kolkata',
    majorCities: ['Kolkata', 'Howrah', 'Siliguri', 'Durgapur'],
    officialCitizenPortal: 'Silpa Sathi',
    portalUrl: 'https://silpasathi.wb.gov.in/',
    municipalCorporationName: 'Kolkata Municipal Corporation (KMC)',
    notes: 'KMC Certificate of Enlistment (Trade Licence) processed via official e-services.'
  },
  {
    code: 'RJ',
    name: 'Rajasthan',
    type: 'State',
    capital: 'Jaipur',
    majorCities: ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota'],
    officialCitizenPortal: 'Single Window Clearance System (SWCS) Rajasthan',
    portalUrl: 'https://swcs.rajasthan.gov.in/',
    notes: 'MSME Act allows exemption from inspections for the first 3 years of establishment.'
  },
  {
    code: 'KL',
    name: 'Kerala',
    type: 'State',
    capital: 'Thiruvananthapuram',
    majorCities: ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur'],
    officialCitizenPortal: 'K-SWIFT (Kerala Single Window)',
    portalUrl: 'https://kswift.kerala.gov.in/',
    notes: 'Fast-track clearances with self-certification for low-risk micro and small businesses.'
  },
  {
    code: 'AP',
    name: 'Andhra Pradesh',
    type: 'State',
    capital: 'Amaravati',
    majorCities: ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati'],
    officialCitizenPortal: 'Single Desk Portal AP',
    portalUrl: 'https://apindustries.gov.in/',
    notes: 'Integrated clearances for MSME and large industries.'
  },
  {
    code: 'HR',
    name: 'Haryana',
    type: 'State',
    capital: 'Chandigarh',
    majorCities: ['Gurugram', 'Faridabad', 'Panipat', 'Ambala'],
    officialCitizenPortal: 'Haryana Enterprise Promotion Centre (HEPC)',
    portalUrl: 'https://investharyana.in/',
    notes: 'Gurugram and Faridabad local licences managed via ULB Haryana.'
  },
  {
    code: 'PB',
    name: 'Punjab',
    type: 'State',
    capital: 'Chandigarh',
    majorCities: ['Ludhiana', 'Amritsar', 'Jalandhar', 'Patiala'],
    officialCitizenPortal: 'Invest Punjab',
    portalUrl: 'https://pbindustries.gov.in/',
    notes: 'Unified clearance for industry and commerce.'
  },
  {
    code: 'MP',
    name: 'Madhya Pradesh',
    type: 'State',
    capital: 'Bhopal',
    majorCities: ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior'],
    officialCitizenPortal: 'MP e-Nagar Palika & Invest MP',
    portalUrl: 'https://mpenagarpalika.gov.in/',
    notes: 'Indore & Bhopal municipal permits through e-Nagar Palika.'
  },
  {
    code: 'OD',
    name: 'Odisha',
    type: 'State',
    capital: 'Bhubaneswar',
    majorCities: ['Bhubaneswar', 'Cuttack', 'Rourkela'],
    officialCitizenPortal: 'GO SWIFT Odisha',
    portalUrl: 'https://goswift.odisha.gov.in/',
    notes: 'Fast single window approvals for manufacturing and commercial units.'
  },
  {
    code: 'BR',
    name: 'Bihar',
    type: 'State',
    capital: 'Patna',
    majorCities: ['Patna', 'Gaya', 'Bhagalpur', 'Muzaffarpur'],
    officialCitizenPortal: 'Single Window Clearance Bihar',
    portalUrl: 'https://swcs.bihar.gov.in/',
    notes: 'Digital services for shop registrations and trade permits.'
  },
  {
    code: 'AS',
    name: 'Assam',
    type: 'State',
    capital: 'Dispur',
    majorCities: ['Guwahati', 'Silchar', 'Dibrugarh', 'Jorhat'],
    officialCitizenPortal: 'Ease of Doing Business Assam',
    portalUrl: 'https://eodb.assam.gov.in/',
    notes: 'Unified approvals for North Eastern industrial development.'
  },
  {
    code: 'JH',
    name: 'Jharkhand',
    type: 'State',
    capital: 'Ranchi',
    majorCities: ['Ranchi', 'Jamshedpur', 'Dhanbad'],
    officialCitizenPortal: 'Advantage Jharkhand',
    portalUrl: 'https://singlewindow.jharkhand.gov.in/',
    notes: 'Mining and industrial approvals directory.'
  },
  {
    code: 'CG',
    name: 'Chhattisgarh',
    type: 'State',
    capital: 'Raipur',
    majorCities: ['Raipur', 'Bhilai', 'Bilaspur'],
    officialCitizenPortal: 'Single Window Chhattisgarh',
    portalUrl: 'https://industries.cg.gov.in/',
    notes: 'Environmental and factory regulatory clearances.'
  },
  {
    code: 'UT',
    name: 'Uttarakhand',
    type: 'State',
    capital: 'Dehradun',
    majorCities: ['Dehradun', 'Haridwar', 'Haldwani'],
    officialCitizenPortal: 'Uttarakhand Single Window System',
    portalUrl: 'https://ca.uttarakhand.gov.in/',
    notes: 'Hill state tourist and commercial enterprise permissions.'
  },
  {
    code: 'HP',
    name: 'Himachal Pradesh',
    type: 'State',
    capital: 'Shimla',
    majorCities: ['Shimla', 'Dharamshala', 'Solan'],
    officialCitizenPortal: 'Emerging Himachal',
    portalUrl: 'https://emerginghimachal.hp.gov.in/',
    notes: 'Pharma hub Solan and tourism industry permits.'
  },
  {
    code: 'GA',
    name: 'Goa',
    type: 'State',
    capital: 'Panaji',
    majorCities: ['Panaji', 'Margao', 'Vasco da Gama'],
    officialCitizenPortal: 'Goa Online Portal',
    portalUrl: 'https://goaonline.gov.in/',
    notes: 'Tourism, shack licences, hospitality, and excise regulatory clearances.'
  },
  {
    code: 'JK',
    name: 'Jammu and Kashmir',
    type: 'Union Territory',
    capital: 'Srinagar / Jammu',
    majorCities: ['Srinagar', 'Jammu', 'Anantnag'],
    officialCitizenPortal: 'Single Window JK',
    portalUrl: 'https://singlewindow.jk.gov.in/',
    notes: 'Handicraft, horticulture, and commercial licences.'
  },
  {
    code: 'CH',
    name: 'Chandigarh',
    type: 'Union Territory',
    capital: 'Chandigarh',
    majorCities: ['Chandigarh'],
    officialCitizenPortal: 'e-Services Chandigarh',
    portalUrl: 'https://chandigarh.gov.in/',
    notes: 'UT administration municipal and estate office approvals.'
  },
  {
    code: 'PY',
    name: 'Puducherry',
    type: 'Union Territory',
    capital: 'Puducherry',
    majorCities: ['Puducherry', 'Karaikal', 'Mahe'],
    officialCitizenPortal: 'Puducherry Online Services',
    portalUrl: 'https://puducherry.gov.in/',
    notes: 'Local municipal trade and tourism licences.'
  }
];
