import { notFound } from "next/navigation";
import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { OpportunityDetail } from "@/components/opportunities/detail";
import { RequestAccessCTA } from "@/components/request-access-cta";
import { opportunities, getOpportunityBySlug } from "@/lib/mock-data";

interface OpportunityPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return opportunities.map((opp) => ({
    slug: opp.slug,
  }));
}

export async function generateMetadata({ params }: OpportunityPageProps) {
  const { slug } = await params;
  const opportunity = getOpportunityBySlug(slug);

  if (!opportunity) {
    return {
      title: "Opportunity Not Found | ATOLL ESTATES",
    };
  }

  return {
    title: `${opportunity.codeName} | ATOLL ESTATES`,
    description: opportunity.summary,
  };
}

export default async function OpportunityPage({ params }: OpportunityPageProps) {
  const { slug } = await params;
  const opportunity = getOpportunityBySlug(slug);

  if (!opportunity) {
    notFound();
  }

  return (
    <>
      <LuxuryHeader />
      <main>
        <OpportunityDetail opportunity={opportunity} />
        <RequestAccessCTA
          title={`Request Full Access to ${opportunity.codeName}`}
          subtitle="Get detailed project information including exact location, site maps, financial models, and legal documentation."
        />
      </main>
      <SiteFooter />
    </>
  );
}
