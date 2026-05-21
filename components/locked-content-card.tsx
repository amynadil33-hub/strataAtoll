"use client";

import { motion } from "framer-motion";
import { Lock } from "lucide-react";

interface LockedContentCardProps {
  title: string;
  description?: string;
  index?: number;
}

export function LockedContentCard({
  title,
  description,
  index = 0,
}: LockedContentCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="glass-card p-5 flex items-start gap-4 hover:border-primary/30 transition-colors"
    >
      <div className="shrink-0 w-10 h-10 flex items-center justify-center border border-primary/30 bg-primary/5">
        <Lock className="w-4 h-4 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-foreground mb-1">{title}</h4>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
        <p className="text-[10px] tracking-[0.1em] uppercase text-primary mt-2">
          Private Access Required
        </p>
      </div>
    </motion.div>
  );
}
