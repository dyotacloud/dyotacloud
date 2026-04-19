import React from 'react'
import SEO from './SEO'
import { itServices } from '../data/data'
import useReveal from '../hooks/useReveal'
import { Icon } from '../utils/iconMap'
import '../assets/css/Services.css'

function ServiceCard({ s, delay }) {
  const ref = useReveal()
  return (
    <div className="svc-card card reveal" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="svc-top">
        <span className="svc-icon"><Icon name={s.icon} size={22} /></span>
        <div className="svc-tags">
          {s.tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
        </div>
      </div>
      <h3>{s.title}</h3>
      <p>{s.desc}</p>
      <span className="svc-link">Explore →</span>
    </div>
  )
}

export default function Services() {
  const titleRef = useReveal()
  return (
    <section id="services" className="services-section">
      <SEO 
        title="Salesforce & IT Services | LWC, Apex, CRM Solutions | Dyota Cloud"
        description="Dyota Cloud offers comprehensive Salesforce services including LWC development, Apex programming, CRM implementation, and full-stack technology solutions."
        keywords="Salesforce services, LWC development, Apex development, CRM implementation, IT services, cloud solutions, Salesforce consulting"
        url="https://www.dyotacloud.com/#services"
      />
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-tag"><Icon name="FaCode" size={13} /> IT Services</span>
          <h2 className="section-title">
            Full-Stack <span className="gradient-text">Technology Services</span>
          </h2>
          <p className="section-sub">
            Beyond Salesforce — we build, deploy, and scale complete technology solutions
            across web, mobile, cloud, and AI for enterprise clients.
          </p>
        </div>
        <div className="svc-grid">
          {itServices.map((s, i) => <ServiceCard key={s.id} s={s} delay={i * 0.07} />)}
        </div>
      </div>
    </section>
  )
}
