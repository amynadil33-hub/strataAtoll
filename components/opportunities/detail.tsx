"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Lock } from "lucide-react";
import type { Opportunity } from "@/lib/types";
import {
  formatCategory,
  formatAccessLevel,
  formatStage,
  formatStructure,
  formatPartnerProfile,
} from "@/lib/types";
import { LockedContentCard } from "@/components/locked-content-card";

interface OpportunityDetailProps {
  opportunity: Opportunity;
}

type EnhancedOpportunity = Opportunity & {
  heroImage?: string;
  aerialImage?: string;
  exteriorImage?: string;
  interiorImage?: string;
  bathroomImage?: string;
  beachClubImage?: string;
  spaImage?: string;
  galleryImages?: string[];
  priceRange?: string;
  islandSpeciality?: string;
  conceptIdentity?: string;
};

export function OpportunityDetail({ opportunity }: OpportunityDetailProps) {
  const item = opportunity as EnhancedOpportunity;

  const heroImage = item.heroImage || item.image;
  const aerialImage = item.aerialImage || item.image;
  const exteriorImage = item.exteriorImage || item.image;
  const interiorImage = item.interiorImage || item.image;
  const bathroomImage = item.bathroomImage || item.image;
  const beachClubImage = item.beachClubImage || item.image;
  const spaImage = item.spaImage || item.image;

  const galleryImages =
    item.galleryImages && item.galleryImages.length > 0
      ? item.galleryImages
      : [
          aerialImage,
          exteriorImage,
          interiorImage,
          bathroomImage,
          beachClubImage,
          spaImage,
        ];

  const villaCollection = [
    {
      name: "Elysian Lagoon Pool Villa",
      type: "1BR Lagoon Residence",
      text: "Private pool sanctuaries shaped around celestial white interiors, glowing water, and indoor-outdoor retreat living.",
      price: "From USD 1M",
      image: exteriorImage,
    },
    {
      name: "Elysian Beach Residence",
      type: "2BR Beach Residence",
      text: "Expanded beach-oriented residences with private pools, generous terraces, and refined ownership positioning.",
      price: "From USD 1.5M",
      image: interiorImage,
    },
    {
      name: "Celestial Sunset Residence",
      type: "Signature Collection",
      text: "Premium sunset-facing residences envisioned for privacy, scarcity, and elevated resort ownership appeal.",
      price: "Limited Collection",
      image: beachClubImage,
    },
    {
      name: "Founder’s Heaven Villa",
      type: "Flagship Residence",
      text: "Ultra-limited estate villas positioned at the highest tier of the concept vision.",
      price: "Private Access",
      image: spaImage,
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[80vh] lg:min-h-screen flex items-end pb-12 lg:pb-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
        <div className="absolute inset-0 bg-black/20" />

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Opportunities
            </Link>
          </motion.div>

          <div className="max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <span className="px-4 py-2 bg-background/80 backdrop-blur-sm text-primary text-xs tracking-[0.15em] uppercase border border-border">
                {formatCategory(opportunity.category)}
              </span>
              <span className="px-4 py-2 bg-primary/90 text-primary-foreground text-xs tracking-[0.15em] uppercase flex items-center gap-2">
                <Lock className="w-3 h-3" />
                {formatAccessLevel(opportunity.accessLevel)}
              </span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="eyebrow-gold mb-4"
            >
              {opportunity.codeName}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground heading-luxury mb-6"
            >
              {opportunity.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-3xl text-lg lg:text-xl text-muted-foreground leading-relaxed mb-8"
            >
              {item.conceptIdentity ||
                "A cinematic Maldives island estate concept shaped around private pool living, resort-managed hospitality, and global luxury ownership appeal."}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                {opportunity.locationLabel}
              </span>
              <span>{opportunity.proposedVillaCount}</span>
              <span>{item.priceRange || opportunity.estimatedScale}</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-2 space-y-20">
              {/* Vision */}
              <section>
                <p className="eyebrow-gold mb-4">The Concept Identity</p>
                <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-6">
                  The Elysian Vision
                </h2>
                <div className="space-y-5 text-muted-foreground leading-relaxed">
                  <p>{opportunity.summary}</p>
                  <p>{opportunity.proposedUse}</p>
                </div>
              </section>

              {/* Cinematic Image */}
              <section className="relative h-[420px] lg:h-[560px] overflow-hidden border border-border">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${aerialImage}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-10">
                  <p className="eyebrow-gold mb-3">Island Estate Vision</p>
                  <h3 className="font-serif text-2xl lg:text-4xl text-foreground max-w-3xl">
                    A private Maldives estate imagined through lagoon light,
                    white sand, sculptural villas, and resort-managed ownership.
                  </h3>
                </div>
              </section>

              {/* Island Specialty */}
              <section>
                <p className="eyebrow-gold mb-4">Island Speciality</p>
                <h2 className="font-serif text-3xl text-foreground mb-6">
                  Why This Island
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {item.islandSpeciality ||
                    "Selected for its island setting, lagoon character, privacy potential, and suitability for a premium serviced villa residence concept."}
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {opportunity.highlights.slice(0, 4).map((highlight, index) => (
                    <motion.div
                      key={highlight}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      className="glass-card p-5"
                    >
                      <div className="w-1.5 h-1.5 bg-primary mb-4" />
                      <p className="text-sm text-foreground leading-relaxed">
                        {highlight}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Villa Collection */}
              <section>
                <p className="eyebrow-gold mb-4">Residence Collection</p>
                <h2 className="font-serif text-3xl text-foreground mb-8">
                  Villa Types & Price Positioning
                </h2>

                <div className="grid md:grid-cols-2 gap-6">
                  {villaCollection.map((villa, index) => (
                    <motion.article
                      key={villa.name}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.08 }}
                      className="group border border-border bg-card overflow-hidden"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <div
                          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                          style={{ backgroundImage: `url('${villa.image}')` }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                        <div className="absolute top-4 left-4 px-3 py-2 bg-background/85 text-primary text-[10px] tracking-[0.18em] uppercase">
                          {villa.type}
                        </div>
                      </div>

                      <div className="p-6">
                        <h3 className="font-serif text-2xl text-foreground mb-3">
                          {villa.name}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                          {villa.text}
                        </p>
                        <p className="text-primary text-xs tracking-[0.18em] uppercase">
                          {villa.price}
                        </p>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </section>

              {/* Lifestyle Gallery */}
              <section>
                <p className="eyebrow-gold mb-4">Visual Atmosphere</p>
                <h2 className="font-serif text-3xl text-foreground mb-6">
                  Interior, Exterior & Island Lifestyle
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  A photo-led concept designed to communicate the estate’s
                  atmosphere: private pool living, soft white architecture,
                  beach club culture, wellness, arrival ritual, and lagoon-side
                  resort hospitality.
                </p>

                <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                  {galleryImages.slice(0, 6).map((image, index) => (
                    <motion.div
                      key={`${image}-${index}`}
                      initial={{ opacity: 0, scale: 0.96 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.04 }}
                      className={`relative overflow-hidden border border-border ${
                        index === 0 ? "col-span-2 row-span-2 h-[420px]" : "h-52"
                      }`}
                    >
                      <div
                        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                        style={{ backgroundImage: `url('${image}')` }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                    </motion.div>
                  ))}
                </div>
              </section>

              {/* Private Access */}
              <section>
                <h2 className="font-serif text-3xl text-foreground mb-4">
                  Private Access Materials
                </h2>
                <p className="text-muted-foreground mb-8">
                  Detailed development information is available only to qualified
                  parties through private access and NDA review.
                </p>

                <div className="grid sm:grid-cols-2 gap-4">
                  {opportunity.lockedItems.map((item, index) => (
                    <LockedContentCard key={item} title={item} index={index} />
                  ))}
                </div>
              </section>

              {/* Legal Notes */}
              <section className="glass-card p-6 lg:p-8">
                <h3 className="font-serif text-xl text-foreground mb-4">
                  Concept Disclaimer
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {opportunity.legalNotes}
                </p>
              </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <div className="glass-card p-6">
                  <h3 className="eyebrow mb-6">Project Snapshot</h3>

                  <div className="space-y-5">
                    <DetailRow
                      label="Estimated Scale"
                      value={opportunity.estimatedScale}
                    />
                    <DetailRow
                      label="Villa Count"
                      value={opportunity.proposedVillaCount}
                    />
                    <DetailRow
                      label="Stage"
                      value={formatStage(opportunity.stage)}
                    />
                    <DetailRow
                      label="Structure"
                      value={formatStructure(opportunity.structure)}
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">
                        Access Level
                      </span>
                      <span className="text-sm text-primary font-medium">
                        {formatAccessLevel(opportunity.accessLevel)}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="glass-card p-6">
                  <h3 className="eyebrow mb-4">Ideal Partner Profile</h3>
                  <div className="flex flex-wrap gap-2">
                    {opportunity.partnerProfile.map((profile) => (
                      <span
                        key={profile}
                        className="px-3 py-1.5 bg-secondary text-xs text-foreground"
                      >
                        {formatPartnerProfile(profile)}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="glass-card p-6">
                  <h3 className="eyebrow-gold mb-4">Private Access</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    Full masterplanning, financial projections, development
                    structure, land materials, and operator strategy are
                    available under private review.
                  </p>
                  <Link
                    href="/request-access"
                    className="block w-full py-4 bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase text-center hover:bg-primary/90 transition-colors"
                  >
                    Request Full Project Pack
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between pb-4 border-b border-border">
      <span className="text-sm text-muted-foreground">{label}</span>
      <span className="text-sm text-foreground font-medium text-right">
        {value}
      </span>
    </div>
  );
}