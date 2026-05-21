"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const highlights = [
  "Managed hospitality operations",
  "Revenue-share rental programme",
  "Owner-use potential",
  "Long-term leasehold structure",
  "Operator-led maintenance",
  "Potential mortgage and sublease rights subject to registration and approvals",
];

export function HomeStrataModel() {
  return (
    <section className="py-20 lg:py-32 bg-secondary/30">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow-gold mb-4"
            >
              Strata Villa Model
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-2xl sm:text-3xl lg:text-4xl text-foreground heading-luxury mb-6"
            >
              Tourism Real Estate with Managed Hospitality
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-8"
            >
              Strata villa developments combine tourism real estate with managed
              hospitality operations. Buyers may acquire long-term leasehold
              villa interests within approved tourism developments, while
              professional operators manage guest services, maintenance, rental
              activity, and owner-use arrangements. Full legal structuring is
              project-specific and subject to approvals, registration, and due
              diligence.
            </motion.p>

            {/* Highlights Grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="shrink-0 w-6 h-6 flex items-center justify-center border border-primary/30 bg-primary/5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <p className="text-sm text-foreground">{highlight}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <Link
                href="/segments/strata-villas"
                className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-primary hover:text-foreground transition-colors"
              >
                Learn About Strata Villas
                <svg
                  className="w-4 h-4"
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
              </Link>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative aspect-[4/3] lg:aspect-square"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2874&auto=format&fit=crop')",
              }}
            />
            <div className="absolute inset-0 bg-background/20" />
            {/* Decorative Border */}
            <div className="absolute -inset-4 border border-primary/20 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
