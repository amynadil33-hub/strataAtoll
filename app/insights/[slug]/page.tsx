import { notFound } from "next/navigation";
import { Metadata } from "next";
import { INSIGHTS } from "@/lib/mock-data";
import { InsightDetail } from "@/components/insights/detail";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug);
  
  if (!insight) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${insight.title} | IslandVest Insights`,
    description: insight.excerpt,
  };
}

export async function generateStaticParams() {
  return INSIGHTS.map((insight) => ({
    slug: insight.slug,
  }));
}

export default async function InsightDetailPage({ params }: Props) {
  const { slug } = await params;
  const insight = INSIGHTS.find((i) => i.slug === slug);

  if (!insight) {
    notFound();
  }

  return <InsightDetail insight={insight} />;
}
