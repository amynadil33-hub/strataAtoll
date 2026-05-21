"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

interface RiskItem {
  title: string;
  description: string;
}

interface RiskDisclosureProps {
  risks: RiskItem[];
}

export function RiskDisclosure({ risks }: RiskDisclosureProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {risks.map((risk, index) => (
        <motion.div
          key={risk.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: index * 0.05 }}
          className="glass-card p-5 hover:border-primary/30 transition-colors"
        >
          <div className="flex items-start gap-3">
            <div className="shrink-0 w-8 h-8 flex items-center justify-center border border-destructive/30 bg-destructive/5">
              <AlertTriangle className="w-4 h-4 text-destructive" />
            </div>
            <div>
              <h4 className="text-sm font-medium text-foreground mb-1">
                {risk.title}
              </h4>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {risk.description}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
