"use client";

import { FiCheck, FiPackage } from "react-icons/fi";

export default function GearChecklist({ personal, provided }) {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <div className="rounded-md border border-line bg-surface p-6">
        <h3 className="flex items-center gap-2 font-display text-lg uppercase tracking-wide text-parchment">
          <FiCheck className="text-orange" /> You Bring
        </h3>
        <ul className="mt-4 space-y-2.5">
          {personal.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-sage">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-orange" />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-md border border-line bg-surface p-6">
        <h3 className="flex items-center gap-2 font-display text-lg uppercase tracking-wide text-parchment">
          <FiPackage className="text-teal" /> Trailmark Provides
        </h3>
        <ul className="mt-4 space-y-2.5">
          {provided.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-sage">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-teal" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}