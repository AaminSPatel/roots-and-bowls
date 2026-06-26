"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { FiArrowRight, FiStar, FiCalendar, FiMusic } from "react-icons/fi";
import { GiFireBowl, GiFire } from "react-icons/gi";
import { menuCategories, events, testimonials } from "@/lib/siteData";

/* ── EMBER PARTICLES ── */
const particles = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  size: Math.random() * 8 + 3,
  duration: Math.random() * 6 + 5,
  delay: Math.random() * 8,
  color: Math.random() > 0.5 ? "#FF4D00" : "#FFB800",
}));

function EmberParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <span
          key={p.id}
          className="ember-particle"
          style={{
            left: p.left,
            bottom: "-10px",
            width: p.size,
            height: p.size,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/* ── 3D TILT CARD ── */
function TiltCard({ dish }) {
  const cardRef = useRef(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    rotateY.set(dx * 12);
    rotateX.set(-dy * 12);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 800,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="rounded-2xl overflow-hidden glow-border cursor-pointer group relative"
      style={{ background: "#242424", transformPerspective: 800 }}
    >
      <div className="relative h-56 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        {dish.bestseller && (
          <span className="absolute top-3 left-3 bestseller-badge">⭐ Bestseller</span>
        )}
        <div className="absolute top-3 right-3 flex gap-1 flex-wrap justify-end">
          {dish.tags.map((t) => (
            <span key={t} className={`tag-${t.toLowerCase()} text-[10px] px-2 py-0.5 rounded-full font-semibold`}>
              {t}
            </span>
          ))}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="text-white font-semibold text-lg leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
            {dish.name}
          </h3>
          <span className="text-[#FFB800] font-bold text-lg shrink-0">₹{dish.price}</span>
        </div>
        <p className="text-white/50 text-sm leading-relaxed">{dish.description}</p>
      </div>
    </motion.div>
  );
}

/* ── REVIEW CARD ── */
function ReviewCard({ review, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="rounded-2xl p-6 glow-border"
      style={{ background: "#242424" }}
    >
      <div className="flex gap-0.5 mb-4">
        {[...Array(review.rating)].map((_, i) => (
          <FiStar key={i} className="text-[#FFB800] fill-[#FFB800]" size={14} />
        ))}
      </div>
      <p className="text-white/80 text-sm leading-relaxed mb-5 italic">"{review.text}"</p>
      <div>
        <p className="text-white font-semibold text-sm">{review.name}</p>
        <p className="text-white/40 text-xs mt-0.5">{review.role}</p>
      </div>
    </motion.div>
  );
}

/* ── INSTAGRAM GRID ── */
const igPhotos = [
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&q=80",
  "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
  "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&q=80",
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&q=80",
];

