"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const investorTypes = [
  "Family Office",
  "Institutional Investor",
  "Private Equity",
  "Hospitality Group",
  "Individual Investor",
  "Other",
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    investorType: "",
    investmentRange: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section id="contact" className="py-24 sm:py-32 lg:py-40 bg-card">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column - Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-primary text-xs tracking-[0.3em] uppercase mb-6">
              Private Access
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground mb-8 leading-tight">
              Begin the
              <br />
              Conversation
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Investment inquiries are handled with complete discretion.
              Following your submission, a member of our advisory team will
              reach out within 48 hours to schedule a private consultation.
            </p>

            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <p className="text-muted-foreground text-xs tracking-widest uppercase mb-2">
                  Singapore Office
                </p>
                <p className="text-foreground">1 Raffles Place, Tower One</p>
                <p className="text-foreground">Singapore 048616</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs tracking-widest uppercase mb-2">
                  Maldives Office
                </p>
                <p className="text-foreground">Champa Building, 4th Floor</p>
                <p className="text-foreground">{"Malé, Maldives"}</p>
              </div>
              <div>
                <p className="text-muted-foreground text-xs tracking-widest uppercase mb-2">
                  Direct Line
                </p>
                <p className="text-foreground">+65 6123 4567</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-muted-foreground text-xs tracking-widest uppercase mb-3">
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-muted-foreground text-xs tracking-widest uppercase mb-3">
                  Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Organization */}
              <div>
                <label className="block text-muted-foreground text-xs tracking-widest uppercase mb-3">
                  Organization
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) =>
                    setFormData({ ...formData, organization: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Company or family office name"
                />
              </div>

              {/* Investor Type */}
              <div>
                <label className="block text-muted-foreground text-xs tracking-widest uppercase mb-3">
                  Investor Type
                </label>
                <select
                  value={formData.investorType}
                  onChange={(e) =>
                    setFormData({ ...formData, investorType: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-card text-muted-foreground">
                    Select investor type
                  </option>
                  {investorTypes.map((type) => (
                    <option key={type} value={type} className="bg-card text-foreground">
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Investment Range */}
              <div>
                <label className="block text-muted-foreground text-xs tracking-widest uppercase mb-3">
                  Investment Range
                </label>
                <select
                  value={formData.investmentRange}
                  onChange={(e) =>
                    setFormData({ ...formData, investmentRange: e.target.value })
                  }
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="" className="bg-card text-muted-foreground">
                    Select range
                  </option>
                  <option value="10-25" className="bg-card text-foreground">$10M - $25M</option>
                  <option value="25-50" className="bg-card text-foreground">$25M - $50M</option>
                  <option value="50-100" className="bg-card text-foreground">$50M - $100M</option>
                  <option value="100+" className="bg-card text-foreground">$100M+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-muted-foreground text-xs tracking-widest uppercase mb-3">
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Brief description of your investment interests"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="w-full mt-8 py-4 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary/90 transition-colors duration-300"
              >
                Submit Inquiry
              </button>

              <p className="text-muted-foreground text-xs text-center mt-6">
                All inquiries are confidential and subject to our privacy policy.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
