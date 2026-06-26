"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiZoomIn } from "react-icons/fi";
/* 
export const metadata = {
  title: "Gallery",
  description:
    "A visual tour of Zest & Ember — moody food photography, ambiance shots, and bar moments from Bandra's boldest restaurant.",
};
 */
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1200&q=80",
    alt: "Restaurant interior ambiance",
    category: "Ambiance",
    span: "col-span-2 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1558030006-450675393462?w=800&q=80",
    alt: "Flame-grilled ribeye steak",
    category: "Food",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=800&q=80",
    alt: "Craft cocktail — Ember Negroni",
    category: "Bar",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80",
    alt: "Artisanal pizza from the wood fire",
    category: "Food",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    alt: "Miso-glazed lamb shoulder",
    category: "Food",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=800&q=80",
    alt: "Bandra Sour cocktail",
    category: "Bar",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800&q=80",
    alt: "Private dining room — The Ember Room",
    category: "Ambiance",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80",
    alt: "Miso caramel tart dessert",
    category: "Food",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&q=80",
    alt: "Bar counter with craft spirits",
    category: "Bar",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1580476262798-bddd9f4b7369?w=800&q=80",
    alt: "Fresh catch of the day",
    category: "Food",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&q=80",
    alt: "Main dining room evening service",
    category: "Ambiance",
    span: "col-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1560512823-829485b8bf24?w=800&q=80",
    alt: "Lychee martini remix",
    category: "Bar",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80",
    alt: "Colourful sharing plates",
    category: "Food",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1535400255456-984e3f6cd6d3?w=800&q=80",
    alt: "Coriander lime ceviche",
    category: "Food",
    span: "",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80",
    alt: "Sunday brunch spread",
    category: "Ambiance",
    span: "",
  },
];

const CATS = ["All", "Food", "Bar", "Ambiance"];

function GalleryItem({ img, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={`relative overflow-hidden rounded-2xl cursor-pointer group ${img.span || ""}`}
      style={{ aspectRatio: img.span?.includes("row-span-2") ? "auto" : "1 / 1", minHeight: "200px" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(img)}
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.img
        src={img.src}
        alt={img.alt}
        className="w-full h-full object-cover"
        animate={{ filter: hovered ? "grayscale(0%) brightness(1.05)" : "grayscale(80%) brightness(0.75)" }}
        transition={{ duration: 0.4 }}
        style={{ filter: "grayscale(80%) brightness(0.75)" }}
      />

      {/* Hover overlay */}
      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-2"
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ background: "linear-gradient(135deg, rgba(255,77,0,0.2) 0%, rgba(0,0,0,0.4) 100%)" }}
      >
        <FiZoomIn className="text-white text-2xl" />
        <span className="text-white text-xs font-semibold uppercase tracking-widest">{img.category}</span>
      </motion.div>

      {/* Category tag always visible */}
      <span
        className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: "rgba(255,77,0,0.8)", color: "white" }}
      >
        {img.category}
      </span>
    </motion.div>
  );
}

function Lightbox({ img, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      style={{ background: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative max-w-5xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src.replace("w=800", "w=1400")}
          alt={img.alt}
          className="w-full max-h-[80vh] object-contain rounded-2xl"
        />
        <div className="mt-4 flex items-center justify-between">
          <div>
            <p className="text-white font-medium">{img.alt}</p>
            <p className="text-white/40 text-sm">{img.category}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
          >
            <FiX />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxImg, setLightboxImg] = useState(null);

  const filtered =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.map((img) => ({
          ...img,
          span: activeCategory !== "All" ? "" : img.span,
        })).filter((img) => img.category === activeCategory);

  return (
    <div className="min-h-screen pt-24 pb-20" style={{ background: "#1A1A1A" }}>
      {/* Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-[#FF4D00] text-sm font-semibold uppercase tracking-widest mb-3">Visual Stories</p>
          <h1
            className="text-5xl sm:text-6xl font-black text-white mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            The Gallery
          </h1>
          <p className="text-white/50 max-w-lg mx-auto">
            Every frame from our kitchen, bar, and dining room. Hover to see the colour come alive.
          </p>
        </motion.div>
      </div>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-2 mb-10 px-4 flex-wrap">
        {CATS.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              activeCategory === cat ? "menu-tab-active" : "menu-tab-inactive"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`grid gap-3 ${
            activeCategory === "All"
              ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 "
              : "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
          }`}
        >
          {filtered.map((img, i) => (
            <GalleryItem key={img.src + i} img={img} onClick={setLightboxImg} />
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImg && (
          <Lightbox img={lightboxImg} onClose={() => setLightboxImg(null)} />
        )}
      </AnimatePresence>

      {/* Instagram CTA */}
      <div className="max-w-xl mx-auto px-4 sm:px-6 mt-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-white/40 text-sm mb-3">
            See more behind-the-scenes content on Instagram
          </p>
          <a
            href="https://instagram.com/zestandember"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-white/20 text-white/70 text-sm font-medium hover:border-[#FF4D00] hover:text-[#FF4D00] transition-all"
          >
            @zestandember
          </a>
        </motion.div>
      </div>
    </div>
  );
}