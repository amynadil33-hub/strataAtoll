"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Lock } from "lucide-react";
import type { Opportunity } from "@/lib/types";
import { formatCategory, formatAccessLevel } from "@/lib/types";

interface OpportunityCardProps {
  opportunity: Opportunity;
  index?: number;
}

export function OpportunityCard({ opportunity, index = 0 }: OpportunityCardProps) {
  const isLocked = opportunity.accessLevel !== "public_summary";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link
        href={`/opportunities/${opportunity.slug}`}
        className="group block glass-card overflow-hidden hover:border-primary/30 transition-all duration-500"
      >
        {/* Image */}
        <div className="relative aspect-[16/10] overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
            style={{ backgroundImage: `url('${opportunity.image}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

          {/* Badges */}
          <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-background/90 backdrop-blur-sm text-primary text-[10px] tracking-[0.15em] uppercase border border-border">
              {formatCategory(opportunity.category)}
            </span>
            {isLocked && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-primary/90 text-primary-foreground text-[10px] tracking-[0.15em] uppercase">
                <Lock className="w-3 h-3" />
                {formatAccessLevel(opportunity.accessLevel)}
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Code Name */}
          <p className="eyebrow-gold mb-2">{opportunity.codeName}</p>

          {/* Title */}
          <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {opportunity.title}
          </h3>

          {/* Location */}
          <p className="text-sm text-muted-foreground mb-4">
            {opportunity.locationLabel}
          </p>

          {/* Metrics */}
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">
                Scale
              </p>
              <p className="text-sm text-foreground">{opportunity.estimatedScale}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-[0.15em] uppercase text-muted-foreground mb-1">
                Villas
              </p>
              <p className="text-sm text-foreground">{opportunity.proposedVillaCount}</p>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
