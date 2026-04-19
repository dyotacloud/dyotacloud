import React from 'react'
import { CheckCircle, ArrowRight } from 'lucide-react'
import SEO from './SEO'
import useReveal from '../hooks/useReveal'
import content from '../data/siteContent.json'
import { Icon } from '../utils/iconMap'
import '../assets/css/About.css'

const { about } = content

export default function About() {
  const leftRef = useReveal()
  const rightRef = useReveal()

  return (
    <section id="about" className="about-section">
      <SEO 
        title="About Dyota Cloud | Salesforce Partner & IT Solutions Company"
        description="Learn about Dyota Cloud - a leading Salesforce partner in India with expertise in LWC, Apex, CRM solutions, and digital transformation services."
        keywords="About Dyota Cloud, Salesforce partner, IT company India, CRM solutions, digital transformation, cloud services"
        url="https://www.dyotacloud.com/#about"
      />
      <div className="about-bg" />
      <div className="container about-inner">
        <div className="about-left reveal" ref={leftRef}>
          <div className="about-img-wrap">
            <img src={about.image} alt={about.imageAlt} className="about-img" />
            <div className="about-img-badge">
              <span><Icon name={about.imageBadge.icon} size={18} /></span>
              <div>
                <strong>{about.imageBadge.title}</strong>
                <span>{about.imageBadge.sub}</span>
              </div>
            </div>
          </div>

          <span className="section-tag"><Icon name="FaBuilding" size={13} /> About Us</span>
          <h2 className="section-title">
            {about.heading}<br />
            <span className="gradient-text">{about.headingHighlight}</span>
          </h2>
          <p className="about-desc">{about.desc1}</p>
          <p className="about-desc">{about.desc2}</p>

          <div className="about-highlights">
            {about.highlights.map(h => (
              <div key={h} className="about-highlight">
                <CheckCircle size={15} color="#00A1E0" />
                <span>{h}</span>
              </div>
            ))}
          </div>

          <a href="#contact" className="btn-primary about-cta">
            {about.cta} <ArrowRight size={15} />
          </a>
        </div>

        <div className="about-right reveal" ref={rightRef}>
          <div className="timeline">
            <h3 className="timeline-title">Our Journey</h3>
            {about.milestones.map(m => (
              <div className="timeline-item" key={m.year}>
                <div className="timeline-dot" />
                <div className="timeline-content">
                  <div className="timeline-year">{m.year}</div>
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="about-values">
            {about.values.map(v => (
              <div className="value-card card" key={v.title}>
                <span className="value-icon"><Icon name={v.icon} size={20} /></span>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
