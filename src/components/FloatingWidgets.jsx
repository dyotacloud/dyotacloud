import React, { useState, useEffect, useRef } from 'react'
import { ArrowUp, MessageCircle, X, Send, Star, ThumbsUp } from 'lucide-react'
import content from '../data/siteContent.json'
import '../assets/css/FloatingWidgets.css'

const { company } = content

// AI auto-responses based on keywords
const getAIResponse = (msg) => {
  const m = msg.toLowerCase()
  if (m.match(/price|cost|pricing|budget|charge/))
    return "Our pricing depends on project scope. For a custom quote, please share your requirements at contact@dyotacloud.com or book a free consultation. 💼"
  if (m.match(/salesforce|crm|sales cloud|service cloud|marketing cloud/))
    return "We're an official Salesforce Consulting Partner with 5+ years of experience. We handle implementation, customization, Apex/LWC development, and migrations. Want to schedule a call? "
  if (m.match(/aws|azure|cloud|devops|kubernetes|docker/))
    return "We offer full-stack cloud services on AWS, Azure & GCP — including architecture, migration, CI/CD pipelines, and managed services. Tell me more about your project! ☁️"
  if (m.match(/mobile|app|react native|flutter|android|ios/))
    return "We build cross-platform mobile apps with React Native & Flutter. From MVP to enterprise-grade apps — we've got you covered. 📱"
  if (m.match(/ai|ml|machine learning|artificial intelligence|einstein/))
    return "Our AI/ML team works on predictive analytics, NLP, computer vision, and Salesforce Einstein integrations. What problem are you trying to solve? 🤖"
  if (m.match(/career|job|hiring|vacancy|apply|work/))
    return "We're always looking for talented people! Check our Careers section on this page or send your resume to careers@dyotacloud.com. "
  if (m.match(/contact|email|phone|reach|talk|call/))
    return `You can reach us at contact@dyotacloud.com or call ${company.phone}. Or just book a free consultation using the button above! 📞`
  if (m.match(/hello|hi|hey|hii|namaste/))
    return "Hey there! 👋 I'm Dyota's AI assistant. Ask me anything about our Salesforce, cloud, or IT services — I'm here to help!"
  if (m.match(/thank|thanks|great|awesome|good/))
    return "Happy to help! 😊 Feel free to ask anything else or book a free consultation with our experts."
  if (m.match(/time|duration|how long|timeline|delivery/))
    return "Typical Salesforce implementations take 4–8 weeks. Complex enterprise projects may take 3–6 months. We always deliver on time! ⚡"
  return "Thanks for reaching out! 🙌 For detailed assistance, our team is available at contact@dyotacloud.com. Or would you like to book a free consultation?"
}

const INITIAL_MSG = { from: 'bot', text: "Hi! 👋 I'm Dyota's AI assistant. How can I help you today? Ask about our Salesforce, cloud, or IT services!" }

export default function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const [messages, setMessages] = useState([INITIAL_MSG])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const [rating, setRating] = useState(0)
  const [feedbackText, setFeedbackText] = useState('')
  const [feedbackDone, setFeedbackDone] = useState(false)
  const bottomRef = useRef(null)

  useEffect(() => {
    const fn = () => setShowTop(window.scrollY > 400)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing])

  const sendMessage = () => {
    const text = input.trim()
    if (!text) return
    setMessages(prev => [...prev, { from: 'user', text }])
    setInput('')
    setTyping(true)
    setTimeout(() => {
      setTyping(false)
      setMessages(prev => [...prev, { from: 'bot', text: getAIResponse(text) }])
    }, 900 + Math.random() * 600)
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
        <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
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
        <ThumbsUp size={15} />
        <span>Feedback</span>
      </button> */}

      {/* AI Chat button */}
      {/* <button className="chat-trigger" onClick={() => { setChatOpen(o => !o); setFeedbackOpen(false) }} aria-label="AI Chat">
        {chatOpen ? <X size={20} /> : <MessageCircle size={20} />}
      </button> */}

      {/* AI Chat window */}
      {chatOpen && (
        <div className="chat-window">
          <div className="chat-header">
            <div className="chat-avatar">🤖</div>
            <div>
              <strong>Dyota AI Assistant</strong>
              <span className="chat-status"><span className="online-dot" />Online</span>
            </div>
            <button onClick={() => setChatOpen(false)} className="chat-close"><X size={16} /></button>
          </div>

          <div className="chat-messages">
            {messages.map((m, i) => (
              <div key={i} className={`chat-msg ${m.from}`}>
                {m.from === 'bot' && <span className="msg-avatar">🤖</span>}
                <span className="msg-bubble">{m.text}</span>
              </div>
            ))}
            {typing && (
              <div className="chat-msg bot">
                <span className="msg-avatar">🤖</span>
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
              placeholder="Ask anything..."
              className="chat-input"
            />
            <button onClick={sendMessage} className="chat-send" aria-label="Send">
              <Send size={15} />
            </button>
          </div>
        </div>
      )}

      {/* Feedback window */}
      {feedbackOpen && (
        <div className="feedback-window">
          <div className="chat-header">
            <div className="chat-avatar">💬</div>
            <div><strong>Share Feedback</strong><span className="chat-status">We'd love to hear from you</span></div>
            <button onClick={() => setFeedbackOpen(false)} className="chat-close"><X size={16} /></button>
          </div>

          {feedbackDone ? (
            <div className="feedback-done">
              <span></span>
              <strong>Thank you!</strong>
              <p>Your feedback helps us improve.</p>
            </div>
          ) : (
            <div className="feedback-body">
              <p className="feedback-q">How was your experience?</p>
              <div className="star-row">
                {[1,2,3,4,5].map(s => (
                  <button key={s} className={`star-btn ${rating >= s ? 'active' : ''}`} onClick={() => setRating(s)}>
                    <Star size={24} fill={rating >= s ? '#f59e0b' : 'none'} color={rating >= s ? '#f59e0b' : '#6b7280'} />
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
      )}
    </>
  )
}
