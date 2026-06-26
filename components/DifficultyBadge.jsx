const STYLES = {
  Easy: "border-teal/50 text-teal bg-teal/10",
  Moderate: "border-orange/50 text-orange bg-orange/10",
  Difficult: "border-orange text-orange bg-orange/20",
};

export default function DifficultyBadge({ level, className = "" }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.15em] ${
        STYLES[level] || STYLES.Moderate
      } ${className}`}
    >
      {level}
    </span>
  );
}