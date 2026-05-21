import Link from "next/link";

const footerLinks = {
  opportunities: [
    { label: "All Opportunities", href: "/opportunities" },
    { label: "Integrated Tourism", href: "/segments/integrated-tourism" },
    { label: "Strata Villas", href: "/segments/strata-villas" },
    { label: "Resort Development", href: "/segments/resort-development" },
    { label: "Private Islands", href: "/segments/private-islands" },
  ],
  resources: [
    { label: "How It Works", href: "/how-it-works" },
    { label: "Legal Framework", href: "/legal-framework" },
    { label: "Why Maldives", href: "/why-maldives" },
    { label: "For Investors", href: "/for-investors" },
    { label: "Insights", href: "/insights" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Request Access", href: "/request-access" },
    { label: "Submit Opportunity", href: "/submit-opportunity" },
  ],
};

export function SiteFooter() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <div className="flex flex-col">
                <span className="font-serif text-xl tracking-[0.15em] text-foreground">
                  ATOLL ESTATES
                </span>
                <span className="text-[10px] tracking-[0.25em] text-muted-foreground uppercase mt-1">
                  Maldives Tourism Real Estate
                </span>
              </div>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Private gateway to curated Maldives tourism real estate
              opportunities for qualified investors and developers.
            </p>
          </div>

          {/* Opportunities */}
          <div>
            <h4 className="eyebrow-gold mb-6">Opportunities</h4>
            <ul className="space-y-3">
              {footerLinks.opportunities.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="eyebrow-gold mb-6">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="eyebrow-gold mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="py-8 border-t border-border">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-4xl">
            ATOLL ESTATES provides curated access to Maldives tourism real
            estate opportunities. Information is indicative and subject to
            legal, regulatory, environmental, land-use, Ministry of Tourism,
            council, tax, and commercial due diligence. Nothing on this website
            constitutes an offer to sell securities, land, villas, or investment
            products.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Atoll Estates. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
