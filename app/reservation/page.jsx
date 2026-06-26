"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiCalendar, FiClock, FiUsers, FiCheck, FiAlertCircle } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";
import { siteConfig } from "@/lib/siteData";

/* export const metadata = {
  title: "Reservations",
  description: "Reserve your table at Zest & Ember, Bandra West, Mumbai. Lunch, dinner, date night, and private dining.",
}; */

const TIME_SLOTS = {
  lunch: ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM"],
  dinner: ["7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"],
};

// Mock: some slots are "full"
const FULL_SLOTS = ["8:00 PM", "8:30 PM", "12:30 PM"];

const OCCASIONS = [
  "Regular Dining",
  "Birthday Celebration",
  "Date Night",
  "Anniversary",
  "Corporate Lunch / Dinner",
  "Family Gathering",
  "Proposal",
  "Other",
];

function SlotButton({ slot, selected, onSelect }) {
  const isFull = FULL_SLOTS.includes(slot);
  return (
    <button
      onClick={() => !isFull && onSelect(slot)}
      disabled={isFull}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
        isFull
          ? "opacity-30 cursor-not-allowed line-through text-white/30"
          : selected
          ? "text-white"
          : "border border-white/20 text-white/60 hover:border-[#FF4D00] hover:text-white"
      }`}
      style={selected && !isFull ? { background: "linear-gradient(135deg, #FF4D00, #FFB800)" } : {}}
    >
      {slot}
      {isFull && <span className="ml-1 text-xs">(Full)</span>}
    </button>
  );
}

export default function ReservationsPage() {
  const [session, setSession] = useState("dinner");
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [form, setForm] = useState({
    date: "",
    partySize: 2,
    occasion: "",
    dietary: "",
    specialRequests: "",
    name: "",
    phone: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [step, setStep] = useState(1);

  const setField = (key, val) => setForm((p) => ({ ...p, [key]: val }));

  const canProceedStep1 = form.date && selectedSlot;
  const canProceedStep2 = form.occasion;
  const canSubmit = form.name && form.phone && form.email && selectedSlot && form.date;

  const handleSubmit = () => {
    if (!canSubmit) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center px-4" style={{ background: "#1A1A1A" }}>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
            style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
          >
            <FiCheck className="text-white text-3xl" />
          </div>
          <h1
            className="text-4xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Table Reserved!
          </h1>
          <p className="text-white/60 leading-relaxed mb-3">
            Thank you, <strong className="text-white">{form.name}</strong>! Your reservation request for{" "}
            <strong className="text-[#FFB800]">{form.partySize} guests</strong> on{" "}
            <strong className="text-[#FFB800]">{form.date}</strong> at{" "}
            <strong className="text-[#FFB800]">{selectedSlot}</strong> has been received.
          </p>
          <p className="text-white/40 text-sm mb-8">
            We'll confirm via WhatsApp or email within 2 hours. See you at the ember!
          </p>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white transition-all hover:opacity-90"
            style={{ background: "#25D366" }}
          >
            <RiWhatsappLine size={18} /> Chat with us on WhatsApp
          </a>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: "#1A1A1A" }}>
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center py-12">
          <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-3">Book Your Visit</p>
          <h1 className="text-5xl font-black text-white mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Reserve a Table
          </h1>
          <p className="text-white/50">Reservations are strongly recommended, especially on weekends.</p>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center gap-0 mb-10">
          {[1, 2, 3].map((s, i) => (
            <div key={s} className="flex items-center flex-1">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                  step >= s ? "text-white" : "text-white/30"
                }`}
                style={step >= s ? { background: "linear-gradient(135deg, #FF4D00, #FFB800)" } : { background: "#2e2e2e" }}
              >
                {step > s ? <FiCheck size={14} /> : s}
              </div>
              {i < 2 && (
                <div
                  className={`flex-1 h-px transition-all duration-300 ${step > s ? "bg-[#FF4D00]" : "bg-white/10"}`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Date & Time */}
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="rounded-2xl p-6" style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h2 className="text-xl font-bold text-white mb-5 flex items-center gap-2">
                  <FiCalendar className="text-[#FF4D00]" /> Choose Your Date
                </h2>
                <input
                  type="date"
                  value={form.date}
                  min={new Date().toISOString().split("T")[0]}
                  onChange={(e) => { setField("date", e.target.value); setSelectedSlot(null); }}
                  className="w-full bg-[#2e2e2e] border border-white/10 rounded-xl px-4 py-3 text-white text-base focus:outline-none focus:border-[#FF4D00] transition-colors"
                />
              </div>

              <div className="rounded-2xl p-6" style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h2 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                  <FiUsers className="text-[#FF4D00]" /> Party Size
                </h2>
                <p className="text-white/40 text-xs mb-4">For groups over 10, please call us directly.</p>
                <div className="flex gap-2 flex-wrap">
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
                    <button
                      key={n}
                      onClick={() => setField("partySize", n)}
                      className={`w-10 h-10 rounded-full text-sm font-semibold transition-all ${
                        form.partySize === n ? "text-white" : "border border-white/20 text-white/60 hover:border-[#FF4D00]"
                      }`}
                      style={form.partySize === n ? { background: "linear-gradient(135deg, #FF4D00, #FFB800)" } : {}}
                    >
                      {n}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6" style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <FiClock className="text-[#FF4D00]" /> Select Time
                </h2>
                <div className="flex gap-3 mb-4">
                  {["lunch", "dinner"].map((s) => (
                    <button
                      key={s}
                      onClick={() => { setSession(s); setSelectedSlot(null); }}
                      className={`px-4 py-1.5 rounded-full text-sm font-semibold capitalize transition-all ${
                        session === s ? "menu-tab-active" : "menu-tab-inactive"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                {form.date ? (
                  <div className="flex flex-wrap gap-2">
                    {TIME_SLOTS[session].map((slot) => (
                      <SlotButton
                        key={slot}
                        slot={slot}
                        selected={selectedSlot === slot}
                        onSelect={setSelectedSlot}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-white/30 text-sm italic">Select a date first to see available slots.</p>
                )}

                {form.date && (
                  <div className="mt-4 flex items-start gap-2 text-white/40 text-xs">
                    <FiAlertCircle className="shrink-0 mt-0.5" />
                    Slots marked as Full are unavailable on your selected date. Grey-lined slots cannot be selected.
                  </div>
                )}
              </div>

              <button
                onClick={() => canProceedStep1 && setStep(2)}
                disabled={!canProceedStep1}
                className={`w-full py-4 rounded-full font-bold text-white transition-all duration-200 ${
                  canProceedStep1 ? "hover:opacity-90 hover:scale-[1.02]" : "opacity-40 cursor-not-allowed"
                }`}
                style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
              >
                Continue →
              </button>
            </motion.div>
          )}

          {/* Step 2: Occasion */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="rounded-2xl p-6" style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h2 className="text-xl font-bold text-white mb-5">What brings you in?</h2>
                <div className="grid grid-cols-2 gap-2">
                  {OCCASIONS.map((occ) => (
                    <button
                      key={occ}
                      onClick={() => setField("occasion", occ)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium text-left transition-all duration-200 ${
                        form.occasion === occ
                          ? "text-white border-[#FF4D00] border"
                          : "border border-white/10 text-white/60 hover:border-white/30"
                      }`}
                      style={form.occasion === occ ? { background: "rgba(255,77,0,0.12)" } : {}}
                    >
                      {occ}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl p-6" style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h2 className="text-xl font-bold text-white mb-2">Special Requests</h2>
                <p className="text-white/40 text-xs mb-4">Dietary restrictions, allergies, decoration requests, high chairs, etc.</p>
                <div className="mb-4">
                  <label className="text-white/50 text-sm mb-2 block">Dietary requirements</label>
                  <input
                    type="text"
                    value={form.dietary}
                    onChange={(e) => setField("dietary", e.target.value)}
                    placeholder="e.g. vegetarian, nut allergy, gluten-free"
                    className="w-full bg-[#2e2e2e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#FF4D00]"
                  />
                </div>
                <div>
                  <label className="text-white/50 text-sm mb-2 block">Anything else?</label>
                  <textarea
                    value={form.specialRequests}
                    onChange={(e) => setField("specialRequests", e.target.value)}
                    placeholder="Birthday cake, window seat preference, quiet area..."
                    rows={3}
                    className="w-full bg-[#2e2e2e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#FF4D00] resize-none"
                  />
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(1)}
                  className="flex-1 py-4 rounded-full font-semibold text-white/60 border border-white/20 hover:border-white/40 transition-all"
                >
                  ← Back
                </button>
                <button
                  onClick={() => canProceedStep2 && setStep(3)}
                  disabled={!canProceedStep2}
                  className={`flex-1 py-4 rounded-full font-bold text-white transition-all ${
                    canProceedStep2 ? "hover:opacity-90" : "opacity-40 cursor-not-allowed"
                  }`}
                  style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
                >
                  Continue →
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Contact */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Summary */}
              <div
                className="rounded-2xl p-5"
                style={{ background: "rgba(255,77,0,0.08)", border: "1px solid rgba(255,77,0,0.2)" }}
              >
                <p className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest mb-3">Booking Summary</p>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <p className="text-white/40">Date</p>
                    <p className="text-white font-medium">{form.date}</p>
                  </div>
                  <div>
                    <p className="text-white/40">Time</p>
                    <p className="text-white font-medium">{selectedSlot}</p>
                  </div>
                  <div>
                    <p className="text-white/40">Guests</p>
                    <p className="text-white font-medium">{form.partySize}</p>
                  </div>
                  <div>
                    <p className="text-white/40">Occasion</p>
                    <p className="text-white font-medium">{form.occasion}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl p-6 space-y-4" style={{ background: "#1e1e1e", border: "1px solid rgba(255,255,255,0.08)" }}>
                <h2 className="text-xl font-bold text-white mb-2">Your Details</h2>
                {[
                  { key: "name", label: "Full Name", placeholder: "Priya Sharma", type: "text" },
                  { key: "phone", label: "Phone Number", placeholder: "+91 98XXX XXXXX", type: "tel" },
                  { key: "email", label: "Email Address", placeholder: "you@email.com", type: "email" },
                ].map(({ key, label, placeholder, type }) => (
                  <div key={key}>
                    <label className="text-white/50 text-sm mb-1.5 block">{label}</label>
                    <input
                      type={type}
                      value={form[key]}
                      onChange={(e) => setField(key, e.target.value)}
                      placeholder={placeholder}
                      className="w-full bg-[#2e2e2e] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/30 focus:outline-none focus:border-[#FF4D00] transition-colors"
                    />
                  </div>
                ))}
                <p className="text-white/30 text-xs">
                  We'll send a confirmation via WhatsApp and email. Cancellations accepted up to 4 hours before your slot.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={() => setStep(2)}
                  className="flex-1 py-4 rounded-full font-semibold text-white/60 border border-white/20 hover:border-white/40 transition-all"
                >
                  ← Back
                </button>
                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className={`flex-1 py-4 rounded-full font-bold text-white transition-all ${
                    canSubmit ? "hover:opacity-90 hover:scale-[1.02]" : "opacity-40 cursor-not-allowed"
                  }`}
                  style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
                >
                  Confirm Reservation
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* WhatsApp Alternative */}
        <div className="text-center mt-10 pt-8 border-t border-white/10">
          <p className="text-white/40 text-sm mb-3">Prefer to book directly?</p>
          <a
            href={siteConfig.contact.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold text-white transition-all hover:opacity-90 text-sm"
            style={{ background: "#25D366" }}
          >
            <RiWhatsappLine size={16} /> Reserve via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}