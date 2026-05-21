"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Layers,
  Home,
  MapPin,
  Building,
  Briefcase,
  Landmark,
  Hotel,
  Palmtree,
} from "lucide-react";
import type { Segment } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layers: Layers,
  home: Home,
  "map-pin": MapPin,
  building: Building,
  briefcase: Briefcase,
  landmark: Landmark,
  hotel: Hotel,
  "palm-tree": Palmtree,
};

interface CategoryCardProps {
  segment: Segment;
  index?: number;
  isPrimary?: boolean;
}

export function CategoryCard({ segment, index = 0, isPrimary = false }: CategoryCardProps) {
  const Icon = iconMap[segment.icon] || Layers;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={isPrimary ? "md:col-span-2 lg:row-span-2" : ""}
    >
      <Link
        href={`/segments/${segment.slug}`}
        className={`group block h-full gold-border-card overflow-hidden hover:border-primary/50 transition-all duration-500 ${
          isPrimary ? "p-8 lg:p-12" : "p-6 lg:p-8"
        }`}
      >
        {/* Icon */}
        <div
          className={`inline-flex items-center justify-center ${
            isPrimary ? "w-14 h-14 lg:w-16 lg:h-16" : "w-12 h-12"
          } border border-primary/30 mb-6 group-hover:bg-primary/10 transition-colors`}
        >
          <Icon
            className={`${
              isPrimary ? "w-7 h-7 lg:w-8 lg:h-8" : "w-5 h-5 lg:w-6 lg:h-6"
            } text-primary`}
          />
        </div>

        {/* Title */}
        <h3
          className={`font-serif ${
            isPrimary ? "text-2xl lg:text-3xl" : "text-xl lg:text-2xl"
          } text-foreground mb-4 group-hover:text-primary transition-colors`}
        >
          {segment.title}
        </h3>

        {/* Description */}
        <p
          className={`text-muted-foreground leading-relaxed ${
            isPrimary ? "text-base lg:text-lg" : "text-sm"
          }`}
        >
          {segment.description}
        </p>

        {/* Arrow */}
        <div className="mt-6 flex items-center gap-2 text-primary">
          <span className="text-xs tracking-[0.15em] uppercase">Explore</span>
          <svg
            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </div>
      </Link>
    </motion.article>
  );
}
