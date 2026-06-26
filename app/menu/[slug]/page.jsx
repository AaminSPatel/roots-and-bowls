import { notFound } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { menuCategories } from "@/lib/siteData";

export async function generateStaticParams() {
  return menuCategories.map((cat) => ({ slug: cat.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const cat = menuCategories.find((c) => c.slug === slug);
  if (!cat) return {};
  return {
    title: `${cat.label} | Menu`,
    description: `Explore ${cat.label} at Zest & Ember — ${cat.story.slice(0, 120)}...`,
  };
}

function TagBadge({ tag }) {
  const classMap = { V: "tag-v", VG: "tag-vg", GF: "tag-gf", Spicy: "tag-spicy" };
  const labels = { V: "Veg", VG: "Vegan", GF: "GF", Spicy: "🌶 Spicy" };
  return (
    <span className={`${classMap[tag]} text-[10px] px-2 py-0.5 rounded-full font-semibold`}>
      {labels[tag]}
    </span>
  );
}

export default async function MenuCategoryPage({ params }) {
  const { slug } = await params;
  const category = menuCategories.find((c) => c.slug === slug);
  if (!category) notFound();

  const catIndex = menuCategories.findIndex((c) => c.slug === slug);
  const prev = menuCategories[catIndex - 1];
  const next = menuCategories[catIndex + 1];

  const chefsPickIds = category.items.filter((i) => i.bestseller).map((i) => i.id);

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: "#1A1A1A" }}>
      {/* Back Nav */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-10">
        <Link
          href="/menu"
          className="inline-flex items-center gap-2 text-white/50 text-sm hover:text-[#FF4D00] transition-colors"
        >
          <FiArrowLeft size={14} /> Back to Full Menu
        </Link>
      </div>

      {/* Hero */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 mb-14">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-5xl">{category.icon}</span>
          <div>
            <p className="text-[#FF4D00] text-xs font-semibold uppercase tracking-widest mb-1">
              Zest & Ember · {category.label}
            </p>
            <h1
              className="text-4xl sm:text-5xl font-black text-white"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {category.label}
            </h1>
          </div>
        </div>

        {/* Category story */}
        <div
          className="rounded-2xl p-6 mt-6 border border-[#FF4D00]/20"
          style={{
            background:
              "linear-gradient(135deg, rgba(255,77,0,0.07) 0%, rgba(255,184,0,0.03) 100%)",
          }}
        >
          <h2
            className="text-lg font-bold text-white mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Story Behind {category.label}
          </h2>
          <p className="text-white/65 leading-relaxed">{category.story}</p>
        </div>
      </div>

      {/* Items */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Chef's Picks */}
        {chefsPickIds.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
                style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)", color: "white" }}
              >
                ⭐ Chef's Picks
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              {category.items
                .filter((i) => i.bestseller)
                .map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl overflow-hidden"
                    style={{
                      background: "#242424",
                      border: "1px solid rgba(255,77,0,0.4)",
                      boxShadow: "0 0 30px rgba(255,77,0,0.1)",
                    }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute top-3 left-3">
                        <span className="bestseller-badge">⭐ Chef's Pick</span>
                      </div>
                      <div className="absolute top-3 right-3 flex gap-1 flex-wrap justify-end">
                        {item.tags.map((t) => <TagBadge key={t} tag={t} />)}
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h3
                          className="text-white font-bold text-xl"
                          style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                          {item.name}
                        </h3>
                        <span className="text-[#FFB800] font-bold text-xl shrink-0">₹{item.price}</span>
                      </div>
                      <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* All Items */}
        <div>
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-5">
            Full {category.label} Selection
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 rounded-2xl glow-border"
                style={{ background: "#1e1e1e" }}
              >
                <div className="relative h-24 w-24 rounded-xl overflow-hidden shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2">
                    <h4
                      className="text-white font-semibold text-base leading-snug"
                      style={{ fontFamily: "'Playfair Display', serif" }}
                    >
                      {item.name}
                    </h4>
                    <span className="text-[#FFB800] font-bold shrink-0">₹{item.price}</span>
                  </div>
                  <p className="text-white/50 text-sm mt-1 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                  {item.tags.length > 0 && (
                    <div className="flex gap-1.5 flex-wrap mt-2">
                      {item.tags.map((t) => <TagBadge key={t} tag={t} />)}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Category Nav */}
        <div className="flex justify-between mt-14 pt-8 border-t border-white/10">
          {prev ? (
            <Link
              href={`/menu/${prev.slug}`}
              className="flex items-center gap-2 text-white/50 hover:text-[#FF4D00] transition-colors text-sm font-medium"
            >
              <FiArrowLeft /> {prev.icon} {prev.label}
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/menu/${next.slug}`}
              className="flex items-center gap-2 text-white/50 hover:text-[#FF4D00] transition-colors text-sm font-medium"
            >
              {next.icon} {next.label} <FiArrowRight />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}