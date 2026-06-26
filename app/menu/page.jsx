'use client';
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DietaryTag from "@/components/DietaryTag";
import MacroBar from "@/components/MacroBar";
import { menuCategories } from "@/lib/siteData";
import Link from "next/link";

const dietaryFilters = ["All", "V", "VG", "GF", "DF", "LF"];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].slug);
  const [activeFilter, setActiveFilter] = useState("All");

  const currentCategory = menuCategories.find((c) => c.slug === activeCategory);
  const filteredItems = currentCategory?.items.filter(
    (item) => activeFilter === "All" || item.tags.includes(activeFilter)
  ) ?? [];

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-28 pb-12 text-center watercolor-overlay"
          style={{ background: "linear-gradient(160deg, #EEF2EA 0%, #F4F0E8 100%)" }}>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>What We Serve</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
            Our Menu
          </h1>
          <p className="text-base max-w-md mx-auto px-4" style={{ color: "var(--olive-light)" }}>
            Everything made fresh daily. Macros tracked. Allergens listed. Zero guesswork.
          </p>
        </section>

        {/* Category Tabs */}
        <div className="sticky top-16 z-30 border-b overflow-x-auto" style={{ background: "rgba(250,250,247,0.97)", borderColor: "var(--sand)", backdropFilter: "blur(10px)" }}>
          <div className="flex gap-1 px-4 py-2 max-w-6xl mx-auto min-w-max">
            {menuCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => { setActiveCategory(cat.slug); setActiveFilter("All"); }}
                className="px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200"
                style={activeCategory === cat.slug
                  ? { background: "var(--sage)", color: "white" }
                  : { color: "var(--olive-light)", background: "transparent" }
                }
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dietary Filter */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2 flex items-center gap-2 flex-wrap">
          <span className="text-xs font-semibold uppercase tracking-wider mr-2" style={{ color: "var(--olive-light)" }}>Filter:</span>
          {dietaryFilters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className="px-3 py-1 rounded-full text-xs font-semibold border transition-all duration-200"
              style={activeFilter === f
                ? { background: "var(--olive)", color: "white", borderColor: "var(--olive)" }
                : { background: "transparent", color: "var(--olive-light)", borderColor: "var(--sand)" }
              }
            >
              {f === "All" ? "All Items" : f}
            </button>
          ))}
        </div>

        {/* Category description */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
          <p className="text-sm" style={{ color: "var(--olive-light)" }}>{currentCategory?.description}</p>
        </div>

        {/* Items Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16" style={{ color: "var(--olive-light)" }}>
              <p className="text-4xl mb-3">🌿</p>
              <p className="font-medium">No items match this filter in this category.</p>
              <button onClick={() => setActiveFilter("All")} className="mt-3 text-sm underline" style={{ color: "var(--sage-dark)" }}>
                Clear filter
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <div key={item.id} className="rounded-2xl overflow-hidden bg-white group"
                  style={{ boxShadow: "0 4px 20px rgba(44,59,42,0.07)" }}>
                  <div className="relative h-48 overflow-hidden">
                    <img src={item.image} alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    {item.chefPick && (
                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white"
                        style={{ background: "var(--terracotta)" }}>⭐ Chef's Pick</div>
                    )}
                    <div className="absolute top-3 right-3 flex gap-1 flex-wrap justify-end max-w-[120px]">
                      {item.tags.map((t) => <DietaryTag key={t} tag={t} />)}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col gap-3">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>{item.name}</h3>
                      <span className="font-bold text-lg shrink-0" style={{ color: "var(--terracotta)" }}>₹{item.price}</span>
                    </div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--olive-light)" }}>{item.description}</p>
                    <MacroBar calories={item.calories} protein={item.protein} carbs={item.carbs} fat={item.fat} />
                    {item.allergens && (
                      <p className="text-xs" style={{ color: "var(--olive-light)" }}>
                        <span className="font-semibold">Allergens:</span> {item.allergens}
                      </p>
                    )}
                    <Link href={`/menu/${activeCategory}`}
                      className="mt-1 w-full text-center py-2 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
                      style={{ background: "rgba(124,144,112,0.12)", color: "var(--sage-dark)" }}>
                      View full category →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}