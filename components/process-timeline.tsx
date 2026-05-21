"use client";

import { motion } from "framer-motion";

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <div className="relative">
      {/* Vertical Line */}
      <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent" />

      <div className="space-y-12 lg:space-y-16">
        {steps.map((step, index) => (
          <motion.div
            key={step.number}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-16 lg:pl-24"
          >
            {/* Number Circle */}
            <div className="absolute left-0 lg:left-4 w-8 h-8 lg:w-10 lg:h-10 flex items-center justify-center border border-primary bg-background">
              <span className="text-xs lg:text-sm font-medium text-primary">
                {step.number}
              </span>
            </div>

            {/* Content */}
            <div>
              <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm lg:text-base text-muted-foreground leading-relaxed max-w-2xl">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
