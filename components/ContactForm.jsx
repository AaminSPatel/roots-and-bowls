"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiSend } from "react-icons/fi";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-md border border-teal/40 bg-surface p-8 text-center"
      >
        <FiCheckCircle className="mx-auto text-3xl text-teal" />
        <h3 className="mt-3 font-display text-xl uppercase tracking-wide text-parchment">
          Message Sent
        </h3>
        <p className="mt-2 text-sm text-sage">
          Our basecamp team replies within one business day. For active expedition emergencies,
          use the 24x7 helpline instead.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-xs text-sage">Name</label>
          <input
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Your name"
            className="mt-2 w-full rounded-sm border border-line bg-base-deep px-4 py-3 text-sm text-parchment placeholder:text-sage/40 outline-none focus:border-teal"
          />
        </div>
        <div>
          <label className="text-xs text-sage">Email</label>
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@email.com"
            className="mt-2 w-full rounded-sm border border-line bg-base-deep px-4 py-3 text-sm text-parchment placeholder:text-sage/40 outline-none focus:border-teal"
          />
        </div>
      </div>
      <div>
        <label className="text-xs text-sage">Subject</label>
        <input
          required
          value={form.subject}
          onChange={(e) => update("subject", e.target.value)}
          placeholder="Trip query, partnership, press..."
          className="mt-2 w-full rounded-sm border border-line bg-base-deep px-4 py-3 text-sm text-parchment placeholder:text-sage/40 outline-none focus:border-teal"
        />
      </div>
      <div>
        <label className="text-xs text-sage">Message</label>
        <textarea
          required
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us what you're planning..."
          className="mt-2 w-full rounded-sm border border-line bg-base-deep px-4 py-3 text-sm text-parchment placeholder:text-sage/40 outline-none focus:border-teal"
        />
      </div>
      <button
        type="submit"
        className="flex items-center gap-2 rounded-sm bg-orange px-7 py-3.5 font-mono text-sm uppercase tracking-[0.15em] text-base-deep transition-transform hover:-translate-y-0.5"
      >
        Send Message <FiSend />
      </button>
    </form>
  );
}