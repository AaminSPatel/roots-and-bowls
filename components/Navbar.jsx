"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { GiFireBowl } from "react-icons/gi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/experiences", label: "Experiences" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 nav-blur ${
          scrolled ? "py-3 border-b border-white/10 bg-[#1a1a1a]/90" : "py-5 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-[#FF4D00] text-2xl transition-transform group-hover:scale-110">
              <GiFireBowl />
            </span>
            <span
              className="text-white font-bold text-xl tracking-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Zest &amp; Ember
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  pathname === link.href
                    ? "text-[#FF4D00]"
                    : "text-white/70 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Reserve CTA */}
          <Link
            href="/reservations"
            className="hidden lg:block px-5 py-2.5 text-sm font-semibold rounded-full text-white transition-all duration-200 hover:opacity-90 hover:scale-105"
            style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
          >
            Reserve a Table
          </Link>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-white p-2 text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#1a1a1a] flex flex-col pt-24 px-6 pb-8"
          >
            <div className="flex flex-col gap-2 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    className={`block text-2xl font-semibold py-3 border-b border-white/10 transition-colors ${
                      pathname === link.href ? "text-[#FF4D00]" : "text-white/80 hover:text-white"
                    }`}
                    style={{ fontFamily: "'Playfair Display', serif" }}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <Link
              href="/reservations"
              className="block text-center w-full py-4 rounded-full text-white font-bold text-lg mt-6"
              style={{ background: "linear-gradient(135deg, #FF4D00, #FFB800)" }}
            >
              Reserve a Table
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}