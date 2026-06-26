import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/siteData";
import Link from "next/link";

export const metadata = {
  title: "Blog",
  description: "Nutrition science, clean eating guides, farm sourcing stories, and recipe features from the Roots & Bowls kitchen.",
};

const categoryColors = {
  "Nutrition Science": { bg: "rgba(124,144,112,0.12)", color: "var(--sage-dark)" },
  "Lifestyle": { bg: "rgba(193,96,61,0.1)", color: "var(--terracotta)" },
  "Sourcing": { bg: "rgba(44,59,42,0.08)", color: "var(--olive)" },
  "How-To": { bg: "rgba(176,122,58,0.1)", color: "#7a4f1e" },
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-28 pb-12 text-center watercolor-overlay"
          style={{ background: "linear-gradient(160deg, #EEF2EA 0%, #F4F0E8 100%)" }}>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>From Our Kitchen</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
            The Roots & Bowls Journal
          </h1>
          <p className="text-base max-w-md mx-auto px-4" style={{ color: "var(--olive-light)" }}>
            Nutrition science, real sourcing stories, and guides to eating better in a busy city.
          </p>
        </section>

        {/* Featured post */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-12">
          <Link href={`/blog/${blogPosts[0].slug}`} className="block group rounded-2xl overflow-hidden bg-white"
            style={{ boxShadow: "0 8px 40px rgba(44,59,42,0.1)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative h-64 md:h-auto overflow-hidden">
                <img src={blogPosts[0].image} alt={blogPosts[0].title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3 flex-wrap">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={categoryColors[blogPosts[0].category] ?? { bg: "var(--cream)", color: "var(--olive)" }}>
                    {blogPosts[0].category}
                  </span>
                  <span className="text-xs" style={{ color: "var(--olive-light)" }}>{blogPosts[0].readTime} read</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:opacity-80 transition-opacity"
                  style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
                  {blogPosts[0].title}
                </h2>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--olive-light)" }}>{blogPosts[0].excerpt}</p>
                <div className="flex items-center gap-2 text-xs" style={{ color: "var(--olive-light)" }}>
                  <span className="font-medium">{blogPosts[0].author}</span>
                  <span>·</span>
                  <span>{new Date(blogPosts[0].date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
                </div>
              </div>
            </div>
          </Link>
        </section>

        {/* All posts */}
        <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
          <h2 className="text-lg font-bold mb-6" style={{ color: "var(--olive)" }}>All Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.slice(1).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block group rounded-2xl overflow-hidden bg-white transition-all hover:-translate-y-1 duration-200"
                style={{ boxShadow: "0 4px 20px rgba(44,59,42,0.07)" }}>
                <div className="relative h-44 overflow-hidden">
                  <img src={post.image} alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded-full text-xs font-semibold"
                      style={categoryColors[post.category] ?? {}}>
                      {post.category}
                    </span>
                    <span className="text-xs" style={{ color: "var(--olive-light)" }}>{post.readTime}</span>
                  </div>
                  <h3 className="font-bold text-base mb-2 group-hover:opacity-80 transition-opacity"
                    style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
                    {post.title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: "var(--olive-light)" }}>{post.excerpt}</p>
                  <p className="text-xs" style={{ color: "var(--olive-light)" }}>
                    {new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}