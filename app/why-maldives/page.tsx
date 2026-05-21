"use client";

import { motion } from "framer-motion";
import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { StatStrip } from "@/components/stat-strip";
import { RequestAccessCTA } from "@/components/request-access-cta";

const stats = [
  { value: "2M+", label: "Annual tourist arrivals" },
  { value: "Top 10", label: "Global luxury destination" },
  { value: "160+", label: "Operating resorts" },
  { value: "$400+", label: "Average daily rate" },
];

const reasons = [
  {
    title: "Global Luxury Brand Recognition",
    description:
      "The Maldives has established itself as a premier luxury tourism destination, synonymous with overwater villas, pristine beaches, and world-class hospitality.",
    image:
      "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2874&auto=format&fit=crop",
  },
  {
    title: "Scarcity of Beachfront Real Estate",
    description:
      "With limited developable land across 1,200 islands, Maldives tourism real estate benefits from natural scarcity that supports premium pricing.",
    image:
      "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865&auto=format&fit=crop",
  },
  {
    title: "Diverse Tourism Experiences",
    description:
      "From world-class diving and water sports to wellness retreats, honeymoon destinations, family travel, and safari cruises, the Maldives offers diverse tourism segments.",
    image:
      "https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2870&auto=format&fit=crop",
  },
  {
    title: "Expanding Infrastructure",
    description:
      "Growing airport connectivity, new domestic airports, and improved transfer logistics are opening previously inaccessible atolls to tourism development.",
    image:
      "https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=2833&auto=format&fit=crop",
  },
];

const opportunities = [
  "Growth beyond traditional private island resorts",
  "Emerging inhabited island tourism segment",
  "Integrated tourism zones and mixed-use developments",
  "Strata villa concepts with rental programmes",
  "Boutique hotel and guesthouse expansion",
  "Resort repositioning and asset opportunities",
  "Council-linked and community tourism projects",
  "Luxury packaging at accessible price points",
];

export default function WhyMaldivesPage() {
  return (
    <>
      <LuxuryHeader />
      <main>
        <PageHero
          eyebrow="Market Thesis"
          title="Why Maldives Tourism Real Estate"
          subtitle="The Maldives represents one of the world's most compelling luxury tourism real estate markets, combining brand prestige, natural scarcity, and evolving investment structures."
          backgroundImage="https://images.unsplash.com/photo-1586375300773-8384e3e4916f?q=80&w=2787&auto=format&fit=crop"
          size="large"
        />

        <StatStrip stats={stats} />

        {/* Reasons Grid */}
        <section className="py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <SectionEyebrow
              eyebrow="Destination Strengths"
              title="A Premier Luxury Tourism Market"
            />

            <div className="space-y-16 lg:space-y-24">
              {reasons.map((reason, index) => (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
                >
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <h3 className="font-serif text-2xl lg:text-3xl text-foreground mb-4">
                      {reason.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                  <div
                    className={`relative aspect-[4/3] ${
                      index % 2 === 1 ? "lg:order-1" : ""
                    }`}
                  >
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${reason.image}')` }}
                    />
                    <div className="absolute inset-0 bg-background/10" />
                    <div
                      className={`absolute -inset-4 border border-primary/20 -z-10 ${
                        index % 2 === 1 ? "-left-4 -right-8" : "-left-8 -right-4"
                      }`}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Emerging Opportunities */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <SectionEyebrow
                  eyebrow="Market Evolution"
                  title="Beyond Traditional Resort Development"
                  className="mb-6"
                />
                <p className="text-muted-foreground leading-relaxed mb-8">
                  While the Maldives is renowned for private island luxury
                  resorts, the market is evolving to include new investment
                  structures and development models that offer entry points
                  beyond traditional large-scale resort acquisitions.
                </p>

                <div className="space-y-3">
                  {opportunities.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-4"
                    >
                      <div className="w-1.5 h-1.5 bg-primary" />
                      <p className="text-foreground">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-square"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=2874&auto=format&fit=crop')",
                  }}
                />
                <div className="absolute inset-0 bg-background/20" />
                <div className="absolute -inset-4 border border-primary/20 -z-10" />
              </motion.div>
            </div>
          </div>
        </section>

        <RequestAccessCTA
          title="Explore Maldives Opportunities"
          subtitle="Request private access to our curated pipeline of Maldives tourism real estate opportunities."
        />
      </main>
      <SiteFooter />
    </>
  );
}
