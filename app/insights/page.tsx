import Link from "next/link";
import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { RequestAccessCTA } from "@/components/request-access-cta";
import { getAllInsights } from "@/lib/insights";

export default async function InsightsPage() {
  const insights = await getAllInsights();
  const featuredInsight = insights[0];
  const recentInsights = insights.slice(1);

  return (
    <>
      <LuxuryHeader />
      <main className="min-h-screen bg-background">
        <PageHero eyebrow="Intelligence" title="Market Insights" description="Expert analysis, market reports, and strategic perspectives on Maldivian hospitality investment." />
        {featuredInsight ? (
          <section className="py-20 lg:py-28"><div className="max-w-7xl mx-auto px-6"><article className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"><div className="relative aspect-[4/3] overflow-hidden"><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${featuredInsight.image}')` }} /></div><div><h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4 leading-tight">{featuredInsight.title}</h2><p className="text-muted-foreground leading-relaxed mb-8">{featuredInsight.excerpt}</p><Link href={`/insights/${featuredInsight.slug}`} className="text-sm tracking-widest uppercase text-primary">Read Article</Link></div></article></div></section>
        ) : null}
        <section className="py-20 lg:py-28"><div className="max-w-7xl mx-auto px-6"><div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">{recentInsights.map((insight) => (<article key={insight.id}><Link href={`/insights/${insight.slug}`}><h3 className="font-serif text-xl text-foreground mb-3">{insight.title}</h3><p className="text-muted-foreground text-sm line-clamp-2">{insight.excerpt}</p></Link></article>))}</div></div></section>
        <RequestAccessCTA />
      </main>
      <SiteFooter />
    </>
  );
}
