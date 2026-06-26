'use client';
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLeaves from "@/components/FloatingLeaves";
import { mealPlans } from "@/lib/siteData";
import { HiCheckCircle } from "react-icons/hi";
import { FaLeaf } from "react-icons/fa";

export default function MealPrepPage() {
  const [selectedPlan, setSelectedPlan] = useState(mealPlans[1].id);
  const [form, setForm] = useState({ name: "", phone: "", address: "", startDate: "", plan: mealPlans[1].id });
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
        <section className="relative pt-28 pb-16 overflow-hidden watercolor-overlay"
          style={{ background: "linear-gradient(160deg, #EEF2EA 0%, #F4F0E8 100%)" }}>
          <FloatingLeaves count={4} />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>Weekly Subscription</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
              Never Wonder<br />"What's for Lunch?" Again.
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--olive-light)" }}>
              Subscribe to a weekly meal prep plan. We cook, pack, and deliver. You just eat.
            </p>
          </div>
        </section>

        {/* Benefits text */}
        <section className="py-16 max-w-3xl mx-auto px-4 sm:px-6 text-base leading-loose space-y-4" style={{ color: "var(--olive-light)" }}>
          <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>Why Meal Prep Changes Everything</h2>
          <p>The research is unambiguous: people who plan their meals in advance eat significantly healthier than those who decide in the moment. But traditional meal prep — spending four hours every Sunday prepping, cooking, and portioning — is simply not realistic for most people with demanding careers and full lives.</p>
          <p>Roots & Bowls takes that entire burden off your plate (pun intended). We source the ingredients, prep the components, assemble the bowls, and deliver them to your door on a schedule that works for you. Every meal arrives with its macros labelled, its ingredients sourced, and its allergens flagged.</p>
          <p>Our subscribers report three consistent outcomes: they spend less money on impulse food orders, they have more consistent energy through the workday, and they stop making bad food decisions when tired and hungry at 8 PM. Infrastructure beats willpower every time.</p>
          <p>The Fitness Plan takes this further with custom macro targets set in consultation with our nutritionist. Whether you're building muscle, managing weight, or simply trying to eat more protein, we dial in the numbers and deliver accordingly.</p>
          <p>Subscriptions are flexible. Pause for up to four weeks when you travel. Cancel anytime with 48 hours notice. No lock-in, no hidden charges, no guilt. We want you here because the food is good, not because you can't leave.</p>
        </section>

        {/* Plans */}
        <section className="py-16" style={{ background: "var(--cream)" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-center mb-10" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
              Choose Your Plan
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mealPlans.map((plan) => (
                <div
                  key={plan.id}
                  onClick={() => { setSelectedPlan(plan.id); setForm((f) => ({ ...f, plan: plan.id })); }}
                  className="rounded-2xl p-6 cursor-pointer transition-all duration-200 relative"
                  style={{
                    background: selectedPlan === plan.id ? plan.colour : "white",
                    color: selectedPlan === plan.id ? "white" : "var(--olive)",
                    boxShadow: selectedPlan === plan.id ? `0 8px 32px ${plan.colour}40` : "0 4px 20px rgba(44,59,42,0.07)",
                    transform: selectedPlan === plan.id ? "translateY(-4px)" : "none",
                  }}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold"
                      style={{ background: "var(--terracotta)", color: "white" }}>Most Popular</div>
                  )}
                  <h3 className="font-bold text-xl mb-1" style={{ fontFamily: "var(--font-display)" }}>{plan.name}</h3>
                  <p className="text-sm mb-4 opacity-80">{plan.tagline}</p>
                  <div className="text-3xl font-black mb-1">₹{plan.price}<span className="text-sm font-normal opacity-70">/week</span></div>
                  <div className="text-xs mb-5 opacity-70">₹{plan.perMeal}/meal · {plan.meals} meals/week</div>
                  <ul className="flex flex-col gap-2">
                    {plan.includes.map((inc) => (
                      <li key={inc} className="flex items-start gap-2 text-sm">
                        <HiCheckCircle className="shrink-0 mt-0.5" size={15} style={{ opacity: 0.9 }} />
                        {inc}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Subscription Form */}
        <section className="py-16 max-w-xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-8 text-center" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
            Start Your Subscription
          </h2>
          {submitted ? (
            <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(124,144,112,0.1)" }}>
              <div className="text-4xl mb-3">🌿</div>
              <h3 className="text-xl font-bold mb-2" style={{ color: "var(--olive)" }}>You're in!</h3>
              <p style={{ color: "var(--olive-light)" }}>We'll call you within 24 hours to confirm your plan and first delivery slot.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="rounded-xl p-3 text-sm font-medium" style={{ background: "rgba(124,144,112,0.1)", color: "var(--sage-dark)" }}>
                Selected: {mealPlans.find((p) => p.id === form.plan)?.name} — ₹{mealPlans.find((p) => p.id === form.plan)?.price}/week
              </div>
              {[
                { id: "name", label: "Full Name", type: "text", placeholder: "Priya Reddy" },
                { id: "phone", label: "WhatsApp Number", type: "tel", placeholder: "+91 98765 43210" },
                { id: "address", label: "Delivery Address", type: "text", placeholder: "Flat 4B, 12th Cross, Indiranagar..." },
                { id: "startDate", label: "Preferred Start Date", type: "date" },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label className="block text-sm font-medium mb-1.5" style={{ color: "var(--olive)" }}>{label}</label>
                  <input
                    type={type}
                    placeholder={placeholder}
                    required
                    value={form[id]}
                    onChange={(e) => setForm((f) => ({ ...f, [id]: e.target.value }))}
                    className="w-full px-4 py-3 rounded-xl border text-sm transition-all outline-none"
                    style={{ borderColor: "var(--sand)", color: "var(--olive)", background: "white" }}
                  />
                </div>
              ))}
              <button type="submit" className="w-full py-3.5 rounded-xl font-semibold text-white transition-all hover:opacity-90 mt-2"
                style={{ background: "var(--terracotta)" }}>
                Start My Meal Prep Plan →
              </button>
              <p className="text-xs text-center" style={{ color: "var(--olive-light)" }}>No payment now. We'll confirm details and billing over WhatsApp.</p>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}