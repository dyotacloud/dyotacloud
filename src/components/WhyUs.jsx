import React from 'react'
import { whyUs } from '../data/data'
import useReveal from '../hooks/useReveal'
import { Icon } from '../utils/iconMap'
import '../assets/css/WhyUs.css'

function WhyCard({ w, delay }) {
  const ref = useReveal()
  return (
    <div className="why-card card reveal" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <span className="why-icon"><Icon name={w.icon} size={22} /></span>
      <h4>{w.title}</h4>
      <p>{w.desc}</p>
    </div>
  )
}

export default function WhyUs() {
  const titleRef = useReveal()
  const ctaRef = useReveal()
  return (
    <section className="why-section">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-tag">✦ Why Choose Us</span>
          <h2 className="section-title">Why Companies <span className="gradient-text">Choose Dyota Cloud</span></h2>
          <p className="section-sub">We don't just implement software — we become your long-term technology partner committed to your growth.</p>
        </div>
        <div className="why-grid">
          {whyUs.map((w, i) => <WhyCard key={w.title} w={w} delay={i * 0.07} />)}
        </div>
        <div className="why-cta reveal" ref={ctaRef}>
          <div>
            <h3>Ready to transform your business with Salesforce?</h3>
            <p>Join 200+ companies already growing with Dyota Cloud.</p>
          </div>
          <a href="#contact" className="why-cta-btn">Contact Us <span>→</span></a>
        </div>
      </div>
    </section>
  )
}
