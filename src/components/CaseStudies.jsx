import React from 'react'
import { caseStudies } from '../data/data'
import useReveal from '../hooks/useReveal'
import '../assets/css/CaseStudies.css'

function CaseCard({ c, delay }) {
  const ref = useReveal()
  return (
    <div className="case-card card reveal" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="case-top" style={{ borderTop: `4px solid ${c.color}` }}>
        <span className="case-industry" style={{ background: `${c.color}18`, color: c.color }}>{c.industry}</span>
        <h3>{c.title}</h3>
        <div className="case-client">Client: <strong>{c.client}</strong></div>
      </div>
      <div className="case-body">
        <p>{c.desc}</p>
        <div className="case-tech">
          {c.tech.map(t => <span key={t} className="case-tech-tag">{t}</span>)}
        </div>
        <div className="case-result" style={{ color: c.color }}>
          <span>📈</span> {c.result}
        </div>
      </div>
    </div>
  )
}

export default function CaseStudies() {
  const titleRef = useReveal()
  return (
    <section id="portfolio" className="cases-section">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-tag">📁 Portfolio</span>
          <h2 className="section-title">Real Results for <span className="gradient-text">Real Businesses</span></h2>
          <p className="section-sub">Explore how we've helped companies achieve measurable outcomes with Salesforce and cloud technology.</p>
        </div>
        <div className="cases-grid">
          {caseStudies.map((c, i) => <CaseCard key={c.id} c={c} delay={i * 0.07} />)}
        </div>
      </div>
    </section>
  )
}
