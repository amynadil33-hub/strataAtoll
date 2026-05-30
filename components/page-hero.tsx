"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  size?: "default" | "large" | "fullscreen";
  centered?: boolean;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  subtitle,
  backgroundImage,
  size = "default",
  centered = false,
  children,
}: PageHeroProps) {
  const heightClasses = {
    default: "min-h-[50vh] pt-32 pb-16 lg:pt-40 lg:pb-24",
    large: "min-h-[70vh] pt-32 pb-20 lg:pt-40 lg:pb-32",
    fullscreen: "min-h-screen pt-32 pb-20",
  };

  return (
    <section className={`relative ${heightClasses[size]} flex items-end`}>
      {/* Background */}
      {backgroundImage && (
        <>
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url('${backgroundImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
        </>
      )}

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className={`max-w-4xl ${centered ? "mx-auto text-center" : ""}`}>
          {eyebrow && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="eyebrow-gold mb-4 lg:mb-6"
            >
              {eyebrow}
            </motion.p>
          )}

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-foreground heading-luxury"
          >
            {title}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 lg:mt-8 text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-3xl"
            >
              {subtitle}
            </motion.p>
          )}

          {children && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 lg:mt-12"
            >
              {children}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
