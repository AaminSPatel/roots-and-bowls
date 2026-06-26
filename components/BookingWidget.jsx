'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { rooms } from '@/lib/siteData'

const inputStyle = {
  width: '100%',
  padding: '11px 14px',
  borderRadius: 10,
  border: '1.5px solid #DDD4C8',
  backgroundColor: '#FAFAF8',
  color: '#3D1C02',
  fontSize: 14,
  fontFamily: 'Inter, sans-serif',
  appearance: 'none',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block',
  fontSize: 12,
  fontWeight: 600,
  color: '#2D5016',
  textTransform: 'uppercase',
  letterSpacing: 1,
  marginBottom: 6,
}

export default function BookingWidget() {
  const router = useRouter()
  const today = new Date().toISOString().split('T')[0]
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0]

  const [form, setForm] = useState({
    room: '',
    checkin: today,
    checkout: tomorrow,
    adults: 2,
    children: 0,
  })

  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))

  const handleSearch = (e) => {
    e.preventDefault()
    const params = new URLSearchParams(form)
    router.push(`/booking?${params}`)
  }

  return (
    <div
      style={{
        backgroundColor: '#FFF8F0',
        borderRadius: 24,
        padding: 'clamp(24px, 4vw, 40px)',
        boxShadow: '0 16px 56px rgba(61,28,2,0.18)',
        border: '1px solid rgba(45,80,22,0.1)',
      }}
    >
      <h3
        style={{
          fontFamily: 'Playfair Display, serif',
          fontSize: 22,
          fontWeight: 700,
          color: '#3D1C02',
          marginBottom: 6,
          textAlign: 'center',
        }}
      >
        Plan Your Stay
      </h3>
      <p style={{ fontSize: 14, color: '#7a4520', textAlign: 'center', marginBottom: 28 }}>
        Check availability — quick and easy
      </p>

      <form onSubmit={handleSearch}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
            gap: 16,
          }}
        >
          {/* Room type */}
          <div>
            <label style={labelStyle}>Room Type</label>
            <select
              value={form.room}
              onChange={e => set('room', e.target.value)}
              style={inputStyle}
            >
              <option value="">Any Room</option>
              {rooms.map(r => (
                <option key={r.slug} value={r.slug}>{r.name}</option>
              ))}
            </select>
          </div>

          {/* Check-in */}
          <div>
            <label style={labelStyle}>Check-In</label>
            <input
              type="date"
              value={form.checkin}
              min={today}
              onChange={e => set('checkin', e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Check-out */}
          <div>
            <label style={labelStyle}>Check-Out</label>
            <input
              type="date"
              value={form.checkout}
              min={form.checkin || today}
              onChange={e => set('checkout', e.target.value)}
              style={inputStyle}
            />
          </div>

          {/* Adults */}
          <div>
            <label style={labelStyle}>Adults</label>
            <select value={form.adults} onChange={e => set('adults', e.target.value)} style={inputStyle}>
              {[1,2,3,4].map(n => <option key={n} value={n}>{n} Adult{n > 1 ? 's' : ''}</option>)}
            </select>
          </div>

          {/* Children */}
          <div>
            <label style={labelStyle}>Children</label>
            <select value={form.children} onChange={e => set('children', e.target.value)} style={inputStyle}>
              {[0,1,2,3].map(n => <option key={n} value={n}>{n === 0 ? 'None' : `${n} Child${n > 1 ? 'ren' : ''}`}</option>)}
            </select>
          </div>
        </div>

        <button
          type="submit"
          className="fire-glow"
          style={{
            display: 'block',
            width: '100%',
            marginTop: 22,
            padding: '14px',
            borderRadius: 12,
            backgroundColor: '#CC5500',
            color: '#FFF8F0',
            fontWeight: 700,
            fontSize: 16,
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'Inter, sans-serif',
          }}
        >
          Check Availability & Book →
        </button>
      </form>

      <p style={{ textAlign: 'center', fontSize: 12, color: '#7a4520', marginTop: 14 }}>
        🔒 No payment required to check availability · Free cancellation on most rooms
      </p>
    </div>
  )
}