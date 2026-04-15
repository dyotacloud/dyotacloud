import React from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import { salesforceServices, salesforceClouds } from '../data/data'
import useReveal from '../hooks/useReveal'
import { Icon } from '../utils/iconMap'
import '../assets/css/Salesforce.css'

export default function Salesforce() {
  const titleRef = useReveal()
  const servicesRef = useReveal()
  const cloudsRef = useReveal()
  const benefitsRef = useReveal()

  return (
    <section id="salesforce" className="sf-section">
      <div className="sf-bg" />
      <div className="container">

        {/* Header */}
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-tag"><Icon name="FaCloud" size={13} /> Salesforce Partner</span>
          <h2 className="section-title">
            Your Certified <span className="gradient-text">Salesforce Partner</span>
          </h2>
          <p className="section-sub">
            From Sales Cloud to Commerce Cloud — we implement, customize, and support every Salesforce product
            with certified expertise and a proven 5+ year track record.
          </p>
        </div>

        {/* Partner badges */}
        <div className="sf-partner-row">
          {['Consulting Partner', 'ISV Partner', 'AppExchange Listed', 'Crest Partner'].map(b => (
            <div className="sf-partner-badge" key={b}>
              <Icon name="FaCloud" size={14} className="sf-badge-cloud" />
              <span>{b}</span>
            </div>
          ))}
        </div>

        {/* Services — card grid, NO tabs */}
        <div className="sf-services-header reveal" ref={servicesRef}>
          <h3>Salesforce Services</h3>
          <p>Everything you need to get the most out of Salesforce — from day one to long-term success.</p>
        </div>
        <div className="sf-services-grid">
          {salesforceServices.map((s, i) => (
            <SfServiceCard key={s.id} s={s} delay={i * 0.07} />
          ))}
        </div>

        {/* Salesforce Clouds */}
        <div className="sf-clouds-wrap reveal" ref={cloudsRef}>
          <div className="sf-clouds-header">
            <h3>Salesforce Clouds We Implement</h3>
            <p>Certified expertise across the full Salesforce product suite.</p>
          </div>
          <div className="sf-clouds-grid">
            {salesforceClouds.map(c => (
              <div className="sf-cloud-card card" key={c.name}>
                <span className="sf-cloud-icon"><Icon name={c.icon} size={22} /></span>
                <h4>{c.name}</h4>
                <p>{c.desc}</p>
                <a href="#contact" className="sf-cloud-link">
                  Get Started <ArrowRight size={13} />
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits strip */}
        <div className="sf-benefits reveal" ref={benefitsRef}>
          {[
            { icon: 'FaMedal',    title: 'Certified Experts', desc: '50+ Salesforce certified developers, architects & consultants on our team.' },
            { icon: 'FaSyncAlt', title: 'Agile Delivery', desc: '2-week sprints, daily standups, and continuous delivery for faster time-to-value.' },
            { icon: 'FaLink',    title: 'End-to-End Solutions', desc: 'Strategy → Implementation → Support. One partner for the full journey.' },
          ].map(b => (
            <div className="sf-benefit" key={b.title}>
              <span className="sf-benefit-icon"><Icon name={b.icon} size={20} /></span>
              <div>
                <h4>{b.title}</h4>
                <p>{b.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

function SfServiceCard({ s, delay }) {
  const ref = useReveal()
  return (
    <div className="sf-svc-card card reveal" ref={ref} style={{ transitionDelay: `${delay}s` }}>
      <div className="sf-svc-icon"><Icon name={s.icon} size={22} /></div>
      <h4>{s.title}</h4>
      <p>{s.desc}</p>
      <div className="sf-svc-features">
        {['Certified Delivery', 'Agile Sprints', 'Post Go-Live Support'].map(f => (
          <span key={f} className="sf-svc-feature">
            <CheckCircle size={11} color="#00A1E0" /> {f}
          </span>
        ))}
      </div>
    </div>
  )
}
