'use client';
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLeaves from "@/components/FloatingLeaves";
import DietaryTag from "@/components/DietaryTag";
import MacroBar from "@/components/MacroBar";
import { testimonials, statsHighlights, menuCategories } from "@/lib/siteData";
import { HiStar, HiArrowRight, HiCheckCircle } from "react-icons/hi";
import { FaLeaf, FaTruck, FaCalendarAlt } from "react-icons/fa";
import { SiZomato, SiSwiggy } from "react-icons/si";

const bestsellers = menuCategories[0].items.slice(0, 3);

function AnimatedStat({ value, label }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.5 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="text-center">
      <div
        className="text-4xl md:text-5xl font-bold mb-1 count-up"
        style={{ fontFamily: "var(--font-display)", color: "var(--terracotta)", animationPlayState: visible ? "running" : "paused" }}
      >
        {value}
      </div>
      <div className="text-sm font-medium" style={{ color: "var(--olive-light)" }}>{label}</div>
    </div>
  );
}

function BowlCard({ item, index }) {
  return (
    <div
      className="card-3d rounded-2xl overflow-hidden bg-white group cursor-pointer"
      style={{ boxShadow: "0 4px 24px rgba(44,59,42,0.08)", animationDelay: `${index * 0.15}s` }}
    >
      <div className="relative h-52 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {item.chefPick && (
          <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold text-white" style={{ background: "var(--terracotta)" }}>
            ⭐ Chef's Pick
          </div>
        )}
        <div className="absolute top-3 right-3 flex gap-1.5 flex-wrap justify-end">
          {item.tags.map((t) => <DietaryTag key={t} tag={t} />)}
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>{item.name}</h3>
          <span className="font-bold text-lg shrink-0" style={{ color: "var(--terracotta)" }}>₹{item.price}</span>
        </div>
        <p className="text-sm mb-3 leading-relaxed" style={{ color: "var(--olive-light)" }}>{item.description}</p>
        <MacroBar calories={item.calories} protein={item.protein} carbs={item.carbs} fat={item.fat} compact />
      </div>
    </div>
  );
}

