"use client";

import { useState, useMemo } from "react";
import { FilterBar } from "@/components/filter-bar";
import { OpportunityCard } from "@/components/opportunity-card";
import type { Opportunity, OpportunityCategory, AccessLevel, DevelopmentStage } from "@/lib/types";

export function OpportunitiesContent({ opportunities }: { opportunities: Opportunity[] }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<OpportunityCategory | "all">("all");
  const [selectedAccess, setSelectedAccess] = useState<AccessLevel | "all">("all");
  const [selectedStage, setSelectedStage] = useState<DevelopmentStage | "all">("all");

  const filteredOpportunities = useMemo(() => {
    return opportunities.filter((opp) => {
      // Search filter
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchesSearch =
          opp.title.toLowerCase().includes(query) ||
          opp.codeName.toLowerCase().includes(query) ||
          opp.summary.toLowerCase().includes(query) ||
          opp.locationLabel.toLowerCase().includes(query);
        if (!matchesSearch) return false;
      }

      // Category filter
      if (selectedCategory !== "all" && opp.category !== selectedCategory) {
        return false;
      }

      // Access filter
      if (selectedAccess !== "all" && opp.accessLevel !== selectedAccess) {
        return false;
      }

      // Stage filter
      if (selectedStage !== "all" && opp.stage !== selectedStage) {
        return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory, selectedAccess, selectedStage]);

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Filters */}
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

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-sm text-muted-foreground">
            Showing{" "}
            <span className="text-foreground">{filteredOpportunities.length}</span>{" "}
            {filteredOpportunities.length === 1 ? "opportunity" : "opportunities"}
          </p>
        </div>

        {/* Grid */}
        
        {opportunities.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-lg text-muted-foreground">
              No opportunities are available right now.
            </p>
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
              No opportunities match your current filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
                setSelectedAccess("all");
                setSelectedStage("all");
              }}
              className="text-sm text-primary hover:text-foreground transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
