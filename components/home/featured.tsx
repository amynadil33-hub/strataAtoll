"use client";

import Link from "next/link";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { OpportunityCard } from "@/components/opportunity-card";
import { getFeaturedOpportunities } from "@/lib/mock-data";

export function HomeFeatured() {
  const featured = getFeaturedOpportunities();

  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <SectionEyebrow
            eyebrow="Featured"
            title="Selected Opportunities"
            description="A curated selection of current opportunities across multiple segments."
            className="mb-0"
          />
          <Link
            href="/opportunities"
            className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-primary hover:text-foreground transition-colors shrink-0"
          >
            View All
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
          {featured.map((opportunity, index) => (
            <OpportunityCard
              key={opportunity.id}
              opportunity={opportunity}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
