import React, { useEffect, useState, useRef } from 'react'
import { Star } from 'lucide-react'
import useReveal from '../hooks/useReveal'
import '../assets/css/Testimonials.css'

const companies = ["Razorpay", "Zomato", "BYJU'S", "Meesho", "Groww", "PhonePe", "Swiggy", "Paytm", "Ola"]
const roles = ['VP Engineering', 'CTO', 'Head of Sales', 'Product Director', 'IT Manager', 'CEO', 'COO', 'CFO', 'Director']

function TestiCard({ r, company, role }) {
  return (
    <div className="testi-card card">
      <div className="testi-quote">"</div>
      <div className="testi-stars">{[...Array(5)].map((_, j) => <Star key={j} size={13} fill="#fbbf24" color="#fbbf24" />)}</div>
      <p className="testi-text">{r.body}</p>
      <div className="testi-author">
        <img src={`https://i.pravatar.cc/44?img=${r.id + 2}`} alt="" className="testi-avatar" />
        <div>
          <strong>{r.user?.username || `Client ${r.id}`}</strong>
          <span>{role} · {company}</span>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const [reviews, setReviews] = useState([])
  const titleRef = useReveal()
  const track1Ref = useRef(null)
  const track2Ref = useRef(null)

  useEffect(() => {
    fetch('https://dummyjson.com/comments?limit=9')
      .then(r => r.json())
      .then(d => setReviews(d.comments))
  }, [])

  const row1 = reviews.slice(0, 5)
  const row2 = reviews.slice(4, 9)

  const pauseAnim = (ref) => { if (ref.current) ref.current.style.animationPlayState = 'paused' }
  const resumeAnim = (ref) => { if (ref.current) ref.current.style.animationPlayState = 'running' }

  return (
    <section className="testi-section">
      <div className="container">
        <div className="testi-top reveal" ref={titleRef}>
          <span className="section-tag">❤️ Testimonials</span>
          <h2 className="section-title">What Our Clients <span className="gradient-text">Say</span></h2>
          <p className="section-sub">Trusted by 200+ companies across industries worldwide.</p>
        </div>
      </div>

      {reviews.length > 0 && (
        <>
          {/* Row 1 — left to right */}
          <div className="testi-row-wrap"
            onMouseEnter={() => pauseAnim(track1Ref)}
            onMouseLeave={() => resumeAnim(track1Ref)}
          >
            <div className="testi-track testi-ltr" ref={track1Ref}>
              {[...row1, ...row1].map((r, i) => (
                <TestiCard key={i} r={r}
                  company={companies[r.id % companies.length]}
                  role={roles[r.id % roles.length]}
                />
              ))}
            </div>
          </div>

          {/* Row 2 — right to left */}
          <div className="testi-row-wrap"
            onMouseEnter={() => pauseAnim(track2Ref)}
            onMouseLeave={() => resumeAnim(track2Ref)}
          >
            <div className="testi-track testi-rtl" ref={track2Ref}>
              {[...row2, ...row2].map((r, i) => (
                <TestiCard key={i} r={r}
                  company={companies[r.id % companies.length]}
                  role={roles[r.id % roles.length]}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </section>
  )
}
