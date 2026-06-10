import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle, ShieldCheck } from 'lucide-react'
import { FaEnvelope, FaCheckCircle } from 'react-icons/fa'
import SEO from './SEO'
import useReveal from '../hooks/useReveal'
import content from '../data/siteContent.json'
import '../assets/css/Contact.css'

const { company } = content
const services = ['Salesforce Implementation', 'Apex & LWC Development', 'API Integration', 'Cloud Infrastructure', 'DevOps & CI/CD', 'AI/ML Solutions', 'Other']

/* ── Dummy reCAPTCHA-style widget ── */
function DummyCaptcha({ checked, onChange, error }) {
  const [verifying, setVerifying] = useState(false)

  const handleCheck = () => {
    if (checked || verifying) return
    setVerifying(true)
    setTimeout(() => {
      setVerifying(false)
      onChange(true)
    }, 1200)
  }

  return (
    <div className={`dummy-captcha${error ? ' captcha-has-error' : ''}`}>
      <div className="dummy-captcha-inner">
        {/* Checkbox area */}
        <button
          type="button"
          className={`captcha-checkbox${verifying ? ' verifying' : ''}${checked ? ' checked' : ''}`}
          onClick={handleCheck}
          aria-label="Verify you are human"
        >
          {verifying && <span className="captcha-spinner" />}
          {checked && !verifying && <CheckCircle size={18} color="#fff" strokeWidth={3} />}
        </button>

        {/* Label */}
        <span className="captcha-label">I'm not a robot</span>

        {/* Google branding block (dummy) */}
        <div className="captcha-brand">
          <div className="captcha-brand-logo">
            <ShieldCheck size={22} color="#4285F4" />
          </div>
          <span className="captcha-brand-name">reCAPTCHA</span>
          <span className="captcha-brand-links">Privacy · Terms</span>
        </div>
      </div>
      {error && <p className="captcha-error">Please verify that you're not a robot.</p>}
    </div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [captchaDone, setCaptchaDone] = useState(false)
  const [captchaError, setCaptchaError] = useState(false)
  const leftRef = useReveal()
  const rightRef = useReveal()

  const handleSubmit = async e => {
    e.preventDefault()
    if (!captchaDone) {
      setCaptchaError(true)
      return
    }
    setCaptchaError(false)
    setLoading(true)
    await fetch('https://dummyjson.com/posts/add', {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title: form.service || 'Contact', body: form.message, userId: 1 }),
    })
    setLoading(false)
    setSent(true)
  }

  const handleSendAnother = () => {
    setSent(false)
    setCaptchaDone(false)
    setCaptchaError(false)
  }

  return (
    <section id="contact" className="contact-section">
      <SEO
        title="Contact Dyota Cloud | Free Salesforce Consultation | Noida India"
        description="Contact Dyota Cloud for Salesforce implementation, Apex & LWC development, cloud infrastructure, DevOps & AI/ML solutions. Free consultation. Based in Noida, serving clients globally."
        keywords="contact Salesforce partner India, Salesforce consultation free, hire Salesforce developer Noida, Salesforce implementation quote India, IT services contact Noida, Dyota Cloud contact, Salesforce project inquiry India, cloud solutions consultation India"
        url="https://www.dyotacloud.com/#contact"
      />
      <div className="contact-bg" />
      <div className="container contact-inner">
        <div className="contact-info reveal" ref={leftRef}>
          <span className="section-tag"><FaEnvelope size={13} /> Contact</span>
          <h2 className="section-title">Let's Start Your <span className="gradient-text">Transformation</span></h2>
          <p className="contact-desc">
            Ready to implement Salesforce or modernize your cloud infrastructure?
            Our certified experts are ready to help — no obligation, just a real conversation.
          </p>
          <div className="contact-cards">
            {[
              { Icon: Mail,   label: 'Email',  val: company.email },
              { Icon: Phone,  label: 'Phone',  val: company.phone },
              { Icon: MapPin, label: 'Office', val: company.address },
            ].map(({ Icon, label, val }) => (
              <div className="contact-card" key={label}>
                <div className="contact-icon"><Icon size={17} color="var(--green)" /></div>
                <div><strong>{label}</strong><span>{val}</span></div>
              </div>
            ))}
          </div>
          <div className="contact-map">
            <iframe
              title="Dyota Cloud Office"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.0!2d77.3649!3d28.6273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM3JzM4LjMiTiA3N8KwMjEnNTMuNiJF!5e0!3m2!1sen!2sin!4v1"
              width="100%" height="180"
              style={{ border: 0, borderRadius: 12 }}
              allowFullScreen="" loading="lazy"
            />
          </div>
          <div className="trust-row">
            {['ISO 27001', 'SOC 2', 'GDPR Ready', '99.9% SLA'].map(b => (
              <div className="trust-chip" key={b}><CheckCircle size={12} color="#00A1E0" /> {b}</div>
            ))}
          </div>
        </div>

        <div className="contact-form-wrap card reveal" ref={rightRef}>
          {sent ? (
            <div className="contact-success">
              <div className="success-icon"><FaCheckCircle size={48} color="var(--green)" /></div>
              <h3>Message Sent!</h3>
              <p>Our team will reach out within 24 hours.</p>
              <button className="btn-primary" onClick={handleSendAnother}>Send Another</button>
            </div>
          ) : (
            <>
              <div className="form-head">
                <h3>Book a Free Consultation</h3>
                <p>Fill in your details and we'll get back within 24 hours.</p>
              </div>
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name *</label>
                    <input type="text" placeholder="Enter your name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Email *</label>
                    <input type="email" placeholder="Enter your email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Phone</label>
                    <input type="tel" placeholder="Enter your mobile number" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div className="form-group">
                    <label>Service</label>
                    <select value={form.service} onChange={e => setForm({ ...form, service: e.target.value })}>
                      <option value="">Select service</option>
                      {services.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea rows={5} placeholder="Tell us about your project..." value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                </div>

                <DummyCaptcha
                  checked={captchaDone}
                  onChange={setCaptchaDone}
                  error={captchaError}
                />

                <button type="submit" className="btn-primary submit-btn" disabled={loading}>
                  {loading ? <><span className="spinner" /> Sending...</> : <><Send size={14} /><span>Send Message</span></>}
                </button>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
