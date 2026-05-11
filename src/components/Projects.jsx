import React, { useState, useRef, useEffect, useCallback } from 'react'
import useReveal from '../hooks/useReveal'
import content from '../data/siteContent.json'
import '../assets/css/Projects.css'

const { projects } = content

const STATUS_CONFIG = {
  completed:     { label: 'Completed',   emoji: '✅', color: '#16a34a' },
  'in-progress': { label: 'In Progress', emoji: '🔄', color: '#f59e0b' },
  'coming-soon': { label: 'Coming Soon', emoji: '🚀', color: '#6366f1' },
}

const FILTERS = [
  { key: 'All',              label: 'All Projects' },
  { key: 'completed',        label: '✅ Completed',      type: 'status' },
  { key: 'in-progress',      label: '🔄 In Progress',    type: 'status' },
  { key: 'coming-soon',      label: '🚀 Coming Soon',    type: 'status' },
  { key: 'Web Development',  label: 'Web Dev',           type: 'category' },
  { key: 'Salesforce',       label: 'Salesforce',        type: 'category' },
  { key: 'DevOps',           label: 'DevOps',            type: 'category' },
  { key: 'AI / ML',          label: 'AI / ML',           type: 'category' },
  { key: 'Cloud',            label: 'Cloud',             type: 'category' },
]

const AUTO_INTERVAL = 4000

export default function Projects() {
  const titleRef = useReveal()
  const [activeFilter, setActiveFilter] = useState('All')
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState('next') // for animation direction
  const [paused, setPaused] = useState(false)
  const [progress, setProgress] = useState(0)
  const progressRef = useRef(null)
  const dragStart = useRef(0)
  const isDragging = useRef(false)
  const progressStart = useRef(null)

  const filtered = activeFilter === 'All'
    ? projects
    : FILTERS.find(f => f.key === activeFilter)?.type === 'status'
      ? projects.filter(p => p.status === activeFilter)
      : projects.filter(p => p.category === activeFilter)

  const total = filtered.length

  const goTo = useCallback((idx, dir = 'next') => {
    setDirection(dir)
    setCurrent((idx + total) % total)
    setProgress(0)
    progressStart.current = performance.now()
  }, [total])

  const next = useCallback(() => goTo(current + 1, 'next'), [current, goTo])
  const prev = useCallback(() => goTo(current - 1, 'prev'), [current, goTo])

  // Reset on filter change
  useEffect(() => {
    setCurrent(0)
    setProgress(0)
    progressStart.current = performance.now()
  }, [activeFilter])

  // Auto-slide + progress bar
  useEffect(() => {
    if (paused || total <= 1) {
      cancelAnimationFrame(progressRef.current)
      return
    }

    progressStart.current = performance.now()

    const tick = (now) => {
      const elapsed = now - progressStart.current
      const pct = Math.min((elapsed / AUTO_INTERVAL) * 100, 100)
      setProgress(pct)
      if (elapsed >= AUTO_INTERVAL) {
        setDirection('next')
        setCurrent(c => (c + 1) % total)
        progressStart.current = performance.now()
        setProgress(0)
      }
      progressRef.current = requestAnimationFrame(tick)
    }

    progressRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(progressRef.current)
  }, [paused, total, activeFilter])

  // Swipe / drag
  const onDragStart = (e) => {
    dragStart.current = e.type === 'touchstart' ? e.touches[0].clientX : e.clientX
    isDragging.current = true
    setPaused(true)
  }
  const onDragEnd = (e) => {
    if (!isDragging.current) return
    const end = e.type === 'touchend' ? e.changedTouches[0].clientX : e.clientX
    const diff = dragStart.current - end
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev()
    isDragging.current = false
    setPaused(false)
  }

  const p = filtered[current] || filtered[0]
  if (!p) return null
  const statusCfg = STATUS_CONFIG[p.status] || STATUS_CONFIG.completed

  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-tag">🗂️ Our Projects</span>
          <h2 className="section-title">Work We're <span className="gradient-text">Proud Of</span></h2>
          <p className="section-sub">From completed enterprise rollouts to exciting upcoming builds — here's what we've been working on.</p>
        </div>

        {/* Filter tabs */}
        <div className="proj-filters">
          {FILTERS.map(f => (
            <button
              key={f.key}
              className={`proj-filter-btn ${activeFilter === f.key ? 'active' : ''} ${f.type ? `filter-${f.type}` : ''}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Slider */}
        <div
          className="proj-slider-wrap"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Progress bar */}
          {/* <div className="proj-progress-bar">
            <div className="proj-progress-fill" style={{ width: `${progress}%` }} />
          </div> */}

          <div className="proj-slider-inner">
            <button className="proj-arrow proj-arrow-left" onClick={() => { prev(); setPaused(false) }} aria-label="Previous">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            <div
              className={`proj-slide slide-${direction}`}
              key={`${activeFilter}-${current}`}
              onMouseDown={onDragStart}
              onMouseUp={onDragEnd}
              onTouchStart={onDragStart}
              onTouchEnd={onDragEnd}
            >
              {/* Image */}
              <div className="proj-img-wrap" style={{ '--accent-color': p.color }}>
                <img src={p.image} alt={p.title} className="proj-img" draggable={false}
                  onError={e => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80&auto=format&fit=crop' }}
                />
                <div className="proj-img-overlay" />
                <span className={`proj-status-badge status-${p.status}`}>
                  {statusCfg.emoji} {statusCfg.label}
                </span>
                <span className="proj-year-badge">{p.year}</span>
                <span className="proj-counter">{current + 1} / {total}</span>
              </div>

              {/* Content */}
              <div className="proj-content" style={{ '--accent-color': p.color }}>
                <span className="proj-category" style={{ background: `${p.color}18`, color: p.color }}>
                  {p.category}
                </span>
                <h3 className="proj-title">{p.title}</h3>
                <div className="proj-client">Client: <strong>{p.client}</strong></div>
                <p className="proj-desc">{p.desc}</p>
                <div className="proj-tech">
                  {p.tech.map(t => <span key={t} className="proj-tech-tag">{t}</span>)}
                </div>
                <div className="proj-result" style={{ borderColor: p.color, color: p.color }}>
                  <span>📊</span> {p.result}
                </div>
                {p.url && (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="proj-live-btn"
                    style={{ background: `linear-gradient(135deg, ${p.color}, ${p.color}cc)` }}
                    onClick={e => e.stopPropagation()}
                  >
                    🔗 View Live Site
                  </a>
                )}
              </div>
            </div>

            <button className="proj-arrow proj-arrow-right" onClick={() => { next(); setPaused(false) }} aria-label="Next">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

          {/* Dots */}
          <div className="proj-dots">
            {filtered.map((item, i) => (
              <button
                key={item.id}
                className={`proj-dot ${i === current ? 'active' : ''}`}
                onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                aria-label={`Project ${i + 1}`}
                style={{ '--dot-color': item.color }}
              />
            ))}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="proj-thumbs">
          {filtered.map((item, i) => (
            <button
              key={item.id}
              className={`proj-thumb ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i, i > current ? 'next' : 'prev')}
              style={{ '--thumb-color': item.color }}
            >
              <img src={item.image} alt={item.title} draggable={false}
                onError={e => { e.target.onerror = null; e.target.src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=70&auto=format&fit=crop' }}
              />
              <div className="proj-thumb-overlay">
                <span className="proj-thumb-title">{item.title}</span>
              </div>
              <span className={`proj-thumb-badge status-${item.status}`}>
                {STATUS_CONFIG[item.status]?.emoji}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
