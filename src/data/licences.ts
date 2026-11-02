import { LicenceRecord } from '../types/licence';

export const LICENCES: LicenceRecord[] = [
  {
    id: 'learners-driving-licence',
    slug: 'learners-driving-licence',
    name: "Learner's Driving Licence (LLR)",
    aliases: ['LLR', 'Learners License', 'Learning Licence', 'Kaccha Licence', 'Learner Permit'],
    category: 'transport-driving',
    categoryLabel: 'Transport and Driving',
    tagline: 'Mandatory primary permit required before applying for a permanent driving licence in India.',
    overview: "A Learner's Licence (LLR) is a provisional legal document issued by the Regional Transport Authority (RTO) allowing an individual to practice driving on Indian public roads while accompanied by an experienced permanent licence holder.",
    whatItAllows: [
      'Learn driving of non-transport motor vehicles (MCWG - Motorcycle with Gear, MCWOG - Motorcycle without Gear, LMV - Light Motor Vehicle).',
      'Drive on public roads provided a red "L" sign is visibly affixed on both the front and rear of the vehicle.',
      'Must be accompanied by a licensed instructor or person holding a valid permanent driving licence sitting in the passenger seat.'
    ],
    whoNeedsIt: [
      'Any citizen aged 18+ wanting to drive a light motor vehicle (car/jeep).',
      'Citizens aged 16+ for motorcycles without gear (engine capacity <= 50cc, with parental consent).',
      'Any driver seeking to add a new category or class of vehicle to an existing licence.'
    ],
    whoIsExempt: [
      'None. No person can legally practice or undergo a permanent driving test without an active learner licence.'
    ],
    eligibilityCriteria: [
      'Minimum age 16 for gearless two-wheelers (up to 50cc) with parent/guardian consent.',
      'Minimum age 18 for light motor vehicles (LMV) and geared motorcycles.',
      'Must pass an online/offline computerised test on road safety signs, driving regulations, and traffic laws.',
      'Must possess valid medical fitness certificate (Form 1 self-declaration or Form 1A for applicants over 40 years).'
    ],
    applicantTypes: ['Individual'],
    activitiesCovered: ['Driving practice', 'Pre-test vehicular training'],
    jurisdiction: 'Central',
    issuingAuthority: 'Regional Transport Office (RTO) / Motor Vehicles Department',
    governingMinistry: 'Ministry of Road Transport and Highways (MoRTH)',
    relevantLegislation: 'Motor Vehicles Act, 1988 (Section 8) & Central Motor Vehicles Rules, 1989',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://parivahan.gov.in/parivahan//en/content/driving-licence-related-services',
    officialInfoUrl: 'https://parivahan.gov.in/',
    governmentFees: {
      summary: '₹150 to ₹350 depending on vehicle classes and state computerized test cess.',
      items: [
        { particular: "Learner's Licence issue fee (per vehicle class)", amount: '₹150' },
        { particular: 'Computerized Road Safety / Regulations Test fee', amount: '₹50' }
      ],
      professionalFeeNote: 'Driving schools typically charge ₹2,500 - ₹5,000 including 15-day practical lessons, but direct government online application has zero intermediary fees.'
    },
    processingTimeEstimate: 'Same day (immediate digital issue upon passing online learner test in Aadhaar-authenticated states).',
    validityPeriod: '6 Months from the date of issue (non-renewable; must apply for permanent DL within this window).',
    renewalRequirements: {
      leadTime: 'Cannot be extended. If expired before obtaining permanent DL, a fresh application and test is required.',
      procedure: 'Re-apply online on Parivahan Sarathi for a fresh Learner Licence if 6 months elapse without permanent test booking.'
    },
    inspectionRequirements: 'No physical vehicle inspection for LLR. Biometric / facial authentication through Aadhaar or at RTO testing desk.',
    modificationAndTransfer: 'Name or address correction requires uploading updated Aadhaar/Voter ID with nominal ₹200 fee.',
    commonRejectionReasons: [
      'Failing the automated traffic rules and sign test (requires >= 60% correct answers).',
      'Blurry or unreadable address proof document upload.',
      'Mismatch between Aadhaar name/DOB and self-filled form details.',
      'Incomplete Form 1A medical certification for applicants aged 40 and above.'
    ],
    requiredDocuments: [
      {
        id: 'doc-age-proof',
        name: 'Proof of Age',
        description: 'Aadhaar Card, Birth Certificate, 10th Standard School Leaving Certificate, or Indian Passport.',
        isMandatory: true,
        acceptedFormats: ['PDF', 'JPEG'],
        maxSizeMb: 1,
        validityFreshness: 'Valid government ID'
      },
      {
        id: 'doc-address-proof',
        name: 'Proof of Current Address',
        description: 'Aadhaar Card, Electricity Bill, Registered Rental Agreement, or Voter ID matching current RTO jurisdiction.',
        isMandatory: true,
        acceptedFormats: ['PDF', 'JPEG'],
        maxSizeMb: 1,
        validityFreshness: 'Utility bills within last 2 months'
      },
      {
        id: 'doc-form1',
        name: 'Form 1 (Self-Declaration of Physical Fitness)',
        description: 'Online digital self-declaration completed inside Parivahan portal.',
        isMandatory: true
      },
      {
        id: 'doc-form1a',
        name: 'Form 1A (Medical Certificate by Registered Doctor)',
        description: 'Mandatory if applicant is aged 40+ or applying for commercial/transport endorsement.',
        isMandatory: false,
        conditionalNote: 'Required only if applicant is 40+ years old or has noted visual/physical impairments.'
      },
      {
        id: 'doc-photo-sign',
        name: 'Passport Photo and Signature Scan',
        description: 'Clear front-facing passport photo and legible signature in blue/black ink.',
        isMandatory: true,
        acceptedFormats: ['JPEG'],
        maxSizeMb: 0.5
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Check Eligibility & Select RTO Jurisdiction',
        description: 'Verify age criteria (18 for cars/geared bikes) and determine your local RTO based on residential address.',
        estimatedDuration: '10 Minutes'
      },
      {
        stepNumber: 2,
        title: 'Fill Application on Parivahan Sarathi',
        description: 'Visit parivahan.gov.in > Driving Licence Related Services > Select State > Apply for Learner Licence.',
        officialPortalUrl: 'https://parivahan.gov.in/parivahan//en/content/driving-licence-related-services',
        actionHint: 'Choose Aadhaar-based e-KYC for instant paperless submission without physical RTO visit in eligible states.'
      },
      {
        stepNumber: 3,
        title: 'Upload Documents & Photograph',
        description: 'Upload clear scans of Age Proof, Address Proof, and signature as per size specifications.',
        estimatedDuration: '15 Minutes'
      },
      {
        stepNumber: 4,
        title: 'Pay Official Government Fee',
        description: 'Pay ₹200 (for single class) or ₹350 (for both bike & car) online via Bharatkosh / state treasury gateway.',
        actionHint: 'Download the payment receipt and Form 2 acknowledging fee submission.'
      },
      {
        stepNumber: 5,
        title: 'Take Online Road Safety & Signs Test',
        description: 'Complete the 10-15 question online test on traffic signs, road markings, and driving rules.',
        actionHint: 'In non-Aadhaar states, book an in-person slot at the RTO to attend the computer test.'
      },
      {
        stepNumber: 6,
        title: 'Download Digital Learner Licence',
        description: 'Upon passing, download your authentic digital LLR certificate with QR code directly from Parivahan or DigiLocker.',
        estimatedDuration: 'Immediate'
      }
    ],
    sources: [
      {
        name: 'Parivahan Sarathi Official Portal',
        url: 'https://parivahan.gov.in/',
        type: 'Application Portal',
        department: 'MoRTH, Government of India',
        lastCheckedDate: '2026-10-15',
        isOfficialGovDomain: true
      },
      {
        name: 'Motor Vehicles Act 1988 Gazette',
        url: 'https://morth.nic.in/motor-vehicles-act-1988',
        type: 'Official Gazette / Act',
        department: 'Ministry of Road Transport and Highways',
        lastCheckedDate: '2026-10-01',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Can I drive alone on the highway with a Learner Licence?',
        answer: 'No. Driving alone is strictly prohibited under Rule 3 of CMVR 1989. You must have a qualified permanent licence holder sitting beside you, and display "L" plates on both front and rear.'
      },
      {
        question: 'How soon can I apply for a permanent driving licence after getting my LLR?',
        answer: 'You can apply for the permanent licence test after 30 days from the date of LLR issue, and within 180 days (6 months).'
      },
      {
        question: 'Is the learner licence valid throughout India?',
        answer: 'Yes, a Learner Licence issued by any state RTO is valid across all Indian states and Union Territories for 6 months.'
      }
    ],
    relatedLicenceIds: ['permanent-driving-licence', 'commercial-driving-licence', 'driving-licence-renewal'],
    verificationStatus: 'Verified',
    verifiedBy: 'Legal Research & Transport Specialist',
    lastVerifiedDate: '2026-10-20',
    isPopular: true
  },
  {
    id: 'permanent-driving-licence',
    slug: 'permanent-driving-licence',
    name: 'Permanent Driving Licence (DL)',
    aliases: ['Driving License', 'Pakka DL', 'Driver Licence', 'Smart Card DL', 'Permanent DL'],
    category: 'transport-driving',
    categoryLabel: 'Transport and Driving',
    tagline: 'Official legal document granting authorization to operate motor vehicles independently across India.',
    overview: 'The Permanent Driving Licence is an official document issued by the Regional Transport Office (RTO) confirming that an individual has undergone training, passed the mandatory practical driving competence test, and is certified to operate specified motor vehicle categories on Indian public roads.',
    whatItAllows: [
      'Drive motor vehicles of authorized categories (MCWG, LMV) anywhere in India independently.',
      'Acts as valid government photo ID and address proof across public and private institutions.',
      'Enables qualification for applying for an International Driving Permit (IDP) for foreign travel.'
    ],
    whoNeedsIt: [
      'Anyone who has held a valid Learner Licence for at least 30 days and wishes to drive motor vehicles legally on Indian roads.'
    ],
    whoIsExempt: [
      'None. Operating any motor vehicle without a valid driving licence is punishable under Section 181 of the Motor Vehicles Act with fines up to ₹5,000 and/or imprisonment.'
    ],
    eligibilityCriteria: [
      'Must have held a valid Learner Licence for a minimum of 30 days and not more than 180 days.',
      'Must appear and pass the practical driving test on the designated automated or manual driving track at the RTO.',
      'Must possess basic understanding of vehicle controls, reverse parking, and road signs.'
    ],
    applicantTypes: ['Individual'],
    activitiesCovered: ['Independent vehicle operation', 'Personal transit'],
    jurisdiction: 'Central',
    issuingAuthority: 'Regional Transport Office (RTO) / Motor Vehicles Department',
    governingMinistry: 'Ministry of Road Transport and Highways (MoRTH)',
    relevantLegislation: 'Motor Vehicles Act, 1988 (Section 9) & CMVR 1989',
    applicationMode: 'Online & Offline (Hybrid)',
    officialApplicationUrl: 'https://parivahan.gov.in/parivahan//en/content/driving-licence-related-services',
    officialInfoUrl: 'https://parivahan.gov.in/',
    governmentFees: {
      summary: '₹700 to ₹1,000 depending on number of vehicle classes and smart card dispatch charge.',
      items: [
        { particular: 'Driving Test Fee (per vehicle class)', amount: '₹300' },
        { particular: 'Issue of Driving Licence (Form 7 Smart Card / PVC)', amount: '₹200' },
        { particular: 'Postal Speed Post delivery charge', amount: '₹50' }
      ]
    },
    processingTimeEstimate: 'Test slot on scheduled date; digital DL issued within 3-7 days, physical Smart Card dispatched via Speed Post in 15-20 days.',
    validityPeriod: 'Valid for 20 years from the date of issue or until the holder attains 40 years of age (whichever is earlier). For applicants between 40-50, valid for 10 years; between 50-55, valid until age 60; above 55, valid for 5 years.',
    renewalRequirements: {
      leadTime: 'Can be renewed up to 1 year prior to expiry, or within 1 year after expiry without re-testing.',
      procedure: 'Submit renewal application on Parivahan Sarathi with Form 1A medical certificate if applicant is over 40 years.',
      penaltyForDelay: 'Late fee of ₹1,000 per year of delay applies if renewed after 1 year of expiry.'
    },
    inspectionRequirements: 'Mandatory practical driving test conducted on the RTO test track (including figure-of-eight, reverse S-bend, and gradient stop-start).',
    modificationAndTransfer: 'Address change or endorsement of additional vehicle class can be applied online with proof and fee of ₹300-₹500.',
    commonRejectionReasons: [
      'Failing the automated driving test (touching boundary markers or stalling on the gradient ramp).',
      'Arriving for test in a vehicle lacking valid insurance, pollution certificate (PUCC), or fitness certificate.',
      'Applying before the mandatory 30-day waiting period from Learner Licence issuance.',
      'Discrepancies in biometric finger/iris verification.'
    ],
    requiredDocuments: [
      {
        id: 'doc-valid-llr',
        name: 'Valid Learner Licence',
        description: 'Original active LLR certificate (at least 30 days old and within 180 days validity).',
        isMandatory: true
      },
      {
        id: 'doc-application-form',
        name: 'Form 2 (Application for Driving Licence)',
        description: 'Generated automatically from Parivahan Sarathi after online submission.',
        isMandatory: true
      },
      {
        id: 'doc-test-vehicle-rc',
        name: 'Test Vehicle Documents (RC, Insurance, PUCC)',
        description: 'Original Registration Certificate, valid Insurance policy, and active PUC certificate for the vehicle brought for testing.',
        isMandatory: true
      },
      {
        id: 'doc-form5',
        name: 'Form 5 (Driving School Certificate)',
        description: 'Mandatory for commercial/transport vehicle categories; optional for non-transport private LMV.',
        isMandatory: false,
        conditionalNote: 'Required only if trained through an accredited driving training school or applying for transport endorsement.'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Verify 30-Day LLR Maturity',
        description: 'Ensure at least 30 days have elapsed since your Learner Licence was issued and that it has not expired.',
        actionHint: 'Check your LLR issue date on DigiLocker or Parivahan.'
      },
      {
        stepNumber: 2,
        title: 'Book DL Test Slot on Parivahan',
        description: 'Log in to Parivahan Sarathi > Select "Appointments" > "Slot Booking for DL Test" and pick an available date and time slot.',
        officialPortalUrl: 'https://parivahan.gov.in/parivahan//en/content/driving-licence-related-services'
      },
      {
        stepNumber: 3,
        title: 'Pay Government Driving Test & Smart Card Fee',
        description: 'Complete fee payment of ₹700 (LMV + MCWG) via online gateway and print the appointment confirmation slip.',
        estimatedDuration: '10 Minutes'
      },
      {
        stepNumber: 4,
        title: 'Appear for Practical Driving Test at RTO',
        description: 'Arrive at the RTO test facility with your vehicle, vehicle documents, LLR, and appointment slip. Perform the automated driving track maneuvers.',
        estimatedDuration: '2-3 Hours on test day'
      },
      {
        stepNumber: 5,
        title: 'Biometrics & Officer Endorsement',
        description: 'Upon passing the driving test, provide digital signature and photograph at the RTO capture counter.',
        actionHint: 'Officer enters pass remarks into the Parivahan database immediately.'
      },
      {
        stepNumber: 6,
        title: 'Receive Digital & Physical Smart Card DL',
        description: 'Digital DL appears on DigiLocker and mParivahan within 48 hours. Physical Smart Card DL is dispatched to your registered address via Speed Post.',
        estimatedDuration: '10-20 Days delivery'
      }
    ],
    sources: [
      {
        name: 'Parivahan Sarathi DL Portal',
        url: 'https://parivahan.gov.in/',
        type: 'Application Portal',
        department: 'MoRTH, Government of India',
        lastCheckedDate: '2026-10-18',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'What happens if I fail the driving test?',
        answer: 'You can re-appear for the driving test after a mandatory 7-day waiting period by paying a nominal re-test fee (usually ₹300) and booking a new slot.'
      },
      {
        question: 'Can I show my Driving Licence on DigiLocker or mParivahan to traffic police?',
        answer: 'Yes. As per MoRTH notification RT-11036/64/2017-MVL, electronic driving licences stored in DigiLocker or mParivahan are legally recognized as equivalent to physical cards by traffic police across India.'
      }
    ],
    relatedLicenceIds: ['learners-driving-licence', 'driving-licence-renewal', 'commercial-driving-licence', 'international-driving-permit'],
    verificationStatus: 'Verified',
    verifiedBy: 'Legal Research & Transport Specialist',
    lastVerifiedDate: '2026-10-22',
    isPopular: true
  },
  {
    id: 'fssai-basic-registration',
    slug: 'fssai-basic-registration',
    name: 'FSSAI Basic Food Registration',
    aliases: ['FSSAI Registration', 'Petty Food Registration', 'Food License', 'FoSCoS Registration', 'FSSAI Certificate'],
    category: 'food-restaurant',
    categoryLabel: 'Food and Restaurant Business',
    tagline: 'Mandatory food safety registration for petty food manufacturers, small food stalls, cloud kitchens, and home-based food businesses.',
    overview: 'The FSSAI Basic Registration is a 14-digit statutory registration number issued by the Food Safety and Standards Authority of India (FSSAI) under the Food Safety and Standards (Licensing and Registration of Food Businesses) Regulations, 2011. It is mandatory for all petty food business operators (FBOs) with an annual turnover up to ₹12 Lakh.',
    whatItAllows: [
      'Manufacture, prepare, package, store, distribute, or sell food items legally in India.',
      'Operate small eateries, food stalls, juice counters, home bakeries, tiffin services, and temporary food stalls.',
      'List on digital food delivery platforms like Swiggy and Zomato (subject to platform partner guidelines).'
    ],
    whoNeedsIt: [
      'Any Food Business Operator (FBO) with annual turnover not exceeding ₹12 Lakh (₹1,200,000).',
      'Hawkers, itinerant vendors, temporary stall holders, and small cottage food producers.',
      'Home bakers and small cloud kitchens operating within the ₹12 Lakh annual limit.',
      'Petty retailers selling packaged snacks and food provisions.'
    ],
    whoIsExempt: [
      'Individual home cooks preparing food for private domestic consumption without sale.',
      'Religious gatherings or social functions distributing non-commercial prasadam.'
    ],
    eligibilityCriteria: [
      'Annual business turnover must not exceed ₹12 Lakh.',
      'Production capacity of food (other than milk and meat) up to 100 kg/litres per day.',
      'Procurement, handling, and collection of milk up to 500 litres per day.',
      'Slaughtering capacity of up to 2 large animals, 10 small animals, or 50 poultry birds per day.'
    ],
    applicantTypes: ['Individual', 'Sole Proprietorship', 'Partnership', 'Co-operative / NGO'],
    activitiesCovered: ['Food retail', 'Home baking', 'Small stall operation', 'Tiffin services', 'Petty manufacturing'],
    jurisdiction: 'Central',
    issuingAuthority: 'Food Safety and Standards Authority of India (FSSAI) / Designated Officer',
    governingMinistry: 'Ministry of Health and Family Welfare',
    relevantLegislation: 'Food Safety and Standards Act, 2006 & Food Safety and Standards (Licensing and Registration) Regulations, 2011',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://foscos.fssai.gov.in/',
    officialInfoUrl: 'https://www.fssai.gov.in/',
    governmentFees: {
      summary: '₹100 per year of registration validity (1 to 5 years selected during application).',
      items: [
        { particular: 'Government fee for 1 year validity', amount: '₹100' },
        { particular: 'Government fee for 3 years validity', amount: '₹300' },
        { particular: 'Government fee for 5 years validity', amount: '₹500' }
      ],
      professionalFeeNote: 'Consultants charge ₹1,000 - ₹2,500, but filing directly on FoSCoS takes under 20 minutes for ₹100/yr.'
    },
    processingTimeEstimate: '7 to 15 Working Days (instant or automated registration applies for select non-sensitive categories).',
    validityPeriod: '1 to 5 Years (chosen by applicant at time of submission).',
    renewalRequirements: {
      leadTime: 'Must apply for renewal at least 30 days prior to expiry date on FoSCoS.',
      procedure: 'Log in to FoSCoS > "Renewal" > Enter 14-digit registration number > Pay fee.',
      penaltyForDelay: 'A late fee of ₹100 per day is levied if renewal is filed within 30 days of expiry. Once expired, a fresh registration is mandatory.'
    },
    inspectionRequirements: 'Generally issued without prior inspection for petty businesses; however, Food Safety Officers (FSO) may conduct periodic post-issuance surveillance audits.',
    modificationAndTransfer: 'Modification can be filed on FoSCoS for ₹100 if business address or contact details change.',
    commonRejectionReasons: [
      'Premises address proof does not match electricity bill or rental agreement.',
      'Blurry photo of the food business operator.',
      'Mismatch in declared turnover capacity vs business scope.',
      'Failure to respond within 30 days to queries raised by the Designated Officer on FoSCoS.'
    ],
    requiredDocuments: [
      {
        id: 'doc-fssai-photo',
        name: 'Passport Size Photograph of FBO',
        description: 'Clear front-facing color photo of the proprietor or designated partner.',
        isMandatory: true,
        acceptedFormats: ['JPEG', 'PNG'],
        maxSizeMb: 1
      },
      {
        id: 'doc-fssai-id',
        name: 'Government Photo ID Proof',
        description: 'Aadhaar Card, PAN Card, Voter ID, or Passport of the applicant.',
        isMandatory: true,
        acceptedFormats: ['PDF', 'JPEG'],
        maxSizeMb: 2
      },
      {
        id: 'doc-fssai-address',
        name: 'Proof of Business Premises Possession',
        description: 'Electricity Bill, Property Tax Receipt, or Registered Rental Agreement with NOC from owner.',
        isMandatory: true,
        acceptedFormats: ['PDF'],
        maxSizeMb: 3,
        validityFreshness: 'Utility bill not older than 3 months'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Verify Turnover Limit (<= ₹12 Lakh)',
        description: 'Ensure your annual gross sales do not exceed ₹12,00,000. If above this threshold, you must apply for an FSSAI State Licence instead.',
        actionHint: 'FoSCoS will auto-prompt you to upgrade if you declare higher processing volumes.'
      },
      {
        stepNumber: 2,
        title: 'Open FoSCoS Official Portal',
        description: 'Navigate to https://foscos.fssai.gov.in/ and click "Apply for New Registration/License".',
        officialPortalUrl: 'https://foscos.fssai.gov.in/'
      },
      {
        stepNumber: 3,
        title: 'Select State and Food Kind of Business (KoB)',
        description: 'Select your state and choose your primary business activity (e.g., Food Services > Restaurants / Hawkers / Cloud Kitchen).',
        estimatedDuration: '5 Minutes'
      },
      {
        stepNumber: 4,
        title: 'Complete Form A Online',
        description: 'Fill business name, operational address, contact details, number of years validity desired (1-5 years), and food categories handled.',
        estimatedDuration: '15 Minutes'
      },
      {
        stepNumber: 5,
        title: 'Upload Photo and Address Proof',
        description: 'Attach photo ID and property possession document (electricity bill or rental agreement).',
        actionHint: 'Ensure files are below 3 MB in PDF or JPEG format.'
      },
      {
        stepNumber: 6,
        title: 'Pay Official Government Fee',
        description: 'Pay ₹100 per year (e.g., ₹500 for 5-year registration) using UPI, NetBanking, or Debit Card via the Bharatkosh gateway.',
        actionHint: 'Note down your 17-digit FoSCoS Application Reference Number.'
      },
      {
        stepNumber: 7,
        title: 'Download 14-Digit FSSAI Certificate',
        description: 'Track status on FoSCoS. Once approved by the Registering Authority, download the Form C certificate displaying your 14-digit registration number.',
        estimatedDuration: '7-15 Days'
      }
    ],
    sources: [
      {
        name: 'FoSCoS FSSAI Official Application System',
        url: 'https://foscos.fssai.gov.in/',
        type: 'Application Portal',
        department: 'FSSAI, Ministry of Health and Family Welfare',
        lastCheckedDate: '2026-10-18',
        isOfficialGovDomain: true
      },
      {
        name: 'FSSAI Food Safety Standards Regulations',
        url: 'https://www.fssai.gov.in/',
        type: 'Department Website',
        department: 'FSSAI',
        lastCheckedDate: '2026-10-10',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Is FSSAI registration mandatory for a home kitchen or home baker?',
        answer: 'Yes. Even if you bake or prepare food from home and sell through social media or delivery apps, an FSSAI Basic Registration (₹100/yr) is mandatory under the Food Safety Act.'
      },
      {
        question: 'Where must I display my FSSAI number?',
        answer: 'Under FSSAI guidelines, the 14-digit registration number must be prominently displayed on food packaging, invoices/cash receipts, and on the entrance signboard of the food establishment.'
      }
    ],
    relatedLicenceIds: ['fssai-state-licence', 'fssai-central-licence', 'municipal-trade-licence', 'shop-and-establishment-registration'],
    verificationStatus: 'Verified',
    verifiedBy: 'Food Safety Regulatory Consultant',
    lastVerifiedDate: '2026-10-21',
    isPopular: true
  },
  {
    id: 'fssai-state-licence',
    slug: 'fssai-state-licence',
    name: 'FSSAI State Food Licence',
    aliases: ['FSSAI State License', 'FoSCoS State License', 'Medium Food Business License', 'Restaurant Food License'],
    category: 'food-restaurant',
    categoryLabel: 'Food and Restaurant Business',
    tagline: 'Comprehensive statutory licence for medium food business operators with annual turnover between ₹12 Lakh and ₹20 Crore.',
    overview: 'The FSSAI State Licence is granted by the State Food Safety and Drug Administration authority to mid-sized food businesses, full-scale restaurants, hotels, distributors, food processors, and caterers operating within a single state with turnover between ₹12 Lakh and ₹20 Crore.',
    whatItAllows: [
      'Operate commercial restaurants, multi-cuisine dining outlets, banquet halls, and commercial catering kitchens.',
      'Manufacture and process packaged food products up to state capacity limits (up to 2 Metric Tonnes per day).',
      'Engage in wholesale storage and distribution of food products within the state.'
    ],
    whoNeedsIt: [
      'Food establishments with turnover exceeding ₹12 Lakh and up to ₹20 Crore per year.',
      'Restaurants with 3-star and 4-star ratings or air-conditioned dining seating.',
      'Caterers serving large gatherings or institutional canteens.',
      'Dairy units handling between 501 and 50,000 litres of milk per day.'
    ],
    whoIsExempt: [
      'Petty food vendors with turnover <= ₹12 Lakh (who qualify for Basic Registration).',
      'Food businesses with turnover > ₹20 Crore or multi-state operations (who require Central Licence).'
    ],
    eligibilityCriteria: [
      'Annual business turnover between ₹12 Lakh and ₹20 Crore.',
      'Premises must meet Schedule 4 hygienic and sanitary guidelines under FSSAI.',
      'Food manufacturing capacity between 101 kg/litres/day up to 2 Metric Tonnes/day.'
    ],
    applicantTypes: ['Sole Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Public Limited'],
    activitiesCovered: ['Dine-in restaurant', 'Commercial catering', 'Food processing', 'Food wholesaling'],
    jurisdiction: 'State',
    issuingAuthority: 'Designated Officer, State Food Safety and Standards Authority',
    governingMinistry: 'Ministry of Health and Family Welfare (State Administration)',
    relevantLegislation: 'FSS Act 2006, Licensing and Registration Regulations 2011 (Schedule 4)',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://foscos.fssai.gov.in/',
    officialInfoUrl: 'https://www.fssai.gov.in/',
    governmentFees: {
      summary: '₹2,000 to ₹5,000 per year depending on business sub-category and scale.',
      items: [
        { particular: 'Restaurants, hotels, food service providers (per year)', amount: '₹2,000' },
        { particular: 'Manufacturing and processing units (per year)', amount: '₹3,000 - ₹5,000' }
      ]
    },
    processingTimeEstimate: '30 to 45 Days (includes physical inspection of commercial kitchen/facility by Food Safety Officer).',
    validityPeriod: '1 to 5 Years.',
    renewalRequirements: {
      leadTime: 'Apply for renewal at least 30 days before expiry date on FoSCoS.',
      procedure: 'Renewal via FoSCoS portal with latest self-compliance checklist and annual return (Form D1).',
      penaltyForDelay: '₹100 per day late fee during the 30-day grace window.'
    },
    inspectionRequirements: 'Mandatory pre-licensing inspection of premises by the local Food Safety Officer (FSO) verifying kitchen ventilation, pest control, water potability test, and waste disposal.',
    modificationAndTransfer: 'Modification requires filing Form B on FoSCoS with ₹1,000 fee and supporting partnership deed or board resolution.',
    commonRejectionReasons: [
      'Missing potable water test report from a NABL-accredited laboratory.',
      'Lack of proper grease traps or inadequate kitchen drainage system.',
      'Absence of Food Safety Management System (FSMS) plan or plan of premises layout.',
      'Failure to rectify inspection queries within prescribed 30 days.'
    ],
    requiredDocuments: [
      {
        id: 'doc-layout-plan',
        name: 'Blueprint / Layout Plan of Premises',
        description: 'Architectural or dimensioned layout showing food preparation areas, wash areas, and storage.',
        isMandatory: true,
        acceptedFormats: ['PDF'],
        maxSizeMb: 5
      },
      {
        id: 'doc-water-test',
        name: 'Water Analysis Report (Potability)',
        description: 'Test report from a NABL-accredited or public health lab confirming water conforms to IS 10500 standards.',
        isMandatory: true,
        acceptedFormats: ['PDF'],
        maxSizeMb: 3,
        validityFreshness: 'Issued within last 6 months'
      },
      {
        id: 'doc-list-equipment',
        name: 'List of Equipment and Machinery',
        description: 'Inventory of kitchen cooking equipment, refrigeration units, and storage capacities.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-fsms-plan',
        name: 'FSMS Plan / Declaration',
        description: 'Food Safety Management System plan or affidavit outlining hygiene monitoring procedures.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-constitution',
        name: 'Proof of Business Constitution',
        description: 'Partnership Deed, MOA/AOA with Certificate of Incorporation, or GST certificate.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Assemble Hygiene & Premises Prerequisites',
        description: 'Ensure kitchen setup complies with Schedule 4 hygiene norms. Get drinking water tested at a NABL-accredited laboratory.',
        estimatedDuration: '5-7 Days'
      },
      {
        stepNumber: 2,
        title: 'Log in to FoSCoS and Initiate Form B',
        description: 'Select State Licence on https://foscos.fssai.gov.in/ and select your specific Kind of Business (e.g. Restaurants, Food Processing).',
        officialPortalUrl: 'https://foscos.fssai.gov.in/'
      },
      {
        stepNumber: 3,
        title: 'Upload Mandatory Technical Documents',
        description: 'Upload Water Test Report, Layout Plan, List of Directors/Partners, FSMS declaration, and premises proof.',
        estimatedDuration: '30 Minutes'
      },
      {
        stepNumber: 4,
        title: 'Pay Government Licence Fee',
        description: 'Pay ₹2,000 to ₹5,000 per year of validity via online payment gateway.',
        actionHint: 'Save the generated 17-digit application ARN.'
      },
      {
        stepNumber: 5,
        title: 'Food Safety Officer (FSO) Physical Inspection',
        description: 'The local FSO schedules an on-site visit to inspect kitchen cleanliness, pest control contracts, staff health cards, and storage separation.',
        estimatedDuration: 'Within 15-20 Days of filing'
      },
      {
        stepNumber: 6,
        title: 'Approval & Form C Licence Issuance',
        description: 'Following satisfactory inspection and query resolution, Designated Officer grants the 14-digit State Food Licence certificate.',
        estimatedDuration: '30-45 Days total'
      }
    ],
    sources: [
      {
        name: 'FoSCoS Official Licensing Portal',
        url: 'https://foscos.fssai.gov.in/',
        type: 'Application Portal',
        department: 'FSSAI, Ministry of Health and Family Welfare',
        lastCheckedDate: '2026-10-18',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Do all restaurant cooks and food handlers need medical fitness certificates?',
        answer: 'Yes. Under FSSAI Schedule 4 regulations, all food handlers must have a medical fitness certificate (Form 16) issued by a registered medical practitioner and be free of infectious skin, eye, or respiratory illnesses.'
      }
    ],
    relatedLicenceIds: ['fssai-basic-registration', 'fssai-central-licence', 'municipal-trade-licence', 'fire-safety-noc'],
    verificationStatus: 'Verified',
    verifiedBy: 'Food Safety Regulatory Consultant',
    lastVerifiedDate: '2026-10-21',
    isPopular: true
  },
  {
    id: 'fssai-central-licence',
    slug: 'fssai-central-licence',
    name: 'FSSAI Central Food Licence',
    aliases: ['Central Food License', 'FSSAI Central', 'Export Food License', 'Large Food Manufacturer License'],
    category: 'food-restaurant',
    categoryLabel: 'Food and Restaurant Business',
    tagline: 'Mandatory central licence for large-scale food processors, importers, exporters, and multi-state food businesses.',
    overview: 'The FSSAI Central Licence is granted directly by the central headquarters/regional offices of FSSAI to large-scale food manufacturing operations with annual turnover exceeding ₹20 Crore, multi-state food chains with a head office, 100% export-oriented units (EOUs), food importers, and establishments located on central government premises (airports, seaports, railways, defence).',
    whatItAllows: [
      'Operate large-scale food manufacturing and dairy processing units exceeding 2 Metric Tonnes per day.',
      'Import food ingredients and packaged foods into India through designated customs ports.',
      'Operate multi-state restaurant and retail franchise networks under a consolidated Central Head Office licence.',
      'Catering on central government properties including railways, airports, and military cantonments.'
    ],
    whoNeedsIt: [
      'Food businesses with annual turnover exceeding ₹20 Crore (₹200 Million).',
      'Food importers holding an Import Export Code (IEC).',
      'Proprietary food manufacturers and novel food developers.',
      'Food businesses operating in two or more states requiring a Head Office Central Licence.'
    ],
    whoIsExempt: [
      'Businesses operating strictly in one state with turnover below ₹20 Crore.'
    ],
    eligibilityCriteria: [
      'Turnover > ₹20 Crore or operations spanning multiple Indian states.',
      'Dairy processing capacity > 50,000 litres of liquid milk/day or > 2,500 MT of milk solids per annum.',
      'Meat processing > 50 large animals, 150 small animals, or 1,000 poultry birds per day.'
    ],
    applicantTypes: ['LLP', 'Private Limited', 'Public Limited', 'Co-operative / NGO'],
    activitiesCovered: ['Large food manufacturing', 'Food import', 'Food export', 'Multi-state chain management'],
    jurisdiction: 'Central',
    issuingAuthority: 'Central Licensing Authority (CLA), Food Safety and Standards Authority of India',
    governingMinistry: 'Ministry of Health and Family Welfare',
    relevantLegislation: 'FSS Act 2006 & Central Licensing Regulations',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://foscos.fssai.gov.in/',
    officialInfoUrl: 'https://www.fssai.gov.in/',
    governmentFees: {
      summary: '₹7,500 per year of validity.',
      items: [
        { particular: 'Standard Central Licence application fee (per year)', amount: '₹7,500' }
      ]
    },
    processingTimeEstimate: '30 to 60 Days.',
    validityPeriod: '1 to 5 Years.',
    renewalRequirements: {
      leadTime: 'Must apply for renewal at least 30 days prior to expiry on FoSCoS.',
      procedure: 'Online submission on FoSCoS with mandatory annual return (Form D1) and audited food financials.',
      penaltyForDelay: '₹100 per day penalty within the 30-day grace period.'
    },
    inspectionRequirements: 'Rigorous pre-licensing inspection by Central Food Safety Officers inspecting HACCP/ISO 22000 implementations, automated clean-in-place (CIP) systems, and laboratory testing equipment.',
    modificationAndTransfer: 'Form B online with ₹1,000 fee and supporting board resolution.',
    commonRejectionReasons: [
      'Inadequate in-house testing laboratory or missing qualified chemist/microbiologist.',
      'Missing DGFT IEC certificate for food import category.',
      'Non-compliance with FSSAI packaging and labeling regulations for proprietary food items.'
    ],
    requiredDocuments: [
      {
        id: 'doc-iec-cert',
        name: 'DGFT Import Export Code (IEC)',
        description: 'Mandatory for food import and export categories.',
        isMandatory: false,
        conditionalNote: 'Required if importing or exporting food items.'
      },
      {
        id: 'doc-blueprint-central',
        name: 'Detailed Plant Layout and Machinery Blueprint',
        description: 'Dimensioned engineering drawing showing raw material intake, processing zones, and packaging lines.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-technical-staff',
        name: 'Qualifications of Technical Personnel in Charge',
        description: 'Degrees and experience certificates of Food Technologists, Chemists, and Microbiologists.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-water-report-central',
        name: 'Comprehensive NABL Water Potability Test Report',
        description: 'Full chemical and microbiological analysis as per IS 10500 standards.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Confirm Central Eligibility Criteria',
        description: 'Verify turnover exceeds ₹20 Crore or business involves food imports or multi-state retail chains.',
        actionHint: 'Gather corporate incorporation certificates and audited balance sheets.'
      },
      {
        stepNumber: 2,
        title: 'Filing on FoSCoS Central Portal',
        description: 'Choose "Central License" on https://foscos.fssai.gov.in/ and select designated Kind of Business.',
        officialPortalUrl: 'https://foscos.fssai.gov.in/'
      },
      {
        stepNumber: 3,
        title: 'Upload Corporate & Technical Documents',
        description: 'Upload Plant Blueprint, FSMS certification (ISO 22000/HACCP where applicable), Technical Staff credentials, and Water analysis.',
        estimatedDuration: '1 Hour'
      },
      {
        stepNumber: 4,
        title: 'Remit Central Fee of ₹7,500/Year',
        description: 'Pay statutory fee through online treasury gateway.',
        estimatedDuration: '10 Minutes'
      },
      {
        stepNumber: 5,
        title: 'Central Food Safety Inspection & Clearance',
        description: 'Central designated inspection team conducts plant audit. Respond to any notice or compliance advisory within 30 days.',
        estimatedDuration: '20-30 Days'
      },
      {
        stepNumber: 6,
        title: 'Download Central FSSAI License',
        description: 'Download the issued 14-digit Central Food Licence certificate.',
        estimatedDuration: '30-60 Days total'
      }
    ],
    sources: [
      {
        name: 'FoSCoS Central Licensing System',
        url: 'https://foscos.fssai.gov.in/',
        type: 'Application Portal',
        department: 'FSSAI',
        lastCheckedDate: '2026-10-18',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'If I operate cloud kitchens in Bengaluru, Mumbai, and Delhi, do I need a Central Licence?',
        answer: 'Yes. Multi-state food brands require one Central Licence for their corporate Head Office, while each individual kitchen or outlet maintains its own local State Licence or Basic Registration based on individual outlet turnover.'
      }
    ],
    relatedLicenceIds: ['fssai-state-licence', 'fssai-basic-registration', 'import-export-code'],
    verificationStatus: 'Verified',
    verifiedBy: 'Food Safety Regulatory Consultant',
    lastVerifiedDate: '2026-10-21',
    isPopular: false
  },
  {
    id: 'shop-and-establishment-registration',
    slug: 'shop-and-establishment-registration',
    name: 'Shop and Establishment Registration',
    aliases: ['Gumasta License', 'Shop Act License', 'Trade Certificate', 'Labor Registration', 'e-Karmika (Karnataka)', 'Labour Card'],
    category: 'business-trade',
    categoryLabel: 'Business and Trade',
    tagline: 'Fundamental state labour registration required for every commercial shop, office, software startup, and business premises.',
    overview: 'The Shop and Establishment Registration is a statutory certificate issued by the state Department of Labour under the respective state Shop and Commercial Establishments Act (e.g. Karnataka Shops & Commercial Establishments Act, 1961; Maharashtra Shops & Establishments Act, 2017). It regulates conditions of work, employee working hours, wages, leaves, holidays, and health standards.',
    whatItAllows: [
      'Lawfully operate a physical commercial shop, office, software company, clinic, or service establishment.',
      'Open a Current Bank Account in the name of the business entity with any scheduled commercial bank in India.',
      'Acts as fundamental proof of business premises and operational commencement for state and municipal purposes.'
    ],
    whoNeedsIt: [
      'Every retail shop, wholesale depot, commercial office, restaurant, hotel, IT/software firm, salon, and consulting firm.',
      'Freelancers or sole proprietors operating from a dedicated physical office or co-working space.',
      'Must be applied for within 30 days of commencing commercial business operations.'
    ],
    whoIsExempt: [
      'Factories covered separately under the Factories Act, 1948.',
      'Offices of Central and State Governments, Reserve Bank of India, and local authorities.',
      'Purely non-commercial domestic establishments without employees or public commercial transactions.'
    ],
    eligibilityCriteria: [
      'Must possess a dedicated physical commercial or residential-commercial premises.',
      'Application must be submitted within 30 days of business commencement in the state.'
    ],
    applicantTypes: ['Sole Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Public Limited'],
    activitiesCovered: ['Retail commerce', 'Professional office', 'Consulting', 'Software development', 'Hospitality'],
    jurisdiction: 'State',
    issuingAuthority: 'Department of Labour (Labour Inspector of the designated circle)',
    governingMinistry: 'Ministry of Labour & Employment (State Government)',
    relevantLegislation: 'State Shops and Commercial Establishments Act (e.g., Karnataka Act 8 of 1962, Maharashtra Act LXI of 2017)',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://sevasindhu.karnataka.gov.in/',
    officialInfoUrl: 'https://labour.gov.in/',
    governmentFees: {
      summary: '₹300 to ₹10,000 depending on state tariff and the total number of employees employed.',
      items: [
        { particular: '0 to 9 employees (Karnataka e-Karmika)', amount: '₹300' },
        { particular: '10 to 19 employees', amount: '₹600' },
        { particular: '20 to 49 employees', amount: '₹1,500' },
        { particular: '50 to 99 employees', amount: '₹3,000' },
        { particular: '100+ employees', amount: '₹5,000+' }
      ]
    },
    processingTimeEstimate: '7 to 15 Working Days (Instant automated certificate in Maharashtra under 10 employees; 7-10 days in Karnataka via e-Karmika).',
    validityPeriod: 'Lifetime in several modernized states (e.g. Maharashtra, Delhi); 5 years in Karnataka (requires 5-yearly renewal).',
    renewalRequirements: {
      leadTime: 'Must apply for renewal 30 days before the 5-year expiration in states with periodic renewal.',
      procedure: 'Online renewal via state labour portal (e-Karmika in Karnataka) by paying applicable employee-slab fee.',
      penaltyForDelay: 'Interest or penalty up to 25% of registration fee for late filing.'
    },
    inspectionRequirements: 'Routine inspections are rare for micro-establishments; labour inspectors may inspect records of employee attendance, wages, and maternity benefits during dispute checks.',
    modificationAndTransfer: 'Can update employee counts, address, or partners online with ₹150 - ₹500 fee.',
    commonRejectionReasons: [
      'Rental agreement does not specify commercial use permission or lacks landlord signature.',
      'Missing exact count of male and female employees.',
      'Premises address does not match electricity bill provided.',
      'Filing after 30 days of commencement without explaining delay.'
    ],
    requiredDocuments: [
      {
        id: 'doc-shop-pan',
        name: 'PAN Card of Applicant / Firm',
        description: 'Personal PAN of proprietor or Company/LLP PAN card.',
        isMandatory: true,
        acceptedFormats: ['PDF', 'JPEG']
      },
      {
        id: 'doc-shop-address',
        name: 'Commercial Premises Proof (Rent Agreement / Electricity Bill)',
        description: 'Registered rental agreement along with electricity bill or property tax receipt of the premises.',
        isMandatory: true,
        acceptedFormats: ['PDF'],
        maxSizeMb: 4
      },
      {
        id: 'doc-shop-board',
        name: 'Photo of Business Name Board (Displaying Name in State Language)',
        description: 'Photograph of the establishment entrance showing the trade name (in Kannada for Karnataka, Marathi for Maharashtra, etc.).',
        isMandatory: true,
        acceptedFormats: ['JPEG'],
        maxSizeMb: 2
      },
      {
        id: 'doc-employee-list',
        name: 'Employee Details and Salary Register Format',
        description: 'Names, designations, and wage schedules of employees (if employing staff).',
        isMandatory: false,
        conditionalNote: 'Required if employing 1 or more workers.'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Identify State Labour Portal',
        description: 'In Karnataka, access e-Karmika / Seva Sindhu; in Maharashtra, access Aaple Sarkar; in Delhi, access e-District.',
        actionHint: 'Ensure you have your Aadhaar number, business PAN, and commercial rental agreement ready.'
      },
      {
        stepNumber: 2,
        title: 'Fill Form A (Application for Registration)',
        description: 'Enter employer details, nature of business, working hours, weekly off day, and employee count (male, female, contract).',
        estimatedDuration: '20 Minutes'
      },
      {
        stepNumber: 3,
        title: 'Upload Premises Proof and Name Board Photo',
        description: 'Attach clear color photo of the front office / shop name board showing the local language lettering as per state law.',
        estimatedDuration: '10 Minutes'
      },
      {
        stepNumber: 4,
        title: 'Pay Statutory Fee based on Employee Slab',
        description: 'Pay ₹300 (for <10 staff in Karnataka) via net banking / UPI.',
        actionHint: 'Download the treasury challan / payment acknowledgment.'
      },
      {
        stepNumber: 5,
        title: 'Scrutiny by Labour Inspector',
        description: 'Labour officer reviews the application online. Responding to queries (if any) takes 2-3 days.',
        estimatedDuration: '3-7 Days'
      },
      {
        stepNumber: 6,
        title: 'Download Form C Registration Certificate',
        description: 'Download the digitally signed Certificate of Registration. Print and display it framed at the workplace.',
        actionHint: 'Required by banks to open your business current account.'
      }
    ],
    sources: [
      {
        name: 'Karnataka Seva Sindhu / e-Karmika Portal',
        url: 'https://sevasindhu.karnataka.gov.in/',
        type: 'Application Portal',
        department: 'Department of Labour, Government of Karnataka',
        lastCheckedDate: '2026-10-19',
        isOfficialGovDomain: true
      },
      {
        name: 'Ministry of Labour & Employment National Portal',
        url: 'https://labour.gov.in/',
        type: 'Department Website',
        department: 'Government of India',
        lastCheckedDate: '2026-10-11',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Is Shop and Establishment registration needed if I have zero employees and work alone?',
        answer: 'Yes. The Act applies to commercial establishments irrespective of whether employees are hired. In many states (like Maharashtra and Karnataka), you can register under the "Zero / 0-employee" category with minimal fee to obtain your official certificate.'
      },
      {
        question: 'What is the local language name board rule?',
        answer: 'State laws (e.g. Karnataka Kannada Language Comprehensive Development Act) require that commercial shop display boards display the state language prominently in font size at least 60% of the total board area.'
      }
    ],
    relatedLicenceIds: ['municipal-trade-licence', 'gst-registration', 'udyam-msme-registration', 'fssai-basic-registration'],
    verificationStatus: 'Verified',
    verifiedBy: 'State Labour Law Specialist',
    lastVerifiedDate: '2026-10-22',
    isPopular: true
  },
  {
    id: 'municipal-trade-licence',
    slug: 'municipal-trade-licence',
    name: 'Municipal Trade Licence',
    aliases: ['Trade License', 'BBMP Trade License', 'Municipal Corporation Trade Permit', 'BMC Trade License', 'Commercial Operating Permit'],
    category: 'business-trade',
    categoryLabel: 'Business and Trade',
    tagline: 'Mandatory municipal permit granting permission to execute commercial activities within city corporation limits.',
    overview: 'A Municipal Trade Licence is an authorization issued by the local urban municipal corporation or council (e.g., BBMP in Bengaluru, BMC in Mumbai, MCD in Delhi, GCC in Chennai) certifying that the business premises complies with municipal safety, health, nuisance-prevention, and zoning laws.',
    whatItAllows: [
      'Carry out commercial trades, retail operations, food services, or industrial activities within the municipal corporation limits.',
      'Ensures the establishment does not create public health hazards, excessive noise, or fire dangers in residential/commercial zones.'
    ],
    whoNeedsIt: [
      'Every commercial enterprise operating within the jurisdiction of a Municipal Corporation or Municipality.',
      'Restaurants, grocery stores, manufacturing workshops, pharmacies, salons, and retail shops.'
    ],
    whoIsExempt: [
      'Establishments operating outside municipal limits in rural Gram Panchayat areas (which require Gram Panchayat NOC instead).',
      'Select pure software technology companies operating inside designated SEZ / Software Technology Parks exempt by special government orders.'
    ],
    eligibilityCriteria: [
      'Premises must conform to the master zoning plan (Zonal Master Plan) permitting commercial activity.',
      'Must have property tax paid up to date with Property Tax PID / SAS receipt.',
      'No pending municipal building violation notices.'
    ],
    applicantTypes: ['Individual', 'Sole Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Public Limited'],
    activitiesCovered: ['Retail shops', 'Commercial dining', 'Repair workshops', 'Hotels and lodging', 'Bakeries'],
    jurisdiction: 'Municipal / Local',
    state: 'Karnataka',
    municipality: 'Bruhat Bengaluru Mahanagara Palike (BBMP)',
    issuingAuthority: 'Health Officer / Revenue Officer, Bruhat Bengaluru Mahanagara Palike (BBMP)',
    governingMinistry: 'Urban Development Department / Local Self Government',
    relevantLegislation: 'Bruhat Bengaluru Mahanagara Palike Act, 2020 & Karnataka Municipal Corporations Act, 1976 (Section 353)',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://bbmp.gov.in/',
    officialInfoUrl: 'https://bbmp.gov.in/',
    governmentFees: {
      summary: '₹1,500 to ₹25,000 per year depending on square footage of the premises, horse power of machinery, and trade classification.',
      items: [
        { particular: 'Small retail / office (< 500 sq ft)', amount: '₹1,500 - ₹3,500' },
        { particular: 'Restaurants and eateries (500 - 2,000 sq ft)', amount: '₹5,000 - ₹12,000' },
        { particular: 'Large commercial outlets or workshops', amount: '₹15,000+' }
      ]
    },
    processingTimeEstimate: '7 to 14 Working Days.',
    validityPeriod: '1 Financial Year (Valid up to March 31st of each year; requires annual renewal).',
    renewalRequirements: {
      leadTime: 'Must be renewed annually between January 1st and February 28th/March 31st for the upcoming financial year.',
      procedure: 'Online renewal via BBMP trade licence portal using previous Trade Licence number and latest property tax receipt.',
      penaltyForDelay: 'Penalty of 25% to 50% of the trade fee is levied for renewals filed after March 31st.'
    },
    inspectionRequirements: 'Health Inspector of the local municipal ward conducts on-site verification of sanitation, solid waste segregation, and fire extinguisher installations.',
    modificationAndTransfer: 'Requires submission of modified lease deed or title transfer with nominal amendment fee.',
    commonRejectionReasons: [
      'Unpaid municipal property tax on the building (missing latest PID / SAS receipt).',
      'Premises located on a narrow residential road where commercial activities are prohibited by city zoning.',
      'Lack of solid waste management agreement for bulk food waste generators.',
      'Missing neighbor NOC or building plan occupancy certificate for large establishments.'
    ],
    requiredDocuments: [
      {
        id: 'doc-property-tax',
        name: 'Latest Property Tax Paid Receipt (PID / SAS)',
        description: 'Current financial year receipt with Property Identification Number (PID).',
        isMandatory: true,
        acceptedFormats: ['PDF'],
        maxSizeMb: 2
      },
      {
        id: 'doc-trade-rent',
        name: 'Rental Agreement or Sale Deed',
        description: 'Registered lease agreement specifying commercial lease terms.',
        isMandatory: true,
        acceptedFormats: ['PDF'],
        maxSizeMb: 3
      },
      {
        id: 'doc-trade-khata',
        name: 'Property Khata Certificate (e-Aasthi)',
        description: "Valid 'A' Khata or sanctioned building plan.",
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-trade-noc',
        name: 'Neighbor / Owner Consent / Fire NOC',
        description: 'Required for restaurants, gyms, or trades with heavy machinery or sound.',
        isMandatory: false,
        conditionalNote: 'Mandatory for food, fitness, and manufacturing trades.'
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Check Zoning Master Plan',
        description: 'Verify if the street width and zonal category (Commercial, Mixed, or Residential) permits your intended trade.',
        actionHint: 'Bengaluru requires min. 40-ft road width for commercial usage in residential zones.'
      },
      {
        stepNumber: 2,
        title: 'Obtain Property PID & Tax Receipt',
        description: 'Secure the latest Property Tax receipt and Khata extract from the landlord or owner.',
        estimatedDuration: '1 Day'
      },
      {
        stepNumber: 3,
        title: 'Apply on BBMP Citizen Portal',
        description: 'Navigate to https://bbmp.gov.in/ > Citizen Services > Trade Licence > New Application.',
        officialPortalUrl: 'https://bbmp.gov.in/'
      },
      {
        stepNumber: 4,
        title: 'Fill Trade Category and Square Footage',
        description: 'Enter trade code (e.g. Code 410 - Restaurant, Code 102 - Grocery), carpet area, and machinery HP.',
        estimatedDuration: '15 Minutes'
      },
      {
        stepNumber: 5,
        title: 'Pay Municipal Licence Fee Online',
        description: 'Pay calculated tariff using BBMP payment gateway and download acknowledgment.',
        actionHint: 'Keep payment receipt safe for verification.'
      },
      {
        stepNumber: 6,
        title: 'Health Inspector Ward Verification',
        description: 'Ward Health Inspector reviews premises and approves certificate generation.',
        estimatedDuration: '5-10 Days'
      },
      {
        stepNumber: 7,
        title: 'Download Digitally Signed Trade Certificate',
        description: 'Download the certificate and display it at the premises entrance.',
        estimatedDuration: 'Total 7-14 Days'
      }
    ],
    sources: [
      {
        name: 'BBMP Citizen Services Portal',
        url: 'https://bbmp.gov.in/',
        type: 'Application Portal',
        department: 'Bruhat Bengaluru Mahanagara Palike',
        lastCheckedDate: '2026-10-18',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Is a Municipal Trade Licence the same as a Shop & Establishment registration?',
        answer: 'No. Shop & Establishment is a state labour registration governing employee hours and working conditions. Municipal Trade Licence is a municipal health & zoning permission issued by the city corporation (like BBMP or BMC) authorizing the physical trade on that premises.'
      }
    ],
    relatedLicenceIds: ['shop-and-establishment-registration', 'fssai-basic-registration', 'fssai-state-licence', 'fire-safety-noc'],
    verificationStatus: 'Verified',
    verifiedBy: 'Municipal Administration Specialist',
    lastVerifiedDate: '2026-10-22',
    isPopular: true
  },
  {
    id: 'gst-registration',
    slug: 'gst-registration',
    name: 'GST Registration (GSTIN)',
    aliases: ['GSTIN', 'GST License', 'Sales Tax Number', 'VAT Registration', 'Goods & Services Tax Certificate'],
    category: 'business-trade',
    categoryLabel: 'Business and Trade',
    tagline: 'Crucial 15-digit national tax identification mandatory for businesses exceeding turnover thresholds or selling inter-state.',
    overview: 'GST Registration is an all-India unified tax identification (Goods and Services Tax Identification Number - GSTIN) issued by the Central Board of Indirect Taxes and Customs (CBIC) and state tax administrations. It enables registered entities to collect indirect tax on supplies of goods/services and claim Input Tax Credit (ITC).',
    whatItAllows: [
      'Collect Goods and Services Tax from customers and issue legally valid tax invoices.',
      'Pass on and claim Input Tax Credit (ITC) on commercial business purchases.',
      'Supply goods and services across state borders (inter-state commerce) and sell on e-commerce marketplaces (Amazon, Flipkart, Blinkit).',
      'Bid for government tenders and corporate institutional contracts.'
    ],
    whoNeedsIt: [
      'Businesses with annual turnover exceeding threshold: ₹40 Lakh for goods in normal states (₹20 Lakh in special category states).',
      'Service providers with annual turnover exceeding ₹20 Lakh (₹10 Lakh in special category states).',
      'Mandatory irrespective of turnover for inter-state sellers, e-commerce suppliers, casual taxable persons, and non-resident taxable entities.'
    ],
    whoIsExempt: [
      'Agriculturists supplying produce grown from land cultivation.',
      'Businesses selling exclusively 100% GST-exempt goods or services (e.g. fresh fruits, unprocessed grains).',
      'Service providers with turnover under ₹20 Lakh operating purely within a single state.'
    ],
    eligibilityCriteria: [
      'Must have a permanent Indian PAN (Personal PAN for proprietorship; Corporate PAN for company/LLP).',
      'Must have an operational Indian bank account and valid proof of principal place of business.'
    ],
    applicantTypes: ['Individual', 'Sole Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Public Limited'],
    activitiesCovered: ['Goods manufacturing', 'Trading and retail', 'Service provision', 'E-commerce selling', 'Import/Export'],
    jurisdiction: 'Central',
    issuingAuthority: 'Goods and Services Tax Network (GSTN) / CBIC and State Commercial Taxes Department',
    governingMinistry: 'Ministry of Finance, Government of India',
    relevantLegislation: 'Central Goods and Services Tax Act, 2017 (Section 22 & 24)',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://www.gst.gov.in/',
    officialInfoUrl: 'https://cbic.gov.in/',
    governmentFees: {
      summary: '₹0 (Zero Government Fee). GST registration on the official portal is completely free.',
      items: [
        { particular: 'Official Government Application Fee', amount: '₹0' },
        { particular: 'Aadhaar Biometric e-KYC Verification', amount: '₹0' }
      ],
      professionalFeeNote: 'Chartered accountants / filing agents usually charge ₹1,500 - ₹3,000 for document drafting, but the government charges no fee.'
    },
    processingTimeEstimate: '3 to 7 Working Days (if Aadhaar authentication succeeds without query; up to 30 days if physical site inspection is triggered).',
    validityPeriod: 'Continuous (valid as long as business operations continue and statutory monthly/quarterly returns are filed).',
    renewalRequirements: {
      leadTime: 'No periodic renewal required.',
      procedure: 'Regular monthly/quarterly compliance (GSTR-1, GSTR-3B) and annual returns (GSTR-9) must be filed to keep GSTIN active.',
      penaltyForDelay: 'Late fee of ₹50/day (₹20/day for nil returns) applies for delayed return filings. Non-filing for 6 consecutive months leads to GSTIN suspension.'
    },
    inspectionRequirements: 'If Aadhaar authentication of the primary authorized signatory fails or is opted out, a physical site inspection of the principal business premises by the GST Inspector is triggered before approval.',
    modificationAndTransfer: 'Core fields (business name, additional places of business) can be amended online with approval; non-core fields update instantly.',
    commonRejectionReasons: [
      'Electricity bill or property document is older than 2 months or illegible.',
      'Electricity bill name does not match the landlord on the rental agreement or lacks Landlord NOC.',
      'Mismatch in PAN name vs Aadhaar card spelling.',
      'Principal place of business is found closed or locked during random tax officer physical verification.'
    ],
    requiredDocuments: [
      {
        id: 'doc-gst-pan',
        name: 'PAN Card of Applicant / Firm',
        description: 'Permanent Account Number card of proprietor or company.',
        isMandatory: true,
        acceptedFormats: ['PDF', 'JPEG']
      },
      {
        id: 'doc-gst-aadhaar',
        name: 'Aadhaar Card of Authorized Signatory / Partners',
        description: 'Must have active mobile linked for OTP e-KYC.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-gst-premises',
        name: 'Principal Place of Business Proof (Electricity Bill + Rent Agreement)',
        description: 'Electricity bill (within 2 months) + registered rent agreement with specific NOC from the property owner permitting GST registration.',
        isMandatory: true,
        acceptedFormats: ['PDF'],
        maxSizeMb: 3,
        validityFreshness: 'Bill within last 60 days'
      },
      {
        id: 'doc-gst-bank',
        name: 'Bank Proof (Cancelled Cheque / Bank Statement)',
        description: 'Cancelled cheque showing Account Number, IFSC, and entity name.',
        isMandatory: true,
        acceptedFormats: ['PDF', 'JPEG']
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Generate Temporary Reference Number (TRN)',
        description: 'Visit https://www.gst.gov.in/ > Services > Registration > New Registration. Enter PAN, Email, and Mobile to receive OTPs.',
        officialPortalUrl: 'https://www.gst.gov.in/',
        actionHint: 'A 15-digit TRN is immediately generated and valid for 15 days.'
      },
      {
        stepNumber: 2,
        title: 'Log in with TRN and Complete Part B',
        description: 'Log in with your TRN and fill Business Details, Partners/Directors details, Principal Place of Business, and HSN/SAC codes for goods/services.',
        estimatedDuration: '25 Minutes'
      },
      {
        stepNumber: 3,
        title: 'Upload Premises Proof & Bank Document',
        description: 'Attach electricity bill, rent agreement with explicit owner NOC, and cancelled cheque.',
        actionHint: 'Make sure the address on the electricity bill matches the application word-for-word.'
      },
      {
        stepNumber: 4,
        title: 'Complete Aadhaar e-KYC Authentication',
        description: 'Opt for Aadhaar authentication. An OTP link is emailed to the primary signatory. Authenticate via UIDAI OTP.',
        actionHint: 'Successfully completing Aadhaar e-KYC avoids physical officer inspection and speeds approval to 3-7 days.'
      },
      {
        stepNumber: 5,
        title: 'ARN Generation & Jurisdictional Scrutiny',
        description: 'Application Reference Number (ARN) is issued. Central or State tax officer examines the application.',
        estimatedDuration: '3-7 Days'
      },
      {
        stepNumber: 6,
        title: 'Download Form REG-06 GSTIN Certificate',
        description: 'Upon approval, receive GSTIN and login credentials via email. Download the official GST Registration Certificate (Form REG-06).',
        estimatedDuration: 'Immediate upon approval'
      }
    ],
    sources: [
      {
        name: 'Official GST Common Portal',
        url: 'https://www.gst.gov.in/',
        type: 'Application Portal',
        department: 'Goods and Services Tax Network (GSTN)',
        lastCheckedDate: '2026-10-20',
        isOfficialGovDomain: true
      },
      {
        name: 'CBIC GST Law Portal',
        url: 'https://www.cbic.gov.in/',
        type: 'Department Website',
        department: 'Central Board of Indirect Taxes and Customs',
        lastCheckedDate: '2026-10-14',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Is GST registration free?',
        answer: 'Yes, 100% free. The Government of India charges zero rupees for applying or obtaining a GST registration certificate on www.gst.gov.in.'
      },
      {
        question: 'Can I sell on Amazon or Flipkart without a GST number?',
        answer: 'Under Section 24 of the CGST Act, anyone selling goods via e-commerce operators across states requires mandatory GST registration regardless of turnover.'
      }
    ],
    relatedLicenceIds: ['udyam-msme-registration', 'private-limited-company-incorporation', 'shop-and-establishment-registration', 'import-export-code'],
    verificationStatus: 'Verified',
    verifiedBy: 'Chartered Accountant / Indirect Tax Specialist',
    lastVerifiedDate: '2026-10-22',
    isPopular: true
  },
  {
    id: 'udyam-msme-registration',
    slug: 'udyam-msme-registration',
    name: 'Udyam MSME Registration',
    aliases: ['MSME Certificate', 'Udyog Aadhaar', 'SSI Registration', 'Udyam Certificate', 'MSME Registration'],
    category: 'business-trade',
    categoryLabel: 'Business and Trade',
    tagline: 'Zero-cost official recognition certificate for Micro, Small, and Medium Enterprises unlocking priority loans and subsidies.',
    overview: 'Udyam Registration is a paperless, self-declaration based government recognition certificate issued by the Ministry of Micro, Small and Medium Enterprises (MSME). It officially classifies an enterprise as Micro, Small, or Medium based on composite criteria of investment in plant/machinery and annual turnover.',
    whatItAllows: [
      'Priority Sector Lending (PSL) from commercial banks at discounted interest rates (1-2% lower).',
      'Protection against delayed payments under MSME SAMADHAAN (buyers must pay within 45 days or pay compound interest at 3x RBI rate).',
      '50% subsidy on patent and trademark registration government fees.',
      'Exemption from Earnest Money Deposit (EMD) and tender fees when bidding for government procurements.',
      'Eligible for Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) collateral-free loans up to ₹5 Crore.'
    ],
    whoNeedsIt: [
      'Any Micro, Small, or Medium enterprise engaged in manufacturing or service provision.',
      'Sole proprietorships, startups, small software agencies, fabrication workshops, and traders seeking credit subsidies.'
    ],
    whoIsExempt: [
      'Large enterprises exceeding ₹250 Crore turnover or ₹50 Crore plant investment.',
      'Entities engaged purely in speculative activities or unregulated financial bets.'
    ],
    eligibilityCriteria: [
      'Micro Enterprise: Investment in plant & machinery <= ₹1 Crore AND Annual Turnover <= ₹5 Crore.',
      'Small Enterprise: Investment in plant & machinery <= ₹10 Crore AND Annual Turnover <= ₹50 Crore.',
      'Medium Enterprise: Investment in plant & machinery <= ₹50 Crore AND Annual Turnover <= ₹250 Crore.',
      'Must have Aadhaar number of applicant and business PAN card (PAN and GST are dynamically integrated).'
    ],
    applicantTypes: ['Individual', 'Sole Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Public Limited'],
    activitiesCovered: ['Manufacturing', 'Service sector', 'Retail and wholesale trading (for priority sector lending)'],
    jurisdiction: 'Central',
    issuingAuthority: 'Ministry of Micro, Small and Medium Enterprises (MSME)',
    governingMinistry: 'Ministry of MSME, Government of India',
    relevantLegislation: 'Micro, Small and Medium Enterprises Development (MSMED) Act, 2006 & Notification S.O. 2119(E)',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://udyamregistration.gov.in/',
    officialInfoUrl: 'https://udyamregistration.gov.in/',
    governmentFees: {
      summary: '₹0 (Completely Free). The Ministry of MSME charges zero government fee.',
      items: [
        { particular: 'Government Application Fee', amount: '₹0' },
        { particular: 'Udyam Certificate Generation', amount: '₹0' }
      ],
      professionalFeeNote: 'Beware of fraudulent private imitation websites charging ₹1,000 - ₹3,000. Always use the official udyamregistration.gov.in domain.'
    },
    processingTimeEstimate: 'Instant to 2-3 Working Days (instant digital certificate generation upon automated PAN-Aadhaar validation).',
    validityPeriod: 'Lifetime (no renewal required; data updates automatically through annual income tax return linkages).',
    renewalRequirements: {
      leadTime: 'No periodic renewal required.',
      procedure: 'Annual ITR and GST data sync automatically with Udyam; enterprise category adjusts automatically if turnover moves to a different tier.'
    },
    inspectionRequirements: 'Zero physical inspection required for issuance. Completely paperless self-declaration.',
    modificationAndTransfer: 'Udyam certificate details (bank account, additional plant locations) can be amended on the Udyam portal using OTP.',
    commonRejectionReasons: [
      'Aadhaar name does not match PAN database records.',
      'Incorrect mobile number linked to Aadhaar (unable to receive OTP).',
      'Using a third-party scam website instead of the official .gov.in portal.'
    ],
    requiredDocuments: [
      {
        id: 'doc-udyam-aadhaar',
        name: 'Aadhaar Card of Entrepreneur / Partner',
        description: 'Linked to active mobile number for OTP.',
        isMandatory: true
      },
      {
        id: 'doc-udyam-pan',
        name: 'Business / Personal PAN Card',
        description: 'PAN card verified against CBDT database.',
        isMandatory: true
      },
      {
        id: 'doc-udyam-bank',
        name: 'Bank Account Number & IFSC',
        description: 'Primary business operating bank account.',
        isMandatory: true
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Open Official Udyam Registration Portal',
        description: 'Access the only official government portal: https://udyamregistration.gov.in/ (ensure .gov.in domain).',
        officialPortalUrl: 'https://udyamregistration.gov.in/'
      },
      {
        stepNumber: 2,
        title: 'Validate Aadhaar with OTP',
        description: 'Click "For New Entrepreneurs who are not Registered yet as MSME". Enter 12-digit Aadhaar and entrepreneur name; verify via OTP.',
        estimatedDuration: '3 Minutes'
      },
      {
        stepNumber: 3,
        title: 'Validate PAN Details',
        description: 'Select Organization Type (Proprietary, Partnership, LLP, Pvt Ltd) and enter PAN number. Portal validates with Income Tax database.',
        estimatedDuration: '2 Minutes'
      },
      {
        stepNumber: 4,
        title: 'Enter Plant Location & National Industry Classification (NIC)',
        description: 'Enter business address, date of commencement, bank account details, and select your 5-digit NIC code (e.g. 62011 for Software, 56101 for Restaurant).',
        estimatedDuration: '10 Minutes'
      },
      {
        stepNumber: 5,
        title: 'Declare Investment & Turnover',
        description: 'Declare written-down value of plant/equipment and previous year turnover (auto-filled if ITR filed).',
        actionHint: 'Turnover from exports is excluded when calculating MSME classification thresholds!'
      },
      {
        stepNumber: 6,
        title: 'Final OTP & Instant Certificate Download',
        description: 'Submit with final mobile OTP. Download your official Udyam Certificate featuring dynamic QR code and lifetime validity.',
        estimatedDuration: 'Instant'
      }
    ],
    sources: [
      {
        name: 'Ministry of MSME Official Udyam Portal',
        url: 'https://udyamregistration.gov.in/',
        type: 'Application Portal',
        department: 'Ministry of Micro, Small and Medium Enterprises',
        lastCheckedDate: '2026-10-21',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Is Udyam registration free of cost?',
        answer: 'Yes! The Ministry of MSME has explicitly notified that Udyam registration is 100% free of cost on udyamregistration.gov.in. Never pay any fee on private commercial websites.'
      },
      {
        question: 'Can retail and wholesale traders register on Udyam?',
        answer: 'Yes. The Ministry of MSME has included Retail and Wholesale trade under the MSME classification (NIC Codes 45, 46, and 47) strictly for Priority Sector Lending (PSL) benefits.'
      }
    ],
    relatedLicenceIds: ['gst-registration', 'private-limited-company-incorporation', 'trademark-registration', 'shop-and-establishment-registration'],
    verificationStatus: 'Verified',
    verifiedBy: 'MSME Policy Analyst',
    lastVerifiedDate: '2026-10-22',
    isPopular: true
  },
  {
    id: 'import-export-code',
    slug: 'import-export-code',
    name: 'Import Export Code (IEC)',
    aliases: ['IEC', 'DGFT IEC', 'Import License', 'Export License', 'Exim Code'],
    category: 'import-export-special',
    categoryLabel: 'Import, Export and Special Activities',
    tagline: '10-digit statutory registration issued by DGFT mandatory for undertaking commercial international trade.',
    overview: 'The Import Export Code (IEC) is a 10-digit alphanumeric code issued by the Directorate General of Foreign Trade (DGFT), Ministry of Commerce and Industry. It is identical to the business entity PAN and is legally mandatory for any enterprise or individual wishing to import goods or services into India or export products out of India.',
    whatItAllows: [
      'Clear commercial import shipments through Indian Customs (ICEGATE) at seaports, airports, and inland container depots.',
      'Export goods and cross-border commercial services, receiving foreign currency remittances into Indian bank accounts.',
      'Avail export incentives, duty exemptions, and schemes under the Foreign Trade Policy (FTP) such as RoDTEP and RoSCTL.'
    ],
    whoNeedsIt: [
      'Any business entity, startup, manufacturer, or merchant trader importing physical merchandise or commercial goods.',
      'Exporters of services receiving cross-border remittances (unless specifically exempt under service tax rules).',
      'Food importers needing clearance from FSSAI at customs ports.'
    ],
    whoIsExempt: [
      'Imports or exports of personal effects and gifts for private non-commercial use.',
      'Departments of the Central and State Governments and notified charitable institutions.'
    ],
    eligibilityCriteria: [
      'Must hold a valid Indian PAN card.',
      'Must hold an active commercial or individual bank account in an authorized dealer bank.',
      'Must have valid business address proof.'
    ],
    applicantTypes: ['Individual', 'Sole Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Public Limited'],
    activitiesCovered: ['Cross-border trade', 'Foreign merchandise import', 'Software exports', 'Commodity trade'],
    jurisdiction: 'Central',
    issuingAuthority: 'Directorate General of Foreign Trade (DGFT)',
    governingMinistry: 'Ministry of Commerce and Industry, Government of India',
    relevantLegislation: 'Foreign Trade (Development and Regulation) Act, 1992',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://www.dgft.gov.in/',
    officialInfoUrl: 'https://www.dgft.gov.in/',
    governmentFees: {
      summary: '₹500 one-time government fee.',
      items: [
        { particular: 'DGFT Application Processing Fee', amount: '₹500' }
      ]
    },
    processingTimeEstimate: 'Same Day to 2 Working Days (immediate automated issuance upon PAN and bank electronic validation).',
    validityPeriod: 'Lifetime (subject to mandatory annual online update between April and June of each year).',
    renewalRequirements: {
      leadTime: 'Mandatory annual online confirmation between April and June every year.',
      procedure: 'Log in to DGFT portal and click "Update/Verify IEC". Even if there are no changes, electronic confirmation is compulsory.',
      penaltyForDelay: 'Deactivation of IEC if not confirmed annually; reactivated automatically upon filing with zero penalty.'
    },
    inspectionRequirements: 'Zero physical inspection required for issuing standard IEC.',
    modificationAndTransfer: 'Amendments (bank details, branch addition) can be completed online on DGFT portal for a ₹200 fee.',
    commonRejectionReasons: [
      'Cancelled cheque does not clearly display the account holder name matching PAN.',
      'Address proof name does not match applicant entity name.',
      'Failure to sign electronically via Aadhaar OTP or Digital Signature Certificate (DSC).'
    ],
    requiredDocuments: [
      {
        id: 'doc-iec-pan',
        name: 'PAN Card of Firm / Individual',
        description: 'Scanned copy of PAN card.',
        isMandatory: true,
        acceptedFormats: ['PDF', 'JPEG']
      },
      {
        id: 'doc-iec-bank',
        name: 'Cancelled Cheque or Bank Certificate',
        description: 'Bank cheque showing pre-printed entity name, account number, and IFSC code.',
        isMandatory: true,
        acceptedFormats: ['PDF'],
        maxSizeMb: 5
      },
      {
        id: 'doc-iec-address',
        name: 'Address Proof of Business Premises',
        description: 'Electricity bill, property tax receipt, or registered lease agreement.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Register on DGFT Portal',
        description: 'Navigate to https://www.dgft.gov.in/ and register a new user profile as "Importer/Exporter".',
        officialPortalUrl: 'https://www.dgft.gov.in/'
      },
      {
        stepNumber: 2,
        title: 'Fill Online IEC Application',
        description: 'Click "Apply for IEC". Enter entity PAN, date of incorporation/birth, and basic business details.',
        estimatedDuration: '10 Minutes'
      },
      {
        stepNumber: 3,
        title: 'Enter Bank Account Details',
        description: 'Enter operating bank account number and branch IFSC. Upload clear copy of pre-printed cancelled cheque.',
        actionHint: 'DGFT performs automated real-time verification with your bank via PFMS/API.'
      },
      {
        stepNumber: 4,
        title: 'Sign Application with Aadhaar OTP or DSC',
        description: 'Sign application digitally using the Aadhaar OTP of the proprietor/director or Class 3 DSC.',
        estimatedDuration: '5 Minutes'
      },
      {
        stepNumber: 5,
        title: 'Pay Statutory Fee of ₹500',
        description: 'Pay ₹500 via Bharatkosh online payment gateway.',
        estimatedDuration: '5 Minutes'
      },
      {
        stepNumber: 6,
        title: 'Instant Download of e-IEC Certificate',
        description: 'Upon successful payment and verification, download your official e-IEC certificate containing QR code and customs linkage.',
        estimatedDuration: 'Immediate'
      }
    ],
    sources: [
      {
        name: 'DGFT Official Portal',
        url: 'https://www.dgft.gov.in/',
        type: 'Application Portal',
        department: 'Directorate General of Foreign Trade',
        lastCheckedDate: '2026-10-16',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Does an IEC expire?',
        answer: 'No, an IEC is valid for a lifetime. However, under the Foreign Trade Policy, every IEC holder must confirm or update their IEC details online on the DGFT portal annually between April and June.'
      }
    ],
    relatedLicenceIds: ['fssai-central-licence', 'gst-registration', 'udyam-msme-registration'],
    verificationStatus: 'Verified',
    verifiedBy: 'Foreign Trade Policy Expert',
    lastVerifiedDate: '2026-10-22',
    isPopular: true
  },
  {
    id: 'private-limited-company-incorporation',
    slug: 'private-limited-company-incorporation',
    name: 'Private Limited Company Incorporation (SPICe+)',
    aliases: ['Company Registration', 'Pvt Ltd Incorporation', 'MCA SPICe+', 'ROC Registration', 'Certificate of Incorporation'],
    category: 'business-trade',
    categoryLabel: 'Business and Trade',
    tagline: 'Premier corporate legal entity in India providing limited liability, distinct legal personality, and investor readiness.',
    overview: 'Private Limited Company Incorporation is the formal legal process of creating an incorporated corporate body under the Companies Act, 2013, administered by the Ministry of Corporate Affairs (MCA) through the Registrar of Companies (ROC). The single-window SPICe+ (INC-32) portal integrates 10 regulatory approvals in one submission: Name Reservation, Incorporation, DIN, PAN, TAN, EPFO, ESIC, Professional Tax, Bank Account, and GSTIN.',
    whatItAllows: [
      'Form an independent legal entity separate from its directors and shareholders with perpetual succession.',
      'Raise venture capital, angel investment, and issue equity shares or convertible debentures.',
      'Protect personal assets through limited liability protection.',
      'Enjoy brand credibility and international corporate recognition.'
    ],
    whoNeedsIt: [
      'High-growth tech startups, scaling businesses, manufacturing enterprises, and businesses seeking institutional equity investment.'
    ],
    whoIsExempt: [
      'Individual traders and small micro-businesses opting for sole proprietorship or LLP models.'
    ],
    eligibilityCriteria: [
      'Minimum 2 directors (at least 1 must be a resident of India who stayed in India for >= 182 days in the previous FY).',
      'Minimum 2 shareholders (can be the same as directors).',
      'All proposed directors must obtain a Class 3 Digital Signature Certificate (DSC).',
      'No minimum paid-up capital requirement under current law.'
    ],
    applicantTypes: ['Private Limited'],
    activitiesCovered: ['Corporate commerce', 'Technology venture', 'Manufacturing', 'International trade'],
    jurisdiction: 'Central',
    issuingAuthority: 'Central Registration Centre (CRC) / Registrar of Companies (ROC)',
    governingMinistry: 'Ministry of Corporate Affairs (MCA)',
    relevantLegislation: 'Companies Act, 2013 & Companies (Incorporation) Rules, 2014',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://www.mca.gov.in/',
    officialInfoUrl: 'https://www.mca.gov.in/',
    governmentFees: {
      summary: '₹0 ROC incorporation fee for authorized capital up to ₹15 Lakh; only nominal state stamp duty (₹1,000 - ₹3,000) applies.',
      items: [
        { particular: 'ROC Incorporation filing fee (Authorized Capital up to ₹15L)', amount: '₹0' },
        { particular: 'Name Reservation fee (RUN / SPICe+ Part A)', amount: '₹1,000' },
        { particular: 'State Stamp Duty on MOA/AOA (varies by state)', amount: '₹1,000 - ₹3,000' },
        { particular: 'PAN and TAN government fee', amount: '₹133' }
      ],
      professionalFeeNote: 'Practicing CAs, CSs, and legal platforms charge ₹5,000 - ₹12,000 for drafting MOA/AOA, Class 3 DSC tokens, and filing certifications.'
    },
    processingTimeEstimate: '5 to 10 Working Days.',
    validityPeriod: 'Perpetual / Lifetime (until formally wound up or struck off under statutory procedure).',
    renewalRequirements: {
      leadTime: 'Continuous annual compliance.',
      procedure: 'Mandatory annual filing of Form AOC-4 (Financial Statements), MGT-7 (Annual Return), and annual Director KYC (DIR-3 KYC).',
      penaltyForDelay: 'Severe statutory penalty of ₹100 per day of delay for late filing of AOC-4 and MGT-7 without upper ceiling.'
    },
    inspectionRequirements: 'No pre-incorporation inspection. Physical verification of registered office under Section 12(9) may be initiated by ROC in case of suspected shell entities.',
    modificationAndTransfer: 'Changes in directors, registered office, or capital require special resolutions and filing on MCA V3 portal.',
    commonRejectionReasons: [
      'Proposed company name is identical or deceptively similar to an existing registered company or registered trademark.',
      'Missing or expired utility bill for registered office proof.',
      'Landlord NOC missing or lacking signature of actual property owner.',
      'Discrepancies in DIN or PAN details of directors.'
    ],
    requiredDocuments: [
      {
        id: 'doc-dsc',
        name: 'Class 3 Digital Signature Certificate (DSC)',
        description: 'For all proposed directors and subscribers to sign electronic MCA forms.',
        isMandatory: true
      },
      {
        id: 'doc-dir-id',
        name: 'PAN, Aadhaar/Passport & Voter ID of all Directors',
        description: 'Self-attested identity proof and address proof (bank statement or electricity bill within 2 months).',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-reg-office',
        name: 'Registered Office Proof (Electricity Bill + Landlord NOC)',
        description: 'Latest utility bill (within 2 months) with signed NOC from property owner permitting company registered office.',
        isMandatory: true,
        acceptedFormats: ['PDF'],
        maxSizeMb: 5
      },
      {
        id: 'doc-moa-aoa',
        name: 'e-MOA (INC-33) and e-AOA (INC-34)',
        description: 'Memorandum and Articles of Association specifying company objects.',
        isMandatory: true
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Obtain Class 3 Digital Signature (DSC)',
        description: 'Procure encrypted USB token DSC for all proposed directors to sign legal e-forms.',
        estimatedDuration: '1-2 Days'
      },
      {
        stepNumber: 2,
        title: 'Reserve Company Name via SPICe+ Part A',
        description: 'Submit two proposed company names on the MCA V3 portal. CRC examines uniqueness against existing companies and trademarks.',
        officialPortalUrl: 'https://www.mca.gov.in/',
        actionHint: 'Use the MCA Public Trademark Search to ensure name does not conflict with active trademarks.'
      },
      {
        stepNumber: 3,
        title: 'Complete SPICe+ Part B Integrated Form',
        description: 'Fill registered office, capital structure, director details, DIN applications, and link PAN, TAN, and bank account preference.',
        estimatedDuration: '1-2 Days'
      },
      {
        stepNumber: 4,
        title: 'Draft e-MOA (INC-33) and e-AOA (INC-34)',
        description: 'Define main object clauses and internal regulations. Attach professional certification from practicing CA/CS/Advocate.',
        estimatedDuration: '1 Day'
      },
      {
        stepNumber: 5,
        title: 'Affix DSCs and Pay Stamp Duty Online',
        description: 'All subscribers affix DSCs to the web forms. Pay calculated state stamp duty and MCA fees online.',
        estimatedDuration: '15 Minutes'
      },
      {
        stepNumber: 6,
        title: 'CRC Scrutiny and Certificate of Incorporation',
        description: 'Central Registration Centre verifies documents. Upon approval, Certificate of Incorporation (COI) with Corporate Identity Number (CIN) is issued with PAN & TAN.',
        estimatedDuration: '3-5 Days'
      }
    ],
    sources: [
      {
        name: 'Ministry of Corporate Affairs (MCA21 V3) Official Portal',
        url: 'https://www.mca.gov.in/',
        type: 'Application Portal',
        department: 'Ministry of Corporate Affairs, Government of India',
        lastCheckedDate: '2026-10-19',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Can a single person start a company in India?',
        answer: 'Yes. An individual can incorporate a One Person Company (OPC) under Section 2(62) of the Companies Act, which requires only 1 director and 1 nominee.'
      },
      {
        question: 'Is a physical commercial office mandatory for company registration?',
        answer: 'No. You can register a company at a residential address or home office provided you submit an electricity bill and a signed NOC from the property owner.'
      }
    ],
    relatedLicenceIds: ['llp-incorporation', 'gst-registration', 'udyam-msme-registration', 'trademark-registration'],
    verificationStatus: 'Verified',
    verifiedBy: 'Company Secretary & Corporate Attorney',
    lastVerifiedDate: '2026-10-22',
    isPopular: true
  },
  {
    id: 'llp-incorporation',
    slug: 'llp-incorporation',
    name: 'Limited Liability Partnership (LLP) Registration',
    aliases: ['LLP Registration', 'FiLLiP Form', 'Limited Liability Partnership', 'Partnership Incorporation'],
    category: 'business-trade',
    categoryLabel: 'Business and Trade',
    tagline: 'Flexible corporate structure combining limited liability with internal operational flexibility of a partnership.',
    overview: 'A Limited Liability Partnership (LLP) is an incorporated hybrid business entity governed under the Limited Liability Partnership Act, 2008. It grants partners limited liability protection while allowing them the operational freedom to organize their internal management on the basis of a mutually negotiated LLP Agreement, free from heavy company compliance burdens.',
    whatItAllows: [
      'Protect partners from unlimited joint liabilities of debts and mutual negligence of other partners.',
      'Operate with lower annual compliance requirements compared to private limited companies (e.g. statutory audit only mandatory if turnover exceeds ₹40 Lakh or contribution exceeds ₹25 Lakh).',
      'Own assets, execute contracts, and maintain legal standing in the LLP name.'
    ],
    whoNeedsIt: [
      'Professional service firms (lawyers, accountants, architects, consultants, engineers).',
      'Small to medium co-founded businesses and family enterprises seeking limited liability without equity dilution.'
    ],
    whoIsExempt: [
      'Entities intending to raise venture capital through equity shares or ESOPs (which legally requires a Private Limited company).'
    ],
    eligibilityCriteria: [
      'Minimum 2 designated partners (at least one must be a resident of India).',
      'All designated partners must hold a valid Designated Partner Identification Number (DPIN) / DIN and Class 3 DSC.'
    ],
    applicantTypes: ['LLP'],
    activitiesCovered: ['Professional services', 'Consulting', 'Trading', 'Design agencies', 'Boutique manufacturing'],
    jurisdiction: 'Central',
    issuingAuthority: 'Ministry of Corporate Affairs (MCA) / Registrar of Companies',
    governingMinistry: 'Ministry of Corporate Affairs',
    relevantLegislation: 'Limited Liability Partnership Act, 2008 & LLP Rules, 2009',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://www.mca.gov.in/',
    officialInfoUrl: 'https://www.mca.gov.in/',
    governmentFees: {
      summary: '₹500 for name reservation + ₹500 - ₹2,000 incorporation fee + state stamp duty on LLP Agreement.',
      items: [
        { particular: 'RUN-LLP Name Reservation', amount: '₹200' },
        { particular: 'FiLLiP Incorporation Form (Contribution up to ₹1 Lakh)', amount: '₹500' },
        { particular: 'Form 3 LLP Agreement Filing', amount: '₹50' },
        { particular: 'State Stamp Duty on Agreement', amount: '₹500 - ₹2,000' }
      ]
    },
    processingTimeEstimate: '7 to 14 Working Days.',
    validityPeriod: 'Perpetual / Lifetime.',
    renewalRequirements: {
      leadTime: 'Annual compliance required.',
      procedure: 'Mandatory annual filing of Form 11 (Annual Return) by May 30th and Form 8 (Statement of Account & Solvency) by October 30th on MCA V3.',
      penaltyForDelay: 'Penalty of ₹100 per day of delay for late filing of Form 8 and Form 11.'
    },
    inspectionRequirements: 'Zero physical inspection required.',
    modificationAndTransfer: 'Changes in partners or agreement terms require filing Form 4 and Form 3 on MCA.',
    commonRejectionReasons: [
      'Failing to execute and file the LLP Agreement (Form 3) within 30 days of incorporation.',
      'Name conflicts with existing registered trademarks.',
      'Missing or illegible registered office utility bill.'
    ],
    requiredDocuments: [
      {
        id: 'doc-llp-dsc',
        name: 'Class 3 Digital Signature Certificate (DSC)',
        description: 'For all designated partners.',
        isMandatory: true
      },
      {
        id: 'doc-llp-pan',
        name: 'PAN, Aadhaar/Passport & Bank Statement',
        description: 'Identity and address proof for all partners.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-llp-office',
        name: 'Registered Office Address Proof & Landlord NOC',
        description: 'Electricity bill within 2 months with signed owner NOC.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-llp-agreement',
        name: 'Notarized LLP Agreement on Non-Judicial Stamp Paper',
        description: 'Stamping based on state stamp duty rules; filed within 30 days of incorporation.',
        isMandatory: true
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Procure Class 3 DSC for Designated Partners',
        description: 'Obtain digital signatures for electronic filing on MCA V3.',
        estimatedDuration: '1 Day'
      },
      {
        stepNumber: 2,
        title: 'Reserve LLP Name (RUN-LLP)',
        description: 'Reserve proposed LLP name with suffix "LLP" on the MCA portal.',
        officialPortalUrl: 'https://www.mca.gov.in/'
      },
      {
        stepNumber: 3,
        title: 'File FiLLiP Incorporation Form',
        description: 'Submit integrated incorporation form with partner KYC, DPIN generation, and registered office proof.',
        estimatedDuration: '2-3 Days'
      },
      {
        stepNumber: 4,
        title: 'Receive Certificate of Incorporation',
        description: 'ROC issues Certificate of Incorporation containing LLPIN and corporate PAN/TAN.',
        estimatedDuration: '3-5 Days'
      },
      {
        stepNumber: 5,
        title: 'Draft, Stamp & File Form 3 LLP Agreement',
        description: 'Execute partnership agreement on stamp paper and file Form 3 on MCA within 30 days.',
        actionHint: 'Failing to file Form 3 within 30 days attracts ₹100/day penalty.'
      }
    ],
    sources: [
      {
        name: 'MCA Official Portal',
        url: 'https://www.mca.gov.in/',
        type: 'Application Portal',
        department: 'Ministry of Corporate Affairs',
        lastCheckedDate: '2026-10-19',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Is an audit mandatory for an LLP every year?',
        answer: 'No. Unlike private limited companies, an LLP is exempt from mandatory audit unless its annual turnover exceeds ₹40 Lakh or its capital contribution exceeds ₹25 Lakh.'
      }
    ],
    relatedLicenceIds: ['private-limited-company-incorporation', 'gst-registration', 'udyam-msme-registration'],
    verificationStatus: 'Verified',
    verifiedBy: 'Corporate Law Specialist',
    lastVerifiedDate: '2026-10-22',
    isPopular: false
  },
  {
    id: 'trademark-registration',
    slug: 'trademark-registration',
    name: 'Trademark Registration (TM-A)',
    aliases: ['TM Registration', 'Brand Name Registration', 'Logo Registration', 'IP India Trademark', 'Brand Protection'],
    category: 'business-trade',
    categoryLabel: 'Business and Trade',
    tagline: 'Statutory brand name, logo, and slogan protection granting nationwide exclusive commercial ownership rights.',
    overview: 'Trademark Registration is an intellectual property title granted under the Trade Marks Act, 1999 by the Controller General of Patents, Designs and Trade Marks (CGPDTM / IP India). It grants the owner exclusive legal rights to use a distinctive brand name, logo, sound, or shape in relation to goods/services, and to prevent competitors from using deceptively similar marks.',
    whatItAllows: [
      'Use the prestigious ® symbol once registered (and ™ symbol immediately upon receiving application number).',
      'Exclusive nationwide legal monopoly to use the brand name and logo in specified trademark classes (1 to 45).',
      'File civil and criminal lawsuits against infringers and counterfeiters with statutory damages.',
      'Enroll in Amazon Brand Registry and social media intellectual property protection programs.'
    ],
    whoNeedsIt: [
      'Any business, brand creator, manufacturer, software developer, or entrepreneur seeking to safeguard their brand identity from copycats.'
    ],
    whoIsExempt: [
      'Trademark registration is voluntary; however, operating without it leaves brand equity vulnerable to theft.'
    ],
    eligibilityCriteria: [
      'The proposed brand name or logo must be distinctive and non-descriptive of the goods/services.',
      'Must not be identical or confusingly similar to earlier registered marks or pending applications in the same class.'
    ],
    applicantTypes: ['Individual', 'Sole Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Public Limited'],
    activitiesCovered: ['Brand protection', 'Logo ownership', 'Product labeling', 'Franchising'],
    jurisdiction: 'Central',
    issuingAuthority: 'Trade Marks Registry, Controller General of Patents, Designs and Trade Marks (CGPDTM)',
    governingMinistry: 'Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce',
    relevantLegislation: 'Trade Marks Act, 1999 & Trade Marks Rules, 2017',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://ipindia.gov.in/',
    officialInfoUrl: 'https://ipindia.gov.in/',
    governmentFees: {
      summary: '₹4,500 for Individuals/Startups/MSMEs with Udyam; ₹9,000 for standard corporate applicants per class.',
      items: [
        { particular: 'Individual, Startup, or MSME (with Udyam certificate) per class', amount: '₹4,500' },
        { particular: 'Standard Corporate / Others per class', amount: '₹9,000' }
      ],
      professionalFeeNote: 'Trademark attorneys typically charge ₹3,000 - ₹7,000 per class for search clearance, filing Form TM-A, and drafting user affidavits.'
    },
    processingTimeEstimate: '6 to 12 Months (immediate application number for ™ symbol; registration certificate issued after examination and 4-month public journal opposition window).',
    validityPeriod: '10 Years from the date of application.',
    renewalRequirements: {
      leadTime: 'Renewable every 10 years indefinitely by filing Form TM-R with fee.',
      procedure: 'File Form TM-R on IP India portal within 6 months prior to expiry date.',
      penaltyForDelay: 'Surcharge fee of ₹4,500 applies if renewed within 6 months after expiry under grace period.'
    },
    inspectionRequirements: 'Zero physical inspection. Examined by Trademark Examiner for distinctiveness and similarity against the registry database.',
    modificationAndTransfer: 'Assignment of trademark ownership can be recorded via Form TM-P.',
    commonRejectionReasons: [
      'Mark is purely descriptive of the goods (Section 9 objection — e.g. trying to trademark "Tasty Bread" for bakery products).',
      'Conflicting similar prior mark already registered in the class (Section 11 objection).',
      'Incorrect trademark class selected.'
    ],
    requiredDocuments: [
      {
        id: 'doc-tm-logo',
        name: 'Logo or Wordmark Artwork',
        description: 'Clear high-resolution JPEG image of the logo or plain text of the brand name.',
        isMandatory: true,
        acceptedFormats: ['JPEG'],
        maxSizeMb: 1
      },
      {
        id: 'doc-tm-udyam',
        name: 'Udyam Certificate / DPIIT Recognition',
        description: 'Qualifies the applicant for the 50% government fee rebate (saving ₹4,500).',
        isMandatory: false,
        conditionalNote: 'Required to claim 50% discount on statutory government fee.'
      },
      {
        id: 'doc-tm-affidavit',
        name: 'User Affidavit & Prior Use Evidence',
        description: 'Required if claiming brand usage from an earlier date (invoices, social media links).',
        isMandatory: false,
        conditionalNote: 'Mandatory if claiming prior usage before application date.'
      },
      {
        id: 'doc-tm-tm48',
        name: 'Power of Attorney (Form TM-M / TM-48)',
        description: 'Authorizing legal attorney or patent/trademark agent to represent applicant.',
        isMandatory: false
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Conduct Comprehensive Trademark Search',
        description: 'Search phonetic similarities across relevant classes (1-45) using the official IP India Public Search database.',
        officialPortalUrl: 'https://ipindia.gov.in/'
      },
      {
        stepNumber: 2,
        title: 'Classify Goods & Services (NICE Classification)',
        description: 'Identify exact Nice classification (e.g. Class 25 for Apparel, Class 42 for Software, Class 43 for Restaurants).',
        estimatedDuration: '15 Minutes'
      },
      {
        stepNumber: 3,
        title: 'File Form TM-A on IP India Portal',
        description: 'Submit electronic application with brand name, logo graphic, and goods description.',
        estimatedDuration: '30 Minutes'
      },
      {
        stepNumber: 4,
        title: 'Pay Statutory Fee Online',
        description: 'Pay ₹4,500 (with Udyam/Startup certificate) or ₹9,000 via NetBanking.',
        actionHint: 'Instantly download official payment receipt with Application Number to start using the ™ mark legally.'
      },
      {
        stepNumber: 5,
        title: 'Examination Report Scrutiny',
        description: 'Examiner reviews mark within 1-2 months. If objections under Section 9/11 are raised, submit legal reply within 30 days.',
        estimatedDuration: '1-3 Months'
      },
      {
        stepNumber: 6,
        title: 'Journal Publication & Public Opposition Period',
        description: 'Mark is published in the Trade Marks Journal for 4 months for public notice.',
        estimatedDuration: '4 Months'
      },
      {
        stepNumber: 7,
        title: 'Issuance of ® Registration Certificate',
        description: 'If no oppositions are filed, download your digital Registration Certificate with central seal and use the ® symbol.',
        estimatedDuration: '6-12 Months total'
      }
    ],
    sources: [
      {
        name: 'Intellectual Property India (CGPDTM) Official Portal',
        url: 'https://ipindia.gov.in/',
        type: 'Application Portal',
        department: 'DPIIT, Ministry of Commerce and Industry',
        lastCheckedDate: '2026-10-12',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'What is the difference between ™ and ®?',
        answer: 'You can use the ™ symbol immediately upon filing Form TM-A to signal that you claim trademark rights. You can only legally use the ® symbol after the trademark has been formally approved and the official registration certificate is issued.'
      }
    ],
    relatedLicenceIds: ['udyam-msme-registration', 'private-limited-company-incorporation', 'gst-registration'],
    verificationStatus: 'Verified',
    verifiedBy: 'Intellectual Property Attorney',
    lastVerifiedDate: '2026-10-22',
    isPopular: true
  },
  {
    id: 'factory-licence',
    slug: 'factory-licence',
    name: 'Factory Licence (Factories Act 1948)',
    aliases: ['Factories Act License', 'Factory Registration', 'Industrial Manufacturing License', 'DISH License'],
    category: 'construction-factory-industrial',
    categoryLabel: 'Construction, Factory and Industrial',
    tagline: 'Mandatory operational clearance ensuring workplace safety, health, and welfare standards for manufacturing premises.',
    overview: 'A Factory Licence is a statutory operating permit granted by the Directorate of Industrial Safety and Health (DISH) or State Labour Department under Section 6 of the Factories Act, 1948. It is mandatory for manufacturing premises meeting workforce or power thresholds to ensure worker safety, hazardous chemical containment, fire egress, and industrial welfare facilities.',
    whatItAllows: [
      'Lawfully operate an industrial manufacturing facility, assembly plant, or processing workshop with machinery.',
      'Employ manufacturing workforce while demonstrating adherence to statutory safety, ventilation, and emergency guidelines.'
    ],
    whoNeedsIt: [
      'Premises employing 10 or more workers where manufacturing is carried on with the aid of power.',
      'Premises employing 20 or more workers where manufacturing is carried on without power.',
      'Any hazardous chemical or pharmaceutical manufacturing facility notified by the state government.'
    ],
    whoIsExempt: [
      'Service industry offices and software development facilities without manufacturing machinery.',
      'Mines subject to the Mines Act, 1952 and railway running sheds.'
    ],
    eligibilityCriteria: [
      'Factory building plans must be approved by the Chief Inspector of Factories prior to construction.',
      'Must possess stable structural stability certificate certified by a recognized Chartered Structural Engineer.'
    ],
    applicantTypes: ['Partnership', 'LLP', 'Private Limited', 'Public Limited'],
    activitiesCovered: ['Industrial manufacturing', 'Chemical formulation', 'Automotive assembly', 'Textile mills', 'Machinery workshops'],
    jurisdiction: 'State',
    issuingAuthority: 'Directorate of Industrial Safety and Health (DISH) / Chief Inspector of Factories',
    governingMinistry: 'Ministry of Labour & Employment (State Government)',
    relevantLegislation: 'Factories Act, 1948 & State Factories Rules',
    applicationMode: 'Online & Offline (Hybrid)',
    officialApplicationUrl: 'https://labour.gov.in/',
    officialInfoUrl: 'https://labour.gov.in/',
    governmentFees: {
      summary: '₹1,500 to ₹50,000+ per year calculated based on installed horse power (HP) and maximum worker headcount.',
      items: [
        { particular: 'Up to 20 workers and 50 HP', amount: '₹2,000' },
        { particular: 'Up to 100 workers and 250 HP', amount: '₹10,000' },
        { particular: 'Large heavy industry (500+ workers)', amount: '₹35,000+' }
      ]
    },
    processingTimeEstimate: '30 to 45 Days (includes physical site inspection of fire exits, machine guards, and worker welfare rooms).',
    validityPeriod: '1 to 5 Years (depending on fee paid; multi-year renewals supported in modern single window portals).',
    renewalRequirements: {
      leadTime: 'Must apply for renewal at least 30 days before expiry date (usually before October 31st of calendar year).',
      procedure: 'Submit Form 2 on state industrial portal with latest worker roll and payment challan.',
      penaltyForDelay: '25% penalty surcharge if filed after due date.'
    },
    inspectionRequirements: 'Mandatory on-site inspection by Factory Inspector verifying machine safety guards, fire hydrants, first aid rooms, drinking water facilities, and crèche facilities where applicable.',
    modificationAndTransfer: 'Prior permission required before expanding building floor area or increasing installed electrical horse power.',
    commonRejectionReasons: [
      'Building built deviating from approved factory blueprint layout.',
      'Missing emergency fire exits or blocked egress pathways.',
      'Uncertified cranes, boilers, or pressure vessels lacking third-party test certificates.'
    ],
    requiredDocuments: [
      {
        id: 'doc-factory-blueprint',
        name: 'Sanctioned Factory Building Plan & Machine Layout',
        description: 'Drawn to scale showing clear spacing between machinery lines and designated safety exits.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-structural-stability',
        name: 'Structural Stability Certificate (Form 1A)',
        description: 'Issued and signed by an accredited structural engineer or certified competent person.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-spcb-cto',
        name: 'Pollution Control Board Consent to Operate (CTO)',
        description: 'Valid air and water pollution consent certificate.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-fire-noc-factory',
        name: 'Fire Department Safety NOC',
        description: 'Clearance from State Fire and Emergency Services.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Factory Building Plan Approval (Form 1)',
        description: 'Submit architectural drawings, ventilation calculations, and machine layout to DISH for plan approval before machinery installation.',
        estimatedDuration: '15-20 Days'
      },
      {
        stepNumber: 2,
        title: 'Obtain Environmental CTO & Fire NOC',
        description: 'Secure Consent to Operate from SPCB and Fire NOC from the Fire Department.',
        estimatedDuration: '20-30 Days'
      },
      {
        stepNumber: 3,
        title: 'File Form 2 (Application for Factory Licence)',
        description: 'Submit Form 2 on state single-window portal with HP rating and maximum number of workers.',
        estimatedDuration: '1 Day'
      },
      {
        stepNumber: 4,
        title: 'Pay Statutory Fee based on HP & Worker Slab',
        description: 'Pay calculated government fee via state treasury cyber challan.',
        estimatedDuration: '10 Minutes'
      },
      {
        stepNumber: 5,
        title: 'Physical Safety & Machine Inspection',
        description: 'Factory Inspector inspects plant, verifying machine emergency stops, earthing, ventilation, and canteen facilities.',
        estimatedDuration: '10-15 Days'
      },
      {
        stepNumber: 6,
        title: 'Issuance of Form 4 Factory Licence',
        description: 'DISH issues the official Factory Licence certificate.',
        estimatedDuration: '30-45 Days total'
      }
    ],
    sources: [
      {
        name: 'Ministry of Labour & Employment National Portal',
        url: 'https://labour.gov.in/',
        type: 'Department Website',
        department: 'Government of India',
        lastCheckedDate: '2026-10-11',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Does a software technology company need a Factory Licence?',
        answer: 'No. Pure software and IT service companies fall under the State Shop & Commercial Establishments Act, not the Factories Act 1948, as they do not carry out manufacturing processes.'
      }
    ],
    relatedLicenceIds: ['pollution-consent-to-establish-operate', 'fire-safety-noc', 'shop-and-establishment-registration'],
    verificationStatus: 'Verified',
    verifiedBy: 'Industrial Safety Consultant',
    lastVerifiedDate: '2026-10-22',
    isPopular: false
  },
  {
    id: 'pollution-consent-to-establish-operate',
    slug: 'pollution-consent-to-establish-operate',
    name: 'Pollution Control Board Consent (CTE & CTO)',
    aliases: ['SPCB Consent', 'PCB NOC', 'Consent to Establish (CTE)', 'Consent to Operate (CTO)', 'Pollution Certificate'],
    category: 'construction-factory-industrial',
    categoryLabel: 'Construction, Factory and Industrial',
    tagline: 'Environmental statutory clearances required for industries and projects generating air, water, or noise emissions.',
    overview: 'Pollution Control Board Consents are environmental clearances issued by State Pollution Control Boards (SPCB) under the Water (Prevention and Control of Pollution) Act, 1974 and Air (Prevention and Control of Pollution) Act, 1981. It is a two-phase process: Consent to Establish (CTE) is required before commencing construction, and Consent to Operate (CTO) is required before starting production.',
    whatItAllows: [
      'Construct industrial premises, install machinery, and set up effluent treatment plants (CTE).',
      'Discharge treated trade effluent, sewage, and chimney exhaust within permissible statutory environmental limits (CTO).'
    ],
    whoNeedsIt: [
      'Industries classified under Red, Orange, and Green categories as designated by Central Pollution Control Board (CPCB).',
      'Hotels, hospitals, electroplating units, chemical plants, food manufacturing, and residential construction projects > 20,000 sq meters.'
    ],
    whoIsExempt: [
      'Non-polluting industries categorized under "White Category" (e.g. software development, assembly of solar panels, chalk making) require only an online intimation/self-declaration, exempt from CTE/CTO fees.'
    ],
    eligibilityCriteria: [
      'Premises must meet industrial siting guidelines (setback distances from water bodies, highways, and residential clusters).',
      'Must install an Effluent Treatment Plant (ETP) or Sewage Treatment Plant (STP) matching discharge standards.'
    ],
    applicantTypes: ['Partnership', 'LLP', 'Private Limited', 'Public Limited'],
    activitiesCovered: ['Industrial manufacturing', 'Hospital operation', 'Large residential building', 'Chemical handling'],
    jurisdiction: 'State',
    issuingAuthority: 'State Pollution Control Board (e.g. KSPCB, MPCB, DPCC) / CPCB',
    governingMinistry: 'Ministry of Environment, Forest and Climate Change',
    relevantLegislation: 'Water Act 1974 (Section 25) & Air Act 1981 (Section 21)',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://cpcb.nic.in/',
    officialInfoUrl: 'https://cpcb.nic.in/',
    governmentFees: {
      summary: '₹5,000 to ₹3,00,000+ calculated based on capital investment in land, building, plant & machinery, and pollution categorization (Green, Orange, Red).',
      items: [
        { particular: 'Green Category (Capital Investment up to ₹1 Crore)', amount: '₹5,000 - ₹15,000' },
        { particular: 'Orange Category (Capital Investment ₹5 Crore)', amount: '₹35,000 - ₹75,000' },
        { particular: 'Red Category (Heavy Industry / Hazardous)', amount: '₹1,50,000+' }
      ]
    },
    processingTimeEstimate: '30 to 90 Days (Green category approvals within 30 days; Red category requires environmental committee appraisal).',
    validityPeriod: 'CTE: 1 to 5 Years (during construction phase); CTO: 5 to 10 Years for Green, 5 Years for Orange, 1 to 5 Years for Red.',
    renewalRequirements: {
      leadTime: 'Must apply for CTO renewal at least 60 days before expiration date.',
      procedure: 'Online filing on state pollution portal with latest environmental audit report and stack emission test results.',
      penaltyForDelay: 'Penal action or closure notice under Section 33A of Water Act for operating without valid CTO.'
    },
    inspectionRequirements: 'Environmental Officer conducts on-site sampling of treated effluent, stack emissions, and hazardous waste storage shed.',
    modificationAndTransfer: 'Expansion in production capacity requires fresh CTE application.',
    commonRejectionReasons: [
      'ETP/STP design inadequate for peak wastewater volume.',
      'Siting within prohibited buffer zone of river, lake, or protected forest.',
      'Missing hazardous waste authorized disposal agreement with state TSDF operator.'
    ],
    requiredDocuments: [
      {
        id: 'doc-project-report',
        name: 'Detailed Project Report (DPR) & Flowsheet',
        description: 'Process flow diagram indicating water balance, raw materials, and emission points.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-etp-design',
        name: 'ETP / STP Engineering Design & Layout',
        description: 'Technical drawings of wastewater treatment units and treatment chemistry.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-land-zoning',
        name: 'Land Conversion / Industrial Zone Certificate',
        description: 'Proves land is legally zoned for industrial operations (e.g. KIADB/MIDC allotment).',
        isMandatory: true,
        acceptedFormats: ['PDF']
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Determine Environmental Color Category',
        description: 'Consult CPCB industrial classification list to determine if your unit is White, Green, Orange, or Red.',
        actionHint: 'White category only requires online self-declaration.'
      },
      {
        stepNumber: 2,
        title: 'Apply for Consent to Establish (CTE)',
        description: 'Submit CTE on state SPCB portal with project report and ETP design before commencing civil works.',
        officialPortalUrl: 'https://cpcb.nic.in/'
      },
      {
        stepNumber: 3,
        title: 'Construct Plant & Pollution Control Equipment',
        description: 'Construct building and install full effluent treatment plant and acoustic generator enclosures.',
        estimatedDuration: 'Project Construction Phase'
      },
      {
        stepNumber: 4,
        title: 'Apply for Consent to Operate (CTO)',
        description: 'At least 60 days prior to commencing trial production, apply for CTO on the state portal.',
        estimatedDuration: '1 Day'
      },
      {
        stepNumber: 5,
        title: 'Field Verification & Emission Testing',
        description: 'Board Environmental Officer inspects installation and takes samples.',
        estimatedDuration: '15-20 Days'
      },
      {
        stepNumber: 6,
        title: 'Download CTO Certificate',
        description: 'Download the formal Consent to Operate certificate permitting commercial production.',
        estimatedDuration: '30-60 Days total'
      }
    ],
    sources: [
      {
        name: 'Central Pollution Control Board Official Portal',
        url: 'https://cpcb.nic.in/',
        type: 'Department Website',
        department: 'MoEFCC, Government of India',
        lastCheckedDate: '2026-10-17',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'What is White Category in pollution classification?',
        answer: 'White Category covers practically non-polluting activities (such as software, solar panel assembly, and bio-fertilizer mixing). They do not require CTE or CTO; simple online intimation to the SPCB is sufficient.'
      }
    ],
    relatedLicenceIds: ['factory-licence', 'fire-safety-noc'],
    verificationStatus: 'Verified',
    verifiedBy: 'Environmental Engineering Consultant',
    lastVerifiedDate: '2026-10-22',
    isPopular: false
  },
  {
    id: 'fire-safety-noc',
    slug: 'fire-safety-noc',
    name: 'Fire Safety NOC / Clearance',
    aliases: ['Fire NOC', 'Fire Department Clearance', 'Fire Safety Certificate', 'Provisional Fire NOC'],
    category: 'construction-factory-industrial',
    categoryLabel: 'Construction, Factory and Industrial',
    tagline: 'Mandatory life-safety certificate issued by State Fire & Emergency Services for high-occupancy or high-risk buildings.',
    overview: 'A Fire Safety No Objection Certificate (Fire NOC) is an official clearance issued by the Directorate of Fire and Emergency Services certifying that a building, restaurant, hotel, hospital, educational institute, or factory complies with the National Building Code of India (NBC Part 4) for fire prevention, detection, evacuation, and firefighting installations.',
    whatItAllows: [
      'Obtain municipal occupancy certificates (OC) and commercial operating licences for high-rise buildings and public spaces.',
      'Legally operate commercial venues accommodating public gatherings, dining, or industrial operations.'
    ],
    whoNeedsIt: [
      'Commercial buildings above 15 meters in height.',
      'Restaurants, pubs, and bars with seating capacity >= 50 persons or area > 100 sq meters.',
      'All hospitals, nursing homes, and educational institutions.',
      'All industrial manufacturing units storing combustible or hazardous goods.'
    ],
    whoIsExempt: [
      'Low-risk small retail shops on the ground floor with floor area < 100 sq meters and adequate egress.'
    ],
    eligibilityCriteria: [
      'Building must have clear driveway for fire tender movement (minimum 6 meters wide).',
      'Dual fire escape staircases with fire-rated doors for high-occupancy areas.',
      'Dedicated underground fire water tank and terrace booster pump system.'
    ],
    applicantTypes: ['Sole Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Public Limited'],
    activitiesCovered: ['Hotels', 'Dine-in restaurants', 'Commercial offices', 'Hospitals', 'Factories'],
    jurisdiction: 'State',
    issuingAuthority: 'State Fire and Emergency Services (e.g. Karnataka Fire & Emergency Services)',
    governingMinistry: 'Home Department (State Government)',
    relevantLegislation: 'State Fire Force Act & National Building Code (NBC 2016 Part 4)',
    applicationMode: 'Online & Offline (Hybrid)',
    officialApplicationUrl: 'https://services.india.gov.in/',
    officialInfoUrl: 'https://services.india.gov.in/',
    governmentFees: {
      summary: '₹2,500 to ₹35,000 calculated based on built-up floor area (sq meters) and building height.',
      items: [
        { particular: 'Inspection and scrutiny fee for restaurants / small venues', amount: '₹2,500 - ₹5,000' },
        { particular: 'High-rise commercial / hospital building', amount: '₹15,000 - ₹35,000' }
      ]
    },
    processingTimeEstimate: '20 to 30 Days.',
    validityPeriod: '1 Year for commercial/hospital/hazardous buildings (requires annual renewal); 3 to 5 years for select residential.',
    renewalRequirements: {
      leadTime: 'Must apply for renewal 30 days prior to annual expiry.',
      procedure: 'Submit Form with annual maintenance contract (AMC) report of fire alarms, smoke detectors, and fire pump readiness.',
      penaltyForDelay: 'Notice of disconnection of commercial power/water or municipal licence suspension.'
    },
    inspectionRequirements: 'Divisional Fire Officer conducts comprehensive physical testing of fire alarm sounders, sprinkler pressure, wet risers, fire hose reels, and emergency evacuation signage.',
    modificationAndTransfer: 'Any interior architectural alteration changing staircases or exits requires re-approval.',
    commonRejectionReasons: [
      'Driveway around building encroached by generator sets or parking.',
      'Secondary fire escape staircase blocked, locked, or converted to storage.',
      'Insufficient fire water storage capacity in underground or terrace tanks.'
    ],
    requiredDocuments: [
      {
        id: 'doc-fire-plan',
        name: 'Building Floor Plans with Fire Evacuation Schematics',
        description: 'Showing exit locations, hose reels, extinguisher types, and travel distances.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-fire-specs',
        name: 'Fire System Specifications & Equipment Checklist',
        description: 'Ratings of fire pump motors, sprinkler heads, and automatic smoke detectors.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-fire-amc',
        name: 'Valid Fire Equipment AMC & Third-Party Audit',
        description: 'Maintenance contract confirming operational testing of fire pumps and alarms.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Apply for Provisional Fire NOC',
        description: 'Before construction/interior fitout, submit architectural plans to the Fire Department for provisional clearance.',
        estimatedDuration: '15 Days'
      },
      {
        stepNumber: 2,
        title: 'Install Certified Fire Fighting Systems',
        description: 'Install hydrants, sprinklers, manual call points, fire doors, and smoke detectors as per NBC specifications.',
        estimatedDuration: 'Project execution'
      },
      {
        stepNumber: 3,
        title: 'Apply for Final Fire NOC',
        description: 'Submit completion report on the state portal and request physical site inspection.',
        officialPortalUrl: 'https://services.india.gov.in/'
      },
      {
        stepNumber: 4,
        title: 'Physical Fire Drill and System Testing',
        description: 'Fire officers visit site, test pump water pressure at top floor, and verify emergency lighting.',
        estimatedDuration: '1 Day on-site'
      },
      {
        stepNumber: 5,
        title: 'Issuance of Final Fire Safety Certificate',
        description: 'Download the issued Fire Safety NOC certificate.',
        estimatedDuration: '20-30 Days total'
      }
    ],
    sources: [
      {
        name: 'National Services Portal Fire Clearances',
        url: 'https://services.india.gov.in/',
        type: 'Application Portal',
        department: 'State Fire and Emergency Services',
        lastCheckedDate: '2026-10-22',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Do all restaurants need a Fire NOC?',
        answer: 'Under municipal rules, restaurants with air conditioning, seating 50 or more patrons, or occupying over 100 sq meters require a Fire NOC before a Municipal Health Trade Licence is issued.'
      }
    ],
    relatedLicenceIds: ['municipal-trade-licence', 'fssai-state-licence', 'factory-licence'],
    verificationStatus: 'Verified',
    verifiedBy: 'Fire & Safety Officer',
    lastVerifiedDate: '2026-10-22',
    isPopular: false
  },
  {
    id: 'retail-drug-licence',
    slug: 'retail-drug-licence',
    name: 'Retail Drug Licence (Form 20 & 21)',
    aliases: ['Pharmacy License', 'Chemist Shop License', 'Form 20 License', 'Form 21 Allopathic License', 'Medical Store Permit'],
    category: 'health-pharmacy-medical',
    categoryLabel: 'Health, Pharmacy and Medical',
    tagline: 'Statutory licence granted by State Drugs Control Department to dispense allopathic medicines and Schedule H/X drugs.',
    overview: 'A Retail Drug Licence (issued on Form 20 for general allopathic drugs and Form 21 for Schedule C/C1 biological drugs) is a strict regulatory permit granted under the Drugs and Cosmetics Act, 1940 and Drugs and Cosmetics Rules, 1945. It authorizes a chemist or pharmacy to store, dispense, and sell prescription allopathic medicines under the direct personal supervision of a Registered Pharmacist.',
    whatItAllows: [
      'Sell and dispense allopathic pharmaceuticals, Schedule H, H1, and Schedule C/C1 prescription drugs.',
      'Operate retail medical stores, hospital pharmacies, and retail pharmacy chains.'
    ],
    whoNeedsIt: [
      'Every retail chemist shop, hospital dispensary, standalone pharmacy, or chain medical store.'
    ],
    whoIsExempt: [
      'None. Selling allopathic medicines without a valid drug licence is a non-bailable criminal offense under Section 18/27 of the Drugs and Cosmetics Act.'
    ],
    eligibilityCriteria: [
      'Must employ at least one full-time Registered Pharmacist registered with the State Pharmacy Council (holding valid D.Pharm, B.Pharm, or Pharm.D).',
      'Premises must have a minimum carpet area of 10 square meters (or 15 sq meters for combined retail + wholesale).',
      'Must install functional 24x7 refrigerator/deep freezer for temperature-sensitive drugs (vaccines, insulin).'
    ],
    applicantTypes: ['Individual', 'Sole Proprietorship', 'Partnership', 'LLP', 'Private Limited'],
    activitiesCovered: ['Chemist shop', 'Hospital pharmacy', 'Retail medicine dispensing'],
    jurisdiction: 'State',
    issuingAuthority: 'State Drugs Control Department / Licensing Authority (Drugs)',
    governingMinistry: 'Ministry of Health and Family Welfare / CDSCO',
    relevantLegislation: 'Drugs and Cosmetics Act, 1940 & Rules, 1945',
    applicationMode: 'Online & Offline (Hybrid)',
    officialApplicationUrl: 'https://services.india.gov.in/',
    officialInfoUrl: 'https://services.india.gov.in/',
    governmentFees: {
      summary: '₹3,000 for Form 20 and Form 21 (₹1,500 per form) + inspection cess.',
      items: [
        { particular: 'Form 20 (General Allopathic Drugs)', amount: '₹1,500' },
        { particular: 'Form 21 (Schedule C and C1 Biological Drugs)', amount: '₹1,500' }
      ]
    },
    processingTimeEstimate: '30 to 45 Days.',
    validityPeriod: '5 Years (subject to annual retention fee).',
    renewalRequirements: {
      leadTime: 'Pay retention fee before expiry of 5-year block.',
      procedure: 'File Form 19 online with pharmacist renewal certificate and updated rent deed.',
      penaltyForDelay: '2% late fee per month up to 6 months; cancellation thereafter.'
    },
    inspectionRequirements: 'Mandatory physical inspection by the District Drug Inspector checking premises dimensions, refrigerator temperature log, pharmacist presence, and storage racks.',
    modificationAndTransfer: 'Change of competent registered pharmacist must be reported to the Drug Inspector within 7 days.',
    commonRejectionReasons: [
      'Pharmacist is registered at another active pharmacy or employed elsewhere.',
      'Premises area is below 10 square meters.',
      'Missing deep-freeze refrigerator invoice and warranty proof.'
    ],
    requiredDocuments: [
      {
        id: 'doc-pharm-reg',
        name: 'Registration Certificate of Registered Pharmacist',
        description: 'Valid certificate issued by State Pharmacy Council with renewal receipt.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-pharm-appointment',
        name: 'Appointment Letter & Affidavit of Pharmacist',
        description: 'Sworn affidavit confirming full-time presence and non-association with any other retail outlet.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-pharm-fridge',
        name: 'Purchase Invoice of Refrigerator',
        description: 'Invoice showing serial number and make of commercial refrigerator.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-pharm-blueprint',
        name: 'Blueprint Layout of Premises (Minimum 10 sq m)',
        description: 'Dimensioned drawing demonstrating compliant floor area.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Appoint Registered Pharmacist & Secure Premises',
        description: 'Ensure premises is >= 10 sq m and install refrigerator. Execute agreement with full-time Registered Pharmacist.',
        estimatedDuration: '1-2 Weeks'
      },
      {
        stepNumber: 2,
        title: 'Apply Online via State Drugs Portal',
        description: 'Submit Form 19 on state drugs control portal with pharmacist credentials and premises blueprint.',
        officialPortalUrl: 'https://services.india.gov.in/'
      },
      {
        stepNumber: 3,
        title: 'Pay Statutory Fee of ₹3,000',
        description: 'Pay fee for Form 20 and Form 21 via treasury portal.',
        estimatedDuration: '15 Minutes'
      },
      {
        stepNumber: 4,
        title: 'Drug Inspector Physical Verification',
        description: 'Drug Inspector visits pharmacy, verifies physical pharmacist credentials in person, measures floor dimensions, and inspects refrigerator.',
        estimatedDuration: '15-20 Days'
      },
      {
        stepNumber: 5,
        title: 'Grant of Form 20 & 21 Licences',
        description: 'Assistant Drugs Controller approves and issues digital licences.',
        estimatedDuration: '30-45 Days total'
      }
    ],
    sources: [
      {
        name: 'National Drugs Services Portal',
        url: 'https://services.india.gov.in/',
        type: 'Application Portal',
        department: 'State Drugs Control Administration',
        lastCheckedDate: '2026-10-22',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Can a person without a pharmacy degree own a pharmacy?',
        answer: 'Yes. Any entrepreneur can own a pharmacy business, provided they employ a qualified Registered Pharmacist (D.Pharm/B.Pharm) full-time to supervise dispensing and sales.'
      }
    ],
    relatedLicenceIds: ['municipal-trade-licence', 'shop-and-establishment-registration', 'gst-registration'],
    verificationStatus: 'Verified',
    verifiedBy: 'Drugs Regulatory Specialist',
    lastVerifiedDate: '2026-10-22',
    isPopular: false
  },
  {
    id: 'karnataka-professional-tax-registration',
    slug: 'karnataka-professional-tax-registration',
    name: 'State Professional Tax (PT) Registration',
    aliases: ['PT Registration', 'e-Prerana', 'Professional Tax Enrollment', 'PT Enrolment Certificate (PTEC)', 'PTRC'],
    category: 'state-local-services',
    categoryLabel: 'State and Local Government Services',
    tagline: 'State commercial tax registration mandatory for employers deducting tax from employee salaries and practicing professionals.',
    overview: 'Professional Tax is a state-level tax levied under Article 276 of the Constitution of India on individuals earning income from salaries, employment, trade, or practicing a profession (doctors, lawyers, chartered accountants, company directors). In Karnataka, employers must register under the Karnataka Tax on Professions, Trades, Callings and Employments Act, 1976 via the e-Prerana portal.',
    whatItAllows: [
      'Deduct and remit Professional Tax from employees earning >= ₹25,000 per month (₹200/month in Karnataka).',
      'Obtain Professional Tax Enrolment Certificate (PTEC) for the business entity and Professional Tax Registration Certificate (PTRC) for employee deductions.'
    ],
    whoNeedsIt: [
      'Every employer with salaried staff earning above statutory state threshold (Karnataka: ₹25,000/month).',
      'Individual professionals, freelancers, sole proprietors, doctors, engineers, and company directors.'
    ],
    whoIsExempt: [
      'Employees earning under ₹25,000 per month (in Karnataka).',
      'Senior citizens aged 60+ and persons with permanent physical disability.'
    ],
    eligibilityCriteria: [
      'Carrying on a profession, trade, or employing workers in Karnataka.',
      'Must apply within 30 days of employing personnel or starting professional practice.'
    ],
    applicantTypes: ['Individual', 'Sole Proprietorship', 'Partnership', 'LLP', 'Private Limited', 'Public Limited'],
    activitiesCovered: ['Salaried employment', 'Medical practice', 'Legal practice', 'Consultancy', 'Business trade'],
    jurisdiction: 'State',
    state: 'Karnataka',
    municipality: 'Bengaluru',
    issuingAuthority: 'Commercial Taxes Department, Government of Karnataka',
    governingMinistry: 'Finance Department, Government of Karnataka',
    relevantLegislation: 'Karnataka Tax on Professions, Trades, Callings and Employments Act, 1976',
    applicationMode: 'Online',
    officialApplicationUrl: 'https://karnatakatax.gov.in/',
    officialInfoUrl: 'https://karnatakatax.gov.in/',
    governmentFees: {
      summary: '₹0 application fee; annual statutory tax is ₹2,500 per year for entity enrollment, plus ₹200/month per eligible employee.',
      items: [
        { particular: 'Application Processing Fee', amount: '₹0' },
        { particular: 'Annual PTEC entity tax (Karnataka)', amount: '₹2,500 / year' },
        { particular: 'Employee PTRC deduction (salary >= ₹25,000)', amount: '₹200 / month' }
      ]
    },
    processingTimeEstimate: '1 to 3 Working Days (instant online registration on e-Prerana).',
    validityPeriod: 'Lifetime (subject to regular monthly return filing and annual April tax payment).',
    renewalRequirements: {
      leadTime: 'Annual tax payment due by April 30th of every year.',
      procedure: 'Pay online via e-Prerana portal under Form 4 return.',
      penaltyForDelay: '1.25% interest per month for delayed tax remittance.'
    },
    inspectionRequirements: 'Zero physical inspection required.',
    modificationAndTransfer: 'Amendments filed online on the Commercial Taxes e-Prerana portal.',
    commonRejectionReasons: [
      'PAN mismatch with applicant name.',
      'Missing registered office lease deed.'
    ],
    requiredDocuments: [
      {
        id: 'doc-pt-pan',
        name: 'PAN Card of Entity & Proprietor/Director',
        description: 'Permanent Account Number copy.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-pt-address',
        name: 'Proof of Business Address in Karnataka',
        description: 'Rent agreement or electricity bill in Karnataka.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      },
      {
        id: 'doc-pt-bank',
        name: 'Bank Account Cancelled Cheque',
        description: 'Operating bank account in Karnataka.',
        isMandatory: true,
        acceptedFormats: ['PDF']
      }
    ],
    steps: [
      {
        stepNumber: 1,
        title: 'Open Karnataka Commercial Tax e-Prerana Portal',
        description: 'Visit https://karnatakatax.gov.in/ and select "Professional Tax Services" > "e-Registration".',
        officialPortalUrl: 'https://karnatakatax.gov.in/'
      },
      {
        stepNumber: 2,
        title: 'Select Registration Type (Enrolment / Registration)',
        description: 'Choose Enrolment (EC) for the entity or Registration (RC) for deducting tax from employees.',
        estimatedDuration: '5 Minutes'
      },
      {
        stepNumber: 3,
        title: 'Enter PAN and Business Details',
        description: 'Enter PAN, business commencement date, and estimated number of employees earning above ₹25,000.',
        estimatedDuration: '10 Minutes'
      },
      {
        stepNumber: 4,
        title: 'Instant Certificate Issuance',
        description: 'Download the 9-digit PT Enrolment Certificate (PTEC) and Registration Certificate (PTRC).',
        estimatedDuration: 'Instant'
      }
    ],
    sources: [
      {
        name: 'Karnataka Commercial Taxes Official Portal',
        url: 'https://karnatakatax.gov.in/',
        type: 'Application Portal',
        department: 'Commercial Taxes Department, Government of Karnataka',
        lastCheckedDate: '2026-10-19',
        isOfficialGovDomain: true
      }
    ],
    faqs: [
      {
        question: 'Does every Indian state have Professional Tax?',
        answer: 'No. Professional Tax is only levied by certain states (including Karnataka, Maharashtra, West Bengal, Tamil Nadu, Telangana, Gujarat, Kerala). States like Delhi, Rajasthan, and Haryana do not levy Professional Tax.'
      }
    ],
    relatedLicenceIds: ['shop-and-establishment-registration', 'municipal-trade-licence', 'gst-registration'],
    verificationStatus: 'Verified',
    verifiedBy: 'State Tax Practitioner',
    lastVerifiedDate: '2026-10-22',
    isPopular: false
  }
];
