import React from 'react'
import { Linkedin, Twitter, Github } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import content from '../data/siteContent.json'
import '../assets/css/Team.css'

const { team } = content

export default function Team() {
  const titleRef = useReveal()

  return (
    <section className="team-section">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-tag">👥 Our Team</span>
          <h2 className="section-title">Meet Our <span className="gradient-text">Expert Team</span></h2>
          <p className="section-sub">50+ certified Salesforce and cloud professionals dedicated to your success.</p>
        </div>
        <div className="team-grid">
          {team.map((m, i) => <TeamCard key={m.id} m={m} delay={i * 0.07} />)}
        </div>
      </div>
    </section>
  )
}

function TeamCard({ m, delay }) {
  const ref = useReveal()
  return (
    <div className="team-card card reveal" ref={ref} style={{ transitionDelay: `${delay}s`, padding: 0 }}>
      <div className="team-img-wrap">
        <img src={m.image} alt={`${m.firstName} ${m.lastName}`} className="team-img"
          onError={e => { e.target.src = `https://ui-avatars.com/api/?name=${m.firstName}+${m.lastName}&background=0070D2&color=fff&size=300` }} />
        <div className="team-overlay">
          <a href="#" aria-label="LinkedIn"><Linkedin size={15} /></a>
          <a href="#" aria-label="Twitter"><Twitter size={15} /></a>
          <a href="#" aria-label="GitHub"><Github size={15} /></a>
        </div>
      </div>
      <div className="team-info">
        <h4>{m.firstName} {m.lastName}</h4>
        <div className="team-role">{m.title}</div>
        <div className="team-cert">🏅 {m.cert}</div>
      </div>
    </div>
  )
}
