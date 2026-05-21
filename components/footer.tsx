"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-16 sm:py-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-sm border border-primary/50 flex items-center justify-center">
                <span className="font-serif text-primary text-lg">H</span>
              </div>
              <div>
                <span className="font-serif text-lg tracking-wide text-foreground">
                  Horizon
                </span>
                <span className="text-muted-foreground text-xs tracking-[0.2em] uppercase ml-2">
                  Maldives
                </span>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
              Private investment advisory for ultra-luxury hospitality
              opportunities in the Maldives. Serving qualified investors and
              family offices worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-foreground text-xs tracking-widest uppercase mb-6">
              Quick Links
            </p>
            <nav className="flex flex-col gap-4">
              <Link
                href="#portfolio"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                Portfolio
              </Link>
              <Link
                href="#investment"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                Investment
              </Link>
              <Link
                href="#about"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <p className="text-foreground text-xs tracking-widest uppercase mb-6">
              Legal
            </p>
            <nav className="flex flex-col gap-4">
              <Link
                href="#"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-muted-foreground text-sm hover:text-foreground transition-colors"
              >
                Disclaimer
              </Link>
            </nav>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-xs">
            {new Date().getFullYear()} Horizon Maldives. All rights reserved.
          </p>
          <p className="text-muted-foreground text-xs">
            Licensed by the Maldives Monetary Authority
          </p>
        </div>
      </div>
    </footer>
  );
}
