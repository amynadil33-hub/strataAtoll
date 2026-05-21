import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { ProcessTimeline } from "@/components/process-timeline";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { RequestAccessCTA } from "@/components/request-access-cta";

export const metadata = {
  title: "How It Works | ATOLL ESTATES",
  description:
    "Understand the private access process for Maldives tourism real estate opportunities.",
};

const processSteps = [
  {
    number: "01",
    title: "Opportunity Sourcing",
    description:
      "We identify potential tourism real estate opportunities across inhabited islands, tourism land, integrated development zones, resort assets, council-linked projects, and selected island development sites.",
  },
  {
    number: "02",
    title: "Initial Screening",
    description:
      "We review location, access, land potential, council/local context, environmental sensitivity, tourism suitability, development scale, and commercial viability.",
  },
  {
    number: "03",
    title: "Concept Packaging",
    description:
      "We prepare preliminary project concepts, opportunity summaries, villa count assumptions, hospitality use cases, development structures, and investor/developer positioning.",
  },
  {
    number: "04",
    title: "Legal Pathway Review",
    description:
      "We identify the public legal and regulatory pathway that may apply, including land control, tourism use, council authority, Ministry of Tourism requirements, environmental approvals, and potential strata eligibility.",
  },
  {
    number: "05",
    title: "Private Developer / Investor Access",
    description:
      "Qualified parties receive controlled access to project teasers, location context, high-level financials, and strategic fit assessment.",
  },
  {
    number: "06",
    title: "NDA / Private Data Room",
    description:
      "Exact locations, maps, site boundaries, financial models, legal memos, council notes, and documents are shared only through private access with appropriate confidentiality agreements.",
  },
  {
    number: "07",
    title: "Partner Engagement",
    description:
      "Qualified developers, investors, operators, and real estate companies can proceed to site visits, local engagement, feasibility studies, and project structuring.",
  },
  {
    number: "08",
    title: "Development, Sales & Operations",
    description:
      "Where viable, projects may proceed toward development agreements, project SPV structuring, villa sales strategy, operator selection, rental management, and long-term asset operations.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <LuxuryHeader />
      <main>
        <PageHero
          eyebrow="Private Access"
          title="How Private Access Works"
          subtitle="Our structured process ensures qualified partners receive comprehensive project information while maintaining confidentiality for landowners and stakeholders."
          backgroundImage="https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2873&auto=format&fit=crop"
          size="large"
        />

        {/* Process Timeline */}
        <section className="py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <SectionEyebrow
              eyebrow="The Process"
              title="From Sourcing to Development"
              description="Each opportunity progresses through a structured process designed to protect all parties while enabling efficient partner matching."
            />

            <ProcessTimeline steps={processSteps} />
          </div>
        </section>

        {/* Access Levels */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <SectionEyebrow
              eyebrow="Information Tiers"
              title="Access Levels"
              description="Information is released progressively based on qualification and confidentiality requirements."
              centered
            />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
              {[
                {
                  level: "Public Summary",
                  description:
                    "Broad project concept, category, region, and indicative scale visible on the platform.",
                },
                {
                  level: "Qualified Access",
                  description:
                    "Additional detail shared with verified developers, investors, and real estate professionals.",
                },
                {
                  level: "NDA Required",
                  description:
                    "Sensitive information including location context and preliminary financials under confidentiality.",
                },
                {
                  level: "Private Data Room",
                  description:
                    "Full project documentation including maps, legal memos, and detailed financial models.",
                },
              ].map((item, index) => (
                <div
                  key={item.level}
                  className="glass-card p-6 text-center hover:border-primary/30 transition-colors"
                >
                  <div className="w-10 h-10 flex items-center justify-center border border-primary/30 mx-auto mb-4">
                    <span className="text-sm font-medium text-primary">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg text-foreground mb-3">
                    {item.level}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
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
