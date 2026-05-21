export interface SegmentContent {
  slug: string;
  title: string;
  eyebrow: string;
  heroImage: string;
  overview: string;
  whoIsItFor: string[];
  whyItMatters: string[];
  typicalStructures: string[];
  evaluationPoints: string[];
  approvalConsiderations: string[];
  categoryKey: string;
}

export const segmentContents: Record<string, SegmentContent> = {
  "integrated-tourism": {
    slug: "integrated-tourism",
    title: "Integrated Tourism Projects",
    eyebrow: "Investment Segment",
    heroImage:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865&auto=format&fit=crop",
    overview:
      "Integrated tourism projects may combine villas, boutique hospitality, dining, wellness, beach clubs, water sports, and managed tourism services. These opportunities may be suitable for developers seeking villa-led or mixed-use tourism concepts on selected island land or zones, subject to approvals and legal structuring.",
    whoIsItFor: [
      "Real estate developers seeking mixed-use tourism concepts",
      "Hospitality groups looking for management opportunities",
      "Family offices interested in diversified tourism assets",
      "Funds seeking multiple revenue stream investments",
    ],
    whyItMatters: [
      "Diversified revenue streams across hospitality, F&B, and activities",
      "Potential for strata villa sales within integrated developments",
      "Lower single-asset concentration risk",
      "Emerging segment with differentiated positioning potential",
      "Potential for phased development and capital deployment",
    ],
    typicalStructures: [
      "Integrated tourism zone designation",
      "Mixed-use development with villa and hospitality components",
      "Master development agreement with phasing",
      "Potential strata registration for villa components",
      "Management agreement for hospitality operations",
    ],
    evaluationPoints: [
      "Tourism zone eligibility and classification",
      "Land control and lease structure",
      "Environmental and planning approvals",
      "Infrastructure and transfer access",
      "Market positioning and competitive landscape",
      "Capital structure and phasing requirements",
    ],
    approvalConsiderations: [
      "Ministry of Tourism integrated tourism classification",
      "Environmental impact assessment",
      "Land-use and planning approvals",
      "Council or local authority engagement",
      "Strata eligibility for villa components",
    ],
    categoryKey: "integrated_tourism",
  },
  "strata-villas": {
    slug: "strata-villas",
    title: "Strata Villa Developments",
    eyebrow: "Investment Segment",
    heroImage:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2874&auto=format&fit=crop",
    overview:
      "Strata villa developments are villa-led tourism real estate concepts where managed villas may be sold or leased as long-term tourism strata interests, subject to project eligibility, approvals, registration, lease documentation, and management agreements.",
    whoIsItFor: [
      "Real estate developers with villa sales experience",
      "Real estate companies and sales partners",
      "Family offices seeking managed hospitality exposure",
      "Hospitality groups interested in villa management",
    ],
    whyItMatters: [
      "Resort/operator continues managing the hospitality operation",
      "Rental programme and revenue-share model",
      "Owner-use plus rental income potential",
      "Managed maintenance and guest services",
      "Luxury product packaging",
      "Diving, water sports, wellness, safari tourism, island experiences",
      "Potential buyer appeal at accessible Maldives price points",
      "Possible mortgage/sublease rights subject to registration and approvals",
    ],
    typicalStructures: [
      "Long-term leasehold or strata interest structure",
      "Professional operator management agreement",
      "Rental programme with revenue-sharing",
      "Owner-use allocation within management framework",
      "Maintenance and service charge arrangements",
    ],
    evaluationPoints: [
      "Project eligibility for strata registration",
      "Land lease structure and head lease terms",
      "Operator selection and management agreement",
      "Rental programme economics and revenue share",
      "Buyer market analysis and price positioning",
      "Sales and marketing distribution strategy",
    ],
    approvalConsiderations: [
      "Tourism strata registration requirements",
      "Ministry of Tourism approval process",
      "Lease documentation and registration",
      "Management agreement compliance",
      "Buyer disclosure and documentation requirements",
    ],
    categoryKey: "strata_villas",
  },
  "inhabited-island-tourism-land": {
    slug: "inhabited-island-tourism-land",
    title: "Inhabited Island Tourism Land",
    eyebrow: "Investment Segment",
    heroImage:
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?q=80&w=2787&auto=format&fit=crop",
    overview:
      "Selected inhabited islands may offer tourism land or partnership opportunities with lower entry barriers than traditional private-island resort acquisitions. Projects may involve council-linked land, private land, lease structures, cross-subsidy concepts, boutique hotel projects, or integrated tourism concepts, subject to land-use, council, Ministry of Tourism, planning, and environmental approvals.",
    whoIsItFor: [
      "Developers seeking lower entry-cost opportunities",
      "Hospitality operators interested in local island tourism",
      "Construction companies with regional experience",
      "Investors interested in emerging tourism segments",
    ],
    whyItMatters: [
      "Lower capital requirements than private island development",
      "Existing infrastructure on inhabited islands",
      "Growing local island tourism segment",
      "Community partnership and employment opportunities",
      "Domestic airport connectivity in many locations",
      "Differentiated guest experience potential",
    ],
    typicalStructures: [
      "Council or private land lease arrangements",
      "Tourism development agreement",
      "Community partnership structures",
      "Cross-subsidy arrangements where applicable",
      "Guesthouse or boutique hotel licensing",
    ],
    evaluationPoints: [
      "Land availability and control clarity",
      "Council engagement and local support",
      "Tourism use eligibility",
      "Transfer and infrastructure access",
      "Community integration requirements",
      "Competitive positioning within inhabited island tourism",
    ],
    approvalConsiderations: [
      "Land-use approvals and council authority",
      "Ministry of Tourism registration",
      "Environmental assessment requirements",
      "Community benefit or employment commitments",
      "Building and planning permits",
    ],
    categoryKey: "inhabited_island_tourism_land",
  },
  "resort-development": {
    slug: "resort-development",
    title: "Resort Development Projects",
    eyebrow: "Investment Segment",
    heroImage:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=2833&auto=format&fit=crop",
    overview:
      "Traditional resort development opportunities including private island, lagoon, leasehold, or tourism development sites for experienced developers and hospitality groups.",
    whoIsItFor: [
      "Experienced resort developers",
      "International hospitality groups",
      "Institutional investors and funds",
      "Family offices with hospitality expertise",
    ],
    whyItMatters: [
      "Established development pathway and precedent",
      "Strong Maldives luxury resort brand recognition",
      "Potential for international operator partnerships",
      "Long-term leasehold structures available",
      "Growing tourism demand and airlift capacity",
    ],
    typicalStructures: [
      "Island leasehold from government",
      "Development agreement with construction timeline",
      "Operator management contract or franchise",
      "Project finance and equity structure",
      "Operating company and property company separation",
    ],
    evaluationPoints: [
      "Island characteristics and natural features",
      "Transfer logistics and guest accessibility",
      "Environmental sensitivity and constraints",
      "Operator interest and brand positioning",
      "Development cost and timeline assessment",
      "Competitive set and market positioning",
    ],
    approvalConsiderations: [
      "Island lease allocation and terms",
      "Environmental impact assessment",
      "Ministry of Tourism development approval",
      "Construction permits and inspections",
      "Operating license requirements",
    ],
    categoryKey: "resort_development",
  },
  "resort-assets": {
    slug: "resort-assets",
    title: "Resort Assets for Sale",
    eyebrow: "Investment Segment",
    heroImage:
      "https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2940&auto=format&fit=crop",
    overview:
      "Operating, underperforming, partially completed, or repositioning resort assets for acquisition, partnership, redevelopment, or recapitalisation.",
    whoIsItFor: [
      "Hospitality groups seeking operational platforms",
      "Turnaround and repositioning specialists",
      "Funds with distressed or special situations focus",
      "Operators seeking management opportunities",
    ],
    whyItMatters: [
      "Established infrastructure and operations",
      "Potential for value creation through repositioning",
      "Faster time-to-market than ground-up development",
      "Operating cash flow during transition period",
      "Brand and operator upgrade opportunities",
    ],
    typicalStructures: [
      "Asset sale with lease assignment",
      "Share or company acquisition",
      "Management contract transition",
      "Recapitalisation and partnership",
      "Sale-leaseback arrangements",
    ],
    evaluationPoints: [
      "Current operational and financial performance",
      "Lease terms and remaining tenure",
      "Physical condition and renovation requirements",
      "Repositioning potential and market positioning",
      "Operator transition requirements",
      "Deal structure and capital requirements",
    ],
    approvalConsiderations: [
      "Lease transfer and assignment approvals",
      "Change of control requirements",
      "Operating license transfer",
      "Staff and employment considerations",
      "Regulatory compliance status",
    ],
    categoryKey: "resort_assets",
  },
  "government-council-projects": {
    slug: "government-council-projects",
    title: "Government & Council Projects",
    eyebrow: "Investment Segment",
    heroImage:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2870&auto=format&fit=crop",
    overview:
      "Public-sector and council-linked opportunities can support tourism development, infrastructure-linked investment, PPP-style structures, cross-subsidy concepts, and local economic development. These opportunities require careful legal, public-sector, and approval review.",
    whoIsItFor: [
      "Developers with public-sector partnership experience",
      "Infrastructure and construction companies",
      "Funds interested in government-linked opportunities",
      "Operators seeking council-supported projects",
    ],
    whyItMatters: [
      "Potential for favorable lease or land terms",
      "Community and government alignment",
      "Infrastructure co-investment opportunities",
      "Priority processing potential",
      "Long-term development rights",
      "Social impact and local employment focus",
    ],
    typicalStructures: [
      "Public-private partnership arrangements",
      "Council land allocation with development obligations",
      "Cross-subsidy structures linking tourism to infrastructure",
      "Build-operate-transfer models",
      "Community benefit agreements",
    ],
    evaluationPoints: [
      "Council authority and decision-making clarity",
      "Land allocation process and timeline",
      "Community benefit and employment requirements",
      "Infrastructure obligations and costs",
      "Political and policy risk assessment",
      "Contract enforcement and dispute resolution",
    ],
    approvalConsiderations: [
      "Council resolution and local authority approval",
      "Ministry and central government alignment",
      "Public procurement requirements if applicable",
      "Environmental and social impact assessment",
      "Community consultation requirements",
    ],
    categoryKey: "government_council",
  },
  "guesthouse-boutique-hotels": {
    slug: "guesthouse-boutique-hotels",
    title: "Guesthouse & Boutique Hotel Projects",
    eyebrow: "Investment Segment",
    heroImage:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2960&auto=format&fit=crop",
    overview:
      "Smaller hospitality opportunities on local islands, including guesthouses, boutique hotels, clusters, expansions, operator partnerships, and repositioning.",
    whoIsItFor: [
      "Hospitality entrepreneurs and operators",
      "Boutique hotel brands and management companies",
      "Investors seeking lower entry-point hospitality",
      "Construction companies with hospitality experience",
    ],
    whyItMatters: [
      "Lower capital requirements and faster development",
      "Growing local island tourism demand",
      "Direct community engagement and employment",
      "Authentic Maldives experience positioning",
      "Potential for cluster development and expansion",
      "Strong online travel agency distribution",
    ],
    typicalStructures: [
      "Guesthouse or boutique hotel licensing",
      "Land lease on inhabited islands",
      "Management or franchise arrangements",
      "Cluster ownership and unified branding",
      "Expansion and acquisition opportunities",
    ],
    evaluationPoints: [
      "Location and beach access quality",
      "Transfer connectivity and guest accessibility",
      "Existing online reputation and reviews",
      "Expansion potential and adjacent land",
      "Staff availability and operating costs",
      "Competitive positioning within local island segment",
    ],
    approvalConsiderations: [
      "Guesthouse or boutique hotel license requirements",
      "Land-use and council approvals",
      "Building permits and inspections",
      "Tourism registration and compliance",
      "Alcohol and dietary restriction regulations",
    ],
    categoryKey: "guesthouse_boutique",
  },
  "private-islands": {
    slug: "private-islands",
    title: "Virgin Island / Private Island Opportunities",
    eyebrow: "Investment Segment",
    heroImage:
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=2940&auto=format&fit=crop",
    overview:
      "Selected virgin island, lagoon, and private island tourism development opportunities for larger-scale resort developers and family offices. These opportunities may involve higher acquisition costs, longer approval timelines, lease requirements, and larger capital commitments.",
    whoIsItFor: [
      "Major resort developers and hospitality groups",
      "Ultra-high-net-worth family offices",
      "Institutional investors and sovereign funds",
      "International luxury hotel brands",
    ],
    whyItMatters: [
      "Flagship destination positioning potential",
      "Complete design and development control",
      "Premium pricing and exclusivity",
      "Long-term lease security",
      "Brand-defining opportunities for operators",
      "Substantial value creation potential",
    ],
    typicalStructures: [
      "Long-term government island lease",
      "Competitive bidding or direct allocation",
      "Development agreement with milestones",
      "International operator partnership",
      "Substantial equity and project finance",
    ],
    evaluationPoints: [
      "Island size, lagoon, and natural features",
      "Environmental sensitivity and constraints",
      "Transfer logistics and guest access options",
      "Development cost and timeline assessment",
      "Operator interest and brand alignment",
      "Competitive positioning and market differentiation",
    ],
    approvalConsiderations: [
      "Island lease allocation process",
      "Environmental impact assessment",
      "Ministry of Tourism development approval",
      "Lease premium and annual rental terms",
      "Development timeline and milestone requirements",
    ],
    categoryKey: "private_island",
  },
};

export function getSegmentContent(slug: string): SegmentContent | undefined {
  return segmentContents[slug];
}
