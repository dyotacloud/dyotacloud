import React from 'react'
import content from '../data/siteContent.json'
import '../assets/css/ClienteleBar.css'

const { clienteleBar } = content

function ClientItem({ name, industry }) {
  return (
    <div className="cl-item">
      <span className="cl-name">{name}</span>
      <span className="cl-industry">{industry}</span>
    </div>
  )
}

export default function ClienteleBar() {
  return (
    <div className="clientelebar">
      <p className="clientelebar-heading">{clienteleBar.heading}</p>
      <div className="cl-row">
        <div className="cl-track cl-forward">
          {[...clienteleBar.row1, ...clienteleBar.row1].map((c, i) => <ClientItem key={i} {...c} />)}
        </div>
      </div>
      <div className="cl-row">
        <div className="cl-track cl-reverse">
          {[...clienteleBar.row2, ...clienteleBar.row2].map((c, i) => <ClientItem key={i} {...c} />)}
        </div>
      </div>
    </div>
  )
}
