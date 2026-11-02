import express from 'express';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const app = express();
app.use(express.json());

// Initialize Gemini Client
let ai: GoogleGenAI | null = null;
if (process.env.GEMINI_API_KEY) {
  ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// In-memory corrections / feedback storage
const correctionReports: any[] = [];

const router = express.Router();

// Gemini Assistant Endpoint: /mitra
router.post('/mitra', async (req, res) => {
  try {
    const { message, conversationHistory, contextLicenceId } = req.body;

    if (!message || typeof message !== 'string') {
      return res.status(400).json({ error: 'Message is required' });
    }

    const systemInstruction = `You are "Licence Mitra", an intelligent, trustworthy digital services assistant for "Licence Holding" — India's All-in-One Licence Information Platform.
Your purpose: Help citizens, shopkeepers, drivers, entrepreneurs, doctors, farmers, and corporate founders understand licensing, permits, and registration requirements in India.

CRITICAL OPERATIONAL RULES:
1. NEVER fabricate government fees, eligibility requirements, legal penal codes, or official portal domains.
2. If an external government service cannot be integrated directly, clearly guide the user to its official verified portal (e.g. Parivahan for driving, FoSCoS for FSSAI food, GST Portal, Udyam for MSME, MCA21 V3 for companies, DGFT for IEC).
3. Distinguish clearly between mandatory registrations, conditional permits, and optional registrations.
4. Distinguish between Licences (permission to conduct restricted activity, e.g. driving, restaurant, factory, pharmacy), Registrations (recording entity with authorities, e.g. GST, Udyam, Shop & Establishment), and Certificates (e.g. Incorporation, Trademark).
5. Always state that requirements and fees may vary by state and local municipal corporation (e.g. Karnataka BBMP vs Maharashtra BMC vs Delhi MCD).
6. Always provide clickable markdown citations or source references when stating government procedures.
7. Include this clear disclaimer when concluding guidance: "Licence Holding is an independent information platform and not a government body. Always verify current terms on the official portal before paying fees."
8. Tone: Professional, respectful, simple plain English, encouraging and accessible to first-time applicants.`;

    if (ai) {
      const prompt = `User Query: "${message}"
${contextLicenceId ? `User is currently viewing Licence ID: ${contextLicenceId}` : ''}
${conversationHistory && conversationHistory.length > 0 ? `Recent conversation context:\n${JSON.stringify(conversationHistory.slice(-4))}` : ''}

Provide a helpful, structured answer with bullet points, numbered roadmap steps where appropriate, official government domain references, and next action items.`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.8-flash',
        contents: prompt,
        config: {
          systemInstruction,
          temperature: 0.4,
        },
      });

      const responseText = response.text || 'I could not generate an answer right now. Please check the official government portal.';
      return res.json({ reply: responseText, source: 'gemini' });
    } else {
      // Deterministic fallback if API key is not yet set in environment
      const lower = message.toLowerCase();
      let reply = '';
      if (lower.includes('driving') || lower.includes('dl') || lower.includes('license') && (lower.includes('car') || lower.includes('bike') || lower.includes('learner'))) {
        reply = `### Driving Licences in India (Parivahan Sarathi)

In India, obtaining a driving licence is a two-stage process under the Motor Vehicles Act, 1988:

1. **Learner's Licence (LLR)**:
   - **Eligibility**: Age 18+ for light motor vehicles (cars) and geared two-wheelers; Age 16+ for gearless two-wheelers with parental consent.
   - **Portal**: [parivahan.gov.in](https://parivahan.gov.in/)
   - **Fee**: ₹150 per class + ₹50 test fee.
   - **Validity**: 6 months.

2. **Permanent Driving Licence (DL)**:
   - **Timeline**: You can apply 30 days after your LLR is issued.
   - **Test**: Practical driving test at the RTO test track.
   - **Fee**: ₹700 (includes Smart Card & postal delivery).
   - **Validity**: Up to 20 years or age 40 (whichever comes first).

**Official Portal**: Visit [parivahan.gov.in](https://parivahan.gov.in/) to apply online with Aadhaar e-KYC.

*Disclaimer: Licence Holding is an independent informational platform. Please confirm rules at your local RTO.*`;
      } else if (lower.includes('food') || lower.includes('restaurant') || lower.includes('fssai') || lower.includes('cloud kitchen')) {
        reply = `### Food Business Licences (FSSAI / FoSCoS)

Under the Food Safety and Standards Act, 2006, all food operators must register based on annual turnover:

1. **FSSAI Basic Registration** (Turnover up to ₹12 Lakh/year):
   - For petty food stalls, home bakers, and small cloud kitchens.
   - **Government Fee**: ₹100 per year (1 to 5 years validity).
   - **Time**: 7 to 15 working days.

2. **FSSAI State Licence** (Turnover ₹12 Lakh to ₹20 Crore/year):
   - For full-scale restaurants, catering services, and mid-sized food manufacturers.
   - **Government Fee**: ₹2,000 to ₹5,000 per year.
   - **Requirement**: NABL water potability test, kitchen layout, and FSO physical inspection.

3. **FSSAI Central Licence** (Turnover > ₹20 Crore or multi-state):
   - For large manufacturers, food importers, and multi-state chains.
   - **Government Fee**: ₹7,500 per year.

**Official Portal**: Apply directly on [foscos.fssai.gov.in](https://foscos.fssai.gov.in/).

*Disclaimer: Licence Holding is an independent informational platform.*`;
      } else if (lower.includes('gst') || lower.includes('tax')) {
        reply = `### GST Registration in India

GST Registration is an all-India 15-digit tax ID (GSTIN) issued by the Central Board of Indirect Taxes and Customs (CBIC).

- **Turnover Threshold**:
  - Goods: ₹40 Lakh per year (₹20 Lakh in special category states).
  - Services: ₹20 Lakh per year (₹10 Lakh in special category states).
  - Mandatory regardless of turnover for inter-state sellers and e-commerce vendors (Amazon, Flipkart).
- **Official Fee**: **₹0 (Completely Free)**. The Government of India charges zero fees on the official portal.
- **Documents Needed**: PAN, Aadhaar of authorized signatory, Electricity bill of business place, and Landlord NOC.
- **Official Portal**: [www.gst.gov.in](https://www.gst.gov.in/) (Never pay on third-party imitation websites).

*Disclaimer: Licence Holding is an independent informational platform.*`;
      } else if (lower.includes('msme') || lower.includes('udyam')) {
        reply = `### Udyam MSME Registration

Udyam is the zero-cost official registration for Micro, Small, and Medium Enterprises issued by the Ministry of MSME.

- **Benefits**: Priority Sector Lending with bank interest subsidies, 50% discount on Trademark & Patent fees, protection against delayed payments (MSME SAMADHAAN), and tender EMD exemptions.
- **Government Fee**: **₹0 (Completely Free)**.
- **Requirements**: Aadhaar number and PAN card. No paper document uploads required (instant self-declaration).
- **Official Portal**: [udyamregistration.gov.in](https://udyamregistration.gov.in/).

*Disclaimer: Licence Holding is an independent informational platform.*`;
      } else {
        reply = `Hello! I am **Licence Mitra**, your digital licence guide for India.

I can guide you on requirements, official portals, eligibility, and fees for:
- **Driving & Transport**: Learner DL, Permanent DL, Commercial DL, and Renewals on Parivahan.
- **Food & Eateries**: FSSAI Basic, State, and Central licences on FoSCoS.
- **Business & Trade**: Shop & Establishment Act, Municipal Trade Licences, GST, Udyam MSME, and Company Incorporation.
- **Industry & Environment**: Factory Licence, Fire Safety NOC, and Pollution Control Board consents (CTE/CTO).
- **State-specific Permits**: e.g., BBMP Trade Licence and Professional Tax in Karnataka.

How can I help with your specific business activity or licence requirement today?`;
      }

      return res.json({ reply, source: 'knowledge-base' });
    }
  } catch (error: any) {
    console.error('Error in /api/mitra:', error);
    res.status(500).json({
      error: 'Failed to process AI query',
      details: error.message || 'Unknown server error',
    });
  }
});

// Community corrections submission
router.post('/corrections', (req, res) => {
  const { licenceId, licenceName, issueType, details, submittedByEmail } = req.body;
  const report = {
    id: `rep-${Date.now()}`,
    licenceId: licenceId || 'general',
    licenceName: licenceName || 'General Feedback',
    issueType: issueType || 'Other',
    details: details || '',
    submittedByEmail: submittedByEmail || 'anonymous@user.in',
    submittedAt: new Date().toISOString(),
    status: 'Pending',
  };
  correctionReports.unshift(report);
  res.json({ success: true, reportId: report.id });
});

// Get submitted corrections for Admin view
router.get('/corrections', (req, res) => {
  res.json({ reports: correctionReports });
});

// Support both /api/... and direct routing
app.use('/api', router);
app.use('/', router);

export default app;
