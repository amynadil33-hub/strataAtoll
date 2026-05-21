"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "$2.1B", label: "Assets Under Advisory" },
  { value: "47", label: "Successful Transactions" },
  { value: "12+", label: "Years of Excellence" },
  { value: "98%", label: "Client Retention" },
];

const advantages = [
  {
    title: "Exclusive Access",
    description:
      "Off-market opportunities reserved for our network of qualified investors and family offices.",
  },
  {
    title: "Deep Local Expertise",
    description:
      "Two decades of relationships with government officials, landowners, and hospitality operators.",
  },
  {
    title: "End-to-End Support",
    description:
      "From initial due diligence through acquisition, development, and exit strategy.",
  },
  {
    title: "Proven Returns",
    description:
      "Track record of delivering superior risk-adjusted returns in luxury hospitality.",
  },
];

export function Investment() {
  return (
    <section id="investment" className="py-24 sm:py-32 lg:py-40 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 sm:mb-28"
        >
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-4">
            Investment Advisory
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-6">
            A Different Approach
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground leading-relaxed">
            We operate as a private investment house, not a marketplace.
            Our clients are partners in carefully structured opportunities.
          </p>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-24 sm:mb-32"
        >
          {metrics.map((metric, index) => (
            <div key={index} className="text-center">
              <p className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary mb-2">
                {metric.value}
              </p>
              <p className="text-muted-foreground text-sm tracking-widest uppercase">
                {metric.label}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Advantages Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-card p-8 sm:p-12 lg:p-16 group hover:bg-secondary/30 transition-colors duration-500"
            >
              <span className="text-primary text-xs tracking-widest">
                0{index + 1}
              </span>
              <h3 className="font-serif text-xl sm:text-2xl text-foreground mt-4 mb-4">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
