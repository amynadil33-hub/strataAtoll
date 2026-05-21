"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Users,
  Hotel,
  Briefcase,
  HardHat,
  TrendingUp,
} from "lucide-react";

const partnerTypes = [
  {
    icon: Building2,
    title: "Real Estate Developers",
    description:
      "Access curated development sites, integrated tourism zones, and villa-led opportunities.",
  },
  {
    icon: Users,
    title: "Family Offices & Private Capital",
    description:
      "Diversify into Maldives tourism real estate with structured entry points and managed products.",
  },
  {
    icon: Hotel,
    title: "Hospitality Groups & Operators",
    description:
      "Identify management contract and operational opportunities across resort and villa segments.",
  },
  {
    icon: Briefcase,
    title: "Real Estate Companies & Sales Partners",
    description:
      "Access inventory for international sales, marketing, and distribution partnerships.",
  },
  {
    icon: HardHat,
    title: "Construction / EPC / Modular Developers",
    description:
      "Connect with development projects requiring construction and delivery expertise.",
  },
  {
    icon: TrendingUp,
    title: "Funds & Strategic Investors",
    description:
      "Evaluate portfolio opportunities across multiple segments and risk profiles.",
  },
];

export function HomePartners() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow-gold mb-4"
          >
            For Qualified Partners
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground heading-luxury max-w-2xl mx-auto"
          >
            Who We Work With
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {partnerTypes.map((partner, index) => {
            const Icon = partner.icon;
            return (
              <motion.div
                key={partner.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-6 lg:p-8 hover:border-primary/30 transition-colors group"
              >
                <div className="w-12 h-12 flex items-center justify-center border border-primary/30 mb-6 group-hover:bg-primary/10 transition-colors">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-serif text-xl text-foreground mb-3">
                  {partner.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {partner.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
