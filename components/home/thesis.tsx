"use client";

import { motion } from "framer-motion";

export function HomeThesis() {
  return (
    <section className="py-20 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="eyebrow-gold mb-6"
          >
            The Platform Thesis
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground heading-luxury mb-8 leading-relaxed"
          >
            The Maldives is known globally as a high-end luxury tourism
            destination.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6 text-base lg:text-lg text-muted-foreground leading-relaxed"
          >
            <p>
              Beyond traditional private-island resort acquisitions, the market
              is evolving toward structured tourism real estate opportunities,
              including integrated tourism zones, managed leasehold villas,
              council-linked land, boutique hospitality projects, and asset
              repositioning opportunities.
            </p>
            <p>
              ATOLL ESTATES identifies, screens, and packages these
              opportunities for qualified global partners.
            </p>
          </motion.div>

          {/* Decorative Line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 h-px w-48 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"
          />
        </div>
      </div>
    </section>
  );
}
