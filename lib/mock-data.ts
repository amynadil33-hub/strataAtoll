import type {
  Opportunity,
  InsightArticle,
  Segment,
  OpportunityCategory,
} from "./types";

// 18 Sample Opportunities
export const opportunities: Opportunity[] = [
  {
    id: "opp_001",
    slug: "project-azure",
    title: "Integrated Tourism Development with Strata Villa Potential",
    codeName: "Project Azure",
    category: "integrated_tourism",
    broadRegion: "Northern Maldives",
    locationLabel: "Northern Atolls",
    summary:
      "A compelling integrated tourism opportunity combining villa-led development with managed hospitality services, beach club, and water sports facilities on selected island land.",
    proposedUse:
      "Mixed-use tourism development with strata villa potential, boutique F&B, wellness spa, and diving center",
    proposedVillaCount: "30-45 villas",
    stage: "preliminary_permits",
    structure: "strata",
    accessLevel: "qualified_access",
    estimatedScale: "$45M - $65M",
    partnerProfile: ["developer", "family_office", "hospitality_group"],
    highlights: [
      "Preliminary tourism approvals in progress",
      "Strong potential for strata villa registration",
      "Proximity to established resort destinations",
      "Favorable transfer logistics",
      "Integrated hospitality concept",
    ],
    legalNotes:
      "Subject to Ministry of Tourism approvals, environmental assessment, land-use confirmation, and strata registration eligibility.",
    lockedItems: [
      "Exact island location and coordinates",
      "Site boundary map",
      "Council engagement notes",
      "Preliminary financial model",
      "Legal pathway memo",
      "Site photos and drone imagery",
    ],
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865&auto=format&fit=crop",
    isFeatured: true,
    createdAt: "2024-01-15",
  },
  {
    id: "opp_002",
    slug: "project-coral",
    title: "Strata Villa Development on Approved Tourism Land",
    codeName: "Project Coral",
    category: "strata_villas",
    broadRegion: "Central Maldives",
    locationLabel: "Central Atolls",
    summary:
      "A strata villa development opportunity on land with existing tourism approvals, suitable for a managed villa community with rental programme and owner-use potential.",
    proposedUse:
      "Managed strata villa community with professional operator, rental programme, and owner-use arrangements",
    proposedVillaCount: "20-35 villas",
    stage: "approved",
    structure: "strata",
    accessLevel: "nda_required",
    estimatedScale: "$28M - $42M",
    partnerProfile: ["developer", "real_estate_company", "family_office"],
    highlights: [
      "Existing tourism development approval",
      "Clear path to strata registration",
      "30-minute transfer from international airport",
      "Established infrastructure nearby",
      "Revenue-share model potential",
    ],
    legalNotes:
      "Tourism approval in place. Strata registration subject to project completion, management agreement, and Ministry registration.",
    lockedItems: [
      "Exact location and site map",
      "Land lease documentation",
      "Approved master plan",
      "Financial projections",
      "Operator term sheet",
    ],
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2874&auto=format&fit=crop",
    isFeatured: true,
    createdAt: "2024-01-20",
  },
  {
    id: "opp_003",
    slug: "project-sandbank",
    title: "Inhabited Island Tourism Land Opportunity",
    codeName: "Project Sandbank",
    category: "inhabited_island_tourism_land",
    broadRegion: "Airport-Connected Atoll",
    locationLabel: "Domestic Airport Atoll",
    summary:
      "Tourism land opportunity on an inhabited island with strong domestic airport connectivity, suitable for boutique villa development or guesthouse expansion.",
    proposedUse:
      "Boutique villa development or upscale guesthouse cluster on designated tourism land",
    proposedVillaCount: "25-40 villas",
    stage: "concept",
    structure: "leasehold",
    accessLevel: "qualified_access",
    estimatedScale: "$18M - $32M",
    partnerProfile: ["developer", "hospitality_group", "operator"],
    highlights: [
      "Direct domestic airport access",
      "Lower entry cost than private island",
      "Existing island infrastructure",
      "Local community partnership potential",
      "Growing inhabited island tourism segment",
    ],
    legalNotes:
      "Subject to council engagement, land-use approvals, Ministry of Tourism registration, and environmental assessment.",
    lockedItems: [
      "Island name and location",
      "Council contact details",
      "Land availability map",
      "Community engagement notes",
      "Preliminary feasibility",
    ],
    image:
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?q=80&w=2787&auto=format&fit=crop",
    isFeatured: true,
    createdAt: "2024-02-01",
  },
  {
    id: "opp_004",
    slug: "project-lagoon",
    title: "Boutique Resort Development Site",
    codeName: "Project Lagoon",
    category: "resort_development",
    broadRegion: "Southern Maldives",
    locationLabel: "Southern Atolls",
    summary:
      "A pristine resort development site in the less-developed southern atolls, offering substantial lagoon frontage and potential for a differentiated luxury product.",
    proposedUse:
      "Boutique luxury resort with overwater and beach villas, spa, diving center, and marine conservation programme",
    proposedVillaCount: "40-55 villas",
    stage: "preliminary_permits",
    structure: "leasehold",
    accessLevel: "nda_required",
    estimatedScale: "$55M - $85M",
    partnerProfile: ["developer", "hospitality_group", "fund"],
    highlights: [
      "Exceptional lagoon and house reef",
      "Minimal existing development nearby",
      "Eco-tourism positioning potential",
      "Long-term lease availability",
      "Seaplane and speedboat access options",
    ],
    legalNotes:
      "Preliminary permits under review. Subject to full environmental impact assessment and Ministry of Tourism approval.",
    lockedItems: [
      "Island coordinates and site boundary",
      "Environmental baseline study",
      "Lease term details",
      "Development cost estimates",
      "Operator interest letters",
    ],
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=2833&auto=format&fit=crop",
    isFeatured: true,
    createdAt: "2024-02-10",
  },
  {
    id: "opp_005",
    slug: "project-pearl",
    title: "Boutique Hotel & Guesthouse Cluster",
    codeName: "Project Pearl",
    category: "guesthouse_boutique",
    broadRegion: "Central Atolls",
    locationLabel: "Central Maldives",
    summary:
      "An opportunity to develop or acquire a cluster of boutique hotels and guesthouses on a populated island with established tourism infrastructure.",
    proposedUse:
      "Upscale guesthouse cluster with unified branding, shared amenities, and excursion services",
    proposedVillaCount: "45-60 rooms across multiple properties",
    stage: "operational",
    structure: "asset_sale",
    accessLevel: "qualified_access",
    estimatedScale: "$8M - $14M",
    partnerProfile: ["operator", "hospitality_group", "real_estate_company"],
    highlights: [
      "Established cash-flowing operations",
      "Strong online reputation",
      "Expansion land available",
      "Local staff and management in place",
      "Proximity to diving sites",
    ],
    legalNotes:
      "Operating assets with clear ownership. Due diligence required on licenses, leases, and operational contracts.",
    lockedItems: [
      "Property addresses and photos",
      "Financial statements",
      "Guest reviews and occupancy data",
      "Staff contracts",
      "License documentation",
    ],
    image:
      "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=2874&auto=format&fit=crop",
    isFeatured: true,
    createdAt: "2024-02-15",
  },
  {
    id: "opp_006",
    slug: "project-horizon",
    title: "Government & Council-Linked Tourism Project",
    codeName: "Project Horizon",
    category: "government_council",
    broadRegion: "Maldives",
    locationLabel: "Multiple Atolls",
    summary:
      "A council-linked opportunity involving designated tourism land with potential cross-subsidy or PPP-style arrangements for local infrastructure development.",
    proposedUse:
      "Integrated tourism development with community benefit component and local employment commitment",
    proposedVillaCount: "35-50 villas",
    stage: "concept",
    structure: "joint_venture",
    accessLevel: "nda_required",
    estimatedScale: "$25M - $45M",
    partnerProfile: ["developer", "fund", "construction_epc"],
    highlights: [
      "Council support and local engagement",
      "Potential PPP or cross-subsidy structure",
      "Community benefit alignment",
      "Priority processing potential",
      "Long-term development rights",
    ],
    legalNotes:
      "Requires public-sector engagement, council agreements, and Ministry approvals. Structure subject to negotiation.",
    lockedItems: [
      "Council contact and location",
      "Land allocation documents",
      "Community benefit requirements",
      "Government correspondence",
      "Term sheet template",
    ],
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2870&auto=format&fit=crop",
    isFeatured: true,
    createdAt: "2024-02-20",
  },
  {
    id: "opp_007",
    slug: "project-reefline",
    title: "Large-Scale Integrated Tourism Zone",
    codeName: "Project Reefline",
    category: "integrated_tourism",
    broadRegion: "Northern Atolls",
    locationLabel: "Upper North",
    summary:
      "A substantial integrated tourism zone opportunity with potential for multiple product types including villas, boutique hotel, beach club, and marine activities.",
    proposedUse:
      "Master-planned integrated tourism development with phased delivery and multiple revenue streams",
    proposedVillaCount: "35-60 villas + hotel component",
    stage: "preliminary_permits",
    structure: "development_agreement",
    accessLevel: "private_data_room",
    estimatedScale: "$65M - $95M",
    partnerProfile: ["developer", "fund", "hospitality_group"],
    highlights: [
      "Significant land area for phased development",
      "Multiple product type potential",
      "Strong infrastructure access",
      "Emerging destination positioning",
      "Flexible master plan parameters",
    ],
    legalNotes:
      "Development agreement structure. Subject to master plan approval, phasing agreements, and multiple regulatory clearances.",
    lockedItems: [
      "Full location details",
      "Master plan concept",
      "Phasing strategy",
      "Capital structure options",
      "Regulatory timeline",
    ],
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2873&auto=format&fit=crop",
    isFeatured: false,
    createdAt: "2024-03-01",
  },
  {
    id: "opp_008",
    slug: "project-banyan",
    title: "Inhabited Island Premium Tourism Land",
    codeName: "Project Banyan",
    category: "inhabited_island_tourism_land",
    broadRegion: "Upper North",
    locationLabel: "Northern Atolls",
    summary:
      "Premium beachfront tourism land on an inhabited island with excellent transfer access and established local services.",
    proposedUse: "Luxury guesthouse or boutique villa development",
    proposedVillaCount: "20-30 villas",
    stage: "concept",
    structure: "leasehold",
    accessLevel: "qualified_access",
    estimatedScale: "$12M - $22M",
    partnerProfile: ["developer", "operator", "real_estate_company"],
    highlights: [
      "Prime beachfront position",
      "Domestic airport proximity",
      "Established island services",
      "Lower development complexity",
      "Strong local partnerships",
    ],
    legalNotes:
      "Subject to land-use approvals and council engagement. Tourism registration required.",
    lockedItems: [
      "Island name",
      "Land plot details",
      "Council engagement status",
      "Site survey",
    ],
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2873&auto=format&fit=crop",
    isFeatured: false,
    createdAt: "2024-03-05",
  },
  {
    id: "opp_009",
    slug: "project-seaplane",
    title: "Transfer-Linked Resort Development",
    codeName: "Project Seaplane",
    category: "resort_development",
    broadRegion: "Transfer-Linked",
    locationLabel: "Central Atolls",
    summary:
      "A resort development opportunity with exceptional seaplane access and positioning near established luxury destinations.",
    proposedUse: "Full-service luxury resort with world-class diving",
    proposedVillaCount: "45-65 villas",
    stage: "preliminary_permits",
    structure: "leasehold",
    accessLevel: "nda_required",
    estimatedScale: "$70M - $100M",
    partnerProfile: ["developer", "hospitality_group", "fund"],
    highlights: [
      "Prime seaplane route positioning",
      "Exceptional house reef",
      "Adjacent to luxury cluster",
      "Clear development pathway",
      "Operator interest confirmed",
    ],
    legalNotes:
      "Preliminary permits secured. Full approvals in process. Lease terms under negotiation.",
    lockedItems: [
      "Island details",
      "Permit status documents",
      "Operator LOI",
      "Development timeline",
      "Capital requirements",
    ],
    image:
      "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2874&auto=format&fit=crop",
    isFeatured: false,
    createdAt: "2024-03-10",
  },
  {
    id: "opp_010",
    slug: "project-marina",
    title: "Integrated Tourism & Marina Development",
    codeName: "Project Marina",
    category: "integrated_tourism",
    broadRegion: "Central Maldives",
    locationLabel: "Central Atolls",
    summary:
      "A unique opportunity combining villa development with yacht marina facilities, targeting the ultra-high-net-worth sailing segment.",
    proposedUse:
      "Mixed hospitality with yacht services, villas, and waterfront F&B",
    proposedVillaCount: "25-35 villas + marina berths",
    stage: "concept",
    structure: "joint_venture",
    accessLevel: "qualified_access",
    estimatedScale: "$55M - $80M",
    partnerProfile: ["developer", "fund", "hospitality_group"],
    highlights: [
      "Protected natural harbor",
      "Yacht tourism growth segment",
      "Premium guest positioning",
      "Multiple revenue streams",
      "Unique market positioning",
    ],
    legalNotes:
      "Marina development requires additional approvals. Subject to environmental and maritime assessments.",
    lockedItems: [
      "Harbor location",
      "Marina feasibility study",
      "Environmental assessment",
      "Yacht market analysis",
    ],
    image:
      "https://images.unsplash.com/photo-1544551763-77ef2d0cfc6c?q=80&w=2870&auto=format&fit=crop",
    isFeatured: false,
    createdAt: "2024-03-15",
  },
  {
    id: "opp_011",
    slug: "project-dune",
    title: "Premium Strata Villa Concept",
    codeName: "Project Dune",
    category: "strata_villas",
    broadRegion: "Northern Maldives",
    locationLabel: "Northern Atolls",
    summary:
      "A premium strata villa development concept on an exceptional sandbank site with panoramic ocean views.",
    proposedUse:
      "Ultra-premium strata villas with managed hospitality and rental programme",
    proposedVillaCount: "15-25 villas",
    stage: "concept",
    structure: "strata",
    accessLevel: "qualified_access",
    estimatedScale: "$35M - $50M",
    partnerProfile: ["developer", "family_office", "real_estate_company"],
    highlights: [
      "Exceptional sandbank location",
      "Premium price point potential",
      "Intimate scale",
      "Strong owner-use appeal",
      "Branded residences potential",
    ],
    legalNotes:
      "Concept stage. Subject to all approvals including tourism, environmental, and strata eligibility.",
    lockedItems: [
      "Site details",
      "Concept design",
      "Price point analysis",
      "Brand discussions",
    ],
    image:
      "https://images.unsplash.com/photo-1578922746465-3a80a228f223?q=80&w=2874&auto=format&fit=crop",
    isFeatured: false,
    createdAt: "2024-03-20",
  },
  {
    id: "opp_012",
    slug: "project-palm",
    title: "Guesthouse Expansion Opportunity",
    codeName: "Project Palm",
    category: "guesthouse_boutique",
    broadRegion: "Local Island Cluster",
    locationLabel: "Central Maldives",
    summary:
      "An opportunity to expand an established guesthouse operation with adjacent land and strong occupancy history.",
    proposedUse:
      "Guesthouse expansion with upgraded amenities and excursion services",
    proposedVillaCount: "30-45 rooms",
    stage: "operational",
    structure: "asset_sale",
    accessLevel: "public_summary",
    estimatedScale: "$4M - $7M",
    partnerProfile: ["operator", "hospitality_group"],
    highlights: [
      "Proven trading history",
      "Adjacent expansion land",
      "Strong online reviews",
      "Established excursion partnerships",
      "Local staff in place",
    ],
    legalNotes:
      "Operating business with clear documentation. Expansion subject to additional permits.",
    lockedItems: [
      "Business financials",
      "Expansion site details",
      "Staff contracts",
      "License status",
    ],
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2960&auto=format&fit=crop",
    isFeatured: false,
    createdAt: "2024-03-25",
  },
  {
    id: "opp_013",
    slug: "project-vista",
    title: "Council-Linked Tourism Land",
    codeName: "Project Vista",
    category: "government_council",
    broadRegion: "Maldives",
    locationLabel: "Various Locations",
    summary:
      "Council-allocated tourism land with community partnership requirements and favorable lease terms.",
    proposedUse: "Tourism development with local employment commitment",
    proposedVillaCount: "25-40 villas",
    stage: "concept",
    structure: "joint_venture",
    accessLevel: "nda_required",
    estimatedScale: "$20M - $35M",
    partnerProfile: ["developer", "construction_epc", "operator"],
    highlights: [
      "Council allocation in progress",
      "Favorable lease terms",
      "Community benefit structure",
      "Priority approval potential",
      "Flexible development parameters",
    ],
    legalNotes:
      "Council engagement active. All terms subject to formal allocation and Ministry approvals.",
    lockedItems: [
      "Council details",
      "Land allocation status",
      "Term negotiations",
      "Community requirements",
    ],
    image:
      "https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?q=80&w=2835&auto=format&fit=crop",
    isFeatured: false,
    createdAt: "2024-04-01",
  },
  {
    id: "opp_014",
    slug: "project-atoll-north",
    title: "Virgin Island Development Opportunity",
    codeName: "Project Atoll North",
    category: "private_island",
    broadRegion: "Northern Atolls",
    locationLabel: "Far North",
    summary:
      "A rare virgin island opportunity in the northern atolls with substantial lagoon and development potential for a flagship resort.",
    proposedUse: "Flagship luxury resort or ultra-premium villa development",
    proposedVillaCount: "50-80 villas",
    stage: "preliminary_permits",
    structure: "leasehold",
    accessLevel: "private_data_room",
    estimatedScale: "$120M - $180M",
    partnerProfile: ["developer", "hospitality_group", "fund"],
    highlights: [
      "Substantial island size",
      "Exceptional natural features",
      "Minimal development constraints",
      "Flagship positioning potential",
      "Long-term lease availability",
    ],
    legalNotes:
      "Preliminary engagement with authorities. Subject to full approvals and environmental impact assessment.",
    lockedItems: [
      "Island coordinates",
      "Preliminary survey",
      "Environmental baseline",
      "Lease framework",
      "Development scenarios",
    ],
    image:
      "https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=2940&auto=format&fit=crop",
    isFeatured: false,
    createdAt: "2024-04-05",
  },
  {
    id: "opp_015",
    slug: "project-solara",
    title: "Boutique Villa Community",
    codeName: "Project Solara",
    category: "strata_villas",
    broadRegion: "Central Maldives",
    locationLabel: "Central Atolls",
    summary:
      "An intimate boutique villa community concept with sustainability focus and managed hospitality services.",
    proposedUse:
      "Eco-conscious strata villa community with shared amenities and rental programme",
    proposedVillaCount: "12-20 villas",
    stage: "concept",
    structure: "strata",
    accessLevel: "qualified_access",
    estimatedScale: "$18M - $28M",
    partnerProfile: ["developer", "family_office"],
    highlights: [
      "Sustainability-focused design",
      "Intimate community scale",
      "Strong ESG positioning",
      "Owner-use appeal",
      "Lower entry point",
    ],
    legalNotes:
      "Concept stage. All approvals required. Sustainability certifications subject to design compliance.",
    lockedItems: [
      "Site location",
      "Sustainability framework",
      "Concept design",
      "Owner profile analysis",
    ],
    image:
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2940&auto=format&fit=crop",
    isFeatured: false,
    createdAt: "2024-04-10",
  },
  {
    id: "opp_016",
    slug: "project-tide",
    title: "Beachfront Tourism Plot",
    codeName: "Project Tide",
    category: "inhabited_island_tourism_land",
    broadRegion: "Southern Atolls",
    locationLabel: "South Maldives",
    summary:
      "A prime beachfront tourism plot on a developing inhabited island with strong fundamentals.",
    proposedUse: "Boutique hotel or premium guesthouse development",
    proposedVillaCount: "20-30 rooms",
    stage: "concept",
    structure: "leasehold",
    accessLevel: "public_summary",
    estimatedScale: "$8M - $15M",
    partnerProfile: ["developer", "operator", "hospitality_group"],
    highlights: [
      "Prime beachfront position",
      "Growing destination area",
      "Domestic airport access",
      "Lower competition density",
      "Attractive entry point",
    ],
    legalNotes:
      "Land availability confirmed. Tourism approvals and development permits required.",
    lockedItems: ["Plot details", "Land survey", "Council engagement status"],
    image:
      "https://images.unsplash.com/photo-1505881502353-a1986add3762?q=80&w=2848&auto=format&fit=crop",
    isFeatured: false,
    createdAt: "2024-04-15",
  },
  {
    id: "opp_017",
    slug: "project-haven",
    title: "Resort Asset Repositioning",
    codeName: "Project Haven",
    category: "resort_assets",
    broadRegion: "Central Maldives",
    locationLabel: "Established Atoll",
    summary:
      "An operating resort asset with repositioning potential through renovation, rebranding, or operational improvement.",
    proposedUse:
      "Resort repositioning through strategic renovation and potential rebrand",
    proposedVillaCount: "55 existing villas",
    stage: "repositioning",
    structure: "asset_sale",
    accessLevel: "nda_required",
    estimatedScale: "$45M - $65M",
    partnerProfile: ["hospitality_group", "fund", "operator"],
    highlights: [
      "Operating cash flow",
      "Established infrastructure",
      "Renovation upside potential",
      "Clear brand opportunity",
      "Proven transfer logistics",
    ],
    legalNotes:
      "Operating asset with existing approvals. Asset transfer and operator transition subject to due diligence.",
    lockedItems: [
      "Resort identity",
      "Financial statements",
      "Renovation assessment",
      "Brand discussions",
      "Operator status",
    ],
    image:
      "https://images.unsplash.com/photo-1582610116397-edb318620f90?q=80&w=2940&auto=format&fit=crop",
    isFeatured: false,
    createdAt: "2024-04-20",
  },
  {
    id: "opp_018",
    slug: "project-passage",
    title: "Safari & Water Sports Tourism Base",
    codeName: "Project Passage",
    category: "guesthouse_boutique",
    broadRegion: "Maldives",
    locationLabel: "Strategic Location",
    summary:
      "A unique opportunity to develop a safari vessel base, diving center, and water sports hub with accommodation.",
    proposedUse:
      "Liveaboard base, diving center, water sports hub with boutique accommodation",
    proposedVillaCount: "15-25 rooms + marina facilities",
    stage: "concept",
    structure: "leasehold",
    accessLevel: "qualified_access",
    estimatedScale: "$12M - $20M",
    partnerProfile: ["operator", "hospitality_group", "developer"],
    highlights: [
      "Safari vessel market access",
      "Premium diving destination",
      "Water sports growth segment",
      "Unique positioning",
      "Multiple revenue streams",
    ],
    legalNotes:
      "Marina and vessel facilities require additional permits. Tourism accommodation approvals standard.",
    lockedItems: [
      "Location details",
      "Marina feasibility",
      "Safari operator interest",
      "Diving site access",
    ],
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2870&auto=format&fit=crop",
    isFeatured: false,
    createdAt: "2024-04-25",
  },
];

