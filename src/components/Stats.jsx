import React from 'react'
import { stats } from '../data/data'
import useReveal from '../hooks/useReveal'
import '../assets/css/Stats.css'

export default function Stats() {
  const ref = useReveal()
  return (
    <section className="stats-section">
      <div className="container stats-grid reveal" ref={ref}>
        {stats.map(({ value, label, sub }) => (
          <div className="stat-item" key={label}>
            <span className="stat-val">{value}</span>
            <span className="stat-label">{label}</span>
            <span className="stat-sub">{sub}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
