import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { OpportunitiesContent } from "@/components/opportunities/content";
import { RequestAccessCTA } from "@/components/request-access-cta";
import { getAllOpportunities } from "@/lib/opportunities";

export const metadata = {
  title: "Opportunities | ATOLL ESTATES",
  description:
    "Browse curated Maldives tourism real estate opportunities across integrated tourism, strata villas, resort development, and more.",
};

export default async function OpportunitiesPage() {
  const opportunities = await getAllOpportunities();

  return (
    <>
      <LuxuryHeader />
      <main>
        <PageHero
          eyebrow="Private Pipeline"
          title="Investment Opportunities"
          subtitle="Browse our curated selection of Maldives tourism real estate opportunities. Filter by category, access level, and development stage to find opportunities matching your investment criteria."
          backgroundImage="https://images.unsplash.com/photo-1540202404-a2f29016b523?q=80&w=2833&auto=format&fit=crop"
          size="large"
        />
        <OpportunitiesContent opportunities={opportunities} />
        <RequestAccessCTA
          title="Request Full Access to the Development Pipeline"
          subtitle="Get detailed project information, exact locations, financial models, and legal pathway documentation for qualified investors."
        />
      </main>
      <SiteFooter />
    </>
  );
}
