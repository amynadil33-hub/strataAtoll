"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { LuxuryHeader } from "@/components/luxury-header";
import { SiteFooter } from "@/components/site-footer";

const offices = [
  {
    city: "Malé",
    country: "Maldives",
    address: "H. Sunleet, 8th Floor",
    addressLine2: "Boduthakurufaanu Magu",
    phone: "+960 332 8800",
    type: "Headquarters",
  },
  {
    city: "Singapore",
    country: "Singapore",
    address: "One Raffles Quay",
    addressLine2: "North Tower, Level 35",
    phone: "+65 6622 1800",
    type: "Asia-Pacific",
  },
  {
    city: "Dubai",
    country: "UAE",
    address: "DIFC, Gate Building",
    addressLine2: "Level 15",
    phone: "+971 4 401 9900",
    type: "Middle East",
  },
];

const inquiryTypes = [
  "Investment Opportunity",
  "Partnership Discussion",
  "Media Inquiry",
  "General Question",
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    inquiryType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form:", formData);
  };

  return (
    <>
      <LuxuryHeader />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
          <div className="relative max-w-3xl mx-auto px-6 text-center">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary text-xs tracking-[0.3em] uppercase mb-6"
            >
              Get in Touch
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            >
              Contact Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              Our team is available to discuss investment opportunities and 
              answer your questions.
            </motion.p>
          </div>
        </section>

        {/* Offices */}
        <section className="py-16 border-y border-border">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {offices.map((office, index) => (
                <motion.div
                  key={office.city}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center md:text-left"
                >
                  <p className="text-primary text-xs tracking-widest uppercase mb-2">
                    {office.type}
                  </p>
                  <h3 className="font-serif text-2xl text-foreground mb-4">
                    {office.city}
                  </h3>
                  <div className="text-muted-foreground text-sm leading-relaxed space-y-1">
                    <p>{office.address}</p>
                    <p>{office.addressLine2}</p>
                    <p>{office.country}</p>
                    <p className="pt-2">{office.phone}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 lg:py-28">
          <div className="max-w-3xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center mb-12"
            >
              <h2 className="font-serif text-3xl text-foreground mb-4">
                Send a Message
              </h2>
              <p className="text-muted-foreground">
                For investment inquiries, please use our Request Access form for expedited processing.
              </p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                    Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Company / Organization
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-card border border-border px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-4">
                  Inquiry Type
                </label>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {inquiryTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => setFormData({ ...formData, inquiryType: type })}
                      className={`px-4 py-3 border text-sm transition-all ${
                        formData.inquiryType === type
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
                <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-3">
                  Message *
                </label>
                <textarea
                  required
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-card border border-border px-4 py-4 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-12 py-5 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </motion.form>
          </div>
        </section>

        {/* Email Addresses */}
        <section className="py-16 border-t border-border">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Investor Relations
                </p>
                <a href="mailto:investors@islandvest.mv" className="text-foreground hover:text-primary transition-colors">
                  investors@islandvest.mv
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Asset Submissions
                </p>
                <a href="mailto:opportunities@islandvest.mv" className="text-foreground hover:text-primary transition-colors">
                  opportunities@islandvest.mv
                </a>
              </div>
              <div>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mb-2">
                  Media Inquiries
                </p>
                <a href="mailto:press@islandvest.mv" className="text-foreground hover:text-primary transition-colors">
                  press@islandvest.mv
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
