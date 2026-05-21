"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Check, AlertCircle } from "lucide-react";
import type { SegmentContent } from "@/lib/segment-content";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { OpportunityCard } from "@/components/opportunity-card";

interface SegmentDetailProps {
  content: SegmentContent;
  relatedOpportunities: import("@/lib/types").Opportunity[];
}

export function SegmentDetail({ content, relatedOpportunities }: SegmentDetailProps) {

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] lg:min-h-[70vh] flex items-end pb-12 lg:pb-20">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${content.heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/segments"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              All Segments
            </Link>
          </motion.div>

          <div className="max-w-4xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="eyebrow-gold mb-4"
            >
              {content.eyebrow}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-foreground heading-luxury"
            >
              {content.title}
            </motion.h1>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg lg:text-xl text-muted-foreground leading-relaxed"
            >
              {content.overview}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Who Is It For */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionEyebrow eyebrow="Target Partners" title="Who Is This For?" />

          <div className="grid sm:grid-cols-2 gap-4">
            {content.whoIsItFor.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-5 flex items-start gap-4"
              >
                <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-primary/30 bg-primary/5">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why It Matters */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionEyebrow
            eyebrow="Investment Rationale"
            title="Why This Segment Matters"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.whyItMatters.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-5"
              >
                <div className="w-1.5 h-1.5 bg-primary mb-4" />
                <p className="text-sm text-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Typical Structures */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            <div>
              <SectionEyebrow
                eyebrow="Deal Structures"
                title="Typical Project Structures"
                className="mb-8"
              />
              <div className="space-y-4">
                {content.typicalStructures.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 w-6 h-6 flex items-center justify-center border border-primary/30 bg-primary/5 text-xs text-primary">
                      {index + 1}
                    </div>
                    <p className="text-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            <div>
              <SectionEyebrow
                eyebrow="Due Diligence"
                title="Key Evaluation Points"
                className="mb-8"
              />
              <div className="space-y-4">
                {content.evaluationPoints.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 w-1.5 h-1.5 mt-2 bg-primary" />
                    <p className="text-muted-foreground">{item}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approval Considerations */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <SectionEyebrow
            eyebrow="Regulatory Pathway"
            title="Approval Considerations"
            description="Key regulatory and approval considerations for projects in this segment. All projects require project-specific legal and regulatory due diligence."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {content.approvalConsiderations.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="glass-card p-5 flex items-start gap-4"
              >
                <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-accent/30 bg-accent/5">
                  <AlertCircle className="w-4 h-4 text-accent" />
                </div>
                <p className="text-sm text-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Opportunities */}
      {relatedOpportunities.length > 0 && (
        <section className="py-16 lg:py-24 bg-secondary/30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <SectionEyebrow
                eyebrow="Current Pipeline"
                title="Sample Opportunities"
                className="mb-0"
              />
              <Link
                href="/opportunities"
                className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-primary hover:text-foreground transition-colors"
              >
                View All Opportunities
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {relatedOpportunities.map((opportunity, index) => (
                <OpportunityCard
                  key={opportunity.id}
                  opportunity={opportunity}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
