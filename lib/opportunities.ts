import { supabase } from "@/lib/supabase";
import type {
  Opportunity,
  OpportunityCategory,
  RoomCategory,
} from "@/lib/types";

type RoomCategoryRow = {
  id: string;
  opportunity_id: string;
  slug: string;
  name: string;
  category_type: string;
  description: string | null;
  bedroom_count: number | null;
  bathroom_count: number | null;
  indoor_area_sqm: number | null;
  outdoor_area_sqm: number | null;
  total_area_sqm: number | null;
  price_from_usd: number | null;
  image: string;
  gallery_images: string[] | null;
  features: string[] | null;
  sort_order: number | null;
  is_visible: boolean | null;
  created_at: string | null;
};

type OpportunityRow = {
  id: string;
  slug: string;
  title: string;
  code_name: string;
  category: Opportunity["category"];
  broad_region: string;
  location_label: string;
  summary: string;
  proposed_use: string;
  proposed_villa_count: string;
  stage: Opportunity["stage"];
  structure: Opportunity["structure"];
  access_level: Opportunity["accessLevel"];
  estimated_scale: string;
  partner_profile: Opportunity["partnerProfile"] | null;
  highlights: string[] | null;
  legal_notes: string | null;
  locked_items: string[] | null;
  image: string;
  gallery_images: string[] | null;
  is_featured: boolean | null;
  is_visible: boolean | null;
  created_at: string;

  // Optional page content columns
  concept_identity?: string | null;
  island_speciality?: string | null;
  price_range?: string | null;
  gallery_heading?: string | null;
  gallery_description?: string | null;
  villa_section_heading?: string | null;
  villa_section_subtitle?: string | null;

  // Added manually after fetching room_categories
  room_categories?: RoomCategoryRow[];
};

function mapRoomCategory(row: RoomCategoryRow): RoomCategory {
  return {
    id: row.id,
    opportunityId: row.opportunity_id,
    slug: row.slug,
    name: row.name,
    categoryType: row.category_type,
    description: row.description,
    bedroomCount: row.bedroom_count,
    bathroomCount: row.bathroom_count,
    indoorAreaSqm: row.indoor_area_sqm,
    outdoorAreaSqm: row.outdoor_area_sqm,
    totalAreaSqm: row.total_area_sqm,
    priceFromUsd: row.price_from_usd,
    image: row.image,
    galleryImages: row.gallery_images ?? [],
    features: row.features ?? [],
    sortOrder: row.sort_order ?? 0,
    isVisible: row.is_visible ?? true,
    createdAt: row.created_at ?? undefined,
  };
}

export function mapOpportunity(row: OpportunityRow): Opportunity {
  const roomCategories = (row.room_categories ?? [])
    .filter((room) => room.is_visible !== false)
    .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
    .map(mapRoomCategory);

  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    codeName: row.code_name,
    category: row.category,
    broadRegion: row.broad_region,
    locationLabel: row.location_label,
    summary: row.summary,
    proposedUse: row.proposed_use,
    proposedVillaCount: row.proposed_villa_count,
    stage: row.stage,
    structure: row.structure,
    accessLevel: row.access_level,
    estimatedScale: row.estimated_scale,
    partnerProfile: row.partner_profile ?? [],
    highlights: row.highlights ?? [],
    legalNotes: row.legal_notes,
    lockedItems: row.locked_items ?? [],
    image: row.image,
    galleryImages: row.gallery_images ?? [],
    isFeatured: row.is_featured ?? false,
    isVisible: row.is_visible ?? true,
    createdAt: row.created_at,

    conceptIdentity: row.concept_identity ?? null,
    islandSpeciality: row.island_speciality ?? null,
    priceRange: row.price_range ?? null,
    galleryHeading: row.gallery_heading ?? null,
    galleryDescription: row.gallery_description ?? null,
    villaSectionHeading: row.villa_section_heading ?? null,
    villaSectionSubtitle: row.villa_section_subtitle ?? null,

    roomCategories,
  };
}

export async function getAllOpportunities(): Promise<Opportunity[]> {
  const { data, error } = await supabase
    .from("opportunities")
    .select("*")
    .eq("is_visible", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch opportunities", error);
    return [];
  }

  return (data as OpportunityRow[]).map((row) =>
    mapOpportunity({
      ...row,
      room_categories: [],
    })
  );
}

export async function getFeaturedOpportunities(): Promise<Opportunity[]> {
  const { data, error } = await supabase
    .from("opportunities")
    .select("*")
    .eq("is_visible", true)
    .eq("is_featured", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch featured opportunities", error);
    return [];
  }

  return (data as OpportunityRow[]).map((row) =>
    mapOpportunity({
      ...row,
      room_categories: [],
    })
  );
}

export async function getOpportunityBySlug(
  slug: string
): Promise<Opportunity | null> {
  const { data: opportunityData, error: opportunityError } = await supabase
    .from("opportunities")
    .select("*")
    .eq("slug", slug)
    .eq("is_visible", true)
    .maybeSingle();

  if (opportunityError) {
    console.error(
      `Failed to fetch opportunity for slug: ${slug}`,
      opportunityError
    );
    return null;
  }

  if (!opportunityData) {
    return null;
  }

  const { data: roomData, error: roomError } = await supabase
    .from("room_categories")
    .select("*")
    .eq("opportunity_id", opportunityData.id)
    .eq("is_visible", true)
    .order("sort_order", { ascending: true });

  if (roomError) {
    console.error(
      `Failed to fetch room categories for opportunity: ${opportunityData.id}`,
      roomError
    );
  }

  return mapOpportunity({
    ...(opportunityData as OpportunityRow),
    room_categories: (roomData ?? []) as RoomCategoryRow[],
  });
}

export async function getOpportunitiesByCategory(
  category: OpportunityCategory
): Promise<Opportunity[]> {
  const { data, error } = await supabase
    .from("opportunities")
    .select("*")
    .eq("category", category)
    .eq("is_visible", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(
      `Failed to fetch opportunities for category: ${category}`,
      error
    );
    return [];
  }

  return (data as OpportunityRow[]).map((row) =>
    mapOpportunity({
      ...row,
      room_categories: [],
    })
  );
}