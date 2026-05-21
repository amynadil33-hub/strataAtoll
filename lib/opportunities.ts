import { supabase } from "@/lib/supabase";
import type { Opportunity, OpportunityCategory } from "@/lib/types";

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
  partner_profile: Opportunity["partnerProfile"];
  highlights: string[];
  legal_notes: string;
  locked_items: string[];
  image: string;
  gallery_images: string[] | null;
  is_featured: boolean;
  is_visible: boolean;
  created_at: string;
};

export function mapOpportunity(row: OpportunityRow): Opportunity {
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
    partnerProfile: row.partner_profile,
    highlights: row.highlights,
    legalNotes: row.legal_notes,
    lockedItems: row.locked_items,
    image: row.image,
    galleryImages: row.gallery_images ?? [],
    isFeatured: row.is_featured,
    createdAt: row.created_at,
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

  return (data as OpportunityRow[]).map(mapOpportunity);
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

  return (data as OpportunityRow[]).map(mapOpportunity);
}

export async function getOpportunityBySlug(
  slug: string
): Promise<Opportunity | null> {
  const { data, error } = await supabase
    .from("opportunities")
    .select("*")
    .eq("slug", slug)
    .eq("is_visible", true)
    .maybeSingle();

  if (error) {
    console.error(`Failed to fetch opportunity for slug: ${slug}`, error);
    return null;
  }

  if (!data) {
    return null;
  }

  return mapOpportunity(data as OpportunityRow);
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
    console.error(`Failed to fetch opportunities for category: ${category}`, error);
    return [];
  }

  return (data as OpportunityRow[]).map(mapOpportunity);
}
