"use client";

import { FiUser } from "react-icons/fi";
import { BsQuote } from "react-icons/bs";
/* import SectionReveal from "./SectionReveal";
 */
export default function Testimonials({ testimonials }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.map((t, i) => (
       
          <div className="flex h-full flex-col rounded-md border border-line bg-surface p-6">
            <BsQuote className="text-2xl text-teal/60" />
            <p className="mt-3 flex-1 text-sm leading-relaxed text-parchment/90">
              {t.quote}
            </p>
            <div className="mt-5 flex items-center gap-3 border-t border-line pt-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-base-deep text-sage">
                <FiUser />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-wide text-parchment">{t.name}</p>
                <p className="text-[11px] text-sage">{t.location} · {t.trek}</p>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}