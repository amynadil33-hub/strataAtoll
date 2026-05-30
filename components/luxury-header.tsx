"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Opportunities", href: "/opportunities" },
  { label: "Segments", href: "/segments" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "Legal Framework", href: "/legal-framework" },
  { label: "Why Maldives", href: "/why-maldives" },
  { label: "Insights", href: "/insights" },
  { label: "Contact", href: "/contact" },
];

export function LuxuryHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <Link href="/" className="relative z-50">
              <div className="flex flex-col">
                <span className="font-serif text-xl lg:text-2xl tracking-[0.15em] text-foreground">
                  ATOLL ESTATES
                </span>
                <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase hidden sm:block">
                  Maldives Tourism Real Estate
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-xs tracking-[0.15em] uppercase text-muted-foreground hover:text-foreground transition-colors duration-300"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* CTA + Mobile Menu Toggle */}
            <div className="flex items-center gap-4">
              <Link
                href="/request-access"
                className="hidden md:inline-flex px-6 py-3 bg-primary text-primary-foreground text-xs tracking-[0.15em] uppercase hover:bg-primary/90 transition-colors duration-300"
              >
                Request Private Access
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="xl:hidden relative z-50 w-10 h-10 flex flex-col items-center justify-center gap-1.5"
                aria-label="Toggle menu"
              >
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-px bg-foreground origin-center"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-6 h-px bg-foreground"
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-6 h-px bg-foreground origin-center"
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-24">
              <nav className="flex flex-col items-center gap-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="font-serif text-2xl sm:text-3xl text-foreground hover:text-primary transition-colors"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-12 flex flex-col gap-4"
              >
                <Link
                  href="/request-access"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-4 bg-primary text-primary-foreground text-sm tracking-[0.15em] uppercase text-center"
                >
                  Request Private Access
                </Link>
                <Link
                  href="/submit-opportunity"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-8 py-4 border border-border text-foreground text-sm tracking-[0.15em] uppercase text-center hover:border-primary transition-colors"
                >
                  Submit Opportunity
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
