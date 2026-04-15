import React, { useEffect, useRef } from 'react'
import { ArrowRight, Play, CheckCircle, Award, Users, Briefcase } from 'lucide-react'
import content from '../data/siteContent.json'
import '../assets/css/Hero.css'

const { hero } = content

const iconMap = { Award, Briefcase, Users }

export default function Hero() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.width = canvas.offsetWidth
    let H = canvas.height = canvas.offsetHeight
    const pts = Array.from({ length: 55 }, () => ({
      x: Math.random() * W, y: Math.random() * H,
      r: Math.random() * 1.6 + 0.3,
      dx: (Math.random() - 0.5) * 0.22,
      dy: (Math.random() - 0.5) * 0.22,
      o: Math.random() * 0.35 + 0.08,
    }))
    let raf
    const draw = () => {
      ctx.clearRect(0, 0, W, H)
      pts.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0,161,224,${p.o})`; ctx.fill()
        p.x += p.dx; p.y += p.dy
        if (p.x < 0 || p.x > W) p.dx *= -1
        if (p.y < 0 || p.y > H) p.dy *= -1
      })
      raf = requestAnimationFrame(draw)
    }
    draw()
    const resize = () => { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight }
    window.addEventListener('resize', resize)
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize) }
  }, [])

  return (
    <section id="home" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="container hero-inner">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            {hero.badge}
          </div>

          <h1 className="hero-h1">
            {hero.heading1}
            <span className="hero-hl"> {hero.heading2}</span>
            <span className="hero-hl2"> {hero.heading3}</span>
          </h1>

          <div className="hero-checks">
            {hero.checks.map(c => (
              <div key={c} className="hero-check">
                <CheckCircle size={15} color="#00A1E0" />
                <span>{c}</span>
              </div>
            ))}
          </div>

          <div className="hero-cta">
            <a href={hero.cta.primaryHref} className="btn-primary hero-btn">
              {hero.cta.primary} <ArrowRight size={16} />
            </a>
            <a href={hero.cta.secondaryHref} className="btn-outline hero-btn-2">
              <Play size={13} fill="currentColor" /> {hero.cta.secondary}
            </a>
          </div>

          <div className="hero-trust">
            {hero.trust.map(({ icon, val, label }) => {
              const Icon = iconMap[icon]
              return (
                <div key={label} className="trust-item">
                  <div className="trust-icon">{Icon && <Icon size={18} color="#00A1E0" />}</div>
                  <div>
                    <strong>{val}</strong>
                    <span>{label}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="hero-right">
          <div className="hero-img-wrap">
            <img src={hero.image} alt={hero.imageAlt} className="hero-img" />
          </div>
        </div>
      </div>

      <div className="hero-wave">
        <svg viewBox="0 0 1440 70" preserveAspectRatio="none">
          <path d="M0,35 C360,70 1080,0 1440,35 L1440,70 L0,70 Z" fill="var(--bg)" />
        </svg>
      </div>
    </section>
  )
}
