import React, { useState, useEffect, useRef } from 'react'
import { ArrowUp, MessageCircle, X, Send, Star, ThumbsUp, Phone, Mail, Globe, Building2, CheckCircle } from 'lucide-react'
import {
  FaSalesforce, FaCloud, FaRobot, FaMobileAlt, FaMoneyBillWave,
  FaUserTie, FaPhoneAlt, FaRocket, FaBriefcase, FaServer,
  FaCode, FaHandshake, FaEnvelope, FaMapMarkerAlt
} from 'react-icons/fa'
import content from '../data/siteContent.json'
import '../assets/css/FloatingWidgets.css'

const { company } = content

// ── Quick-reply option chips ──────────────────────────────────
const QUICK_OPTIONS = [
  { label: 'Salesforce Services',  text: 'Tell me about your Salesforce services',       Icon: FaBriefcase },
  { label: 'Cloud & DevOps',       text: 'What cloud and DevOps services do you offer?', Icon: FaCloud },
  { label: 'AI / ML Solutions',    text: 'Tell me about AI and ML solutions',            Icon: FaRobot },
  { label: 'Web & Mobile Dev',     text: 'Do you build web and mobile apps?',            Icon: FaMobileAlt },
  { label: 'Pricing & Timeline',   text: 'What is the cost and timeline for a project?', Icon: FaMoneyBillWave },
  { label: 'Hire a Developer',     text: 'I want to hire a Salesforce developer',        Icon: FaUserTie },
  { label: 'Contact Us',           text: 'contact details email phone address',        Icon: FaPhoneAlt },
  { label: 'Free Consultation',    text: 'I want a free consultation',                   Icon: FaRocket },
]

