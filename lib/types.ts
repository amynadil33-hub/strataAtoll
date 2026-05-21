// Opportunity Categories
export type OpportunityCategory =
  | "integrated_tourism"
  | "strata_villas"
  | "inhabited_island_tourism_land"
  | "resort_development"
  | "resort_assets"
  | "government_council"
  | "guesthouse_boutique"
  | "private_island";

// Access Levels
export type AccessLevel =
  | "public_summary"
  | "qualified_access"
  | "nda_required"
  | "private_data_room";

// Development Stages
export type DevelopmentStage =
  | "concept"
  | "preliminary_permits"
  | "approved"
  | "under_construction"
  | "operational"
  | "repositioning";

// Structure Types
export type StructureType =
  | "leasehold"
  | "strata"
  | "joint_venture"
  | "management_contract"
  | "development_agreement"
  | "asset_sale";

// Partner Profile Types
export type PartnerProfile =
  | "developer"
  | "real_estate_company"
  | "family_office"
  | "hospitality_group"
  | "fund"
  | "operator"
  | "construction_epc"
  | "modular_developer"
  | "sales_partner"
  | "council_landowner";

// Main Opportunity Interface
export interface Opportunity {
  id: string;
  slug: string;
  title: string;
  codeName: string;
  category: OpportunityCategory;
  broadRegion: string;
  locationLabel: string;
  summary: string;
  proposedUse: string;
  proposedVillaCount: string;
  stage: DevelopmentStage;
  structure: StructureType;
  accessLevel: AccessLevel;
  estimatedScale: string;
  partnerProfile: PartnerProfile[];
  highlights: string[];
  legalNotes: string;
  lockedItems: string[];
  image: string;
  galleryImages: string[];
  isFeatured: boolean;
  createdAt: string;
}

// Inquiry for private access requests
export interface PrivateAccessInquiry {
  id: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  country: string;
  companyType: PartnerProfile;
  targetProjectType: OpportunityCategory[];
  targetInvestmentSize: string;
  completedProjectCountries: string;
  website: string;
  message: string;
  createdAt: string;
}

// Submit opportunity form
export interface SubmittedOpportunity {
  id: string;
  name: string;
  companyOrCouncil: string;
  email: string;
  phone: string;
  opportunityType: OpportunityCategory;
  islandAtoll: string;
  landAssetStatus: string;
  approximateLandSize: string;
  currentApprovals: string;
  desiredStructure: string;
  description: string;
  createdAt: string;
}

// Insight Article
export interface InsightArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  image: string;
}

// Segment Info
export interface Segment {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  icon: string;
  isPrimary: boolean;
}

// Helper Functions
export function formatCategory(category: OpportunityCategory): string {
  const map: Record<OpportunityCategory, string> = {
    integrated_tourism: "Integrated Tourism",
    strata_villas: "Strata Villas",
    inhabited_island_tourism_land: "Inhabited Island Tourism Land",
    resort_development: "Resort Development",
    resort_assets: "Resort Assets",
    government_council: "Government & Council Projects",
    guesthouse_boutique: "Guesthouse & Boutique Hotels",
    private_island: "Virgin / Private Island",
  };
  return map[category];
}

export function formatAccessLevel(level: AccessLevel): string {
  const map: Record<AccessLevel, string> = {
    public_summary: "Public Summary",
    qualified_access: "Qualified Access",
    nda_required: "NDA Required",
    private_data_room: "Private Data Room",
  };
  return map[level];
}

export function formatStage(stage: DevelopmentStage): string {
  const map: Record<DevelopmentStage, string> = {
    concept: "Concept Stage",
    preliminary_permits: "Preliminary Permits",
    approved: "Approved",
    under_construction: "Under Construction",
    operational: "Operational",
    repositioning: "Repositioning",
  };
  return map[stage];
}

export function formatStructure(structure: StructureType): string {
  const map: Record<StructureType, string> = {
    leasehold: "Leasehold",
    strata: "Tourism Strata",
    joint_venture: "Joint Venture",
    management_contract: "Management Contract",
    development_agreement: "Development Agreement",
    asset_sale: "Asset Sale",
  };
  return map[structure];
}

export function formatPartnerProfile(profile: PartnerProfile): string {
  const map: Record<PartnerProfile, string> = {
    developer: "Real Estate Developer",
    real_estate_company: "Real Estate Company",
    family_office: "Family Office",
    hospitality_group: "Hospitality Group",
    fund: "Fund / Investor",
    operator: "Operator",
    construction_epc: "Construction / EPC",
    modular_developer: "Modular Developer",
    sales_partner: "Sales Partner",
    council_landowner: "Council / Landowner",
  };
  return map[profile];
}

// Segment Slugs
export const SEGMENT_SLUGS = {
  integrated_tourism: "integrated-tourism",
  strata_villas: "strata-villas",
  inhabited_island_tourism_land: "inhabited-island-tourism-land",
  resort_development: "resort-development",
  resort_assets: "resort-assets",
  government_council: "government-council-projects",
  guesthouse_boutique: "guesthouse-boutique-hotels",
  private_island: "private-islands",
} as const;

export function getCategoryFromSlug(slug: string): OpportunityCategory | null {
  const entry = Object.entries(SEGMENT_SLUGS).find(([, v]) => v === slug);
  return entry ? (entry[0] as OpportunityCategory) : null;
}
