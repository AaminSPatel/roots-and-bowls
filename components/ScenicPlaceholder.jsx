"use client";

import React from "react";

/**
 * Lightweight, deterministic image placeholder.
 * Used in cards/grids while real image pipeline is not wired.
 */
export default function ScenicPlaceholder({
  tone = "teal",
  label = "",
  compact = false,
  className = "",
}) {
  const palettes = {
    teal: {
      a: "rgba(45, 212, 191, 0.35)",
      b: "rgba(255, 106, 53, 0.22)",
      c: "rgba(243, 239, 227, 0.12)",
    },
    orange: {
      a: "rgba(255, 106, 53, 0.30)",
      b: "rgba(45, 212, 191, 0.18)",
      c: "rgba(243, 239, 227, 0.10)",
    },
    default: {
      a: "rgba(45, 212, 191, 0.25)",
      b: "rgba(255, 106, 53, 0.18)",
      c: "rgba(243, 239, 227, 0.10)",
    },
  };

  const key = typeof tone === "string" ? tone.toLowerCase() : "default";
  const p = palettes[key] ?? palettes.default;

  // Hash label to pick a mountain silhouette variant (deterministic).
  let hash = 0;
  for (let i = 0; i < label.length; i++) hash = (hash * 31 + label.charCodeAt(i)) >>> 0;
  const variant = hash % 3;

  const svg = (
    <svg viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice" width="100%" height="100%">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={p.a} />
          <stop offset="55%" stopColor={p.b} />
          <stop offset="100%" stopColor={p.c} />
        </linearGradient>
        <filter id="blur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
        <filter id="grain" x="-20%" y="-20%" width="140%" height="140%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="table" tableValues="0 0.12" />
          </feComponentTransfer>
        </filter>
      </defs>

      <rect x="0" y="0" width="800" height="500" fill="url(#bg)" />

      {/* soft blobs */}
      <g opacity="0.55" filter="url(#blur)">
        <circle cx="180" cy="120" r="120" fill={p.c} />
        <circle cx="640" cy="200" r="160" fill={p.a} />
        <circle cx="520" cy="420" r="140" fill={p.b} />
      </g>

      {/* mountains */}
      <g opacity="0.95">
        {variant === 0 && (
          <path
            d="M0 350 L170 240 L250 300 L350 190 L460 280 L560 220 L800 300 L800 500 L0 500 Z"
            fill="rgba(13,20,17,0.38)"
          />
        )}
        {variant === 1 && (
          <path
            d="M0 380 L180 260 L310 330 L390 240 L520 320 L640 260 L800 340 L800 500 L0 500 Z"
            fill="rgba(13,20,17,0.38)"
          />
        )}
        {variant === 2 && (
          <path
            d="M0 360 L140 260 L260 330 L360 230 L470 300 L560 250 L700 320 L800 290 L800 500 L0 500 Z"
            fill="rgba(13,20,17,0.38)"
          />
        )}

        <path
          d="M0 400 L160 310 L260 370 L360 285 L460 360 L560 305 L700 360 L800 330 L800 500 L0 500 Z"
          fill="rgba(13,20,17,0.25)"
        />
      </g>

      {/* grain */}
      <rect x="0" y="0" width="800" height="500" filter="url(#grain)" opacity="0.55" />
    </svg>
  );

  return (
    <div
      className={className}
      role={label ? "img" : "presentation"}
      aria-label={label ? label : undefined}
    >
      {svg}
    </div>
  );
}

