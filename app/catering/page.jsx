'use client';
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HiCheckCircle } from "react-icons/hi";

const cateringPackages = [
  {
    name: "Office Lunch Catering",
    minOrder: "15 people",
    priceFrom: "₹320/person",
    icon: "🏢",
    highlights: ["Signature Bowl stations", "Cold-press juice bar", "Dietary labels on all items", "Setup & cleanup included"],
  },
  {
    name: "Wellness Event Catering",
    minOrder: "30 people",
    priceFrom: "₹450/person",
    icon: "🧘",
    highlights: ["Curated healthy snack stations", "Post-yoga refuel bowls", "Smoothie & juice counter", "Nutritionist consultation add-on"],
  },
  {
    name: "Corporate Wellness Retreat",
    minOrder: "50 people",
    priceFrom: "Custom quote",
    icon: "🌿",
    highlights: ["Full-day meal planning", "Morning detox shots", "Macro-balanced lunch & dinner", "On-site chef staffing"],
  },
];

export default function CateringPage() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", eventDate: "", guestCount: "", eventType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-28 pb-16 text-center watercolor-overlay"
          style={{ background: "linear-gradient(160deg, #EEF2EA 0%, #F4F0E8 100%)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>Catering</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
              Feed Your Team<br />Like You Mean It
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--olive-light)" }}>
              Corporate catering, wellness events, fitness retreats. Real food for groups of 15 to 500+.
            </p>
          </div>
        </section>

        {/* Long copy */}
        <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 text-base leading-loose space-y-4" style={{ color: "var(--olive-light)" }}>
          <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>Why Healthy Catering Is a Business Decision</h2>
          <p>The evidence on workplace nutrition and productivity is extensive. Employees who eat nutritious lunches report 25% higher focus scores in afternoon work sessions compared to those who eat high-sugar or high-fat meals. Catering meetings, offsites, and events with genuinely healthy food isn't a wellness perk — it's a performance investment.</p>
          <p>Bengaluru's corporate catering options have historically forced a compromise: either expensive hotel food that's heavy and dulling, or cheap canteen fare that's nutritionally hollow. Roots & Bowls exists in neither category. We bring farm-fresh ingredients, chef-prepared bowls, and cold-press juice bars to your office or event at prices that make sense for recurring bookings.</p>
          <p>Our corporate clients include fintech startups, wellness-forward MNCs, co-working spaces, and hospital staff cafeterias. We've catered product launches, quarterly business reviews, team fitness days, and offsites at resorts across Karnataka.</p>
          <p>Every catering order includes full allergen labelling on each dish, a dietary breakdown, and the option to accommodate vegan, gluten-free, dairy-free, and Jain dietary requirements within the same spread. Your team members with dietary needs deserve to eat the same quality food as everyone else.</p>
          <p>Minimum order for office catering is 15 people. For wellness retreats and multi-day events, we create custom packages. Reach out with your event details and we'll respond within 12 hours with a quote.</p>
        </section>

        {/* Packages */}
        <section className="py-16" style={{ background: "var(--cream)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-center mb-10" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
              Catering Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {cateringPackages.map((pkg) => (
                <div key={pkg.name} className="rounded-2xl p-6 bg-white" style={{ boxShadow: "0 4px 20px rgba(44,59,42,0.07)" }}>
                  <div className="text-3xl mb-3">{pkg.icon}</div>
                  <h3 className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>{pkg.name}</h3>
                  <p className="text-xs mb-1" style={{ color: "var(--olive-light)" }}>Min: {pkg.minOrder}</p>
                  <p className="font-bold mb-4" style={{ color: "var(--terracotta)" }}>From {pkg.priceFrom}</p>
                  <ul className="flex flex-col gap-2">
                    {pkg.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm" style={{ color: "var(--olive-light)" }}>
                        <HiCheckCircle className="shrink-0 mt-0.5" style={{ color: "var(--sage)" }} size={14} /> {h}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enquiry Form */}
        <section className="py-16 max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-2 text-center" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
            Get a Quote
          </h2>
          <p className="text-sm text-center mb-8" style={{ color: "var(--olive-light)" }}>We'll respond within 12 hours.</p>
          {submitted ? (
            <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(124,144,112,0.1)" }}>
              <div className="text-4xl mb-3">🍃</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--olive)" }}>Enquiry received!</h3>
              <p style={{ color: "var(--olive-light)" }}>Our catering team will reach out to you within 12 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              {[
                { id: "name", label: "Your Name", type: "text", placeholder: "Vikram Iyer" },
                { id: "company", label: "Company / Organisation", type: "text", placeholder: "Acme Startup Pvt Ltd" },
                { id: "email", label: "Email", type: "email", placeholder: "vikram@acme.io" },
                { id: "phone", label: "Phone", type: "tel", placeholder: "+91 98765 43210" },
                { id: "eventDate", label: "Event Date", type: "date" },
                { id: "guestCount", label: "Number of Guests", type: "number", placeholder: "40" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--olive)" }}>{label}</label>
                  <input type={type} placeholder={placeholder} required
                    value={form[id]}
                    onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                    style={{ borderColor: "var(--sand)", color: "var(--olive)", background: "white" }} />
                </div>
              ))}
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--olive)" }}>Event Type</label>
                <select value={form.eventType} onChange={(e) => setForm((f) => ({ ...f, eventType: e.target.value }))} required
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none"
                  style={{ borderColor: "var(--sand)", color: "var(--olive)", background: "white" }}>
                  <option value="">Select type…</option>
                  <option>Office Lunch / Team Meal</option>
                  <option>Corporate Offsite</option>
                  <option>Wellness / Fitness Event</option>
                  <option>Product Launch / Conference</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--olive)" }}>Additional Notes</label>
                <textarea rows={3} placeholder="Dietary requirements, menu preferences, venue location…"
                  value={form.message} onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none"
                  style={{ borderColor: "var(--sand)", color: "var(--olive)", background: "white" }} />
              </div>
              <button type="submit" className="w-full py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 mt-1"
                style={{ background: "var(--terracotta)" }}>
                Send Catering Enquiry →
              </button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}