// ── AI response engine ────────────────────────────────────────
const getAIResponse = (msg) => {
  const m = msg.toLowerCase()

  if (m.match(/contact|email|phone|reach|talk|call|whatsapp|address|details/))
    return `Here's how to reach us:\n\n🏢  ${company.name}\n📧  ${company.email}\n📞  ${company.phone}\n📍  ${company.address}\n🌐  www.dyotacloud.com\n\nWe respond within 24 hours. Scroll down to our Contact section to book a free consultation!`

  if (m.match(/salesforce|crm|sales cloud|service cloud|marketing cloud|apex|lwc|lightning/))
    return `We are an official Salesforce Consulting Partner with 5+ years of experience.\n\nOur Salesforce services:\n- Implementation & Setup\n- Apex & LWC Development\n- API & MuleSoft Integration\n- Data Migration\n- 24/7 Support & Maintenance\n\nReach us: ${company.email}`

  if (m.match(/aws|azure|gcp|cloud|devops|kubernetes|docker|ci.?cd|pipeline/))
    return `We offer full-stack cloud & DevOps services.\n\n- AWS, Azure & GCP Architecture\n- Cloud Migration & Managed Services\n- CI/CD Pipeline Automation\n- Kubernetes & Docker\n- Zero-downtime Deployments\n\nTell us about your project!`

  if (m.match(/ai|ml|machine learning|artificial intelligence|einstein|predict/))
    return `Our AI/ML team builds smart solutions.\n\n- Salesforce Einstein AI Integration\n- Predictive Analytics & Lead Scoring\n- NLP & Chatbot Development\n- Computer Vision Solutions\n- Custom ML Model Training\n\nWhat problem are you solving with AI?`

  if (m.match(/mobile|app|react native|flutter|android|ios|web|react|node/))
    return `We build high-performance web & mobile apps.\n\n- React.js & Node.js Web Apps\n- React Native & Flutter Mobile Apps\n- Cross-platform iOS & Android\n- Progressive Web Apps (PWA)\n- Enterprise-grade UI/UX\n\nShare your idea and we'll bring it to life!`

  if (m.match(/price|cost|pricing|budget|charge|rate|quote|timeline|how long|duration/))
    return `Pricing depends on project scope.\n\n- Small projects: 2-4 weeks\n- Mid-size: 1-3 months\n- Enterprise: 3-6 months\n\nWe offer competitive rates for all business sizes.\n\nEmail: ${company.email}\nCall: ${company.phone}\n\nOr book a FREE consultation on this page!`

  if (m.match(/hire|developer|resource|team|staff|dedicated/))
    return `You can hire certified developers from Dyota Cloud!\n\n- Salesforce Developers (Apex, LWC)\n- Salesforce Architects\n- React & Node.js Developers\n- DevOps Engineers\n- AI/ML Engineers\n\nEngagement: Full-time, Part-time, Project-based\n\nEmail: ${company.email}\nCall: ${company.phone}`

  if (m.match(/consultation|consult|free call|meeting|demo|discuss/))
    return `Book your FREE consultation now!\n\nScroll down to our Contact section and fill in the form — our experts will reach out within 24 hours.\n\nOr reach us directly:\nEmail: ${company.email}\nCall: ${company.phone}`

  if (m.match(/career|job|hiring|vacancy|apply|work with|join/))
    return `We are always looking for talented people!\n\nOpen roles:\n- Salesforce Developer\n- Salesforce Architect\n- React.js Developer\n- DevOps Engineer\n- Business Analyst\n\nSend your resume to: careers@dyotacloud.com\nOr check the Careers section on this page!`

  if (m.match(/about|who are you|company|dyota|founded|experience/))
    return `About ${company.name}:\n\n- Founded: 2019\n- 5+ years of experience\n- 50+ certified experts\n- 200+ enterprise projects\n- Official Salesforce Consulting Partner\n- ISO 27001 certified\n- Serving India, US, UK & more\n\nLocation: Sector 62, Noida, India`

  if (m.match(/hello|hi|hey|hii|namaste|good morning|good afternoon/))
    return `Great to have you here!\n\nI am Dyota's AI assistant. I can help you with:\n- Salesforce services\n- Cloud & DevOps\n- AI/ML solutions\n- Hiring developers\n- Pricing & timelines\n\nWhat can I help you with today?`

  if (m.match(/thank|thanks|great|awesome|good|perfect|nice/))
    return `Happy to help!\n\nFeel free to ask anything else. If you are ready to start a project, our team is just one message away!\n\nEmail: ${company.email}\nCall: ${company.phone}`

  return `Thanks for reaching out to ${company.name}!\n\nFor detailed assistance:\nEmail: ${company.email}\nCall: ${company.phone}\nWeb: www.dyotacloud.com\n\nOr use the quick options below to explore our services!`
}

const WELCOME_MSG = {
  from: 'bot',
  text: `Welcome to ${company.name}!\n\nI am your AI assistant. Choose a topic below or type your question — I am here to help!`,
  showOptions: true,
}

