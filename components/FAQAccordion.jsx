"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FiPlus } from "react-icons/fi";

export default function FAQAccordion({ faqs, title = "Frequently Asked Questions" }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div>
      {title && (
        <h2 className="font-display text-3xl uppercase tracking-wide text-parchment md:text-4xl">
          {title}
        </h2>
      )}
      <div className="mt-6 divide-y divide-line border-y border-line">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q}>
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : i)}
                className="flex w-full items-center justify-between gap-4 py-5 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-display text-base uppercase tracking-wide text-parchment md:text-lg">
                  {item.q}
                </span>
                <motion.span
                  animate={{ rotate: isOpen ? 45 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="shrink-0 text-xl text-orange"
                >
                  <FiPlus />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-5 max-w-2xl text-sm leading-relaxed text-sage">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
}