"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const heroImage =
  "https://izyihjihnuygjiikeirp.supabase.co/storage/v1/object/sign/bilafehi/bilafehinew1.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8yMThmZThjNS05YmVmLTRiYzgtOTMwNi1mOGFmYjdkNWJmYzkiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJiaWxhZmVoaS9iaWxhZmVoaW5ldzEucG5nIiwiaWF0IjoxNzc5NzMyMDYwLCJleHAiOjE4MTEyNjgwNjB9.5wRs_klAe8V2l9xlvXPePl4fgCfUoLxjY_pWKKbtUW0";

export function HomeHero() {
  return (
    <section className="relative min-h-[92svh] md:min-h-screen flex items-end overflow-hidden pb-10 sm:pb-14 lg:pb-24 pt-28">
      {/* Background Image */}
      <div
        className="
          absolute inset-0 bg-cover bg-no-repeat
          bg-[position:52%_center]
          sm:bg-[position:center_center]
          lg:bg-center
          scale-[1.02]
        "
        style={{
          backgroundImage: `url('${heroImage}')`,
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/20 md:from-black/75 md:via-black/35 md:to-black/10" />

      {/* Extra mobile readability overlay */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/20 to-transparent md:hidden" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="eyebrow-gold mb-4 sm:mb-6"
          >
            Private Investment Gateway
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white heading-luxury mb-6"
            className="font-serif text-[2.75rem] leading-[0.95] sm:text-5xl md:text-6xl lg:text-7xl text-white heading-luxury mb-5 sm:mb-6 max-w-5xl"
          >
            Curated Maldives Tourism Real Estate Opportunities
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg lg:text-xl text-white/75 leading-relaxed max-w-3xl mb-10"
            className="text-base sm:text-lg lg:text-xl text-white/78 leading-relaxed max-w-3xl mb-8 sm:mb-10"
          >
            Private access to integrated tourism projects, strata villa
            developments, resort assets, inhabited-island tourism land, and
            council-linked hospitality opportunities for qualified investors,
            developers, family offices, and real estate companies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Link
              href="/opportunities"
              className="px-7 sm:px-8 py-4 bg-primary text-primary-foreground text-xs sm:text-sm tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors text-center"
            >
              View Opportunities
            </Link>
            <Link
              href="/request-access"
              className="px-8 py-4 border border-white/25 bg-white/15 text-white text-sm tracking-[0.15em] uppercase hover:border-white/50 transition-colors text-center"
              className="px-7 sm:px-8 py-4 border border-white/30 bg-white/15 text-white text-xs sm:text-sm tracking-[0.15em] uppercase hover:border-white/50 hover:bg-white/20 transition-colors text-center backdrop-blur-sm"
            >
              Request Private Access
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:block"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-16 bg-gradient-to-b from-primary to-transparent"
        />
      </motion.div>
    </section>
  );
}