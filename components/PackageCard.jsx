'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaCalendarAlt, FaCheck, FaTag } from 'react-icons/fa'

export default function PackageCard({ pkg, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, boxShadow: '0 24px 64px rgba(61,28,2,0.2)' }}
      style={{
        borderRadius: 20,
        overflow: 'hidden',
        backgroundColor: '#FFF8F0',
        boxShadow: '0 4px 24px rgba(61,28,2,0.1)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
        <motion.img
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.5 }}
          src={pkg.image}
          alt={pkg.name}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Badge */}
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: 14,
            padding: '5px 12px',
            borderRadius: 999,
            backgroundColor: '#CC5500',
            color: '#FFF8F0',
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          {pkg.badge}
        </div>
        {/* Savings */}
        <div
          style={{
            position: 'absolute',
            top: 14,
            right: 14,
            padding: '5px 12px',
            borderRadius: 999,
            backgroundColor: '#2D5016',
            color: '#FFF8F0',
            fontSize: 12,
            fontWeight: 700,
          }}
        >
          <FaTag style={{ marginRight: 4, display: 'inline' }} />
          {pkg.savings}
        </div>
        {/* Validity band */}
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            padding: '8px 14px',
            backgroundColor: 'rgba(26,48,9,0.85)',
            color: 'rgba(255,248,240,0.9)',
            fontSize: 12,
            display: 'flex',
            alignItems: 'center',
            gap: 6,
          }}
        >
          <FaCalendarAlt size={11} />
          {pkg.validFrom} – {pkg.validTo} · {pkg.duration}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <h3
          style={{
            fontFamily: 'Playfair Display, serif',
            fontSize: 19,
            fontWeight: 700,
            color: '#3D1C02',
            marginBottom: 8,
          }}
        >
          {pkg.name}
        </h3>
        <p style={{ fontSize: 13, color: '#CC5500', fontStyle: 'italic', marginBottom: 12 }}>
          "{pkg.tagline}"
        </p>

        {/* Price */}
        <div
          style={{
            padding: '12px 16px',
            borderRadius: 12,
            backgroundColor: 'rgba(45,80,22,0.08)',
            marginBottom: 16,
          }}
        >
          <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 22, fontWeight: 700, color: '#2D5016' }}>
            {pkg.priceLabel}
          </span>
        </div>

        {/* Includes preview */}
        <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: 6 }}>
          {pkg.includes.slice(0, 4).map(item => (
            <li key={item} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', fontSize: 13, color: '#3D1C02' }}>
              <FaCheck style={{ color: '#2D5016', flexShrink: 0, marginTop: 3 }} size={11} />
              {item}
            </li>
          ))}
          {pkg.includes.length > 4 && (
            <li style={{ fontSize: 13, color: '#7a4520', fontStyle: 'italic' }}>
              + {pkg.includes.length - 4} more inclusions...
            </li>
          )}
        </ul>

        <div style={{ marginTop: 'auto', display: 'flex', gap: 10 }}>
          <Link
            href={`/packages/${pkg.slug}`}
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '11px',
              borderRadius: 12,
              backgroundColor: '#2D5016',
              color: '#FFF8F0',
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
            }}
          >
            View Package
          </Link>
          <Link
            href="/booking"
            className="fire-glow"
            style={{
              flex: 1,
              textAlign: 'center',
              padding: '11px',
              borderRadius: 12,
              backgroundColor: '#CC5500',
              color: '#FFF8F0',
              fontWeight: 600,
              fontSize: 14,
              textDecoration: 'none',
            }}
          >
            Book Now
          </Link>
        </div>
      </div>
    </motion.div>
  )
}