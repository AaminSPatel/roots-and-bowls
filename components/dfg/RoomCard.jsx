'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FaBed, FaUsers, FaMountain } from 'react-icons/fa'

const viewColors = {
  valley: { bg: '#e8f4ea', text: '#2D5016', label: '🏔️ Valley View' },
  forest: { bg: '#e4f0e8', text: '#1a5c2a', label: '🌲 Forest View' },
  mountain: { bg: '#e8eef4', text: '#1a3060', label: '⛰️ Mountain View' },
}

export default function RoomCard({ room, compact = false }) {
  const view = viewColors[room.viewType] || viewColors.valley

  return (
    <motion.div
      whileHover={{ y: -8, rotateY: 2, rotateX: -1, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 350, damping: 28 }}
      style={{
        transformStyle: 'preserve-3d',
        perspective: 1000,
        borderRadius: 18,
        overflow: 'hidden',
        backgroundColor: '#FFF8F0',
        boxShadow: '0 4px 24px rgba(61,28,2,0.1)',
        display: 'flex',
        flexDirection: 'column',
        cursor: 'pointer',
      }}
    >
      {/* Image */}
      <Link href={`/rooms/${room.slug}`} style={{ textDecoration: 'none', display: 'block', position: 'relative' }}>
        <div style={{ position: 'relative', height: compact ? 180 : 220, overflow: 'hidden' }}>
          <motion.img
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.45 }}
            src={room.image}
            alt={room.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          />
          {/* View badge */}
          <div
            style={{
              position: 'absolute',
              top: 12,
              left: 12,
              padding: '4px 10px',
              borderRadius: 999,
              backgroundColor: view.bg,
              color: view.text,
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            {view.label}
          </div>
          {/* Price badge */}
          <div
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              padding: '6px 14px',
              borderRadius: 12,
              backgroundColor: '#CC5500',
              color: '#FFF8F0',
              fontSize: 14,
              fontWeight: 700,
            }}
          >
            {room.priceLabel}
          </div>
        </div>
      </Link>

      {/* Content */}
      <div style={{ padding: compact ? '16px' : '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Link href={`/rooms/${room.slug}`} style={{ textDecoration: 'none' }}>
          <h3
            style={{
              fontFamily: 'Playfair Display, serif',
              fontSize: compact ? 17 : 20,
              fontWeight: 700,
              color: '#3D1C02',
              marginBottom: 8,
              lineHeight: 1.3,
            }}
          >
            {room.name}
          </h3>
        </Link>

        <p style={{ fontSize: 14, color: '#7a4520', lineHeight: 1.6, marginBottom: 14, flex: 1 }}>
          {room.shortDesc}
        </p>

        {/* Meta row */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 16, flexWrap: 'wrap' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#2D5016' }}>
            <FaBed size={13} /> {room.bed}
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#2D5016' }}>
            <FaUsers size={13} /> Max {room.maxOccupancy} guests
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 13, color: '#2D5016' }}>
            <FaMountain size={13} /> {room.size}
          </span>
        </div>

        {/* Highlights */}
        {!compact && (
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
            {room.highlights.slice(0, 2).map(h => (
              <span
                key={h}
                style={{
                  padding: '3px 10px',
                  borderRadius: 999,
                  backgroundColor: 'rgba(45,80,22,0.08)',
                  color: '#2D5016',
                  fontSize: 12,
                  fontWeight: 500,
                }}
              >
                {h}
              </span>
            ))}
          </div>
        )}

        <Link
          href={`/rooms/${room.slug}`}
          style={{
            display: 'block',
            textAlign: 'center',
            padding: '11px',
            borderRadius: 12,
            backgroundColor: '#2D5016',
            color: '#FFF8F0',
            fontWeight: 600,
            fontSize: 14,
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}
        >
          View Room Details →
        </Link>
      </div>
    </motion.div>
  )
}