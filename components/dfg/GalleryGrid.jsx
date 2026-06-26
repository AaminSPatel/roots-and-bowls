"use client";

import { motion } from "framer-motion";

export default function GalleryGrid({ items, tone, packageName }) {
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {items.map((item, i) => (
        <motion.div
          key={item + i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.4 }}
          className={`overflow-hidden rounded-md border border-line ${i === 0 ? "col-span-2 row-span-2 h-64 md:h-full" : "h-28 md:h-40"}`}
        >
          <img
            src={item}
            alt={`${packageName} — ${item}`}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
            onError={(e) => {
              // Hide broken images but keep layout
              e.currentTarget.style.display = "none";
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}