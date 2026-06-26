import Link from "next/link";
import { FiInstagram, FiFacebook, FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { RiWhatsappLine } from "react-icons/ri";
import { GiFireBowl } from "react-icons/gi";
import { siteConfig } from "@/lib/siteData";

export default function Footer() {
  return (
    <footer className="bg-[#111] border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[#FF4D00] text-2xl"><GiFireBowl /></span>
              <span
                className="text-white font-bold text-xl"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Zest &amp; Ember
              </span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-5">
              Where every bite has a story. Fusion dining at its most intentional — Bandra West, Mumbai.
            </p>
            <div className="flex gap-3">
              <a href={siteConfig.contact.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors">
                <FiInstagram size={15} />
              </a>
              <a href={siteConfig.contact.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#FF4D00] hover:text-[#FF4D00] transition-colors">
                <FiFacebook size={15} />
              </a>
              <a href={siteConfig.contact.whatsapp} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:border-[#25D366] hover:text-[#25D366] transition-colors">
                <RiWhatsappLine size={16} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Explore</h4>
            <ul className="space-y-3">
              {[
                { href: "/menu", label: "Our Menu" },
                { href: "/experiences", label: "Dining Experiences" },
                { href: "/events", label: "Upcoming Events" },
                { href: "/gallery", label: "Gallery" },
                { href: "/about", label: "Our Story" },
                { href: "/reservations", label: "Reserve a Table" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-white/50 text-sm hover:text-[#FF4D00] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Hours</h4>
            <ul className="space-y-3">
              {siteConfig.hours.map((h) => (
                <li key={h.days}>
                  <p className="text-white/80 text-sm font-medium">{h.days}</p>
                  {h.lunch !== "Closed" ? (
                    <>
                      <p className="text-white/40 text-xs">{h.lunch}</p>
                      <p className="text-white/40 text-xs">{h.dinner}</p>
                    </>
                  ) : (
                    <p className="text-[#FF4D00] text-xs">Closed</p>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">Find Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-white/50 text-sm">
                <FiMapPin className="text-[#FF4D00] mt-0.5 shrink-0" />
                <span>{siteConfig.address.street}, {siteConfig.address.area}, {siteConfig.address.city} {siteConfig.address.pin}</span>
              </li>
              <li>
                <a href={`tel:${siteConfig.contact.phone}`} className="flex gap-3 text-white/50 text-sm hover:text-[#FF4D00] transition-colors">
                  <FiPhone className="text-[#FF4D00] shrink-0 mt-0.5" />
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex gap-3 text-white/50 text-sm hover:text-[#FF4D00] transition-colors">
                  <FiMail className="text-[#FF4D00] shrink-0 mt-0.5" />
                  {siteConfig.contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="ember-divider mb-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-white/30 text-xs">
          <p>© 2025 Zest & Ember. All rights reserved. Bandra West, Mumbai.</p>
          <p>Crafted with fire &amp; intention.</p>
        </div>
      </div>
    </footer>
  );
}