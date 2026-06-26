import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/lib/siteData";
import Link from "next/link";
import { HiArrowLeft, HiClock, HiUser } from "react-icons/hi";

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => post.relatedSlugs.includes(p.slug));

  const paragraphs = post.content.split("\n\n").filter(Boolean);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-24 pb-0">
          <div className="relative h-72 md:h-96 overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(44,59,42,0.3) 0%, rgba(44,59,42,0.6) 100%)" }} />
            <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 max-w-3xl mx-auto left-0 right-0">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold text-white mb-3 self-start"
                style={{ background: "var(--terracotta)" }}>{post.category}</span>
              <h1 className="text-2xl md:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-display)" }}>
                {post.title}
              </h1>
            </div>
          </div>
        </section>

        {/* Meta */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 py-6 border-b flex flex-wrap items-center gap-4 text-sm"
          style={{ borderColor: "var(--sand)", color: "var(--olive-light)" }}>
          <Link href="/blog" className="flex items-center gap-1.5 font-medium transition-opacity hover:opacity-70"
            style={{ color: "var(--olive-light)" }}>
            <HiArrowLeft /> Blog
          </Link>
          <span style={{ color: "var(--sand)" }}>|</span>
          <span className="flex items-center gap-1.5"><HiUser size={14} />{post.author}</span>
          <span className="flex items-center gap-1.5"><HiClock size={14} />{post.readTime} read</span>
          <span>{new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" })}</span>
        </section>

        {/* Article content */}
        <article className="max-w-3xl mx-auto px-4 sm:px-6 py-10">
          <div className="text-base leading-loose space-y-5" style={{ color: "var(--olive)" }}>
            {paragraphs.map((para, i) => {
              if (para.startsWith("**") && para.endsWith("**")) {
                return (
                  <h2 key={i} className="text-xl font-bold mt-6" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
                    {para.replace(/\*\*/g, "")}
                  </h2>
                );
              }
              return (
                <p key={i} style={{ color: "var(--olive-light)" }}>
                  {para.replace(/\*\*/g, "")}
                </p>
              );
            })}
          </div>
        </article>

        {/* Related posts */}
        {related.length > 0 && (
          <section className="border-t py-12 px-4 sm:px-6 max-w-3xl mx-auto" style={{ borderColor: "var(--sand)" }}>
            <h2 className="text-lg font-bold mb-6" style={{ color: "var(--olive)" }}>Related Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {related.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group rounded-xl overflow-hidden bg-white flex gap-3 p-3 transition-all hover:-translate-y-0.5"
                  style={{ boxShadow: "0 2px 12px rgba(44,59,42,0.07)" }}>
                  <img src={p.image} alt={p.title} className="w-20 h-20 rounded-lg object-cover shrink-0" />
                  <div>
                    <span className="text-xs font-semibold" style={{ color: "var(--sage-dark)" }}>{p.category}</span>
                    <h3 className="font-semibold text-sm mt-0.5 group-hover:opacity-80 transition-opacity leading-snug"
                      style={{ color: "var(--olive)" }}>{p.title}</h3>
                    <p className="text-xs mt-1" style={{ color: "var(--olive-light)" }}>{p.readTime} read</p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}