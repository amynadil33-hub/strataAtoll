"use client";

import { useEffect, useMemo, useState } from "react";
import { createClient } from "@supabase/supabase-js";
import { FilterBar } from "@/components/filter-bar";
import { OpportunityCard } from "@/components/opportunity-card";
import type {
  Opportunity,
  OpportunityCategory,
  AccessLevel,
  DevelopmentStage,
} from "@/lib/types";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type OpportunityRow = {
  id: string;
  slug: string;
  title: string;
  code_name: string;
  category: OpportunityCategory;
  broad_region: string;
  location_label: string;
  summary: string;
  proposed_use: string;
  proposed_villa_count: string;
  stage: DevelopmentStage;
  structure: Opportunity["structure"];
  access_level: AccessLevel;
  estimated_scale: string;
  partner_profile: Opportunity["partnerProfile"];
  highlights: string[];
  legal_notes: string;
  locked_items: string[];
  image: string;
  gallery_images: string[];
  is_featured: boolean;
  is_visible: boolean;
  created_at: string;
};

function mapOpportunity(row: OpportunityRow): Opportunity {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    codeName: row.code_name,
    category: row.category,
    broadRegion: row.broad_region,
    locationLabel: row.location_label,
    summary: row.summary,
    proposedUse: row.proposed_use,
    proposedVillaCount: row.proposed_villa_count,
    stage: row.stage,
    structure: row.structure,
    accessLevel: row.access_level,
    estimatedScale: row.estimated_scale,
    partnerProfile: row.partner_profile || [],
    highlights: row.highlights || [],
    legalNotes: row.legal_notes,
    lockedItems: row.locked_items || [],
    image: row.image,
    galleryImages: row.gallery_images || [],
    isFeatured: row.is_featured,
    createdAt: row.created_at,
  };
}

export function OpportunitiesContent() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState<OpportunityCategory | "all">("all");
  const [selectedAccess, setSelectedAccess] =
    useState<AccessLevel | "all">("all");
  const [selectedStage, setSelectedStage] =
    useState<DevelopmentStage | "all">("all");

  useEffect(() => {
    async function loadOpportunities() {
      const { data, error } = await supabase
        .from("opportunities")
        .select("*")
        .eq("is_visible", true)
        .order("created_at", { ascending: false });

      console.log("Supabase data:", data);
      console.log("Supabase error:", error);

      if (error) {
        console.error(error);
        setOpportunities([]);
      } else {
        setOpportunities((data || []).map(mapOpportunity));
      }

      setIsLoading(false);
    }

    loadOpportunities();
  }, []);

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      if (searchQuery) {
        const query = searchQuery.toLowerCase();

        const matchesSearch =
          opp.title.toLowerCase().includes(query) ||
          opp.codeName.toLowerCase().includes(query) ||
          opp.summary.toLowerCase().includes(query) ||
          opp.locationLabel.toLowerCase().includes(query);

        if (!matchesSearch) return false;
      }

      if (selectedCategory !== "all" && opp.category !== selectedCategory) {
        return false;
      }

      if (selectedAccess !== "all" && opp.accessLevel !== selectedAccess) {
        return false;
      }

      if (selectedStage !== "all" && opp.stage !== selectedStage) {
        return false;
      }

      return true;
    });
  }, [
    opportunities,
    searchQuery,
    selectedCategory,
    selectedAccess,
    selectedStage,
  ]);

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-12">
          <FilterBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
            selectedAccess={selectedAccess}
            onAccessChange={setSelectedAccess}
            selectedStage={selectedStage}
            onStageChange={setSelectedStage}
          />
        </div>

        <div className="mb-8">
          <p className="text-sm text-muted-foreground">
            {isLoading
              ? "Loading opportunities..."
              : `Showing ${filteredOpportunities.length} opportunities`}
          </p>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[420px] border border-border bg-card/40 animate-pulse"
              />
            ))}
          </div>
        ) : filteredOpportunities.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredOpportunities.map((opportunity, index) => (
              <OpportunityCard
                key={opportunity.id}
                opportunity={opportunity}
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground mb-4">
              No opportunities found.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}