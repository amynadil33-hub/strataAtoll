"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { RiskDisclosure } from "@/components/risk-disclosure";

const investorTypes = [
  "Family Office",
  "Private Equity Fund",
  "Hospitality Group",
  "Sovereign Wealth Fund",
  "Ultra-High-Net-Worth Individual",
  "Institutional Investor",
  "Real Estate Developer",
  "Other",
];

const investmentRanges = [
  "$5M - $15M",
  "$15M - $50M",
  "$50M - $100M",
  "$100M+",
];

const interestAreas = [
  "Private Islands",
  "Boutique Resorts",
  "Overwater Villas",
  "Eco Retreats",
  "Liveaboards & Yachts",
  "Branded Residences",
  "Resort Expansions",
  "Mixed-Use Developments",
];

export default function RequestAccessPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    organization: "",
    investorType: "",
    investmentRange: "",
    interests: [] as string[],
    message: "",
    accreditedConfirm: false,
    termsAccept: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleInterestToggle = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    const response = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "request-access",
        replyTo: formData.email,
        subject: `Request Access: ${formData.firstName} ${formData.lastName}`,
        fields: formData,
      }),
    });
    setStatus(response.ok ? "success" : "error");
  };

  return (
    <>
      <LuxuryHeader />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2865')] bg-cover bg-center opacity-10" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-xs tracking-[0.3em] uppercase mb-6"
            >
              Qualified Investors Only
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            >
              Request Private Access
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Access to our curated portfolio is reserved for qualified investors. 
              Complete this form to begin our verification process.
            </motion.p>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-12"
            >
              {/* Personal Information */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-8 pb-4 border-b border-border">
                  Personal Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      First Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Investment Profile */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-8 pb-4 border-b border-border">
                  Investment Profile
                </h2>
                <div className="space-y-8">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Organization / Family Office
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-4">
                      Investor Type *
                    </label>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {investorTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, investorType: type })}
                          className={`px-4 py-3 border text-sm transition-all ${
                            formData.investorType === type
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:border-muted-foreground/50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-4">
                      Investment Capacity *
                    </label>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {investmentRanges.map((range) => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData({ ...formData, investmentRange: range })}
                          className={`px-4 py-3 border text-sm transition-all ${
                            formData.investmentRange === range
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:border-muted-foreground/50"
                          }`}
                        >
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-4">
                      Areas of Interest
                    </label>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                      {interestAreas.map((interest) => (
                        <button
                          key={interest}
                          type="button"
                          onClick={() => handleInterestToggle(interest)}
                          className={`px-4 py-3 border text-sm transition-all ${
                            formData.interests.includes(interest)
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:border-muted-foreground/50"
                          }`}
                        >
                          {interest}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-8 pb-4 border-b border-border">
                  Additional Information
                </h2>
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Tell us about your investment objectives
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-card border border-border px-4 py-4 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                    placeholder="Please share any specific requirements, timeline considerations, or questions..."
                  />
                </div>
              </div>

              {/* Confirmations */}
              <div className="space-y-4">
                <label className="flex items-start gap-4 cursor-pointer group">
                  <input
                    type="checkbox"
                    required
                    checked={formData.accreditedConfirm}
                    onChange={(e) => setFormData({ ...formData, accreditedConfirm: e.target.checked })}
                    className="mt-1 w-5 h-5 border border-border bg-card checked:bg-primary checked:border-primary focus:ring-0"
                  />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    I confirm that I am an accredited investor or represent a qualified institutional buyer, 
                    with net investable assets exceeding $5,000,000 USD or equivalent. *
                  </span>
                </label>

                <label className="flex items-start gap-4 cursor-pointer group">
                  <input
                    type="checkbox"
                    required
                    checked={formData.termsAccept}
                    onChange={(e) => setFormData({ ...formData, termsAccept: e.target.checked })}
                    className="mt-1 w-5 h-5 border border-border bg-card checked:bg-primary checked:border-primary focus:ring-0"
                  />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    I agree to the Terms of Service and Privacy Policy, and consent to receive 
                    communications regarding investment opportunities. *
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="pt-8">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto px-12 py-5 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
                >
                  {status === "submitting" ? "Submitting..." : "Submit Application"}
                </button>
                {status === "success" && (
                  <p className="mt-4 text-sm text-primary">Application sent successfully.</p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-sm text-destructive">
                    Submission failed. Please email{" "}
                    <a className="underline" href="mailto:support@musalhu.com">
                      support@musalhu.com
                    </a>
                    .
                  </p>
                )}
                <p className="mt-6 text-xs text-muted-foreground">
                  Applications are typically reviewed within 48-72 hours. A member of our 
                  investor relations team will contact you directly.
                </p>
              </div>
            </motion.form>
          </div>
        </section>

        <RiskDisclosure />
      </main>
      <SiteFooter />
    </>
  );
}
