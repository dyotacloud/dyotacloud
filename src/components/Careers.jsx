import React, { useState } from 'react'
import { MapPin, Clock, Briefcase, ChevronDown, ChevronUp, Send } from 'lucide-react'
import { jobs } from '../data/data'
import useReveal from '../hooks/useReveal'
import '../assets/css/Careers.css'

const culture = [
  { icon: '🌱', title: 'Grow Fast', desc: 'Certifications sponsored, conferences funded, learning budget provided.' },
  { icon: '🤝', title: 'Collaborative', desc: 'Flat hierarchy, open culture, and a team that celebrates wins together.' },
  { icon: '🏠', title: 'Flexible Work', desc: 'Remote-first with optional office in Noida. Work where you do your best.' },
  { icon: '💰', title: 'Great Pay', desc: 'Competitive salaries, performance bonuses, and ESOP for senior roles.' },
]

export default function Careers() {
  const [openJob, setOpenJob] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', role: '', message: '' })
  const [sent, setSent] = useState(false)
  const titleRef = useReveal()

  const handleSubmit = async e => {
    e.preventDefault()
    await fetch('https://dummyjson.com/posts/add', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: form.role, body: form.message, userId: 1 }),
    })
    setSent(true)
    setForm({ name: '', email: '', role: '', message: '' })
  }

  return (
    <section id="careers" className="careers-section">
      <div className="container">
        <div className="section-header reveal" ref={titleRef}>
          <span className="section-tag">💼 Careers</span>
          <h2 className="section-title">Join the <span className="gradient-text">Dyota Cloud Team</span></h2>
          <p className="section-sub">We're hiring passionate Salesforce and cloud professionals. Come build the future with us.</p>
        </div>

        <div className="culture-grid">
          {culture.map(c => (
            <div className="culture-card card" key={c.title}>
              <span className="culture-icon">{c.icon}</span>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>

        <h3 className="jobs-title">Open Positions</h3>
        <div className="jobs-list">
          {jobs.map(job => (
            <div className="job-item card" key={job.id}>
              <div className="job-header" onClick={() => setOpenJob(openJob === job.id ? null : job.id)}>
                <div className="job-info">
                  <h4>{job.title}</h4>
                  <div className="job-meta">
                    <span><MapPin size={12} /> {job.location}</span>
                    <span><Clock size={12} /> {job.type}</span>
                    <span><Briefcase size={12} /> {job.exp}</span>
                  </div>
                </div>
                <div className="job-right">
                  <div className="job-skills">{job.skills.map(s => <span key={s} className="job-skill">{s}</span>)}</div>
                  {openJob === job.id ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </div>
              {openJob === job.id && (
                <div className="job-apply">
                  <p>Interested? Send us your details and we'll get back within 48 hours.</p>
                  <a href="#careers-form" className="btn-primary job-apply-btn">Apply Now <Send size={13} /></a>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="careers-form-wrap card" id="careers-form">
          <h3>Apply Now</h3>
          <p>Fill in the form and our HR team will reach out within 48 hours.</p>
          {sent ? (
            <div className="apply-success">
              <span></span>
              <div><strong>Application Received!</strong><p>We'll review your profile and get back to you soon.</p></div>
            </div>
          ) : (
            <form className="careers-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input type="text" placeholder="Your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" placeholder="your@email.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
              </div>
              <div className="form-group">
                <label>Role Applying For *</label>
                <select value={form.role} onChange={e => setForm({ ...form, role: e.target.value })} required>
                  <option value="">Select a position</option>
                  {jobs.map(j => <option key={j.id} value={j.title}>{j.title}</option>)}
                </select>
              </div>
              <div className="form-group">
                <label>Cover Note</label>
                <textarea rows={4} placeholder="Tell us why you'd be a great fit..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
              </div>
              <button type="submit" className="btn-primary"><Send size={14} /><span>Submit Application</span></button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
