"use client";

import Image from "next/image";

export default function ScenicImage({ src, alt, className = "" }) {
  if (!src) return null;

  return (
    <div className={className}>
      <Image src={src} alt={alt || ""} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
    </div>
  );
}

