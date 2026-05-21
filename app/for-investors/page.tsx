import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { PageHero } from "@/components/page-hero";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { RequestAccessCTA } from "@/components/request-access-cta";
import {
  Building2,
  Users,
  Hotel,
  Briefcase,
  HardHat,
  TrendingUp,
  HandshakeIcon,
  Landmark,
} from "lucide-react";

export const metadata = {
  title: "For Investors & Developers | ATOLL ESTATES",
  description:
    "Learn how developers, family offices, hospitality groups, and strategic investors can access Maldives tourism real estate opportunities.",
};

const partnerTypes = [
  {
    icon: Building2,
    title: "Real Estate Developers",
    description:
      "Access curated development sites across integrated tourism, strata villas, inhabited island land, and resort development segments.",
    access: [
      "Pre-screened development opportunities",
      "Site and location information",
      "Preliminary feasibility context",
      "Legal pathway guidance",
      "Operator introductions",
    ],
  },
  {
    icon: Briefcase,
    title: "Real Estate Companies & Sales Partners",
    description:
      "Partner on villa sales, marketing, and distribution for strata villa and managed residence projects.",
    access: [
      "Inventory access for sales partners",
      "Marketing materials and collateral",
      "Sales structure and commission frameworks",
      "Buyer qualification support",
      "Launch and distribution coordination",
    ],
  },
  {
    icon: Users,
    title: "Family Offices & Private Capital",
    description:
      "Structured entry into Maldives tourism real estate with managed products and professional oversight.",
    access: [
      "Diversified tourism real estate exposure",
      "Managed villa investments with rental income",
      "Co-investment opportunities",
      "Professional operator management",
      "Portfolio diversification structures",
    ],
  },
  {
    icon: Hotel,
    title: "Hospitality Groups & Operators",
    description:
      "Identify management contract, franchise, and operational platform opportunities across multiple segments.",
    access: [
      "Management contract opportunities",
      "Franchise and brand extension",
      "Operational platform acquisitions",
      "Technical services agreements",
      "Resort and villa management mandates",
    ],
  },
  {
    icon: TrendingUp,
    title: "Funds & Strategic Investors",
    description:
      "Portfolio-level access to opportunities across segments, risk profiles, and investment structures.",
    access: [
      "Multi-asset pipeline access",
      "Segment-specific deal flow",
      "Co-investment and club deal structures",
      "Platform investment opportunities",
      "Exit and liquidity pathways",
    ],
  },
  {
    icon: HardHat,
    title: "Construction / EPC / Modular Developers",
    description:
      "Connect with development projects seeking construction expertise, EPC services, or modular solutions.",
    access: [
      "Development project pipeline",
      "Construction tender opportunities",
      "EPC and turnkey projects",
      "Modular and prefab specifications",
      "Joint venture development structures",
    ],
  },
  {
    icon: HandshakeIcon,
    title: "Sales & Marketing Partners",
    description:
      "Access villa and residence inventory for international sales and marketing distribution.",
    access: [
      "Exclusive and non-exclusive mandates",
      "Sales collateral and pricing",
      "Agent commission structures",
      "Buyer financing support",
      "Launch event coordination",
    ],
  },
  {
    icon: Landmark,
    title: "Councils & Opportunity Owners",
    description:
      "Submit opportunities for professional packaging, partner matching, and development structuring.",
    access: [
      "Opportunity assessment and packaging",
      "Developer and investor introductions",
      "Transaction structuring support",
      "Legal and regulatory guidance",
      "Project monitoring and support",
    ],
  },
];

export default function ForInvestorsPage() {
  return (
    <>
      <LuxuryHeader />
      <main>
        <PageHero
          eyebrow="Partner With Us"
          title="For Investors & Developers"
          subtitle="ATOLL ESTATES serves qualified developers, investors, family offices, hospitality groups, and strategic partners seeking access to Maldives tourism real estate opportunities."
          backgroundImage="https://images.unsplash.com/photo-1439066615861-d1af74d74000?q=80&w=2873&auto=format&fit=crop"
          size="large"
        />

        {/* Partner Types */}
        <section className="py-20 lg:py-32">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
            <SectionEyebrow
              eyebrow="Partner Profiles"
              title="Who We Work With"
              description="We serve a diverse range of qualified partners, each with specific access and engagement pathways."
              centered
            />

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mt-12">
              {partnerTypes.map((partner) => {
                const Icon = partner.icon;
                return (
                  <div
                    key={partner.title}
                    className="glass-card p-6 lg:p-8 hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-start gap-5">
                      <div className="shrink-0 w-12 h-12 flex items-center justify-center border border-primary/30 bg-primary/5">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-serif text-xl text-foreground mb-2">
                          {partner.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                          {partner.description}
                        </p>
                        <div className="pt-4 border-t border-border">
                          <p className="eyebrow mb-3">What You Can Access</p>
                          <ul className="space-y-2">
                            {partner.access.map((item) => (
                              <li
                                key={item}
                                className="flex items-center gap-3 text-sm text-foreground"
                              >
                                <div className="w-1 h-1 bg-primary" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <RequestAccessCTA />
      </main>
      <SiteFooter />
    </>
  );
}
