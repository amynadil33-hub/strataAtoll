import { supabase } from "@/lib/supabase";
import type { InsightArticle } from "@/lib/types";

type InsightRow = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  read_time: string;
  published_at: string;
  image: string;
  content: string | null;
  is_visible: boolean | null;
  created_at?: string | null;
};

export type InsightWithMeta = InsightArticle & {
  content: string | null;
  author: string;
  date: string;
};

const INSIGHT_COLUMNS =
  "id,slug,title,excerpt,category,read_time,published_at,image,content,is_visible,created_at";

function formatPublishedAt(value: string | null | undefined): string {
  if (!value) return "";

  const datePart = value.split("T")[0];
  const [year, month, day] = datePart.split("-").map(Number);

  if (!year || !month || !day) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

export function mapInsight(row: InsightRow): InsightWithMeta {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    readTime: row.read_time,
    publishedAt: row.published_at,
    image: row.image,
    content: row.content ?? null,
    author: "Atoll Estates Research",
    date: formatPublishedAt(row.published_at),
  };
}

export async function getAllInsights(): Promise<InsightWithMeta[]> {
  const { data, error } = await supabase
    .from("insights")
    .select(INSIGHT_COLUMNS)
    .eq("is_visible", true)
    .order("published_at", { ascending: false });

  if (error) {
    console.error("Failed to fetch insights", error);
    return [];
  }

  return ((data ?? []) as InsightRow[]).map(mapInsight);
}

export async function getInsightBySlug(
  slug: string
): Promise<InsightWithMeta | null> {
  const { data, error } = await supabase
    .from("insights")
    .select(INSIGHT_COLUMNS)
    .eq("slug", slug)
    .eq("is_visible", true)
    .maybeSingle();

  if (error) {
    console.error(`Failed to fetch insight for slug: ${slug}`, error);
    return null;
  }

  if (!data) return null;

  return mapInsight(data as InsightRow);
}