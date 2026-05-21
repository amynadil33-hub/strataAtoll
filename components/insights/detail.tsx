"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { RequestAccessCTA } from "@/components/request-access-cta";
import { Insight, formatCategory } from "@/lib/types";
import { INSIGHTS } from "@/lib/mock-data";

interface InsightDetailProps {
  insight: Insight;
}

export function InsightDetail({ insight }: InsightDetailProps) {
  const relatedInsights = INSIGHTS.filter(
    (i) => i.id !== insight.id && i.category === insight.category
  ).slice(0, 2);

  return (
    <>
      <LuxuryHeader />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Link
                href="/insights"
                className="inline-flex items-center gap-2 text-muted-foreground text-sm hover:text-foreground transition-colors mb-8"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Insights
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="flex items-center gap-4 mb-6"
            >
              <span className="text-primary text-xs tracking-widest uppercase">
                {formatCategory(insight.category)}
              </span>
              <span className="text-muted-foreground text-xs">
                {insight.readTime}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-8 leading-tight"
            >
              {insight.title}
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-muted" />
              <div>
                <p className="text-foreground">{insight.author}</p>
                <p className="text-sm text-muted-foreground">{insight.date}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Image */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="pb-16 lg:pb-24"
        >
          <div className="max-w-6xl mx-auto px-6">
            <div className="relative aspect-[21/9] overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${insight.image}')` }}
              />
              <div className="absolute inset-0 bg-background/10" />
            </div>
          </div>
        </motion.section>

        {/* Content */}
        <section className="pb-20 lg:pb-28">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-invert prose-lg max-w-none"
            >
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                {insight.excerpt}
              </p>
              
              {/* Placeholder content - will be replaced with real content from Supabase */}
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  The Maldivian hospitality market continues to demonstrate remarkable 
                  resilience and growth potential, attracting significant interest from 
                  global institutional investors. With over 160 operational resorts and 
                  a pipeline of 50+ new developments, the market presents diverse 
                  investment opportunities across multiple segments.
                </p>
                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
                  Market Fundamentals
                </h2>
                <p>
                  Tourism arrivals have surpassed pre-pandemic levels, with 2024 seeing 
                  record numbers from key source markets including China, India, Russia, 
                  and the European Union. The government&apos;s commitment to sustainable 
                  tourism development and infrastructure investment continues to enhance 
                  the destination&apos;s appeal.
                </p>
                <p>
                  Average daily rates (ADR) in the luxury segment have increased by 
                  approximately 15% year-over-year, while occupancy rates remain strong 
                  at 75-85% across premium properties. These fundamentals support robust 
                  RevPAR growth and attractive yield profiles for investors.
                </p>
                <h2 className="font-serif text-2xl text-foreground mt-12 mb-6">
                  Investment Considerations
                </h2>
                <p>
                  Investors should consider several factors when evaluating Maldivian 
                  hospitality assets, including lease terms, brand partnerships, 
                  sustainability credentials, and geographic positioning within the 
                  archipelago. Properties with strong environmental practices are 
                  increasingly commanding premium valuations.
                </p>
                <blockquote className="border-l-2 border-primary pl-6 my-8 italic">
                  &ldquo;The Maldives represents one of the most compelling luxury hospitality 
                  investment destinations globally, combining natural exclusivity with 
                  strong demand fundamentals and favorable regulatory environment.&rdquo;
                </blockquote>
                <p>
                  For qualified investors seeking portfolio diversification into 
                  alternative assets with inflation-hedging characteristics, Maldivian 
                  hospitality investments merit serious consideration as part of a 
                  broader allocation strategy.
                </p>
              </div>
            </motion.div>

            {/* Share */}
            <div className="mt-16 pt-8 border-t border-border">
              <p className="text-xs tracking-widest uppercase text-muted-foreground mb-4">
                Share This Article
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </button>
                <button className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </button>
                <button className="w-10 h-10 border border-border flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Related Articles */}
        {relatedInsights.length > 0 && (
          <section className="py-20 lg:py-28 bg-card">
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="font-serif text-2xl text-foreground mb-12">
                Related Articles
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {relatedInsights.map((related, index) => (
                  <motion.article
                    key={related.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <Link href={`/insights/${related.slug}`}>
                      <div className="relative aspect-[16/10] overflow-hidden mb-6">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                          style={{ backgroundImage: `url('${related.image}')` }}
                        />
                        <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors" />
                      </div>
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-primary text-xs tracking-widest uppercase">
                          {formatCategory(related.category)}
                        </span>
                        <span className="text-muted-foreground text-xs">
                          {related.readTime}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">
                        {related.date}
                      </p>
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

        <RequestAccessCTA />
      </main>
      <SiteFooter />
    </>
  );
}
