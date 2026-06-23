import { supabase } from "@/lib/supabase";
import type {
  Opportunity,
  OpportunityCategory,
  RoomCategory,
} from "@/lib/types";

type NullableString = string | null | undefined;

type RoomCategoryRow = {
  id: string;
  opportunity_id: string;
  slug: string;
  name: string;
  category_type: string;
  description: string | null;
  bedroom_count: number | string | null;
  bathroom_count: number | string | null;
  indoor_area_sqm: number | string | null;
  outdoor_area_sqm: number | string | null;
  total_area_sqm: number | string | null;
  price_from_usd: number | string | null;
  image: string | null;
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
  image: string | null;
  gallery_images: string[] | null;
  is_featured: boolean | null;
  is_visible: boolean | null;
  created_at: string;

  concept_identity?: string | null;
  island_speciality?: string | null;
  price_range?: string | null;
  gallery_heading?: string | null;
  gallery_description?: string | null;
  villa_section_heading?: string | null;
  villa_section_subtitle?: string | null;

  room_categories?: RoomCategoryRow[];
};

type ExtendedRoomCategory = RoomCategory & {
  imageUrl?: string | null;
  gallery_images?: string[];
};

function cleanString(value: NullableString): string {
  return typeof value === "string" ? value.trim() : "";
}

function cleanStringOrNull(value: NullableString): string | null {
  const cleaned = cleanString(value);
  return cleaned.length > 0 ? cleaned : null;
}

function cleanStringArray(value: string[] | null | undefined): string[] {
  if (!Array.isArray(value)) return [];

  return value
    .map((item) => cleanString(item))
    .filter((item) => item.length > 0);
}

function toNumberOrNull(value: number | string | null | undefined): number | null {
  if (value === null || value === undefined || value === "") return null;

  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : null;
}

function mapRoomCategory(row: RoomCategoryRow): RoomCategory {
  const galleryImagesFromDb = cleanStringArray(row.gallery_images);
  const mainImage = cleanString(row.image) || galleryImagesFromDb[0] || "";
  const galleryImages =
    galleryImagesFromDb.length > 0
      ? galleryImagesFromDb
      : mainImage
        ? [mainImage]
        : [];

  const mapped: ExtendedRoomCategory = {
    id: row.id,
    opportunityId: row.opportunity_id,
    slug: cleanString(row.slug),
    name: row.name,
    categoryType: row.category_type || "Villa",
    description: row.description,
    bedroomCount: toNumberOrNull(row.bedroom_count),
    bathroomCount: toNumberOrNull(row.bathroom_count),
    indoorAreaSqm: toNumberOrNull(row.indoor_area_sqm),
    outdoorAreaSqm: toNumberOrNull(row.outdoor_area_sqm),
    totalAreaSqm: toNumberOrNull(row.total_area_sqm),
    priceFromUsd: toNumberOrNull(row.price_from_usd),

    // Important image fields
    image: mainImage || "/placeholder.svg",
    imageUrl: mainImage || null,
    galleryImages,
    gallery_images: galleryImages,

    features: cleanStringArray(row.features),
    sortOrder: row.sort_order ?? 0,
    isVisible: row.is_visible ?? true,
    createdAt: row.created_at ?? undefined,
  };

  return mapped;
}

export function mapOpportunity(row: OpportunityRow): Opportunity {
  const opportunityGalleryImages = cleanStringArray(row.gallery_images);
  const opportunityImage =
    cleanString(row.image) || opportunityGalleryImages[0] || "/placeholder.svg";

  const roomCategories = (row.room_categories ?? [])
    .filter((room) => room.is_visible !== false)
    .sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0))
    .map(mapRoomCategory);

  return {
    id: row.id,
    slug: cleanString(row.slug),
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
    legalNotes: row.legal_notes ?? "",
    lockedItems: row.locked_items ?? [],

    image: opportunityImage,
    galleryImages: opportunityGalleryImages,

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
  const cleanSlug = cleanString(slug);

  let opportunityData: OpportunityRow | null = null;

  const { data: exactData, error: exactError } = await supabase
    .from("opportunities")
    .select("*")
    .eq("slug", cleanSlug)
    .eq("is_visible", true)
    .maybeSingle();

  if (exactError) {
    console.error(
      `Failed to fetch opportunity for slug: ${cleanSlug}`,
      exactError
    );
    return null;
  }

  opportunityData = exactData as OpportunityRow | null;

  // Fallback for old rows with accidental trailing spaces in slug.
  if (!opportunityData) {
    const { data: fallbackData, error: fallbackError } = await supabase
      .from("opportunities")
      .select("*")
      .eq("is_visible", true)
      .ilike("slug", `${cleanSlug}%`)
      .limit(10);

    if (fallbackError) {
      console.error(
        `Failed fallback fetch for opportunity slug: ${cleanSlug}`,
        fallbackError
      );
      return null;
    }

    opportunityData =
      ((fallbackData as OpportunityRow[] | null) ?? []).find(
        (item) => cleanString(item.slug) === cleanSlug
      ) ?? null;
  }

  if (!opportunityData) {
    return null;
  }

  const { data: roomData, error: roomError } = await supabase
    .from("room_categories")
    .select(
      `
      id,
      opportunity_id,
      slug,
      name,
      category_type,
      description,
      bedroom_count,
      bathroom_count,
      indoor_area_sqm,
      outdoor_area_sqm,
      total_area_sqm,
      price_from_usd,
      image,
      gallery_images,
      features,
      sort_order,
      is_visible,
      created_at
    `
    )
    .eq("opportunity_id", opportunityData.id)
    .order("sort_order", { ascending: true });

  if (roomError) {
    console.error(
      `Failed to fetch room categories for opportunity: ${opportunityData.id}`,
      roomError
    );
  }

  return mapOpportunity({
    ...opportunityData,
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