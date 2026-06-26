import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function CTASection({
  eyebrow = "Ready When You Are",
  title = "Your next summit is waiting.",
  subtitle = "Pick a batch date, tell us your fitness level, and let our guides handle the rest.",
  ctaLabel = "Start Booking",
  ctaHref = "/booking",
}) {
  return (
    <section className="relative overflow-hidden border-y border-line bg-surface py-20">
    
      <div className="relative mx-auto max-w-4xl px-5 text-center md:px-8">
       
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-teal">{eyebrow}</p>
          <h2 className="mt-4 font-display text-3xl uppercase tracking-wide text-parchment md:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sage">{subtitle}</p>
          <Link
            href={ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-sm bg-orange px-7 py-3.5 font-mono text-sm uppercase tracking-[0.15em] text-base-deep transition-transform hover:-translate-y-0.5"
          >
            {ctaLabel} <FiArrowRight />
          </Link>
      </div>
    </section>
  );
}