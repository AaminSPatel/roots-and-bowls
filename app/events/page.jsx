"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiCalendar, FiClock, FiArrowRight, FiTag } from "react-icons/fi";
import { events } from "@/lib/siteData";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const TAG_COLORS = {
  Weekly: { bg: "rgba(34,197,94,0.12)", color: "#4ade80", border: "rgba(34,197,94,0.3)" },
  "Special Event": { bg: "rgba(255,184,0,0.12)", color: "#FFB800", border: "rgba(255,184,0,0.3)" },
  "Limited Seats": { bg: "rgba(255,77,0,0.12)", color: "#FF4D00", border: "rgba(255,77,0,0.3)" },
  "Sold Out": { bg: "rgba(100,100,100,0.12)", color: "#888", border: "rgba(100,100,100,0.3)" },
};

function EventCard({ event, index }) {
  const tagStyle = TAG_COLORS[event.tag] || TAG_COLORS["Special Event"];
  const isSoldOut = event.tag === "Sold Out";

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.55, delay: index * 0.1 }}
      className="rounded-3xl overflow-hidden glow-border group"
      style={{ background: "#1e1e1e" }}
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Tag */}
        <span
          className="absolute top-4 left-4 text-xs font-bold px-3 py-1.5 rounded-full"
          style={{ background: tagStyle.bg, color: tagStyle.color, border: `1px solid ${tagStyle.border}` }}
        >
          {event.tag}
        </span>

        {/* Sold-out overlay */}
        {isSoldOut && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white/60 font-bold text-lg tracking-widest uppercase border border-white/30 px-5 py-2 rounded-full">
              Sold Out
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3
          className="text-white font-black text-xl mb-3 leading-snug"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {event.title}
        </h3>

        <div className="flex flex-wrap gap-x-4 gap-y-1.5 mb-4">
          <span className="flex items-center gap-1.5 text-white/50 text-sm">
            <FiCalendar size={12} className="text-[#FF4D00]" />
            {event.date}
          </span>
          <span className="flex items-center gap-1.5 text-white/50 text-sm">
            <FiClock size={12} className="text-[#FF4D00]" />
            {event.time}
          </span>
        </div>

        <p className="text-white/55 text-sm leading-relaxed mb-5">{event.description}</p>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-white/30 text-xs uppercase tracking-wider mb-0.5">Ticket Price</p>
            <p
              className="font-bold text-base"
              style={{ color: isSoldOut ? "#666" : "#FFB800" }}
            >
              {event.ticketPrice}
            </p>
          </div>

          {!isSoldOut ? (
            <Link
              href="/reservations"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-semibold hover:opacity-90 hover:scale-105 transition-all duration-200"
              style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
            >
              Book Now <FiArrowRight size={13} />
            </Link>
          ) : (
            <span className="px-5 py-2.5 rounded-full text-sm font-semibold bg-white/5 text-white/30 cursor-not-allowed">
              Unavailable
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function EventsPage() {
  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: "#1A1A1A" }}>
      {/* Hero */}
      <div
        className="relative py-20 overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,77,0,0.18) 0%, transparent 60%), #1A1A1A",
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div {...fadeUp}>
            <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-4">What's On</p>
            <h1
              className="text-5xl sm:text-7xl font-black text-white mb-5 leading-none"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Events &amp;
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FF4D00, #FFB800)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Happenings
              </span>
            </h1>
            <p className="text-white/55 text-lg max-w-xl mx-auto">
              Live jazz, whiskey tastings, guest chef popups, wine pairing dinners. Zest &amp; Ember is always doing something interesting.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Weekly Anchor */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-4 mb-14">
        <motion.div
          {...fadeUp}
          className="rounded-3xl p-7 sm:p-10 text-center relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, rgba(255,77,0,0.15) 0%, rgba(255,184,0,0.08) 100%)",
            border: "1px solid rgba(255,77,0,0.25)",
          }}
        >
          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "radial-gradient(ellipse at 50% 50%, #FF4D00 0%, transparent 70%)",
            }}
          />
          <p className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest mb-2 relative z-10">Every Week</p>
          <h2
            className="text-3xl sm:text-4xl font-black text-white mb-3 relative z-10"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Live Jazz Fridays
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-5 relative z-10">
            Mumbai's finest jazz quartet plays every Friday evening, 8:30 PM to 11:30 PM. No cover charge. Tables fill fast — book by Tuesday.
          </p>
          <Link
            href="/reservations"
            className="relative z-10 inline-flex items-center gap-2 px-7 py-3 rounded-full text-white font-bold hover:opacity-90 hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
          >
            Reserve for Friday <FiArrowRight size={14} />
          </Link>
        </motion.div>
      </div>

      {/* Events Grid */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div {...fadeUp} className="mb-8">
          <p className="text-white/40 text-xs font-semibold uppercase tracking-widest">Upcoming Special Events</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {events.slice(1).map((event, i) => (
            <EventCard key={event.id} event={event} index={i} />
          ))}
        </div>
      </div>

      {/* Mailing List CTA */}
      <div className="max-w-2xl mx-auto px-4 sm:px-6 mt-20 text-center">
        <motion.div {...fadeUp}>
          <div
            className="rounded-2xl p-8"
            style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            <h3
              className="text-2xl font-black text-white mb-2"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Never Miss an Event
            </h3>
            <p className="text-white/50 text-sm mb-5">
              Follow us on Instagram or drop your email — we announce every popup, tasting, and special evening before anywhere else.
            </p>
            <div className="flex gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-[#2e2e2e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#FF4D00] transition-colors"
              />
              <button
                className="px-5 py-3 rounded-xl text-white font-semibold text-sm hover:opacity-90 transition-all"
                style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
              >
                Notify Me
              </button>
            </div>
            <p className="text-white/20 text-xs mt-3">No spam. Just fire.</p>
          </div>
        </motion.div>
      </div>

      {/* Private events note */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 mt-10 text-center">
        <motion.div {...fadeUp}>
          <p className="text-white/40 text-sm">
            Interested in hosting a private event or brand experience?{" "}
            <Link href="/contact" className="text-[#FFB800] hover:text-[#FF4D00] transition-colors underline underline-offset-2">
              Get in touch with our events team.
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}