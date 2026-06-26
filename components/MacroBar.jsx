export default function MacroBar({ calories, protein, carbs, fat, compact = false }) {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-2 text-xs" style={{ color: "var(--olive-light)" }}>
        <span className="font-semibold" style={{ color: "var(--terracotta)" }}>{calories} kcal</span>
        <span>P: <strong>{protein}g</strong></span>
        <span>C: <strong>{carbs}g</strong></span>
        <span>F: <strong>{fat}g</strong></span>
      </div>
    );
  }
  return (
    <div className="rounded-xl p-3 grid grid-cols-4 gap-2 text-center text-xs" style={{ background: "rgba(124,144,112,0.07)" }}>
      {[
        { label: "Cal", value: calories, unit: "kcal", color: "var(--terracotta)" },
        { label: "Protein", value: protein, unit: "g", color: "var(--sage-dark)" },
        { label: "Carbs", value: carbs, unit: "g", color: "#b07a3a" },
        { label: "Fat", value: fat, unit: "g", color: "#5a7ab0" },
      ].map(({ label, value, unit, color }) => (
        <div key={label}>
          <div className="font-bold text-sm" style={{ color }}>{value}<span className="text-xs font-normal">{unit}</span></div>
          <div style={{ color: "var(--olive-light)" }}>{label}</div>
        </div>
      ))}
    </div>
  );
}