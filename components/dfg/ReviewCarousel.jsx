'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaStar, FaChevronLeft, FaChevronRight, FaQuoteLeft } from 'react-icons/fa'
import { testimonials } from '@/lib/siteData'

export default function ReviewCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const total = testimonials.length

  const next = useCallback(() => setCurrent(i => (i + 1) % total), [total])
  const prev = useCallback(() => setCurrent(i => (i - 1 + total) % total), [total])

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5500)
    return () => clearInterval(t)
  }, [next, paused])

  const review = testimonials[current]

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      style={{ position: 'relative', maxWidth: 760, margin: '0 auto' }}
    >
      {/* Main card */}
      <div
        style={{
          backgroundColor: '#FFF8F0',
          borderRadius: 24,
          padding: 'clamp(28px, 5vw, 52px)',
          boxShadow: '0 8px 40px rgba(61,28,2,0.12)',
          position: 'relative',
          minHeight: 260,
        }}
      >
        {/* Quote icon */}
        <FaQuoteLeft
          size={40}
          style={{
            color: 'rgba(45,80,22,0.1)',
            position: 'absolute',
            top: 28,
            left: 28,
          }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            {/* Stars */}
            <div style={{ display: 'flex', gap: 3, marginBottom: 16 }}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <FaStar key={i} size={18} style={{ color: '#CC5500' }} />
              ))}
            </div>

            {/* Review text */}
            <p
              style={{
                fontSize: 'clamp(15px, 1.6vw, 17px)',
                lineHeight: 1.75,
                color: '#3D1C02',
                fontStyle: 'italic',
                marginBottom: 24,
                paddingTop: 8,
              }}
            >
              "{review.text}"
            </p>

            {/* Author */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
              <div>
                <div style={{ fontWeight: 700, fontSize: 16, color: '#2D5016', fontFamily: 'Playfair Display, serif' }}>
                  {review.name}
                </div>
                <div style={{ fontSize: 13, color: '#7a4520' }}>
                  {review.from} · {review.date}
                </div>
              </div>
              <div
                style={{
                  padding: '5px 14px',
                  borderRadius: 999,
                  backgroundColor: 'rgba(45,80,22,0.08)',
                  color: '#2D5016',
                  fontSize: 12,
                  fontWeight: 600,
                }}
              >
                {review.room}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16, marginTop: 28 }}>
        <button
          onClick={prev}
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '2px solid #DDD4C8',
            backgroundColor: '#FFF8F0',
            color: '#3D1C02',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
        >
          <FaChevronLeft size={14} />
        </button>

        {/* Dots */}
        <div style={{ display: 'flex', gap: 8 }}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              style={{
                width: i === current ? 28 : 8,
                height: 8,
                borderRadius: 4,
                backgroundColor: i === current ? '#CC5500' : '#DDD4C8',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s',
                padding: 0,
              }}
            />
          ))}
        </div>

        <button
          onClick={next}
          style={{
            width: 44,
            height: 44,
            borderRadius: '50%',
            border: '2px solid #DDD4C8',
            backgroundColor: '#FFF8F0',
            color: '#3D1C02',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s',
          }}
        >
          <FaChevronRight size={14} />
        </button>
      </div>

      {/* Counter */}
      <p style={{ textAlign: 'center', marginTop: 14, fontSize: 13, color: '#7a4520' }}>
        {current + 1} of {total} guest reviews
      </p>
    </div>
  )
}