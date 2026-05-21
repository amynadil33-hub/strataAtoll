"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getFeaturedOpportunities } from "@/lib/opportunities";
import { formatStage, type Opportunity } from "@/lib/types";

export function Portfolio() {
  const [projects, setProjects] = useState<Opportunity[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  useEffect(() => {
    getFeaturedOpportunities().then(setProjects);
  }, []);

  return <section id="portfolio" className="py-24 sm:py-32 lg:py-40"><div className="mx-auto max-w-7xl px-6 lg:px-12"><div className="grid gap-8 lg:gap-12">{projects.map((project, index) => (<motion.article key={project.id} onMouseEnter={() => setHoveredId(project.id)} onMouseLeave={() => setHoveredId(null)} className="group relative"><div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"><div className={`relative aspect-[4/3] lg:aspect-[16/10] overflow-hidden ${index % 2 === 1 ? "lg:order-2" : ""}`}><div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url('${project.image}')` }} /></div><div className="lg:py-8"><p className="text-muted-foreground text-xs tracking-[0.2em] uppercase mb-3">{project.broadRegion}</p><h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground mb-4">{project.codeName}</h3><p className="text-muted-foreground mb-8">{project.title}</p><p className="text-primary text-xs tracking-widest uppercase">{formatStage(project.stage)}</p></div></div></motion.article>))}</div></div></section>;
}
