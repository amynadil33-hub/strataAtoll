import { supabase } from "@/lib/supabase";
import type { InsightArticle } from "@/lib/types";

type InsightRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  read_time: string | null;
  image: string;
  author: string;
  published_at: string | null;
  is_featured: boolean;
  is_visible: boolean;
};

function formatPublishedAt(value: string | null): string {
  if (!value) {
    return "";
  }

  return new Date(value).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function mapInsight(row: InsightRow): InsightArticle & { author: string; date: string; isFeatured: boolean } {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    readTime: row.read_time ?? "",
    publishedAt: row.published_at ?? "",
    image: row.image,
    author: row.author,
    date: formatPublishedAt(row.published_at),
    isFeatured: row.is_featured,
  };
}

export async function getAllInsights() {
  const { data, error } = await supabase
    .from("insights")
    .select("*")
    .eq("is_visible", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch insights", error);
    return [];
  }

  return (data as InsightRow[]).map(mapInsight);
}

export async function getInsightBySlug(slug: string) {
  const { data, error } = await supabase
    .from("insights")
    .select("*")
    .eq("slug", slug)
    .eq("is_visible", true)
    .maybeSingle();

  if (error) {
    console.error(`Failed to fetch insight for slug: ${slug}`, error);
    return null;
  }

  if (!data) {
    return null;
  }

  return mapInsight(data as InsightRow);
}
