"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";
import { RiskDisclosure } from "@/components/risk-disclosure";
import { segments } from "@/lib/segments";

const relationshipTypes = [
  "Asset Owner",
  "Developer",
  "Investment Advisor",
  "Legal Representative",
  "Government Representative",
  "Broker / Agent",
  "Other",
];

const developmentStages = [
  "Conceptual / Pre-Development",
  "Planning & Permits",
  "Under Construction",
  "Operational",
  "Repositioning / Renovation",
];

export default function SubmitOpportunityPage() {
  const [formData, setFormData] = useState({
    // Contact
    contactName: "",
    organization: "",
    email: "",
    phone: "",
    relationship: "",
    // Property
    propertyName: "",
    segment: "",
    atoll: "",
    landArea: "",
    developmentStage: "",
    askingPrice: "",
    // Details
    description: "",
    highlights: "",
    documents: false,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    const response = await fetch("/api/forms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        formType: "submit-opportunity",
        replyTo: formData.email,
        subject: `Opportunity Submission: ${formData.propertyName || formData.contactName}`,
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1573843981267-be1999ff37cd?q=80&w=2874')] bg-cover bg-center opacity-10" />
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-xs tracking-[0.3em] uppercase mb-6"
            >
              For Asset Owners & Developers
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            >
              Submit an Opportunity
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto"
            >
              Connect your exceptional Maldivian asset with our network of qualified 
              global investors. All submissions are reviewed by our advisory team.
            </motion.p>
          </div>
        </section>

        {/* Form */}
        <section className="py-20 lg:py-28">
          <div className="max-w-4xl mx-auto px-6">
            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="space-y-12"
            >
              {/* Contact Information */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-8 pb-4 border-b border-border">
                  Contact Information
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Phone
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-4">
                      Your Relationship to the Property *
                    </label>
                    <div className="grid sm:grid-cols-3 lg:grid-cols-4 gap-3">
                      {relationshipTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({ ...formData, relationship: type })}
                          className={`px-4 py-3 border text-sm transition-all ${
                            formData.relationship === type
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:border-muted-foreground/50"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Property Details */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-8 pb-4 border-b border-border">
                  Property Details
                </h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Property / Project Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.propertyName}
                      onChange={(e) => setFormData({ ...formData, propertyName: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Investment Segment *
                    </label>
                    <select
                      required
                      value={formData.segment}
                      onChange={(e) => setFormData({ ...formData, segment: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="">Select segment...</option>
                      {segments.map((seg) => (
                        <option key={seg.id} value={seg.id}>
                          {seg.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Atoll Location *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.atoll}
                      onChange={(e) => setFormData({ ...formData, atoll: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g., Noonu Atoll"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Land / Lagoon Area
                    </label>
                    <input
                      type="text"
                      value={formData.landArea}
                      onChange={(e) => setFormData({ ...formData, landArea: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g., 12 hectares"
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Indicative Asking Price
                    </label>
                    <input
                      type="text"
                      value={formData.askingPrice}
                      onChange={(e) => setFormData({ ...formData, askingPrice: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                      placeholder="e.g., $45M - $55M"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-4">
                      Development Stage *
                    </label>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {developmentStages.map((stage) => (
                        <button
                          key={stage}
                          type="button"
                          onClick={() => setFormData({ ...formData, developmentStage: stage })}
                          className={`px-4 py-3 border text-sm transition-all ${
                            formData.developmentStage === stage
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:border-muted-foreground/50"
                          }`}
                        >
                          {stage}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div>
                <h2 className="font-serif text-2xl text-foreground mb-8 pb-4 border-b border-border">
                  Opportunity Description
                </h2>
                <div className="space-y-6">
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Property Description *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Describe the property, its unique features, current use, and investment potential..."
                    />
                  </div>
                  <div>
                    <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                      Key Investment Highlights
                    </label>
                    <textarea
                      rows={4}
                      value={formData.highlights}
                      onChange={(e) => setFormData({ ...formData, highlights: e.target.value })}
                      className="w-full bg-card border border-border px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="List key selling points, permits status, revenue projections, or strategic advantages..."
                    />
                  </div>
                </div>
              </div>

              {/* Confirmation */}
              <div className="space-y-4">
                <label className="flex items-start gap-4 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.documents}
                    onChange={(e) => setFormData({ ...formData, documents: e.target.checked })}
                    className="mt-1 w-5 h-5 border border-border bg-card checked:bg-primary checked:border-primary"
                  />
                  <span className="text-sm text-muted-foreground leading-relaxed">
                    I have supporting documentation (lease agreements, permits, financials, images) 
                    available to share upon request.
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
                  {status === "submitting" ? "Submitting..." : "Submit for Review"}
                </button>
                {status === "success" && (
                  <p className="mt-4 text-sm text-primary">Submission sent successfully.</p>
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
                  Our advisory team will review your submission and contact you within 
                  5-7 business days if the opportunity meets our criteria.
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
