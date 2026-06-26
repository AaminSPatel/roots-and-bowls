import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { SiZomato, SiSwiggy } from "react-icons/si";
import { HiLocationMarker, HiPhone, HiMail } from "react-icons/hi";
import { siteConfig } from "@/lib/siteData";

const footerLinks = {
  Explore: [
    { href: "/menu", label: "Full Menu" },
    { href: "/meal-prep", label: "Meal Prep Plans" },
    { href: "/catering", label: "Corporate Catering" },
    { href: "/order", label: "Order Online" },
  ],
  Learn: [
    { href: "/about", label: "Our Story" },
    { href: "/blog", label: "Nutrition Blog" },
    { href: "/contact", label: "Contact Us" },
  ],
};

export default function Footer() {
  return (
    <footer style={{ background: "var(--olive)", color: "var(--cream)" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-14 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span style={{ fontFamily: "var(--font-display)" }} className="font-bold text-xl text-white">
                Roots<span style={{ color: "var(--terracotta-light)" }}>&</span>Bowls
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(232,223,208,0.75)" }}>
              Bengaluru's most loved plant-forward cafe. No preservatives. No compromise. Just real food.
            </p>
            <div className="flex gap-3">
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.1)" }}>
                <FaInstagram size={16} />
              </a>
              <a href={siteConfig.social.zomato} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.1)" }}>
                <SiZomato size={15} />
              </a>
              <a href={siteConfig.social.swiggy} target="_blank" rel="noopener noreferrer"
                className="w-9 h-9 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ background: "rgba(255,255,255,0.1)" }}>
                <SiSwiggy size={15} />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--sage-light)" }}>
                {heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm transition-colors hover:text-white" style={{ color: "rgba(232,223,208,0.7)" }}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "var(--sage-light)" }}>
              Find Us
            </h4>
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2.5 text-sm" style={{ color: "rgba(232,223,208,0.75)" }}>
                <HiLocationMarker className="shrink-0 mt-0.5" style={{ color: "var(--sage-light)" }} />
                {siteConfig.address}
              </li>
              <li className="flex gap-2.5 text-sm" style={{ color: "rgba(232,223,208,0.75)" }}>
                <HiPhone className="shrink-0 mt-0.5" style={{ color: "var(--sage-light)" }} />
                {siteConfig.phone}
              </li>
              <li className="flex gap-2.5 text-sm" style={{ color: "rgba(232,223,208,0.75)" }}>
                <HiMail className="shrink-0 mt-0.5" style={{ color: "var(--sage-light)" }} />
                {siteConfig.email}
              </li>
            </ul>
            <div className="mt-4 text-xs" style={{ color: "rgba(232,223,208,0.5)" }}>
              <p>Mon–Fri: {siteConfig.hours.weekdays}</p>
              <p>Sat–Sun: {siteConfig.hours.weekends}</p>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
          <p className="text-xs" style={{ color: "rgba(232,223,208,0.4)" }}>
            © {new Date().getFullYear()} Roots & Bowls. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(232,223,208,0.4)" }}>
            Delivery radius: {siteConfig.deliveryRadius}
          </p>
          <p className="text-xs" style={{ color: "rgba(232,223,208,0.4)" }}>
                     <span>Made with ♥️ by <a href="https://business-sathi.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-md text-white font-semibold hover:text-amber-400"> Business Sathi</a></span>
          </p>
        </div>
      </div>
    </footer>
  );
}