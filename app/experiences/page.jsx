"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiClock, FiUsers, FiArrowRight } from "react-icons/fi";
import { experiences } from "@/lib/siteData";

/* export const metadata = {
  title: "Dining Experiences",
  description:
    "Chef's Table, Sunday Brunch, Date Night Set Menu, Corporate Lunch, and Private Dining at Zest & Ember, Bandra.",
}; */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function ExperienceCard({ exp, index, flipped }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="rounded-3xl overflow-hidden glow-border"
      style={{ background: "#1e1e1e" }}
    >
      <div className={`grid lg:grid-cols-2 ${flipped ? "lg:grid-flow-dense" : ""}`}>
        {/* Image */}
        <div className={`relative h-64 lg:h-auto ${flipped ? "lg:col-start-2" : ""}`}>
          <img
            src={exp.image}
            alt={exp.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent lg:bg-none" />
          {exp.badge && (
            <span
              className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full text-white"
              style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
            >
              {exp.badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className={`p-8 lg:p-12 flex flex-col justify-center ${flipped ? "lg:col-start-1 lg:row-start-1" : ""}`}>
          <p className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest mb-2">{exp.subtitle}</p>
          <h2
            className="text-2xl sm:text-3xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            {exp.title}
          </h2>
          <p className="text-white/60 leading-relaxed mb-6 text-sm sm:text-base">{exp.description}</p>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.05)" }}>
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Price</p>
              <p className="text-[#FFB800] font-semibold text-sm">{exp.price}</p>
            </div>
            <div className="rounded-xl p-3" style={{ background: "rgba(255,255,255,0.05)" }}>
              <div className="flex items-center gap-1.5 text-white/40 text-xs uppercase tracking-wider mb-1">
                <FiClock size={10} /> Duration
              </div>
              <p className="text-white font-semibold text-sm">{exp.duration}</p>
            </div>
          </div>

          <div className="rounded-xl p-3 mb-6" style={{ background: "rgba(255,77,0,0.08)", border: "1px solid rgba(255,77,0,0.2)" }}>
            <div className="flex items-center gap-1.5 text-[#FF4D00] text-xs font-semibold mb-1">
              <FiUsers size={10} /> Availability
            </div>
            <p className="text-white/70 text-sm">{exp.availability}</p>
          </div>

          <Link
            href="/reservations"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200 self-start text-sm"
            style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
          >
            Book This Experience <FiArrowRight />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: "#1A1A1A" }}>
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 text-center">
        <motion.div {...fadeUp}>
          <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-3">Beyond a Meal</p>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-5"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Dining Experiences
          </h1>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">
            From intimate chef's counter dinners to sprawling Sunday brunches, we've built experiences around every kind of occasion.
          </p>
        </motion.div>
      </div>

      {/* Experiences */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
        {experiences.map((exp, i) => (
          <ExperienceCard key={exp.id} exp={exp} index={i} flipped={i % 2 === 1} />
        ))}
      </div>

      {/* FAQ-lite */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-20">
        <motion.div {...fadeUp}>
          <h2
            className="text-2xl font-black text-white text-center mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Good to Know
          </h2>
          <div
            className="rounded-2xl p-6 space-y-5"
            style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {[
              { q: "How far in advance should I book the Chef's Table?", a: "We recommend booking at least 7–10 days ahead. The Chef's Table fills quickly, especially for Thursday evenings. Email us for last-minute availability." },
              { q: "Can I customise the Date Night menu for dietary requirements?", a: "Absolutely. Let us know your dietary needs when booking and our kitchen will adapt the menu. 48 hours' notice is ideal for substitutions." },
              { q: "Is the Corporate Lunch Package available for more than 20 people?", a: "For groups above 20, we recommend the Private Dining Room, which can seat up to 14 in exclusivity, or we can arrange exclusive hire of the restaurant on Monday (our closed day) with advance notice." },
            ].map((item, i) => (
              <div key={i} className="border-b border-white/10 pb-5 last:border-0 last:pb-0">
                <p className="text-white font-semibold mb-1.5">{item.q}</p>
                <p className="text-white/50 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* CTA */}
      <div className="text-center mt-16 px-4 sm:px-6">
        <motion.div {...fadeUp}>
          <p className="text-white/50 mb-4">Have a specific occasion in mind?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-[#FFB800] font-semibold hover:gap-4 transition-all"
          >
            Talk to our events team <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}