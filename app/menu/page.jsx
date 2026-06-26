"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";
import { menuCategories } from "@/lib/siteData";

/* export const metadata = {
  title: "Menu",
  description:
    "Full menu at Zest & Ember — small plates, mains, flame-grilled dishes, desserts, cocktails, and mocktails.",
};
 */
const TAG_LABELS = { V: "Veg", VG: "Vegan", GF: "Gluten-Free", Spicy: "🌶 Spicy" };

function TagBadge({ tag }) {
  const classMap = { V: "tag-v", VG: "tag-vg", GF: "tag-gf", Spicy: "tag-spicy" };
  return (
    <span className={`${classMap[tag] || ""} text-[10px] px-2 py-0.5 rounded-full font-semibold`}>
      {TAG_LABELS[tag] || tag}
    </span>
  );
}

function MenuItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4 }}
      className="flex gap-4 p-4 rounded-2xl glow-border group transition-all duration-200 hover:bg-white/5"
      style={{ background: "#242424" }}
    >
      <div className="relative h-24 w-24 rounded-xl overflow-hidden shrink-0">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {item.bestseller && (
          <div className="absolute inset-0 flex items-end p-1">
            <span className="bestseller-badge text-[8px] leading-tight">⭐ Best</span>
          </div>
        )}
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-white font-semibold text-base leading-snug" style={{ fontFamily: "'Playfair Display', serif" }}>
            {item.name}
          </h3>
          <span className="text-[#FFB800] font-bold shrink-0">₹{item.price}</span>
        </div>
        <p className="text-white/50 text-sm mt-1 leading-relaxed line-clamp-2">{item.description}</p>
        {item.tags.length > 0 && (
          <div className="flex gap-1.5 flex-wrap mt-2">
            {item.tags.map((t) => (
              <TagBadge key={t} tag={t} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default function MenuPage() {
  const [activeSlug, setActiveSlug] = useState(menuCategories[0].slug);

  const activeCategory = menuCategories.find((c) => c.slug === activeSlug);

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: "#1A1A1A" }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center py-14">
          <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-3">Explore</p>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Our Menu
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Every dish earned its place through weeks of testing. Seasonal, local, flame-kissed.
          </p>
        </div>

        {/* Tab Bar */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide mb-10">
          {menuCategories.map((cat) => (
            <button
              key={cat.slug}
              onClick={() => setActiveSlug(cat.slug)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold shrink-0 transition-all duration-200 ${
                activeSlug === cat.slug ? "menu-tab-active" : "menu-tab-inactive"
              }`}
            >
              {cat.icon} {cat.label}
            </button>
          ))}
        </div>

        {/* Category Story */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlug + "-story"}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl p-6 mb-8 border border-[#FF4D00]/20"
            style={{ background: "linear-gradient(135deg, rgba(255,77,0,0.05) 0%, rgba(255,184,0,0.03) 100%)" }}
          >
            <div className="flex items-start gap-4">
              <span className="text-3xl mt-1">{activeCategory?.icon}</span>
              <div>
                <h2
                  className="text-2xl font-black text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {activeCategory?.label}
                </h2>
                <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
                  {activeCategory?.story}
                </p>
                <Link
                  href={`/menu/${activeSlug}`}
                  className="inline-flex items-center gap-1.5 mt-3 text-[#FFB800] text-sm font-semibold hover:gap-3 transition-all"
                >
                  Full category page <FiArrowRight size={13} />
                </Link>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Items Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlug + "-items"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="grid sm:grid-cols-2 gap-4"
          >
            {activeCategory?.items.map((item, i) => (
              <MenuItem key={item.id} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Dietary Legend */}
        <div className="mt-14 p-5 rounded-2xl border border-white/10" style={{ background: "#111" }}>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-3">Dietary Guide</p>
          <div className="flex flex-wrap gap-3">
            {Object.entries(TAG_LABELS).map(([key, label]) => (
              <div key={key} className="flex items-center gap-2">
                <TagBadge tag={key} />
                <span className="text-white/40 text-xs">{label}</span>
              </div>
            ))}
          </div>
          <p className="text-white/30 text-xs mt-3">
            Please inform your server of any allergies. Our kitchen handles nuts, dairy, gluten, and shellfish.
          </p>
        </div>
      </div>
    </div>
  );
}