export default function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [messages, setMessages] = useState([WELCOME_MSG])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [rating, setRating] = useState(0)
  const [feedbackText, setFeedbackText] = useState('')
  const [feedbackDone, setFeedbackDone] = useState(false)
  const [showGoodbye, setShowGoodbye] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendMessage = (text) => {
    const t = (text || input).trim()
    if (!t) return
    setMessages(prev => [...prev, { from: 'user', text: t }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: getAIResponse(t), showOptions: true }])
    }, 700 + Math.random() * 500)
  }

  const handleClose = () => {
    setShowGoodbye(true)
    setChatOpen(false)
    setTimeout(() => setShowGoodbye(false), 5000)
  }

  const handleOpen = () => {
    setChatOpen(true)
    setShowGoodbye(false)
    setFeedbackOpen(false)
  }

  const submitFeedback = () => {
    if (!rating) return
    setFeedbackDone(true)
  }

  return (
    <>
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${company.whatsapp}?text=Hi%20Dyota%20Cloud%2C%20I%27d%20like%20to%20discuss%20a%20project.`}
        target="_blank" rel="noopener noreferrer"
        className="wa-btn" aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span>WhatsApp</span>
      </a>

      {/* Scroll to top */}
      {showTop && (
        <button className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">
          <ArrowUp size={17} />
        </button>
      )}

      {/* Feedback button */}
      {/* <button className="feedback-trigger" onClick={() => { setFeedbackOpen(true); setChatOpen(false) }} aria-label="Feedback">
        <ThumbsUp size={14} />
        <span>Feedback</span>
      </button> */}

      {/* AI Chat button */}
      <button className="chat-trigger" onClick={chatOpen ? handleClose : handleOpen} aria-label="AI Chat">
        {chatOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button>

      {/* ── Goodbye card ── */}
      {showGoodbye && (
        <div className="goodbye-card">
          <button className="goodbye-close" onClick={() => setShowGoodbye(false)}><X size={12} /></button>
          <div className="goodbye-icon-wrap">
            <FaHandshake size={28} color="#00A1E0" />
          </div>
          <strong>Thanks for visiting!</strong>
          <div className="goodbye-info">
            <span><Building2 size={12} /> {company.name}</span>
            <a href={`mailto:${company.email}`}><FaEnvelope size={11} /> {company.email}</a>
            <a href={`tel:${company.phone.replace(/\s/g,'')}`}><Phone size={12} /> {company.phone}</a>
            <span><Globe size={12} /> www.dyotacloud.com</span>
          </div>
          <p>We will respond within 24 hours!</p>
        </div>
      )}

      {/* ── AI Chat window ── */}
      {chatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-avatar-icon"><FaRobot size={18} /></div>
            <div>
              <strong>Dyota AI Assistant</strong>
              <span className="chat-status"><span className="online-dot" />Online · Replies instantly</span>
            </div>
            <button onClick={handleClose} className="chat-close" aria-label="Close"><X size={16} /></button>
          </div>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i}>
                <div className={`chat-msg ${m.from}`}>
                  {m.from === 'bot' && (
                    <span className="msg-avatar-icon"><FaRobot size={14} /></span>
                  )}
                  <span className="msg-bubble" style={{ whiteSpace: 'pre-line' }}>{m.text}</span>
                </div>
                {m.from === 'bot' && m.showOptions && i === messages.length - 1 && (
                  <div className="quick-options">
                    {QUICK_OPTIONS.map(opt => (
                      <button key={opt.label} className="quick-chip" onClick={() => sendMessage(opt.text)}>
                        <opt.Icon size={11} />
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot">
                <span className="msg-avatar-icon"><FaRobot size={14} /></span>
                <span className="msg-bubble typing"><span /><span /><span /></span>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="chat-input-row">
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && sendMessage()}
              placeholder="Type a message or pick an option..."
              className="chat-input"
            />
            <button onClick={() => sendMessage()} className="chat-send" aria-label="Send">
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* ── Feedback window ── */}
      {/* {feedbackOpen && (
        <div className="feedback-window">
          <div className="chat-header">
            <div className="chat-avatar-icon"><MessageCircle size={18} /></div>
            <div><strong>Share Feedback</strong><span className="chat-status">We'd love to hear from you</span></div>
            <button onClick={() => setFeedbackOpen(false)} className="chat-close"><X size={16} /></button>
          </div>
          {feedbackDone ? (
            <div className="feedback-done">
              <CheckCircle size={40} color="#16a34a" />
              <strong>Thank you!</strong>
              <p>Your feedback helps us improve.</p>
            </div>
          ) : (
            <div className="feedback-body">
              <p className="feedback-q">How was your experience?</p>
              <div className="star-row">
                {[1,2,3,4,5].map(s => (
                  <button key={s} className={`star-btn ${rating >= s ? 'active' : ''}`} onClick={() => setRating(s)}>
                    <Star size={24} fill={rating >= s ? '#f59e0b' : 'none'} color={rating >= s ? '#f59e0b' : '#9ca3af'} />
                  </button>
                ))}
              </div>
              <textarea
                className="feedback-textarea"
                placeholder="Tell us more (optional)..."
                value={feedbackText}
                onChange={e => setFeedbackText(e.target.value)}
                rows={3}
              />
              <button className="feedback-submit" onClick={submitFeedback} disabled={!rating}>
                Submit Feedback
              </button>
            </div>
          )}
        </div>
      )} */}
    </>
  )
}