function TestimonialCard({ t }) {
  return (
    <div className="rounded-2xl p-5 flex flex-col gap-3" style={{ background: "rgba(124,144,112,0.07)", border: "1px solid rgba(124,144,112,0.15)" }}>
      <div className="flex gap-1">
        {Array(t.stars).fill(0).map((_, i) => <HiStar key={i} style={{ color: "var(--terracotta)" }} size={14} />)}
      </div>
      <p className="text-sm leading-relaxed italic" style={{ color: "var(--olive)" }}>"{t.quote}"</p>
      <div className="flex items-center gap-3 mt-auto pt-2 border-t" style={{ borderColor: "rgba(124,144,112,0.15)" }}>
        <img src={t.image} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
        <div>
          <div className="font-semibold text-sm" style={{ color: "var(--olive)" }}>{t.name}</div>
          <div className="text-xs" style={{ color: "var(--olive-light)" }}>{t.role}</div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        {/* ── Hero ── */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden watercolor-overlay pt-16"
          style={{ background: "linear-gradient(160deg, #FAFAF7 0%, #F0EDDF 50%, #EEF2EA 100%)" }}>
          <FloatingLeaves count={6} />
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center py-20">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-6 bounce-in"
              style={{ background: "rgba(124,144,112,0.15)", color: "var(--sage-dark)", animationDelay: "0s" }}>
              <FaLeaf size={11} /> Plant-Forward Cafe · Indiranagar, Bengaluru
            </div>
            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6 bounce-in"
              style={{ fontFamily: "var(--font-display)", color: "var(--olive)", animationDelay: "0.15s" }}
            >
              Eat Clean.<br />
              <span style={{ color: "var(--terracotta)" }}>Feel Alive.</span>
            </h1>
            <p className="text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed bounce-in"
              style={{ color: "var(--olive-light)", animationDelay: "0.3s" }}>
              Real food. Real farms. Real flavour. Bowls, juices & meal prep built for Bengaluru's most food-curious humans.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center bounce-in" style={{ animationDelay: "0.45s" }}>
              <Link href="/order"
                className="px-7 py-3.5 rounded-full font-semibold text-white transition-all hover:opacity-90 hover:-translate-y-1 shadow-lg"
                style={{ background: "var(--terracotta)", boxShadow: "0 8px 24px rgba(193,96,61,0.3)" }}>
                Order Now — 30 min delivery
              </Link>
              <Link href="/menu"
                className="px-7 py-3.5 rounded-full font-semibold transition-all hover:-translate-y-1 border"
                style={{ color: "var(--olive)", borderColor: "rgba(44,59,42,0.2)", background: "rgba(255,255,255,0.7)" }}>
                Explore Menu →
              </Link>
            </div>
            {/* Swiggy / Zomato */}
            <div className="flex items-center justify-center gap-4 mt-8 bounce-in" style={{ animationDelay: "0.6s" }}>
              <a href="https://swiggy.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:opacity-80"
                style={{ background: "rgba(252,128,25,0.1)", color: "#FC8019" }}>
                <SiSwiggy size={16} /> Order on Swiggy
              </a>
              <a href="https://zomato.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all hover:opacity-80"
                style={{ background: "rgba(225,48,48,0.1)", color: "#E13030" }}>
                <SiZomato size={16} /> Order on Zomato
              </a>
            </div>
          </div>

          {/* Scroll nudge */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 rounded-full flex justify-center pt-2" style={{ borderColor: "rgba(44,59,42,0.2)" }}>
              <div className="w-1 h-2 rounded-full" style={{ background: "var(--sage)" }}></div>
            </div>
          </div>
        </section>

        {/* ── Stats ── */}
        <section className="py-12 border-y" style={{ background: "var(--cream)", borderColor: "var(--sand)" }}>
          <div className="max-w-4xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {statsHighlights.map((s) => <AnimatedStat key={s.label} value={s.value} label={s.label} />)}
          </div>
        </section>

        {/* ── Bestseller Bowls ── */}
        <section className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>Most Loved</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
              Bestseller Bowls
            </h2>
            <p className="text-base mt-3 max-w-md mx-auto" style={{ color: "var(--olive-light)" }}>
              These three outsell everything else on the menu. Every single week.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {bestsellers.map((item, i) => <BowlCard key={item.id} item={item} index={i} />)}
          </div>
          <div className="text-center mt-10">
            <Link href="/menu" className="inline-flex items-center gap-2 font-semibold transition-colors hover:opacity-80"
              style={{ color: "var(--terracotta)" }}>
              View full menu <HiArrowRight />
            </Link>
          </div>
        </section>

        {/* ── Our Promise ── */}
        <section className="py-20 watercolor-overlay" style={{ background: "linear-gradient(135deg, #EEF2EA 0%, #F4F0E8 100%)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-14">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>Our Promise</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
                Clean Food. Zero Compromise.
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {[
                { icon: "🌱", title: "100% Fresh, Daily", desc: "Every bowl is assembled the same day. We never refrigerate prepped bowls overnight or reuse yesterday's ingredients." },
                { icon: "🚫", title: "No Preservatives, Ever", desc: "Read our labels — or don't, because there aren't any. Our ingredients list looks exactly like a recipe, not a chemistry textbook." },
                { icon: "🤝", title: "Ethically Sourced", desc: "We pay fair prices to 60+ farm partners. When a farmer earns well, they farm well. It's the only kind of supply chain we believe in." },
              ].map((p) => (
                <div key={p.title} className="rounded-2xl p-6 text-center bg-white" style={{ boxShadow: "0 4px 20px rgba(44,59,42,0.06)" }}>
                  <div className="text-4xl mb-4">{p.icon}</div>
                  <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>{p.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--olive-light)" }}>{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── How It Works ── */}
        <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>Three Ways to Eat</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
              Your Food, Your Way
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <FaLeaf size={28} />, title: "Dine In", step: "01", desc: "Visit us at Indiranagar. Our cafe is designed for solo work sessions, casual lunches, and post-gym refuels. Great Wi-Fi, better food." },
              { icon: <FaTruck size={28} />, title: "Order Online", step: "02", desc: "Order through our website, Swiggy, or Zomato. Delivered hot (or perfectly chilled) within 30–45 minutes inside 8 km." },
              { icon: <FaCalendarAlt size={28} />, title: "Meal Prep Plans", step: "03", desc: "Subscribe weekly. We prep, pack, and deliver your full week's lunches and dinners so you never have to wonder 'what's for lunch' again." },
            ].map((s) => (
              <div key={s.step} className="relative rounded-2xl p-6 border" style={{ borderColor: "var(--sand)" }}>
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "var(--terracotta)" }}>{s.step}</div>
                <div className="mb-4" style={{ color: "var(--sage)" }}>{s.icon}</div>
                <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>{s.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--olive-light)" }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-20" style={{ background: "var(--cream)" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>Real Stories</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
                What Our Community Says
              </h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {testimonials.map((t) => <TestimonialCard key={t.id} t={t} />)}
            </div>
          </div>
        </section>

        {/* ── Brand Story ── */}
        <section className="py-20 px-4 sm:px-6 max-w-3xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>Who We Are</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
            A Cafe Born from Frustration
          </h2>
          <div className="text-base leading-loose space-y-4 text-left" style={{ color: "var(--olive-light)" }}>
            <p>Roots & Bowls started with a simple, stubborn question: why is it so hard to eat well in one of India's most health-aware cities?</p>
            <p>Our founders — Priya Nair, a clinical nutritionist, and Arjun Sharma, a chef trained in plant-based cuisine — met at a Bengaluru wellness event in 2021 and bonded over shared frustration. Priya was advising clients to eat clean, but had no reliable restaurant to recommend. Arjun was cooking healthy food for private clients but wanted to reach more people. They opened Roots & Bowls in 2022 with the conviction that healthy food doesn't have to be boring, expensive, or inaccessible.</p>
            <p>The menu took eleven iterations. They rejected everything that tasted like "diet food." Every dressing was tested against Bengaluru palates — bold spice profiles, familiar flavours reworked with clean ingredients. The Desi Vitality Bowl, made with heritage millets and pomegranate, became an instant bestseller because it tasted like home but felt like medicine.</p>
            <p>Today, Roots & Bowls serves over 300 bowls daily. We have 60+ farm partners across Karnataka, Rajasthan, and Tamil Nadu. Our meal prep subscription feeds 500+ Bengaluru households every week. And we've never once used an artificial preservative, a refined oil, or a flavour enhancer.</p>
            <p>That last part isn't a marketing claim. It's just how we cook.</p>
          </div>
          <Link href="/about" className="inline-flex items-center gap-2 mt-8 font-semibold" style={{ color: "var(--terracotta)" }}>
            Read our full story <HiArrowRight />
          </Link>
        </section>

        {/* ── Delivery CTA Strip ── */}
        <section className="py-14 text-white text-center" style={{ background: "var(--olive)" }}>
          <div className="max-w-2xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Hungry? We're 30 minutes away.
            </h2>
            <p className="mb-7 opacity-75">Delivering across Indiranagar, Koramangala, HSR Layout, Domlur & more.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="https://swiggy.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ background: "#FC8019", color: "white" }}>
                <SiSwiggy size={18} /> Order on Swiggy
              </a>
              <a href="https://zomato.com" target="_blank" rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:opacity-90"
                style={{ background: "#E13030", color: "white" }}>
                <SiZomato size={18} /> Order on Zomato
              </a>
              <Link href="/order"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all hover:opacity-90 border border-white/30"
                style={{ color: "white" }}>
                Order Direct →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}