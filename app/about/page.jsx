import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingLeaves from "@/components/FloatingLeaves";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";

export const metadata = {
  title: "Our Story",
  description: "Meet Priya and Arjun — the nutritionist and chef duo who set out to fix Bengaluru's broken office food culture. The story of Roots & Bowls.",
};

const timeline = [
  { year: "2021", event: "Priya and Arjun meet at a Bengaluru wellness summit. Both frustrated. Both hungry for change." },
  { year: "2022 Jan", event: "First test kitchen in Arjun's apartment. 11 menu iterations, 40 kg of wasted quinoa, and one clear winner: the Desi Vitality Bowl." },
  { year: "2022 Jun", event: "Roots & Bowls opens at Indiranagar. Launch week fully sold out. 200-bowl waitlist on day three." },
  { year: "2023", event: "Launched meal prep subscription. Onboarded first 100 farm partners. Reached 200 daily bowls." },
  { year: "2024", event: "500+ weekly subscribers. Expanded catering to corporate wellness events. Zero preservatives, zero shortcuts." },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 overflow-hidden watercolor-overlay"
          style={{ background: "linear-gradient(160deg, #EEF2EA 0%, #F4F0E8 100%)" }}>
          <FloatingLeaves count={4} />
          <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>Our Story</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-5" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
              We Built the Cafe<br />We Wished Existed
            </h1>
            <p className="text-lg leading-relaxed" style={{ color: "var(--olive-light)" }}>
              Two people. One shared frustration. A city full of people trying to eat well with nowhere good to go.
            </p>
          </div>
        </section>

        {/* Founders */}
        <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=1200&q=80" alt="Priya Nair, Co-founder"
                className="rounded-2xl w-full object-cover aspect-[4/5]" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>Co-Founder</span>
              <h2 className="text-3xl font-bold mt-2 mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>Priya Nair</h2>
              <p className="text-sm font-medium mb-4" style={{ color: "var(--terracotta)" }}>Clinical Nutritionist, IHN Bengaluru · 12 years practice</p>
              <div className="text-base leading-loose space-y-4" style={{ color: "var(--olive-light)" }}>
                <p>Priya spent a decade advising corporate Bengaluru on nutrition — and spent a decade watching those same clients walk out of her clinic and into a food court with zero healthy options. She'd recommend quinoa bowls, and they'd end up eating paneer butter masala from the office canteen because there was nothing else.</p>
                <p>The gap between what she prescribed and what was available wasn't a willpower problem. It was an infrastructure problem. Bengaluru, despite having one of India's most health-aware populations, had essentially no daily-use healthy dining option that was also genuinely delicious.</p>
                <p>Priya designed the nutritional architecture of every Roots & Bowls offering — macro targets, ingredient combinations for bioavailability, the careful ratio of complex carbs to protein that keeps energy steady through an eight-hour work day. Every item on the menu is something she'd prescribe to a client.</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <img src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1200&q=80" alt="Arjun Sharma, Co-founder"
                className="rounded-2xl w-full object-cover aspect-[4/5]" />
            </div>
            <div className="md:order-1">
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>Co-Founder</span>
              <h2 className="text-3xl font-bold mt-2 mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>Arjun Sharma</h2>
              <p className="text-sm font-medium mb-4" style={{ color: "var(--terracotta)" }}>Chef · Culinary Arts, IHM Chennai · Plant-Based Specialist</p>
              <div className="text-base leading-loose space-y-4" style={{ color: "var(--olive-light)" }}>
                <p>Arjun trained at IHM Chennai and then spent three years cooking for private wellness clients — athletes, executives, new mothers — before growing tired of the limited reach. Good food, he believed, shouldn't be a luxury for people who could afford a private chef.</p>
                <p>His culinary philosophy is simple: healthy food that doesn't taste healthy. The Desi Vitality Bowl, the Green Machine juice, the Coconut Mango Mousse — every recipe went through a brutal test: would he be happy eating this every week? If the answer was anything less than yes, it didn't make the menu.</p>
                <p>Arjun sources directly where possible, drives to farms, argues about tomato ripeness, and once rejected an entire shipment of avocados because they weren't from Coorg. He is, by most accounts, extremely difficult to work with in the best possible way.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-20" style={{ background: "var(--cream)" }}>
          <div className="max-w-2xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>How We Got Here</h2>
            </div>
            <div className="relative">
              <div className="absolute left-16 top-0 bottom-0 w-px" style={{ background: "var(--sand)" }}></div>
              <ul className="flex flex-col gap-8">
                {timeline.map((t) => (
                  <li key={t.year} className="flex gap-6 items-start">
                    <div className="w-16 shrink-0 text-right text-xs font-bold pt-0.5" style={{ color: "var(--terracotta)" }}>{t.year}</div>
                    <div className="w-3 h-3 rounded-full shrink-0 mt-1 relative z-10" style={{ background: "var(--sage)", border: "2px solid var(--warm-white)" }}></div>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--olive-light)" }}>{t.event}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Sourcing */}
        <section className="py-20 px-4 sm:px-6 max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "var(--sage-dark)" }}>Farm-to-Bowl</span>
              <h2 className="text-3xl font-bold mt-2 mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }}>
                We Know Where Every Ingredient Comes From
              </h2>
              <div className="text-base leading-loose space-y-4" style={{ color: "var(--olive-light)" }}>
                <p>Not because it's a marketing line, but because we've been there. We visit farms. We know the cooperative heads by name. We've seen the fields where our millets grow and the orchards where our avocados ripen.</p>
                <p>Our sourcing map: heritage millets from the Karnataka Farmers Collective (60+ smallholder farmers near Dharwad), vine tomatoes from Hesaraghatta, avocados from Coorg, organic lentils from Madhya Pradesh, seasonal fruits from local mandis, certified organic quinoa from Rajasthan.</p>
                <p>We pay above-market prices to our farm partners because we've seen what below-market pricing does to agricultural communities. And because food that comes from a place of care tastes different. You can taste the difference.</p>
              </div>
            </div>
            <div>
              <img src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&q=80" alt="Farm sourcing"
                className="rounded-2xl w-full object-cover aspect-[4/3]" />
            </div>
          </div>
        </section>

        {/* Community */}
        <section className="py-20 text-white" style={{ background: "var(--olive)" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)" }}>Community Nutrition Initiatives</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-left">
              {[
                { title: "School Nutrition Workshops", desc: "Monthly sessions at government schools in East Bengaluru on reading food labels, understanding macros, and cooking simple healthy meals." },
                { title: "Subsidised Meal Subscription", desc: "We offer 20% discounted meal prep plans for full-time caregivers and new mothers through our Community Health Partner programme." },
                { title: "Chef Internships", desc: "Partnering with culinary schools to offer paid internships focused on plant-based cooking — the discipline most curricula ignore." },
              ].map((c) => (
                <div key={c.title} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.07)" }}>
                  <h3 className="font-semibold mb-2" style={{ fontFamily: "var(--font-display)" }}>{c.title}</h3>
                  <p className="text-sm leading-relaxed opacity-75">{c.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold border border-white/30 transition-all hover:bg-white/10">
              Partner with us <HiArrowRight />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}