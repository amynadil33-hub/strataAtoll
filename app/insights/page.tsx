"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { RequestAccessCTA } from "@/components/request-access-cta";
import { INSIGHTS } from "@/lib/mock-data";
import { formatCategory } from "@/lib/types";

export default function InsightsPage() {
  const featuredInsight = INSIGHTS[0];
  const recentInsights = INSIGHTS.slice(1);

  return (
    <>
      <LuxuryHeader />
      <main className="min-h-screen bg-background">
        <PageHero
          eyebrow="Intelligence"
          title="Market Insights"
          description="Expert analysis, market reports, and strategic perspectives on Maldivian hospitality investment."
        />

        {/* Featured Article */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <motion.article
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${featuredInsight.image}')` }}
                />
                <div className="absolute inset-0 bg-background/20" />
                <div className="absolute top-6 left-6">
                  <span className="px-4 py-2 bg-primary text-primary-foreground text-xs tracking-widest uppercase">
                    Featured
                  </span>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-primary text-xs tracking-widest uppercase">
                    {formatCategory(featuredInsight.category)}
                  </span>
                  <span className="text-muted-foreground text-xs">
                    {featuredInsight.readTime}
                  </span>
                </div>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4 leading-tight">
                  {featuredInsight.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {featuredInsight.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-muted" />
                    <div>
                      <p className="text-sm text-foreground">{featuredInsight.author}</p>
                      <p className="text-xs text-muted-foreground">{featuredInsight.date}</p>
                    </div>
                  </div>
                  <Link
                    href={`/insights/${featuredInsight.slug}`}
                    className="text-sm tracking-widest uppercase text-primary hover:text-primary/80 transition-colors"
                  >
                    Read Article
                  </Link>
                </div>
              </div>
            </motion.article>
          </div>
        </section>

        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-border" />
        </div>

        {/* Recent Insights */}
        <section className="py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="font-serif text-2xl text-foreground mb-12">
              Recent Publications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recentInsights.map((insight, index) => (
                <motion.article
                  key={insight.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Link href={`/insights/${insight.slug}`}>
                    <div className="relative aspect-[16/10] overflow-hidden mb-6">
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                        style={{ backgroundImage: `url('${insight.image}')` }}
                      />
                      <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors" />
                    </div>
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-primary text-xs tracking-widest uppercase">
                        {formatCategory(insight.category)}
                      </span>
                      <span className="text-muted-foreground text-xs">
                        {insight.readTime}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors leading-snug">
                      {insight.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                      {insight.excerpt}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {insight.date}
                    </p>
                  </Link>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20 lg:py-28 bg-card">
          <div className="max-w-2xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl text-foreground mb-4">
                Stay Informed
              </h2>
              <p className="text-muted-foreground mb-8">
                Receive quarterly market reports and exclusive investment insights 
                directly to your inbox.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-background border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors whitespace-nowrap"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-muted-foreground mt-4">
                Reserved for qualified investors. Unsubscribe anytime.
              </p>
            </motion.div>
          </div>
        </section>

        <RequestAccessCTA />
      </main>
      <SiteFooter />
    </>
  );
}
