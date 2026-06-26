'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import RoomCard from './RoomCard'

const viewFilters = ['All', 'Valley View', 'Forest View', 'Mountain View']
const occupancyFilters = ['Any', '2 Guests', '4 Guests']

const viewMap = { 'Valley View': 'valley', 'Forest View': 'forest', 'Mountain View': 'mountain' }
const occupancyMap = { '2 Guests': 2, '4 Guests': 4 }

export default function RoomsGridClient({ rooms }) {
  const [activeView, setActiveView] = useState('All')
  const [activeOcc, setActiveOcc] = useState('Any')

  const filtered = rooms.filter(r => {
    const viewOk = activeView === 'All' || r.viewType === viewMap[activeView]
    const occOk = activeOcc === 'Any' || r.maxOccupancy === occupancyMap[activeOcc]
    return viewOk && occOk
  })

  const chipStyle = (active) => ({
    padding: '8px 18px',
    borderRadius: 999,
    fontSize: 14,
    fontWeight: 500,
    cursor: 'pointer',
    border: active ? '2px solid #2D5016' : '2px solid #DDD4C8',
    backgroundColor: active ? '#2D5016' : '#FFF8F0',
    color: active ? '#FFF8F0' : '#3D1C02',
    transition: 'all 0.2s',
  })

  return (
    <div>
      {/* Filters */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 28, marginBottom: 48 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#7a4520', textTransform: 'uppercase', letterSpacing: 1 }}>View:</span>
          {viewFilters.map(f => (
            <button key={f} onClick={() => setActiveView(f)} style={chipStyle(activeView === f)}>
              {f}
            </button>
          ))}
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
          <span style={{ fontSize: 13, fontWeight: 600, color: '#7a4520', textTransform: 'uppercase', letterSpacing: 1 }}>Guests:</span>
          {occupancyFilters.map(f => (
            <button key={f} onClick={() => setActiveOcc(f)} style={chipStyle(activeOcc === f)}>
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <p style={{ fontSize: 14, color: '#7a4520', marginBottom: 28 }}>
        Showing {filtered.length} of {rooms.length} room{rooms.length !== 1 ? 's' : ''}
      </p>

      {/* Cards grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
          gap: 28,
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((room, i) => (
            <motion.div
              key={room.slug}
              layout
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.35, delay: i * 0.06 }}
            >
              <RoomCard room={room} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 0', color: '#7a4520' }}>
          <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
          <p style={{ fontSize: 16 }}>No rooms match your filters. Try adjusting them!</p>
        </div>
      )}
    </div>
  )
}