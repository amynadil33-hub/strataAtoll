"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface FeatureGridProps {
  features: string[];
  columns?: 2 | 3;
}

export function FeatureGrid({ features, columns = 2 }: FeatureGridProps) {
  return (
    <div
      className={`grid gap-4 ${
        columns === 3
          ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          : "grid-cols-1 sm:grid-cols-2"
      }`}
    >
      {features.map((feature, index) => (
        <motion.div
          key={feature}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="glass-card p-5 flex items-start gap-4"
        >
          <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-primary/30 bg-primary/5">
            <Check className="w-4 h-4 text-primary" />
          </div>
          <p className="text-sm text-foreground leading-relaxed">{feature}</p>
        </motion.div>
      ))}
    </div>
  );
}