// Segments Data
export const segments: Segment[] = [
  {
    id: "seg_001",
    slug: "integrated-tourism",
    title: "Integrated Tourism Projects",
    shortTitle: "Integrated Tourism",
    description:
      "Mixed-use tourism developments combining villas, hospitality, dining, wellness, and managed services on selected island land or zones.",
    icon: "layers",
    isPrimary: true,
  },
  {
    id: "seg_002",
    slug: "strata-villas",
    title: "Strata Villa Developments",
    shortTitle: "Strata Villas",
    description:
      "Villa-led tourism real estate where managed villas may be sold or leased as long-term tourism strata interests with rental programmes.",
    icon: "home",
    isPrimary: true,
  },
  {
    id: "seg_003",
    slug: "inhabited-island-tourism-land",
    title: "Inhabited Island Tourism Land",
    shortTitle: "Inhabited Island Land",
    description:
      "Tourism land opportunities on inhabited islands with lower entry barriers than traditional private-island resort acquisitions.",
    icon: "map-pin",
    isPrimary: false,
  },
  {
    id: "seg_004",
    slug: "resort-development",
    title: "Resort Development Projects",
    shortTitle: "Resort Development",
    description:
      "Traditional resort development opportunities including private island, lagoon, leasehold, or tourism development sites.",
    icon: "building",
    isPrimary: false,
  },
  {
    id: "seg_005",
    slug: "resort-assets",
    title: "Resort Assets for Sale",
    shortTitle: "Resort Assets",
    description:
      "Operating, underperforming, or repositioning resort assets for acquisition, partnership, redevelopment, or recapitalisation.",
    icon: "briefcase",
    isPrimary: false,
  },
  {
    id: "seg_006",
    slug: "government-council-projects",
    title: "Government & Council Projects",
    shortTitle: "Government & Council",
    description:
      "Public-sector and council-linked opportunities supporting tourism development, infrastructure investment, and local economic development.",
    icon: "landmark",
    isPrimary: false,
  },
  {
    id: "seg_007",
    slug: "guesthouse-boutique-hotels",
    title: "Guesthouse & Boutique Hotel Projects",
    shortTitle: "Guesthouse & Boutique",
    description:
      "Smaller hospitality opportunities on local islands including guesthouses, boutique hotels, clusters, and operator partnerships.",
    icon: "hotel",
    isPrimary: false,
  },
  {
    id: "seg_008",
    slug: "private-islands",
    title: "Virgin Island / Private Island Opportunities",
    shortTitle: "Private Islands",
    description:
      "Selected virgin island and private island tourism development opportunities for larger-scale resort developers and family offices.",
    icon: "palm-tree",
    isPrimary: false,
  },
];

