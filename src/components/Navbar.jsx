import { useState, useEffect } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import content from '../data/siteContent.json'
import '../assets/css/Navbar.css'

const { navbar, company } = content

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [dark, setDark] = useState(() => {
    // Check localStorage for saved preference
    const saved = localStorage.getItem('theme')
    return saved ? saved === 'dark' : false
  })

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    // Apply theme to document
    if (dark) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.setAttribute('data-theme', 'light')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  const toggle = () => setDark(!dark)

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <a href="#home" className="nav-logo">
            <img src="/logo.png" alt="Dyota Cloud" className="logo-img" />
            <span>{company.name.replace('Cloud', '')}<strong>Cloud</strong></span>
          </a>

          <ul className="nav-links">
            {navbar.links.map(l => (
              <li key={l.label}><a href={l.href}>{l.label}</a></li>
            ))}
          </ul>

          <div className="nav-actions">
            <button className="theme-btn" onClick={toggle} aria-label="Toggle theme">
              {dark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <a href={navbar.ctaHref} className="btn-primary submit-btn">{navbar.ctaText}</a>
            <button className="hamburger" onClick={() => setOpen(true)} aria-label="Menu">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-nav ${open ? 'open' : ''}`}>
        <div className="mobile-nav-head">
          <a href="#home" className="nav-logo" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="Dyota Cloud" className="logo-img" />
            <span>{company.name.replace('Cloud', '')}<strong>Cloud</strong></span>
          </a>
          <button onClick={() => setOpen(false)} className="close-btn" aria-label="Close"><X size={20} /></button>
        </div>
        <ul className="mobile-links">
          {navbar.links.map(l => (
            <li key={l.label}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
          ))}
        </ul>
        <a href={navbar.ctaHref} className="btn-primary mobile-cta" onClick={() => setOpen(false)}>{navbar.ctaText}</a>
      </div>
      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}
    </>
  )
}
