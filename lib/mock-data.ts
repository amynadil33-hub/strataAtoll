import type {
  Opportunity,
  InsightArticle,
  Segment,
  OpportunityCategory,
} from "./types";

// Opportunities now come from Supabase.
// Keep this empty only to prevent old demo data from showing.
export const opportunities: Opportunity[] = [];

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

// Compatibility helpers.
// These stay here so old imports do not break the build.
// Opportunity pages should use Supabase via /lib/opportunities.ts.
export function getFeaturedOpportunities(): Opportunity[] {
  return [];
}

export function getOpportunityBySlug(slug: string): Opportunity | undefined {
  return undefined;
}

export function getOpportunitiesByCategory(
  category: OpportunityCategory
): Opportunity[] {
  return [];
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