import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { CategoryCard } from "@/components/category-card";
import { RequestAccessCTA } from "@/components/request-access-cta";
import { segments } from "@/lib/segments";

export const metadata = {
  title: "Investment Segments | ATOLL ESTATES",
  description:
    "A structured view of Maldives tourism real estate opportunities across villa-led, resort-led, council-led, and hospitality-led development categories.",
};

export default function SegmentsPage() {
  return (
    <>
      <LuxuryHeader />
      <main>
        <PageHero
          eyebrow="Investment Segments"
          title="Opportunity Categories"
          subtitle="A structured view of Maldives tourism real estate opportunities across villa-led, resort-led, council-led, and hospitality-led development categories."
          backgroundImage="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2874&auto=format&fit=crop"
          size="large"
        />

        <section className="py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
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

        <RequestAccessCTA />
      </main>
      <SiteFooter />
    </>
  );
}
