'use client';

const leaves = [
  { size: 80,  top: "8%",  left: "4%",  delay: "0s",   anim: "leaf-float",  opacity: 0.18, rotate: -20 },
  { size: 120, top: "15%", right: "6%", delay: "1.5s", anim: "leaf-drift",  opacity: 0.14, rotate: 30 },
  { size: 60,  top: "40%", left: "2%",  delay: "0.8s", anim: "leaf-sway",   opacity: 0.12, rotate: 10 },
  { size: 90,  top: "60%", right: "3%", delay: "2.2s", anim: "leaf-float",  opacity: 0.16, rotate: -15 },
  { size: 50,  top: "75%", left: "8%",  delay: "1.1s", anim: "leaf-drift",  opacity: 0.1,  rotate: 40 },
  { size: 70,  top: "25%", left: "45%", delay: "3s",   anim: "leaf-sway",   opacity: 0.08, rotate: -5 },
];

function LeafSVG({ size, color = "#7C9070" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path
        d="M50 95 C20 80 5 55 10 25 C25 10 55 5 80 20 C90 50 75 80 50 95Z"
        fill={color}
      />
      <path
        d="M50 95 C50 95 48 60 52 25"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path d="M50 70 C38 62 28 50 30 35" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M50 55 C62 47 70 35 68 22" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

export default function FloatingLeaves({ count = 6 }) {
  const subset = leaves.slice(0, count);
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {subset.map((l, i) => (
        <div
          key={i}
          className={l.anim}
          style={{
            position: "absolute",
            top: l.top,
            left: l.left,
            right: l.right,
            opacity: l.opacity,
            transform: `rotate(${l.rotate}deg)`,
            animationDelay: l.delay,
          }}
        >
          <LeafSVG size={l.size} />
        </div>
      ))}
    </div>
  );
}