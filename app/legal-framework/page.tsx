import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { RiskDisclosure } from "@/components/risk-disclosure";
import { RequestAccessCTA } from "@/components/request-access-cta";

export const metadata = {
  title: "Legal Framework | ATOLL ESTATES",
  description:
    "Public overview of key legal and regulatory considerations for Maldives tourism real estate opportunities.",
};

const legalThemes = [
  { title: "Land Control", description: "Lease rights and land tenure structures" },
  { title: "Tourism Approvals", description: "Ministry of Tourism development requirements" },
  { title: "Council Authority", description: "Local island and council jurisdiction" },
  { title: "Environmental", description: "EIA and environmental compliance" },
  { title: "Integrated Tourism", description: "Mixed-use classification requirements" },
  { title: "Strata Registration", description: "Tourism villa registration process" },
  { title: "Lease Agreements", description: "Documentation and registration" },
  { title: "Foreign Participation", description: "Investment structure requirements" },
  { title: "Tax Obligations", description: "Operating taxes and charges" },
  { title: "Management Contracts", description: "Operator agreement requirements" },
];

const developerConsiderations = [
  "Is land control clear and documented?",
  "Can the land be used for tourism under current zoning?",
  "Does the council or landholder have authority to grant rights?",
  "Is Ministry of Tourism approval required?",
  "Can the project qualify for integrated tourism or tourism strata?",
  "What environmental approvals are needed?",
  "Can units be leased or sold as long-term strata interests?",
  "What management agreement is required?",
  "What taxes and tourism charges apply?",
  "What buyer disclosures are needed?",
];

const risks = [
  { title: "Approval Risk", description: "Required approvals may not be granted or may be delayed" },
  { title: "Environmental Risk", description: "Environmental constraints may limit development potential" },
  { title: "Land-Use Risk", description: "Land classification or zoning may change" },
  { title: "Council/Authority Risk", description: "Local authority decisions may affect project viability" },
  { title: "Legal Classification Risk", description: "Strata or tourism eligibility may not be confirmed" },
  { title: "Construction Risk", description: "Logistics, costs, and timeline may exceed projections" },
  { title: "Sales Absorption Risk", description: "Villa sales may be slower than projected" },
  { title: "Operator Risk", description: "Operator selection or performance may impact returns" },
  { title: "Financing Risk", description: "Project or buyer financing may not be available" },
  { title: "Currency & Tax Risk", description: "Exchange rates and tax treatment may change" },
];

export default function LegalFrameworkPage() {
  return (
    <>
      <LuxuryHeader />
      <main>
        <PageHero
          eyebrow="Legal & Regulatory"
          title="Legal Framework & Structuring Considerations"
          subtitle="Public overview of key legal and regulatory considerations for Maldives tourism real estate opportunities. Project-specific legal advice and approvals are required before any transaction."
          backgroundImage="https://images.unsplash.com/photo-1544551763-46a013bb70d5?q=80&w=2870&auto=format&fit=crop"
          size="large"
        />

        {/* Disclaimer */}
        <section className="py-16 lg:py-20 border-b border-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="gold-border-card p-8 lg:p-12">
              <h2 className="font-serif text-2xl text-foreground mb-4">
                Important Legal Disclaimer
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                The information on this page is general and preliminary. It is
                not legal advice, not an offer to sell land, villas, securities,
                or investment products, and should not be relied upon without
                project-specific legal, regulatory, tax, environmental, and
                commercial due diligence. Laws, regulations, and approval
                requirements may change. All parties should engage qualified
                legal counsel before proceeding with any transaction.
              </p>
            </div>
          </div>
        </section>

        {/* Key Legal Themes */}
        <section className="py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <SectionEyebrow
              eyebrow="Overview"
              title="Key Legal Themes"
              description="Important legal and regulatory areas that typically apply to Maldives tourism real estate projects."
            />

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {legalThemes.map((theme) => (
                <div
                  key={theme.title}
                  className="glass-card p-5 hover:border-primary/30 transition-colors"
                >
                  <h3 className="text-sm font-medium text-foreground mb-2">
                    {theme.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {theme.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tourism Strata */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div>
                <SectionEyebrow
                  eyebrow="Strata Structure"
                  title="Tourism Strata Concepts"
                  className="mb-6"
                />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Tourism strata villa structures may allow villas, rooms, or
                  apartments within eligible tourism developments to be
                  registered and leased on a long-term basis, subject to the
                  applicable regulations, Ministry of Tourism registration,
                  lease documentation, management agreements, and compliance
                  with the head lease or land arrangement.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Not all projects are eligible for strata registration.
                  Eligibility depends on project type, location, approvals, and
                  compliance with applicable requirements. Each project requires
                  specific legal review.
                </p>
              </div>

              <div>
                <SectionEyebrow
                  eyebrow="Buyer Position"
                  title="Foreign Buyer Considerations"
                  className="mb-6"
                />
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Foreign buyers should not be described as acquiring freehold
                  Maldivian land. The intended product in villa-led tourism
                  projects is generally a long-term leasehold or strata
                  interest, subject to project eligibility, approvals,
                  registration, and legal documentation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Buyers should receive clear disclosures regarding the nature
                  of their interest, lease terms, management arrangements, and
                  any restrictions on use, transfer, or financing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Developer Considerations */}
        <section className="py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <SectionEyebrow
              eyebrow="Due Diligence"
              title="Developer Evaluation Checklist"
              description="Key questions developers and investors should evaluate before proceeding with any opportunity."
            />

            <div className="grid sm:grid-cols-2 gap-4">
              {developerConsiderations.map((item, index) => (
                <div
                  key={item}
                  className="glass-card p-5 flex items-start gap-4"
                >
                  <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-primary/30 bg-primary/5">
                    <span className="text-xs text-primary">{index + 1}</span>
                  </div>
                  <p className="text-sm text-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Public vs Private */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <SectionEyebrow
                eyebrow="Information Policy"
                title="Public vs Private Information"
                centered
              />
              <p className="text-muted-foreground leading-relaxed">
                Public pages show broad project concepts, categories,
                development stages, and public-safe legal notes. Exact maps,
                site documents, council notes, legal memos, financial models,
                and transaction documents are shared only with qualified parties
                through private access agreements.
              </p>
            </div>
          </div>
        </section>

        {/* Risk Disclosure */}
        <section className="py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <SectionEyebrow
              eyebrow="Risk Factors"
              title="Key Risk Considerations"
              description="All real estate investments carry risk. The following are key risk factors that may apply to Maldives tourism real estate opportunities."
            />

            <RiskDisclosure risks={risks} />
          </div>
        </section>

        <RequestAccessCTA
          title="Request Legal Pathway Review"
          subtitle="Qualified parties can request detailed legal pathway information for specific opportunities."
        />
      </main>
      <SiteFooter />
    </>
  );
}
