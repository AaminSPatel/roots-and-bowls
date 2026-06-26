"use client";

import { motion } from "framer-motion";
import TopoBackground from "./TopoBackground";
import ElevationLine from "./ElevationLine";

export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-base-deep pb-10 pt-28 md:pt-36">
      <TopoBackground opacity={0.8} />
      <div className="relative mx-auto max-w-5xl px-5 text-center md:px-8">
        {eyebrow && (
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-teal"
          >
            {eyebrow}
          </motion.p>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-4xl uppercase leading-[1.05] tracking-wide text-parchment sm:text-5xl md:text-6xl"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-5 max-w-2xl text-sage"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
      <div className="relative mx-auto mt-6 max-w-5xl px-5 md:px-8">
        <ElevationLine height={80} showMarker={false} strokeColor="var(--color-teal)" />
      </div>
    </section>
  );
}