/* ── FEATURED DISHES (pick 3 bestsellers) ── */
const featuredDishes = menuCategories
  .flatMap((c) => c.items)
  .filter((i) => i.bestseller)
  .slice(0, 3);

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ background: "#1A1A1A" }}>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 100%, rgba(255,77,0,0.30) 0%, rgba(255,184,0,0.10) 35%, transparent 70%), #1A1A1A",
          }}
        />
        <EmberParticles />

        {/* Decorative fire rings */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-20"
          style={{
            background: "radial-gradient(ellipse, rgba(255,77,0,0.6) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-2 mb-8"
          >
            <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#FF4D00]" />
            <span className="text-[#FF4D00] text-sm font-semibold tracking-widest uppercase">Bandra West, Mumbai</span>
            <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#FF4D00]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-black leading-none mb-6 text-white"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Where Every
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #FF4D00 0%, #FFB800 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Bite Has a Story
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-white/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Flame-grilled precision meets Asian-Western audacity. Mumbai's most unapologetic fusion dining experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              href="/reservations"
              className="px-8 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 hover:scale-105 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
            >
              Reserve Your Table
            </Link>
            <Link
              href="/menu"
              className="px-8 py-4 rounded-full text-white font-semibold text-lg border border-white/30 hover:border-[#FF4D00] hover:text-[#FF4D00] transition-all duration-200 flex items-center justify-center gap-2"
            >
              Explore Menu <FiArrowRight />
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-px h-8 bg-gradient-to-b from-[#FF4D00] to-transparent"
            />
          </motion.div>
        </div>
      </section>

      {/* ── FEATURED DISHES ── */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-3">From Our Kitchen</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Dishes That Define Us
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredDishes.map((dish) => (
            <TiltCard key={dish.id} dish={dish} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#FF4D00]/50 text-[#FF4D00] font-semibold hover:bg-[#FF4D00] hover:text-white transition-all duration-200"
          >
            Full Menu <FiArrowRight />
          </Link>
        </div>
      </section>

      {/* ── EMBER PHILOSOPHY ── */}
      <section className="py-24 relative overflow-hidden" style={{ background: "#111" }}>
        <div className="absolute inset-0 fire-gradient pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-4">Our Philosophy</p>
              <h2
                className="text-4xl sm:text-5xl font-black text-white leading-tight mb-8"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                The Ember
                <br />
                <span style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                  Philosophy
                </span>
              </h2>
              <div className="space-y-6 text-white/60 leading-relaxed">
                <p>
                  Everything begins with the flame. Not as a technique, but as a philosophy. Fire doesn't lie — it exposes the truth of an ingredient, caramelises its natural sugars, chars its edges into something smoky and profound. At Zest & Ember, the Josper charcoal oven is our compass.
                </p>
                <p>
                  We source within 200km wherever possible. Our vegetables come from organic farms in Nashik and Pune. The fish is daily-delivered from Sassoon Docks. The herbs grow in our rooftop kitchen garden. The eggs come from free-range farms in Karjat.
                </p>
                <p>
                  And then we cook it with the sensibility of a kitchen that has trained across Tokyo, Hong Kong, Paris, and New York — applying global technique to hyperlocal ingredients. The result is food that is proudly Mumbai, but completely itself.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { icon: "🌾", title: "Farm to Flame", desc: "Sourced within 200km, from farms we visit and trust." },
                { icon: "🔥", title: "Josper Fired", desc: "350°C charcoal that creates flavour no gas burner can." },
                { icon: "🌏", title: "Asian-Western", desc: "Two culinary worlds, one coherent point of view." },
                { icon: "🍶", title: "Zero Compromise", desc: "Every dish workshopped for weeks before it earns a menu spot." },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="rounded-2xl p-5 glow-border"
                  style={{ background: "#1A1A1A" }}
                >
                  <span className="text-3xl block mb-3">{item.icon}</span>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── BRAND STORY ── */}
      <section className="py-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-3">The Story</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            How Zest &amp; Ember Was Born
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="prose prose-invert max-w-none space-y-5 text-white/65 leading-relaxed text-base sm:text-lg"
        >
          <p>
            In April 2020, two old friends — Chef Aryan Kapoor and sommelier-turned-entrepreneur Meera Nair — found themselves in a city that had gone quiet. The restaurants they loved were shuttered. The industry they had spent their careers building was in freefall. And yet, both of them found the same thought surfacing again and again in those weeks of silence: <em>Mumbai deserves better.</em>
          </p>
          <p>
            Not better in the sense of more expensive or more formal. Better in the sense of more honest. More committed. More curious. They had both eaten well across Asia and Europe, and they kept asking the same question: why couldn't a restaurant in their city be as rigorous, as joyful, and as genuinely exciting as the best places they had visited abroad?
          </p>
          <p>
            What followed was eighteen months of research, recipe testing, kitchen design arguments, wine list debates, and one pivotal trip to a Josper factory in Barcelona that convinced Aryan that the heart of the restaurant would be fire. The space in Bandra West — a former textile warehouse — was found in late 2021. The 12-month renovation turned it into the moody, high-ceilinged, candlelit room it is today.
          </p>
          <p>
            Zest & Ember opened in March 2022 to a sold-out crowd of 60 people who had been following the project on Instagram for six months. Since then, we've won two Mumbai restaurant awards, appeared in Condé Nast Traveller's India's Most Exciting Restaurants list, and — most importantly to us — become a place where Bandra comes to celebrate the things that matter.
          </p>
          <p>
            We are not a concept. We are not a brand exercise. We are a kitchen and a room and a team of people who genuinely believe that exceptional food, prepared with care and served with warmth, has the power to make a night unforgettable. That's why we do this. That's why every dish on this menu has a story. Come find yours.
          </p>
        </motion.div>
      </section>

      {/* ── CHEF SPOTLIGHT TEASER ── */}
      <section className="py-20" style={{ background: "#111" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="rounded-3xl overflow-hidden relative" style={{ background: "#1e1e1e" }}>
            <div className="grid lg:grid-cols-2">
              <div className="relative h-72 lg:h-auto">
                <img
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&q=80"
                  alt="Chef Aryan Kapoor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1e1e1e] hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1e1e] to-transparent lg:hidden" />
              </div>
              <div className="p-8 lg:p-14 flex flex-col justify-center">
                <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-3">Meet the Chef</p>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-5" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Chef Aryan Kapoor
                </h2>
                <p className="text-white/60 leading-relaxed mb-6">
                  Trained in Paris, schooled in Tokyo, forged in Mumbai's relentless heat. Chef Aryan spent eight years cooking in Michelin-starred kitchens across Europe and Asia before deciding the food he actually wanted to cook was best served to the city that shaped him. His menus at Zest & Ember are the result of a lifetime of obsessive eating, disciplined training, and genuine love for what Mumbai is becoming.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 text-[#FFB800] font-semibold hover:gap-4 transition-all"
                >
                  Read the full story <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-12"
        >
          <div>
            <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-2">What's On</p>
            <h2 className="text-4xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              Upcoming Events
            </h2>
          </div>
          <Link
            href="/events"
            className="inline-flex items-center gap-2 text-[#FFB800] font-semibold hover:gap-4 transition-all"
          >
            All events <FiArrowRight />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {events.map((ev, i) => (
            <motion.div
              key={ev.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl overflow-hidden glow-border orange-glow-hover"
              style={{ background: "#242424" }}
            >
              <div className="relative h-44 overflow-hidden">
                <img src={ev.image} alt={ev.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-3 left-3 text-xs font-bold px-3 py-1 rounded-full" style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)", color: "white" }}>
                  {ev.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold text-base leading-snug mb-1">{ev.title}</h3>
                <div className="flex items-center gap-1.5 text-white/50 text-xs mb-3">
                  <FiCalendar size={11} />
                  {ev.date} · {ev.time}
                </div>
                <p className="text-[#FFB800] text-sm font-semibold">{ev.ticketPrice}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── INSTAGRAM GRID ── */}
      <section className="py-20" style={{ background: "#111" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-2">Follow the Flame</p>
            <h2 className="text-3xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
              @zestandember
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
            {igPhotos.map((src, i) => (
              <motion.a
                key={i}
                href={`https://instagram.com/zestandember`}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="relative aspect-square overflow-hidden rounded-xl group"
              >
                <img
                  src={src}
                  alt="Instagram"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-[#FF4D00]/0 group-hover:bg-[#FF4D00]/20 transition-all duration-300" />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-3">What People Say</p>
          <h2 className="text-4xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            Voices From Our Table
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((r, i) => (
            <ReviewCard key={i} review={r} index={i} />
          ))}
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="py-20 px-4 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(255,77,0,0.2) 0%, transparent 70%), #111" }}
        />
        <div className="relative z-10 text-center max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <GiFireBowl className="text-[#FF4D00] text-5xl mx-auto mb-6" />
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Your Table Awaits
            </h2>
            <p className="text-white/60 mb-8 text-lg">
              Lunch, dinner, date night, or a Sunday that stretches beautifully. We're ready when you are.
            </p>
            <Link
              href="/reservations"
              className="inline-block px-10 py-4 rounded-full text-white font-bold text-lg hover:opacity-90 hover:scale-105 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
            >
              Make a Reservation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}