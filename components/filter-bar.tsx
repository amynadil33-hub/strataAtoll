"use client";

import { useState } from "react";
import { Search, Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import type { OpportunityCategory, AccessLevel, DevelopmentStage } from "@/lib/types";
import { formatCategory, formatAccessLevel, formatStage } from "@/lib/types";

interface FilterBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCategory: OpportunityCategory | "all";
  onCategoryChange: (category: OpportunityCategory | "all") => void;
  selectedAccess: AccessLevel | "all";
  onAccessChange: (access: AccessLevel | "all") => void;
  selectedStage: DevelopmentStage | "all";
  onStageChange: (stage: DevelopmentStage | "all") => void;
}

const categories: (OpportunityCategory | "all")[] = [
  "all",
  "integrated_tourism",
  "strata_villas",
  "inhabited_island_tourism_land",
  "resort_development",
  "resort_assets",
  "government_council",
  "guesthouse_boutique",
  "private_island",
];

const accessLevels: (AccessLevel | "all")[] = [
  "all",
  "public_summary",
  "qualified_access",
  "nda_required",
  "private_data_room",
];

const stages: (DevelopmentStage | "all")[] = [
  "all",
  "concept",
  "preliminary_permits",
  "approved",
  "under_construction",
  "operational",
  "repositioning",
];

export function FilterBar({
  searchQuery,
  onSearchChange,
  selectedCategory,
  onCategoryChange,
  selectedAccess,
  onAccessChange,
  selectedStage,
  onStageChange,
}: FilterBarProps) {
  const [showFilters, setShowFilters] = useState(false);

  const hasActiveFilters =
    selectedCategory !== "all" ||
    selectedAccess !== "all" ||
    selectedStage !== "all";

  const clearFilters = () => {
    onCategoryChange("all");
    onAccessChange("all");
    onStageChange("all");
    onSearchChange("");
  };

  return (
    <div className="space-y-4">
      {/* Search and Toggle */}
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search opportunities..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full h-12 pl-12 pr-4 bg-card border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
          />
        </div>

        {/* Filter Toggle */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className={`h-12 px-6 flex items-center justify-center gap-2 border text-sm tracking-[0.1em] uppercase transition-colors ${
            showFilters || hasActiveFilters
              ? "bg-primary text-primary-foreground border-primary"
              : "bg-transparent text-foreground border-border hover:border-primary"
          }`}
        >
          <Filter className="w-4 h-4" />
          Filters
          {hasActiveFilters && (
            <span className="w-5 h-5 flex items-center justify-center bg-background text-primary text-xs rounded-full">
              !
            </span>
          )}
        </button>
      </div>

      {/* Expandable Filters */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="glass-card p-6 space-y-6">
              {/* Category Filter */}
              <div>
                <label className="eyebrow block mb-3">Opportunity Type</label>
                <div className="flex flex-wrap gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      onClick={() => onCategoryChange(cat)}
                      className={`px-4 py-2 text-xs tracking-[0.1em] uppercase border transition-colors ${
                        selectedCategory === cat
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-foreground"
                      }`}
                    >
                      {cat === "all" ? "All Types" : formatCategory(cat)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Access Level Filter */}
              <div>
                <label className="eyebrow block mb-3">Access Level</label>
                <div className="flex flex-wrap gap-2">
                  {accessLevels.map((level) => (
                    <button
                      key={level}
                      onClick={() => onAccessChange(level)}
                      className={`px-4 py-2 text-xs tracking-[0.1em] uppercase border transition-colors ${
                        selectedAccess === level
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-foreground"
                      }`}
                    >
                      {level === "all" ? "All Levels" : formatAccessLevel(level)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Stage Filter */}
              <div>
                <label className="eyebrow block mb-3">Development Stage</label>
                <div className="flex flex-wrap gap-2">
                  {stages.map((stage) => (
                    <button
                      key={stage}
                      onClick={() => onStageChange(stage)}
                      className={`px-4 py-2 text-xs tracking-[0.1em] uppercase border transition-colors ${
                        selectedStage === stage
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-transparent text-muted-foreground border-border hover:border-primary hover:text-foreground"
                      }`}
                    >
                      {stage === "all" ? "All Stages" : formatStage(stage)}
                    </button>
                  ))}
                </div>
              </div>

              {/* Clear Filters */}
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <X className="w-4 h-4" />
                  Clear all filters
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
