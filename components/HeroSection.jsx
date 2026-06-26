'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Snowfall from './Snowfall'

const stats = [
  { value: '₹2,800', label: 'Rooms From' },
  { value: '15+', label: 'Years of Warmth' },
  { value: '4.8★', label: 'Guest Rating' },
  { value: '4', label: 'Room Types' },
]

export default function HeroSection() {
  return (
    <section
      style={{
        position: 'relative',
        width: '100%',
        height: '100vh',
        minHeight: 580,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background mountain image */}
      <img
        src="https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=1200&q=80"
        alt="Shimla mountain valley"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: 0,
        }}
      />

      {/* Layered gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(to bottom, rgba(26,48,9,0.35) 0%, rgba(45,80,22,0.5) 40%, rgba(61,28,2,0.72) 100%)',
        }}
      />

      {/* Snowfall overlay */}
      <Snowfall count={50} />

      {/* Hero content */}
      <div
        style={{
          position: 'relative',
          zIndex: 20,
          textAlign: 'center',
          padding: '0 20px',
          maxWidth: 820,
          margin: '0 auto',
        }}
      >
        {/* Location badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            padding: '6px 18px',
            borderRadius: 999,
            backgroundColor: 'rgba(204,85,0,0.2)',
            border: '1px solid rgba(204,85,0,0.5)',
            color: '#ffb380',
            fontSize: 13,
            fontWeight: 500,
            letterSpacing: 2,
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          <span>📍</span> Near Mall Road, Shimla — Est. 2008
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={{
            fontFamily: 'Playfair Display, serif',
            fontWeight: 700,
            fontSize: 'clamp(38px, 6.5vw, 84px)',
            color: '#FFF8F0',
            lineHeight: 1.12,
            marginBottom: 20,
            textShadow: '0 2px 30px rgba(0,0,0,0.35)',
          }}
        >
          Your Cozy Corner
          <br />
          <span style={{ color: '#ffb380', fontStyle: 'italic' }}>in the Clouds</span>
        </motion.h1>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          style={{
            fontSize: 'clamp(15px, 1.8vw, 19px)',
            color: 'rgba(255,248,240,0.85)',
            lineHeight: 1.7,
            marginBottom: 40,
            maxWidth: 560,
            margin: '0 auto 40px',
          }}
        >
          A family-run mountain retreat in the pine forests of Shimla — warm rooms,
          pahadi mornings, and valley views that stay with you forever.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <Link
            href="/booking"
            className="fire-glow"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              borderRadius: 999,
              backgroundColor: '#CC5500',
              color: '#FFF8F0',
              fontSize: 16,
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: 0.5,
            }}
          >
            Book Your Stay
          </Link>
          <Link
            href="/rooms"
            style={{
              display: 'inline-block',
              padding: '14px 36px',
              borderRadius: 999,
              backgroundColor: 'rgba(255,248,240,0.12)',
              border: '2px solid rgba(255,248,240,0.45)',
              color: '#FFF8F0',
              fontSize: 16,
              fontWeight: 600,
              textDecoration: 'none',
              letterSpacing: 0.3,
            }}
          >
            Explore Rooms
          </Link>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          style={{
            display: 'flex',
            gap: 'clamp(20px, 4vw, 48px)',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: 56,
            paddingTop: 32,
            borderTop: '1px solid rgba(255,248,240,0.15)',
          }}
        >
          {stats.map(stat => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <div
                style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 'clamp(20px, 2.5vw, 28px)',
                  fontWeight: 700,
                  color: '#FFF8F0',
                }}
              >
                {stat.value}
              </div>
              <div style={{ fontSize: 11, color: 'rgba(255,248,240,0.6)', letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 2 }}>
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        style={{
          position: 'absolute',
          bottom: 32,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
        }}
      >
        <span style={{ fontSize: 11, color: 'rgba(255,248,240,0.5)', letterSpacing: 2, textTransform: 'uppercase' }}>
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: 'easeInOut' }}
          style={{
            width: 22,
            height: 36,
            borderRadius: 11,
            border: '2px solid rgba(255,248,240,0.4)',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: 6,
          }}
        >
          <div style={{ width: 3, height: 8, backgroundColor: 'rgba(255,248,240,0.6)', borderRadius: 2 }} />
        </motion.div>
      </motion.div>
    </section>
  )
}