"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

function Counter({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        setDisplay(Math.floor(v));
      },
    });
    return () => controls.stop();
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl text-parchment md:text-5xl">
      {display.toLocaleString("en-IN")}
      <span className="text-orange">{suffix}</span>
    </span>
  );
}

export default function StatsCounter({ stats }) {
  return (
    <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-6">
      {stats.map((s, i) => (
        <motion.div
          key={s.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="border-l-2 border-teal/40 pl-4"
        >
          <Counter value={s.value} suffix={s.suffix} />
          <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.15em] text-sage">
            {s.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}