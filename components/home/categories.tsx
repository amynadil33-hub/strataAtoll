"use client";

import { SectionEyebrow } from "@/components/section-eyebrow";
import { CategoryCard } from "@/components/category-card";
import { segments } from "@/lib/segments";

export function HomeCategories() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <SectionEyebrow
          eyebrow="Investment Segments"
          title="Opportunity Categories"
          description="A structured view of Maldives tourism real estate opportunities across villa-led, resort-led, council-led, and hospitality-led development categories."
        />

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {segments.map((segment, index) => (
            <CategoryCard
              key={segment.id}
              segment={segment}
              index={index}
              isPrimary={segment.isPrimary}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
