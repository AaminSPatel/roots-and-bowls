"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import TrekCard from "../MacroBar";

const DIFFICULTIES = ["All", "Easy", "Moderate", "Difficult"];
const TYPES = ["All", "Trek", "Expedition", "Camping"];

export default function PackageExplorer({ packages }) {
  const [difficulty, setDifficulty] = useState("All");
  const [type, setType] = useState("All");

  const filtered = useMemo(() => {
    return packages.filter(
      (p) =>
        (difficulty === "All" || p.difficulty === difficulty) &&
        (type === "All" || p.type === type)
    );
  }, [packages, difficulty, type]);

  return (
    <div>
      <div className="flex flex-col gap-5 border-b border-line pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">Filter by difficulty</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {DIFFICULTIES.map((d) => (
              <button
                key={d}
                onClick={() => setDifficulty(d)}
                className={`rounded-sm border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  difficulty === d
                    ? "border-orange bg-orange text-base-deep"
                    : "border-line text-sage hover:border-orange/50 hover:text-parchment"
                }`}
              >
                {d}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-teal">Filter by type</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`rounded-sm border px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                  type === t
                    ? "border-teal bg-teal text-base-deep"
                    : "border-line text-sage hover:border-teal/50 hover:text-parchment"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="mt-5 font-mono text-xs text-sage">
        Showing {filtered.length} of {packages.length} adventures
      </p>

      <motion.div layout className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((pkg) => (
            <motion.div
              key={pkg.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <TrekCard pkg={pkg} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="mt-10 rounded-md border border-dashed border-line py-16 text-center">
          <p className="font-display text-xl uppercase tracking-wide text-sage">
            No adventures match that combination
          </p>
          <p className="mt-2 text-sm text-sage">Try a different difficulty or type filter.</p>
        </div>
      )}
    </div>
  );
}