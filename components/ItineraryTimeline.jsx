"use client";

import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

export default function ItineraryTimeline({ itinerary }) {
  return (
    <div className="relative">
      <div className="absolute left-[27px] top-2 bottom-2 w-px bg-line md:left-[35px]" />
      <div className="space-y-8">
        {itinerary.map((day, i) => (
          <SectionReveal key={day.day} delay={i * 0.05} y={16}>
            <div className="relative flex gap-5 md:gap-7">
              <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-orange bg-base-deep font-mono text-sm text-orange md:h-[70px] md:w-[70px] md:text-base">
                Day {day.day}
              </div>
              <div className="flex-1 rounded-md border border-line bg-surface p-5">
                <h3 className="font-display text-lg uppercase tracking-wide text-parchment md:text-xl">
                  {day.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-sage">{day.detail}</p>
              </div>
            </div>
          </SectionReveal>
        ))}
      </div>
    </div>
  );
}