// Insight Articles
export const insightArticles: InsightArticle[] = [
  {
    id: "insight_001",
    slug: "understanding-maldives-tourism-strata-villas",
    title: "Understanding Maldives Tourism Strata Villas",
    excerpt:
      "An overview of the emerging strata villa model in Maldives tourism real estate, including legal structures, buyer considerations, and market positioning.",
    category: "Market Analysis",
    readTime: "8 min read",
    publishedAt: "2024-04-15",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2874&auto=format&fit=crop",
  },
  {
    id: "insight_002",
    slug: "why-integrated-tourism-projects-are-emerging",
    title: "Why Integrated Tourism Projects Are Emerging",
    excerpt:
      "Exploring the shift from traditional private-island resorts to mixed-use integrated tourism developments in the Maldives.",
    category: "Industry Trends",
    readTime: "6 min read",
    publishedAt: "2024-04-01",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865&auto=format&fit=crop",
  },
  {
    id: "insight_003",
    slug: "inhabited-island-tourism-land-what-developers-should-know",
    title: "Inhabited Island Tourism Land: What Developers Should Know",
    excerpt:
      "Key considerations for developers evaluating tourism land opportunities on inhabited islands in the Maldives.",
    category: "Developer Guide",
    readTime: "10 min read",
    publishedAt: "2024-03-15",
    image:
      "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?q=80&w=2787&auto=format&fit=crop",
  },
  {
    id: "insight_004",
    slug: "resort-development-vs-local-island-tourism-projects",
    title: "Resort Development vs Local Island Tourism Projects",
    excerpt:
      "Comparing the investment thesis, risk profile, and return potential of traditional resort development versus local island tourism opportunities.",
    category: "Investment Analysis",
    readTime: "7 min read",
    publishedAt: "2024-03-01",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=2833&auto=format&fit=crop",
  },
  {
    id: "insight_005",
    slug: "structuring-managed-villa-communities-in-maldives",
    title: "Structuring Managed Villa Communities in the Maldives",
    excerpt:
      "Legal and commercial considerations for structuring managed villa communities with rental programmes and owner-use arrangements.",
    category: "Legal & Structure",
    readTime: "9 min read",
    publishedAt: "2024-02-15",
    image:
      "https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=2874&auto=format&fit=crop",
  },
  {
    id: "insight_006",
    slug: "how-developers-can-evaluate-maldives-tourism-opportunities",
    title: "How Developers Can Evaluate Maldives Tourism Opportunities",
    excerpt:
      "A practical framework for developers assessing tourism real estate opportunities in the Maldives market.",
    category: "Developer Guide",
    readTime: "12 min read",
    publishedAt: "2024-02-01",
    image:
      "https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2873&auto=format&fit=crop",
  },
];

// Helper functions
export function getFeaturedOpportunities(): Opportunity[] {
  return opportunities.filter((o) => o.isFeatured);
}

export function getOpportunityBySlug(slug: string): Opportunity | undefined {
  return opportunities.find((o) => o.slug === slug);
}

export function getOpportunitiesByCategory(
  category: OpportunityCategory
): Opportunity[] {
  return opportunities.filter((o) => o.category === category);
}

export function getSegmentBySlug(slug: string): Segment | undefined {
  return segments.find((s) => s.slug === slug);
}

export function getInsightBySlug(slug: string): InsightArticle | undefined {
  return insightArticles.find((a) => a.slug === slug);
}

export function getPrimarySegments(): Segment[] {
  return segments.filter((s) => s.isPrimary);
}
