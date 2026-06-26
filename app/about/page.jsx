"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

/* export const metadata = {
  title: "Our Story",
  description:
    "How two friends decided to change Mumbai's dining scene. The story of Zest & Ember — farm-to-flame philosophy, fire, and fusion.",
}; */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-24" style={{ background: "#1A1A1A" }}>
      {/* ── HERO ── */}
      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 50% 0%, rgba(255,77,0,0.20) 0%, transparent 60%), #1A1A1A",
          }}
        />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <motion.div {...fadeUp}>
            <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-4">Our Story</p>
            <h1
              className="text-5xl sm:text-7xl font-black text-white leading-none mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Born from
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #FF4D00, #FFB800)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                a Quiet City
              </span>
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mx-auto">
              A pandemic. Two old friends. One stubborn idea: that Mumbai deserved a restaurant without compromises.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FULL-BLEED IMAGE ── */}
      <div className="relative h-72 sm:h-96 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&q=80"
          alt="Zest & Ember interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-transparent to-[#1A1A1A]" />
      </div>

      {/* ── ORIGIN STORY ── */}
      <section className="py-20 px-4 sm:px-6 max-w-3xl mx-auto">
        <motion.div {...fadeUp} className="space-y-6 text-white/70 leading-relaxed text-base sm:text-lg">
          <h2
            className="text-3xl sm:text-4xl font-black text-white mb-8"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Year the City Went Quiet
          </h2>
          <p>
            April 2020. Mumbai was under lockdown, and Chef Aryan Kapoor was sitting in his one-bedroom flat in Bandra, rewatching episodes of Chef's Table and feeling a particular kind of professional grief. He had just returned from a stage at a three-star restaurant in Kyoto, notebooks full of ideas, palate recalibrated, spirit renewed — only to land in a city that had suddenly forgotten what restaurants were for.
          </p>
          <p>
            His childhood friend Meera Nair was in a different kind of frustration. A sommelier who had pivoted into hospitality consulting, she had spent five years helping restaurants in Delhi, Bengaluru, and Mumbai become more thoughtful — better wine lists, more coherent cuisine narratives, staff who understood what they were serving and why. She watched those restaurants shut overnight and felt the loss of something she hadn't realised she'd been building toward.
          </p>
          <p>
            The phone call that started everything happened at 11 PM on a Tuesday in May 2020. Aryan called Meera to ask a question he said he'd been afraid to ask anyone: "What if we stopped consulting other people's restaurants and just made the one we've always wanted?" Meera said yes before he finished the sentence.
          </p>
          <p>
            What followed was eighteen months of the most productive and difficult work either of them had done. Recipe testing happened in Aryan's kitchen and on borrowed equipment. The menu went through eleven full revisions. They visited farms in Nashik, Karjat, and the Konkan coast. They flew to Barcelona to tour the Josper factory and came back with a deposit paid on the oven that would become the restaurant's signature.
          </p>
          <p>
            The space on Linking Road — a shuttered textile warehouse with 18-foot ceilings and the ghost of a bygone Bandra — was found through a mutual friend in October 2021. The renovation took fourteen months and cost more than they had planned. But what emerged was exactly what they had imagined: dark, warm, theatrical, and very, very Mumbai.
          </p>
          <p>
            Zest & Ember opened on a Wednesday evening in March 2022, with a queue of sixty people who had been following their journey on Instagram. Every table was full. The first batch of Ember Negronis sold out by 9 PM. Aryan's Szechuan sea bass made a food writer from Condé Nast Traveller put down her pen and just eat. That night, they knew they had built something real.
          </p>
        </motion.div>
      </section>

      {/* ── FARM TO FLAME ── */}
      <section className="py-20" style={{ background: "#111" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div {...fadeUp}>
              <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-3">Sourcing Philosophy</p>
              <h2
                className="text-3xl sm:text-4xl font-black text-white mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Farm to Flame
              </h2>
              <div className="space-y-5 text-white/65 leading-relaxed">
                <p>
                  We visit every farm we source from. It's not a marketing statement — it's a practical one. When Aryan knows a farmer's name and can picture the soil his tomatoes grew in, the food he cooks is different. It's more accountable. It matters in a different way.
                </p>
                <p>
                  Our vegetables and herbs come from three organic farms in Nashik and Pune, all within a 200km radius. Our fish arrives daily from Sassoon Docks, selected each morning by our sous-chef. The lamb and pork we use is traceable to specific farms in Karjat. The herbs we can't buy we grow ourselves — on a small rooftop terrace above the kitchen that has become its own kind of obsession for the team.
                </p>
                <p>
                  We are not precious about this. We don't put farm names on the menu like trophies. We do it because the food tastes better, because it's better for the ecosystem we're part of, and because we want the people who grow our food to be able to sustain their work.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { number: "200km", label: "Sourcing radius" },
                  { number: "3", label: "Partner farms" },
                  { number: "Daily", label: "Fresh fish delivery" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-4 rounded-xl" style={{ background: "#1A1A1A" }}>
                    <p
                      className="text-2xl font-black"
                      style={{
                        background: "linear-gradient(135deg, #FF4D00, #FFB800)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      {s.number}
                    </p>
                    <p className="text-white/50 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=800&q=80"
                alt="Farm fresh ingredients"
                className="rounded-2xl w-full h-80 object-cover"
              />
              <div className="absolute -bottom-6 -right-4 rounded-2xl overflow-hidden w-48 h-48 border-4 border-[#1A1A1A]">
                <img
                  src="https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=400&q=80"
                  alt="Josper oven"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CHEF BIO ── */}
      <section className="py-20 px-4 sm:px-6 max-w-7xl mx-auto">
        <motion.div {...fadeUp} className="text-center mb-12">
          <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-3">The People</p>
          <h2 className="text-4xl font-black text-white" style={{ fontFamily: "'Playfair Display', serif" }}>
            The Team Behind the Fire
          </h2>
        </motion.div>

        {/* Head Chef */}
        <motion.div
          {...fadeUp}
          className="rounded-3xl overflow-hidden mb-8"
          style={{ background: "#242424" }}
        >
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-2 h-72 lg:h-auto">
              <img
                src="https://images.unsplash.com/photo-1587564504116-c0e13f1b4e45?w=800&q=80"
                alt="Chef Aryan Kapoor"
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="lg:col-span-3 p-8 lg:p-12">
              <span className="text-[#FF4D00] text-xs font-bold uppercase tracking-widest">Head Chef & Co-Founder</span>
              <h3
                className="text-3xl font-black text-white mt-2 mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Chef Aryan Kapoor
              </h3>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Aryan grew up in Colaba in a family where Sunday meals were serious business — his mother a home cook of extraordinary instinct, his father a man who drove an hour to find a specific fishmonger. Food, for him, was never casual.
                </p>
                <p>
                  He trained at the Culinary Institute of America before staging at Le Bernardin in New York, Narisawa in Tokyo, and Mirazur in Menton. Each experience left a mark: the precision of French technique, the Japanese obsession with seasonality and restraint, the Mediterranean ease with simplicity. He brought all of it back to Mumbai, filtered through the specific lens of having grown up eating here.
                </p>
                <p>
                  His cooking philosophy is simple enough to state and difficult enough to execute: make the best possible version of a dish, using the best possible local ingredients, with the most respectful and interesting technique available. Don't add more. Remove everything that doesn't serve the dish.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bar Manager */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden"
          style={{ background: "#242424" }}
        >
          <div className="grid lg:grid-cols-5">
            <div className="lg:col-span-3 p-8 lg:p-12 order-2 lg:order-1">
              <span className="text-[#FFB800] text-xs font-bold uppercase tracking-widest">Bar Manager</span>
              <h3
                className="text-3xl font-black text-white mt-2 mb-5"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Rohan Shetty
              </h3>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Rohan has been shaking things up in Mumbai's cocktail scene since 2016, when he returned from two years bartending in Melbourne with a distrust of conventional cocktail menus and a fascination with fermentation. He has since built bar programmes at three of Mumbai's most celebrated restaurants and consulted for a craft spirits brand based in Goa.
                </p>
                <p>
                  At Zest & Ember, his brief was simple: build a bar that is as thoughtful as the kitchen. The result is a cocktail menu that thinks in flavour systems rather than classics — a Negroni riff that uses cedar smoke and house bitter orange amaro, a Bandra Sour that reaches for tamarind shrub and activated charcoal ice.
                </p>
                <p>
                  Every syrup, shrub, and tonic is made in-house. The non-alcoholic programme receives the same attention as the full bar. Rohan's goal is simple: a guest should be able to drink all evening at Zest & Ember and feel like they've had an experience, not just alcohol.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2 h-72 lg:h-auto order-1 lg:order-2">
              <img
                src="https://images.unsplash.com/photo-1560512823-829485b8bf24?w=800&q=80"
                alt="Rohan Shetty, Bar Manager"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 text-center px-4 sm:px-6" style={{ background: "#111" }}>
        <motion.div {...fadeUp}>
          <p className="text-white/60 mb-2">You know the story. Now taste it.</p>
          <h2 className="text-3xl font-black text-white mb-8" style={{ fontFamily: "'Playfair Display', serif" }}>
            Come Join Our Table
          </h2>
          <Link
            href="/reservations"
            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-white font-bold hover:opacity-90 hover:scale-105 transition-all"
            style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
          >
            Reserve Now <FiArrowRight />
          </Link>
        </motion.div>
      </section>
    </div>
  );
}