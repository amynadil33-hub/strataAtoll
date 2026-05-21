"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface RequestAccessCTAProps {
  title?: string;
  subtitle?: string;
  backgroundImage?: string;
}

export function RequestAccessCTA({
  title = "Request Private Access to the Maldives Development Pipeline",
  subtitle = "Qualified developers, investors, family offices, and hospitality groups can request access to detailed project information, locations, and financial models.",
  backgroundImage = "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865&auto=format&fit=crop",
}: RequestAccessCTAProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('${backgroundImage}')` }}
      />
      <div className="absolute inset-0 bg-background/90" />

      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow-gold mb-6"
          >
            Private Access
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground heading-luxury mb-6"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-10"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/request-access"
              className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors text-center"
            >
              Request Private Access
            </Link>
            <Link
              href="/submit-opportunity"
              className="w-full sm:w-auto px-8 py-4 border border-border text-foreground text-sm tracking-[0.15em] uppercase hover:border-primary hover:text-primary transition-colors text-center"
            >
              Submit Opportunity
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
