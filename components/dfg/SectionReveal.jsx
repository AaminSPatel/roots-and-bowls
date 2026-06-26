"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionReveal({
  children,
  className = "",
  delay = 0,
  once = true,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Reduced motion: show immediately.
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setVisible(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) io.disconnect();
        }
      },
      { threshold: 0.15 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: visible ? "none" : "translateY(14px)",
        opacity: visible ? 1 : 0,
        transition: `transform 800ms cubic-bezier(.2,.8,.2,1) ${delay * 1000}ms, opacity 700ms ease ${delay * 1000}ms`,
        willChange: "transform, opacity",
      }}
    >
      {children}
    </div>
  );
}

