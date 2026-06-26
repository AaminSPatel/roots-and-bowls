'use client';
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenu, HiX } from "react-icons/hi";
import { GiLeafSwirl } from "react-icons/gi";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/meal-prep", label: "Meal Prep" },
  { href: "/catering", label: "Catering" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "Our Story" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(250,250,247,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        boxShadow: scrolled ? "0 1px 24px rgba(44,59,42,0.08)" : "none",
      }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl transition-transform group-hover:scale-110 duration-300">🌿</span>
          <span style={{ fontFamily: "var(--font-display)", color: "var(--olive)" }} className="font-bold text-lg leading-tight">
            Roots<span style={{ color: "var(--terracotta)" }}>&</span>Bowls
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className="px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200"
                style={{
                  color: pathname === l.href ? "var(--sage-dark)" : "var(--olive-light)",
                  background: pathname === l.href ? "rgba(124,144,112,0.12)" : "transparent",
                }}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="/order"
            className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:opacity-90 hover:-translate-y-0.5"
            style={{ background: "var(--terracotta)" }}
          >
            Order Now
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden p-2 rounded-lg"
          style={{ color: "var(--olive)" }}
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      {open && (
        <div
          className="md:hidden absolute top-full left-0 right-0 border-t"
          style={{ background: "rgba(250,250,247,0.99)", borderColor: "var(--sand)" }}
        >
          <ul className="flex flex-col px-4 py-3 gap-1">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="block px-3 py-2.5 rounded-lg text-sm font-medium"
                  style={{
                    color: pathname === l.href ? "var(--sage-dark)" : "var(--olive)",
                    background: pathname === l.href ? "rgba(124,144,112,0.1)" : "transparent",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2 pb-1">
              <Link
                href="/order"
                className="block text-center px-4 py-2.5 rounded-full text-sm font-semibold text-white"
                style={{ background: "var(--terracotta)" }}
              >
                Order Now
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}