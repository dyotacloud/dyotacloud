import React from 'react'
import content from '../data/siteContent.json'
import '../assets/css/TrustBar.css'

const { trustBar } = content

function LogoItem({ name, label }) {
  return (
    <div className="tb-item">
      <span className="tb-name">{name}</span>
      <span className="tb-label">{label}</span>
    </div>
  )
}

export default function TrustBar() {
  return (
    <div className="trustbar">
      <p className="trustbar-heading">{trustBar.heading}</p>
      <div className="tb-row">
        <div className="tb-track tb-ltr">
          {[...trustBar.row1, ...trustBar.row1].map((p, i) => <LogoItem key={i} {...p} />)}
        </div>
      </div>
      <div className="tb-row">
        <div className="tb-track tb-rtl">
          {[...trustBar.row2, ...trustBar.row2].map((p, i) => <LogoItem key={i} {...p} />)}
        </div>
      </div>
    </div>
  )
}
