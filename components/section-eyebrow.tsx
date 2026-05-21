"use client";

import { motion } from "framer-motion";

interface SectionEyebrowProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionEyebrow({
  eyebrow,
  title,
  description,
  centered = false,
  className = "",
}: SectionEyebrowProps) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow-gold mb-4"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-foreground heading-luxury ${
          centered ? "max-w-3xl mx-auto" : "max-w-2xl"
        }`}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={`mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-xl"
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
