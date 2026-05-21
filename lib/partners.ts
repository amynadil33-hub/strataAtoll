import { supabase } from "@/lib/supabase";

export type Partner = {
  id: string;
  name: string;
  logoUrl: string | null;
  tier: string;
  websiteUrl: string | null;
  sortOrder: number;
};

type PartnerRow = {
  id: string;
  name: string;
  logo_url: string | null;
  tier: string;
  website_url: string | null;
  sort_order: number;
  is_visible: boolean;
};

export function mapPartner(row: PartnerRow): Partner {
  return {
    id: row.id,
    name: row.name,
    logoUrl: row.logo_url,
    tier: row.tier,
    websiteUrl: row.website_url,
    sortOrder: row.sort_order,
  };
}

export async function getAllPartners(): Promise<Partner[]> {
  const { data, error } = await supabase
    .from("partners")
    .select("*")
    .eq("is_visible", true)
    .order("sort_order", { ascending: true });

  if (error) {
    console.error("Failed to fetch partners", error);
    return [];
  }

  return (data as PartnerRow[]).map(mapPartner);
}
