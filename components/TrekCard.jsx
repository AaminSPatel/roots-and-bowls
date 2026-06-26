"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { FiArrowUpRight, FiTrendingUp, FiMapPin } from "react-icons/fi";
/* import ScenicPlaceholder from "./ScenicPlaceholder";
 */import DifficultyBadge from "./DifficultyBadge";
import { destinations } from "@/lib/siteData";

export default function TrekCard({ pkg }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]), { stiffness: 200, damping: 20 });

  const destination = destinations.find((d) => d.slug === pkg.destinationSlug);

  function handleMouseMove(e) {
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className="group relative"
    >
      <Link
        href={`/packages/${pkg.slug}`}
        className="block overflow-hidden rounded-md border border-line bg-surface transition-colors hover:border-teal/50"
      >
        <div className="relative h-44">
          {destination?.image ? (
            <img
              src={destination.image}
              alt={destination.name}
              className="h-full w-full object-cover"
              style={{ position: "absolute", inset: 0 }}
            />
          ) : null}
          <div className="absolute left-3 top-3">

            <DifficultyBadge level={pkg.difficulty} />
          </div>
          <div className="absolute right-3 top-3 rounded-sm bg-base-deep/80 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-sage backdrop-blur-sm">
            {pkg.type}
          </div>
        </div>

        <div className="p-5" style={{ transform: "translateZ(20px)" }}>
          <h3 className="font-display text-xl uppercase tracking-wide text-parchment group-hover:text-teal transition-colors">
            {pkg.name}
          </h3>
          <p className="mt-1 flex items-center gap-1.5 text-xs text-sage">
            <FiMapPin className="shrink-0" /> {destination?.name}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-sage line-clamp-2">
            {pkg.shortDescription}
          </p>

          <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
            <div className="flex items-center gap-3 font-mono text-xs text-sage">
              <span className="flex items-center gap-1">
                <FiTrendingUp className="text-orange" /> {pkg.altitude}
              </span>
              <span className="text-line">·</span>
              <span>{pkg.duration}</span>
            </div>
            <span className="flex items-center gap-1 font-mono text-sm text-parchment">
              ₹{pkg.price.toLocaleString("en-IN")}
              <FiArrowUpRight className="text-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}