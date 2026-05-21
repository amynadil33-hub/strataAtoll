"use client";

import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1602002418816-5c0aeef426aa?q=80&w=2787&auto=format&fit=crop')`,
                }}
              />
              <div className="absolute inset-0 bg-background/10" />
            </div>
            
            {/* Floating accent */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 border border-primary/20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-6">
              Our Philosophy
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              Discretion Meets
              <br />
              Opportunity
            </h2>
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Horizon Maldives was founded on a singular principle: the most
                exceptional opportunities are never publicly listed. They emerge
                from relationships cultivated over decades.
              </p>
              <p>
                Our founding partners bring combined experience from Goldman Sachs,
                Four Seasons Hotels, and Aman Resorts. We understand both the
                financial intricacies and operational realities of luxury
                hospitality investment.
              </p>
              <p>
                We serve a select clientele of family offices, sovereign wealth
                funds, and hospitality groups who demand discretion, expertise,
                and access to truly differentiated opportunities.
              </p>
            </div>

            {/* Signature */}
            <div className="mt-12 pt-12 border-t border-border">
              <p className="font-serif text-xl text-foreground italic mb-2">
                {"\"Excellence in the details\""}
              </p>
              <p className="text-muted-foreground text-sm tracking-widest uppercase">
                Alexander Chen, Managing Partner
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
