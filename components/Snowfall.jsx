'use client'
import { useEffect, useState } from 'react'

export default function Snowfall({ count = 45 }) {
  const [flakes, setFlakes] = useState([])

  useEffect(() => {
    setFlakes(
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: Math.random() * 5 + 2,
        duration: Math.random() * 7 + 7,
        delay: Math.random() * -18,
        opacity: Math.random() * 0.55 + 0.2,
        drift: Math.random() * 30 - 15,
      }))
    )
  }, [count])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 10,
      }}
    >
      {/* SVG snowflake symbols */}
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <symbol id="flake" viewBox="0 0 10 10">
            <line x1="5" y1="0" x2="5" y2="10" stroke="white" strokeWidth="1.2" />
            <line x1="0" y1="5" x2="10" y2="5" stroke="white" strokeWidth="1.2" />
            <line x1="1.5" y1="1.5" x2="8.5" y2="8.5" stroke="white" strokeWidth="0.8" />
            <line x1="8.5" y1="1.5" x2="1.5" y2="8.5" stroke="white" strokeWidth="0.8" />
            <line x1="5" y1="2" x2="3.5" y2="3.5" stroke="white" strokeWidth="0.8" />
            <line x1="5" y1="2" x2="6.5" y2="3.5" stroke="white" strokeWidth="0.8" />
          </symbol>
        </defs>
      </svg>

      {flakes.map(flake => (
        <div
          key={flake.id}
          style={{
            position: 'absolute',
            left: `${flake.left}%`,
            top: '-30px',
            width: flake.size * 2,
            height: flake.size * 2,
            opacity: flake.opacity,
            animation: `snowfall ${flake.duration}s linear ${flake.delay}s infinite`,
          }}
        >
          {/* Mix circles and snowflake shapes */}
          {flake.id % 3 === 0 ? (
            <svg width={flake.size * 2} height={flake.size * 2} viewBox="0 0 10 10">
              <use href="#flake" />
            </svg>
          ) : (
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                backgroundColor: 'white',
              }}
            />
          )}
        </div>
      ))}
    </div>
  )
}