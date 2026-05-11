import React from 'react'
import SEO from './SEO'
import { industries } from '../data/data'
import useReveal from '../hooks/useReveal'
import { Icon } from '../utils/iconMap'
import '../assets/css/Industries.css'

function IndCard({ ind, delay }) {
  const ref = useReveal()
  return (
    <div className="ind-card card reveal" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <span className="ind-icon"><Icon name={ind.icon} size={24} /></span>
      <h3>{ind.name}</h3>
      <p>{ind.desc}</p>
    </div>
  )
}

export default function Industries() {
  const titleRef = useReveal()
  return (
    <section id="industries" className="ind-section">
      <SEO 
        title="Industry-Specific Salesforce Solutions | Healthcare Finance Retail | Dyota Cloud"
        description="Dyota Cloud delivers Salesforce solutions tailored for Healthcare, Finance, Retail, Education, Manufacturing & Logistics. Deep domain expertise, 200+ enterprise projects delivered."
        keywords="Salesforce healthcare India, Salesforce finance CRM, Salesforce retail solutions, Salesforce manufacturing India, Salesforce education sector, Salesforce logistics India, industry specific CRM India, enterprise Salesforce solutions, vertical CRM India, Dyota Cloud industries"
        url="https://www.dyotacloud.com/#industries"
      />
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-tag"><Icon name="FaIndustry" size={13} /> Industries</span>
          <h2 className="section-title">Industries We <span className="gradient-text">Transform</span></h2>
          <p className="section-sub">Deep domain expertise across 6 key industries — we speak your language and understand your challenges.</p>
        </div>
        <div className="ind-grid">
          {industries.map((ind, i) => <IndCard key={ind.name} ind={ind} delay={i * 0.07} />)}
        </div>
      </div>
    </section>
  )
}
