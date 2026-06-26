'use client';
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig, faqs } from "@/lib/siteData";
import { HiLocationMarker, HiPhone, HiMail, HiClock, HiChevronDown } from "react-icons/hi";
import { FaInstagram } from "react-icons/fa";

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b" style={{ borderColor: "var(--sand)" }}>
      <button onClick={() => setOpen(!open)}
        className="w-full text-left py-4 flex items-center justify-between gap-3 text-sm font-semibold transition-colors"
        style={{ color: "var(--olive)" }}>
        {q}
        <HiChevronDown size={16} className="shrink-0 transition-transform" style={{ transform: open ? "rotate(180deg)" : "none", color: "var(--sage)" }} />
      </button>
      {open && <p className="pb-4 text-sm leading-relaxed" style={{ color: "var(--olive-light)" }}>{a}</p>}
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Header */}
        <section className="pt-28 pb-12 text-center watercolor-overlay"
          style={{ background: "linear-gradient(160deg, #EEF2EA 0%, #F4F0E8 100%)" }}>
          <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>Say Hello</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-3" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
            Find Us or Reach Out
          </h1>
          <p className="text-base max-w-md mx-auto px-4" style={{ color: "var(--olive-light)" }}>
            We're a small team and we actually read every message. Give us 24 hours.
          </p>
        </section>

        <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left: Info */}
          <div>
            <div className="rounded-2xl overflow-hidden mb-6" style={{ height: 220, background: "var(--cream)" }}>
              {/* Map placeholder */}
              <div className="w-full h-full flex flex-col items-center justify-center gap-3" style={{ background: "rgba(124,144,112,0.1)" }}>
                <HiLocationMarker size={32} style={{ color: "var(--sage)" }} />
                <div className="text-center px-4">
                  <p className="font-semibold text-sm" style={{ color: "var(--olive)" }}>Roots & Bowls Cafe</p>
                  <p className="text-xs mt-1" style={{ color: "var(--olive-light)" }}>{siteConfig.address}</p>
                </div>
                <a href={`https://maps.google.com/?q=Roots+Bowls+Indiranagar+Bengaluru`} target="_blank" rel="noopener noreferrer"
                  className="px-4 py-1.5 rounded-full text-xs font-semibold text-white"
                  style={{ background: "var(--sage)" }}>
                  Open in Maps
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              {[
                { icon: <HiLocationMarker size={18} />, label: "Address", value: siteConfig.address },
                { icon: <HiPhone size={18} />, label: "Phone / WhatsApp", value: siteConfig.phone },
                { icon: <HiMail size={18} />, label: "Email", value: siteConfig.email },
                { icon: <HiClock size={18} />, label: "Hours", value: `Mon–Fri: ${siteConfig.hours.weekdays}\nSat–Sun: ${siteConfig.hours.weekends}` },
              ].map(({ icon, label, value }) => (
                <div key={label} className="flex gap-3">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                    style={{ background: "rgba(124,144,112,0.1)", color: "var(--sage-dark)" }}>
                    {icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold mb-0.5" style={{ color: "var(--olive-light)" }}>{label}</p>
                    <p className="text-sm whitespace-pre-line" style={{ color: "var(--olive)" }}>{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-xl p-4" style={{ background: "rgba(124,144,112,0.08)" }}>
              <p className="text-sm font-semibold mb-1" style={{ color: "var(--olive)" }}>Delivery Radius</p>
              <p className="text-sm" style={{ color: "var(--olive-light)" }}>{siteConfig.deliveryRadius} — covers Koramangala, HSR Layout, Domlur, Ulsoor, Frazer Town, and Benson Town.</p>
            </div>

            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "var(--sage-dark)" }}>Follow us</p>
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all hover:opacity-80"
                style={{ background: "rgba(193,96,61,0.1)", color: "var(--terracotta)" }}>
                <FaInstagram size={15} /> @rootsandbowls — recipe reels every week
              </a>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            <h2 className="text-xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>Send a Message</h2>
            {submitted ? (
              <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(124,144,112,0.1)" }}>
                <div className="text-4xl mb-3">🌿</div>
                <h3 className="font-bold text-lg mb-2" style={{ color: "var(--olive)" }}>Got it!</h3>
                <p style={{ color: "var(--olive-light)" }}>We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "you@email.com" },
                  { id: "subject", label: "Subject", type: "text", placeholder: "Delivery query / Feedback / Partnership…" },
                ].map(({ id, label, type, placeholder }) => (
                  <div key={id}>
                    <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--olive)" }}>{label}</label>
                    <input type={type} placeholder={placeholder} required
                      value={form[id]} onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                      style={{ borderColor: "var(--sand)", color: "var(--olive)", background: "white" }} />
                  </div>
                ))}
                <div>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--olive)" }}>Message</label>
                  <textarea rows={4} placeholder="Tell us what's on your mind…" required
                    value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none"
                    style={{ borderColor: "var(--sand)", color: "var(--olive)", background: "white" }} />
                </div>
                <button type="submit" className="w-full py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90"
                  style={{ background: "var(--terracotta)" }}>
                  Send Message →
                </button>
              </form>
            )}
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16 border-t" style={{ borderColor: "var(--sand)", background: "var(--cream)" }}>
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold mb-8" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
              Frequently Asked Questions
            </h2>
            {faqs.map((faq) => <FAQItem key={faq.q} q={faq.q} a={faq.a} />)}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}