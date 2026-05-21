import { notFound } from "next/navigation";
import { Metadata } from "next";
import { InsightDetail } from "@/components/insights/detail";
import { getAllInsights, getInsightBySlug } from "@/lib/insights";

interface Props { params: Promise<{ slug: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  if (!insight) return { title: "Article Not Found" };
  return { title: `${insight.title} | IslandVest Insights`, description: insight.excerpt };
}

export async function generateStaticParams() {
  const insights = await getAllInsights();
  return insights.map((insight) => ({ slug: insight.slug }));
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = await getInsightBySlug(slug);
  if (!insight) notFound();
  const insights = await getAllInsights();
  return <InsightDetail insight={insight} relatedInsights={insights.filter((i) => i.id !== insight.id && i.category === insight.category).slice(0,2)} />;
}
