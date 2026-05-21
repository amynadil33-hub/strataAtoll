"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { getFeaturedProjects } from "@/lib/mock-data";
import {
  formatProjectStatus,
  formatProjectType,
  formatInvestmentRange,
  formatIRRRange,
} from "@/lib/types";

const projects = getFeaturedProjects();

export function Portfolio() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="portfolio" className="py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 sm:mb-24"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">
            Exclusive Opportunities
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            Curated Portfolio
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            Each property undergoes rigorous due diligence and represents a
            unique opportunity in the Maldivian luxury hospitality sector.
          </p>
        </motion.div>

        {/* Properties Grid */}
        <div className="grid gap-8 lg:gap-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative"
            >
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Image */}
                <div
                  className={`relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${project.image_url}')` }}
                  />
                  <div className="absolute inset-0 bg-background/20 group-hover:bg-background/10 transition-colors duration-500" />
                  
                  {/* Status Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="inline-block px-4 py-2 bg-background/80 backdrop-blur-sm text-primary text-xs tracking-widest uppercase border border-primary/20">
                      {formatProjectStatus(project.status)}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="lg:py-8">
                  <p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mb-3">
                    {project.atoll}
                  </p>
                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground mb-8">{formatProjectType(project.type)}</p>

                  {/* Investment Details */}
                  <div className="grid grid-cols-2 gap-8 mb-8">
                    <div>
                      <p className="text-muted-foreground text-xs tracking-widest uppercase mb-2">
                        Investment Range
                      </p>
                      <p className="font-serif text-xl text-foreground">
                        {formatInvestmentRange(project.investment_min, project.investment_max)}
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs tracking-widest uppercase mb-2">
                        Projected Returns
                      </p>
                      <p className="font-serif text-xl text-primary">
                        {formatIRRRange(project.projected_irr_min, project.projected_irr_max)}
                      </p>
                    </div>
                  </div>

                  {/* CTA */}
                  <motion.a
                    href="#contact"
                    className="inline-flex items-center gap-3 text-sm tracking-widest uppercase text-foreground group/link"
                    whileHover={{ x: 10 }}
                  >
                    <span className="border-b border-foreground/30 group-hover/link:border-primary group-hover/link:text-primary transition-colors">
                      Request Details
                    </span>
                    <svg
                      className="w-4 h-4 text-primary"
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
                  </motion.a>
                </div>
              </div>

              {/* Divider */}
              {index < projects.length - 1 && (
                <div className="mt-12 lg:mt-16 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
