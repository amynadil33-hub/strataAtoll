import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { HomeHero } from "@/components/home/hero";
import { HomeStats } from "@/components/home/stats";
import { HomeCategories } from "@/components/home/categories";
import { HomeFeatured } from "@/components/home/featured";
import { HomeThesis } from "@/components/home/thesis";
import { HomeStrataModel } from "@/components/home/strata-model";
import { HomePartners } from "@/components/home/partners";
import { RequestAccessCTA } from "@/components/request-access-cta";

export default function HomePage() {
  return (
    <>
      <LuxuryHeader />
      <main>
        <HomeHero />
        <HomeStats />
        <HomeCategories />
        <HomeFeatured />
        <HomeThesis />
        <HomeStrataModel />
        <HomePartners />
        <RequestAccessCTA />
      </main>
      <SiteFooter />
    </>
  );
}
