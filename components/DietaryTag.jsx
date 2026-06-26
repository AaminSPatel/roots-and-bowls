const tagMap = {
  V:  { label: "Vegetarian", className: "tag-v" },
  VG: { label: "Vegan",      className: "tag-vg" },
  GF: { label: "Gluten-Free",className: "tag-gf" },
  DF: { label: "Dairy-Free", className: "tag-df" },
  LF: { label: "Low-Fat",    className: "tag-lf" },
};

export default function DietaryTag({ tag, showFull = false }) {
  const info = tagMap[tag];
  if (!info) return null;
  return (
    <span
      className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${info.className}`}
      title={info.label}
    >
      {showFull ? info.label : tag}
    </span>
  );
}