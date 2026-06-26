"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiMapPin, FiPhone, FiMail, FiClock, FiInstagram, FiFacebook, FiCheck } from "react-icons/fi";
import { RiWhatsappLine, RiParkingBoxLine } from "react-icons/ri";
import { siteConfig } from "@/lib/siteData";
/* 
export const metadata = {
  title: "Contact",
  description:
    "Find Zest & Ember at Linking Road, Bandra West, Mumbai. Phone, email, WhatsApp, directions and parking info.",
};
 */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function ContactPage() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const setField = (k, v) => setFormData((p) => ({ ...p, [k]: v }));
  const canSend = formData.name && formData.email && formData.message;

  const handleSend = () => {
    if (!canSend) return;
    setFormSent(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: "#1A1A1A" }}>
      {/* Header */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-14 text-center">
        <motion.div {...fadeUp}>
          <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-3">Get in Touch</p>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Come Find Us
          </h1>
          <p className="text-white/50 max-w-xl mx-auto">
            Walk-ins, reservations, events, press, or just to say hello — we're always reachable.
          </p>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Info */}
          <div className="space-y-5">
            {/* Address & Map */}
            <motion.div
              {...fadeUp}
              className="rounded-2xl overflow-hidden"
              style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="h-52 relative overflow-hidden bg-[#242424]">
                {/* Static map placeholder — link opens Google Maps */}
                <a
                  href={siteConfig.address.mapLink}
                  target="_blank"
                  rel="noreferrer"
                  className="block w-full h-full group"
                >
                  <img
                    src="https://images.unsplash.com/photo-1569330284658-3a63ebdd6c44?w=900&q=80"
                    alt="Bandra West Mumbai map area"
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 opacity-50 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div
                      className="px-5 py-2.5 rounded-full text-white text-sm font-semibold flex items-center gap-2"
                      style={{ background: "rgba(255,77,0,0.85)" }}
                    >
                      <FiMapPin /> Open in Google Maps
                    </div>
                  </div>
                </a>
              </div>
              <div className="p-5">
                <div className="flex gap-3">
                  <FiMapPin className="text-[#FF4D00] mt-1 shrink-0" />
                  <div>
                    <p className="text-white font-semibold">Zest &amp; Ember</p>
                    <p className="text-white/55 text-sm mt-0.5">
                      {siteConfig.address.street}<br />
                      {siteConfig.address.area}, {siteConfig.address.city} – {siteConfig.address.pin}
                    </p>
                    <a
                      href={siteConfig.address.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#FFB800] text-sm font-medium mt-2 inline-block hover:text-[#FF4D00] transition-colors"
                    >
                      Get directions →
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-2xl p-5 space-y-4"
              style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h3 className="text-white font-bold text-base mb-4">Reach Us Directly</h3>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(255,77,0,0.12)" }}>
                  <FiPhone className="text-[#FF4D00]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Phone</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#FF4D00] transition-colors">{siteConfig.contact.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.contact.email}`}
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(255,77,0,0.12)" }}>
                  <FiMail className="text-[#FF4D00]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Email</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#FF4D00] transition-colors">{siteConfig.contact.email}</p>
                </div>
              </a>

              <a
                href={siteConfig.contact.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(37,211,102,0.12)" }}>
                  <RiWhatsappLine className="text-[#25D366]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs">WhatsApp Reservations</p>
                  <p className="text-white text-sm font-medium group-hover:text-[#25D366] transition-colors">Message us on WhatsApp</p>
                </div>
              </a>

              <div className="flex items-center gap-3 p-3">
                <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(255,77,0,0.12)" }}>
                  <RiParkingBoxLine className="text-[#FF4D00]" />
                </div>
                <div>
                  <p className="text-white/40 text-xs">Parking</p>
                  <p className="text-white/70 text-sm">{siteConfig.parking}</p>
                </div>
              </div>
            </motion.div>

            {/* Opening Hours */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
              className="rounded-2xl p-5"
              style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <div className="flex items-center gap-2 mb-5">
                <FiClock className="text-[#FF4D00]" />
                <h3 className="text-white font-bold text-base">Opening Hours</h3>
              </div>
              <div className="space-y-3">
                {siteConfig.hours.map((h, i) => (
                  <div
                    key={i}
                    className={`flex items-start justify-between gap-4 pb-3 border-b border-white/5 last:border-0 last:pb-0 ${
                      h.lunch === "Closed" ? "opacity-40" : ""
                    }`}
                  >
                    <p className="text-white text-sm font-medium">{h.days}</p>
                    <div className="text-right">
                      {h.lunch === "Closed" ? (
                        <p className="text-[#FF4D00] text-sm">Closed</p>
                      ) : (
                        <>
                          <p className="text-white/55 text-sm">{h.lunch}</p>
                          <p className="text-white/55 text-sm">{h.dinner}</p>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-2xl p-5"
              style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.08)" }}
            >
              <h3 className="text-white font-bold text-base mb-4">Follow the Flame</h3>
              <div className="flex gap-3">
                <a
                  href={siteConfig.contact.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-white/60 text-sm font-medium hover:border-[#FF4D00] hover:text-[#FF4D00] transition-all"
                >
                  <FiInstagram /> Instagram
                </a>
                <a
                  href={siteConfig.contact.facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-white/60 text-sm font-medium hover:border-[#FF4D00] hover:text-[#FF4D00] transition-all"
                >
                  <FiFacebook /> Facebook
                </a>
                <a
                  href={siteConfig.contact.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border border-[#25D366]/30 text-[#25D366]/70 text-sm font-medium hover:border-[#25D366] hover:text-[#25D366] transition-all"
                >
                  <RiWhatsappLine /> WhatsApp
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl p-7 sm:p-9 self-start sticky top-28"
            style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.08)" }}
          >
            {formSent ? (
              <div className="py-10 text-center">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
                >
                  <FiCheck className="text-white text-2xl" />
                </div>
                <h3
                  className="text-2xl font-black text-white mb-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Message Sent!
                </h3>
                <p className="text-white/50 text-sm">
                  We'll get back to you at <strong className="text-white">{formData.email}</strong> within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h2
                  className="text-2xl font-black text-white mb-1"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  Send Us a Message
                </h2>
                <p className="text-white/40 text-sm mb-7">
                  For reservations, events, press enquiries or general questions.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="text-white/50 text-sm mb-1.5 block">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setField("name", e.target.value)}
                      placeholder="Priya Sharma"
                      className="w-full bg-[#2a2a2a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#FF4D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-white/50 text-sm mb-1.5 block">Email Address</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setField("email", e.target.value)}
                      placeholder="you@email.com"
                      className="w-full bg-[#2a2a2a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#FF4D00] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-white/50 text-sm mb-1.5 block">Subject</label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setField("subject", e.target.value)}
                      className="w-full bg-[#2a2a2a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-[#FF4D00] transition-colors"
                      style={{ color: formData.subject ? "white" : "rgba(255,255,255,0.3)" }}
                    >
                      <option value="" style={{ background: "#2a2a2a" }}>Select a topic</option>
                      <option value="reservation" style={{ background: "#2a2a2a" }}>Table Reservation</option>
                      <option value="private-dining" style={{ background: "#2a2a2a" }}>Private Dining / Events</option>
                      <option value="corporate" style={{ background: "#2a2a2a" }}>Corporate Enquiry</option>
                      <option value="press" style={{ background: "#2a2a2a" }}>Press &amp; Media</option>
                      <option value="feedback" style={{ background: "#2a2a2a" }}>Feedback</option>
                      <option value="other" style={{ background: "#2a2a2a" }}>Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-white/50 text-sm mb-1.5 block">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setField("message", e.target.value)}
                      placeholder="Tell us how we can help..."
                      rows={5}
                      className="w-full bg-[#2a2a2a] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/25 focus:outline-none focus:border-[#FF4D00] transition-colors resize-none"
                    />
                  </div>

                  <button
                    onClick={handleSend}
                    disabled={!canSend}
                    className={`w-full py-4 rounded-xl font-bold text-white transition-all duration-200 ${
                      canSend ? "hover:opacity-90 hover:scale-[1.02]" : "opacity-40 cursor-not-allowed"
                    }`}
                    style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
                  >
                    Send Message
                  </button>

                  <p className="text-white/25 text-xs text-center">
                    We reply to all messages within 24 hours.
                  </p>
                </div>
              </>
            )}
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          {...fadeUp}
          transition={{ delay: 0.2 }}
          className="mt-16"
        >
          <h2
            className="text-3xl font-black text-white text-center mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                q: "Is a reservation required?",
                a: "We strongly recommend reservations, especially Friday evenings, Saturday dinner, and Sunday brunch. Walk-ins are welcome at the bar on weekdays.",
              },
              {
                q: "Is private dining available?",
                a: "Yes — The Ember Room seats up to 14 exclusively. Available all days with 7-day advance booking. Email us for availability and pricing.",
              },
              {
                q: "Do you handle corporate events?",
                a: "Absolutely. Corporate Lunch Package (Tue–Fri), private dining, AV support, flexible billing. Contact hello@zestandember.in for a proposal.",
              },
              {
                q: "Is there outdoor seating?",
                a: "A semi-covered terrace seats 12 and is available on request. Ideal for casual lunches and early evening drinks.",
              },
              {
                q: "Do you have vegan options?",
                a: "Yes. Vegan dishes are marked VG throughout the menu. Our kitchen can also adapt several other dishes — let us know when booking.",
              },
              {
                q: "Is parking available?",
                a: "Valet parking every evening and Sunday brunch. Street parking on Chapel Road. Bandra Station paid parking is 4 minutes away.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-xl p-5"
                style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.07)" }}
              >
                <p className="text-white font-semibold mb-2 text-sm">{faq.q}</p>
                <p className="text-white/50 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}