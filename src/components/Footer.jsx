import React from 'react'
import { Twitter, Linkedin, Github, Youtube, Instagram, Mail, Phone } from 'lucide-react'
import { FaCloud, FaMedal, FaStar, FaHeart } from 'react-icons/fa'
import content from '../data/siteContent.json'
import '../assets/css/Footer.css'

const { footer, company } = content

const badgeIcons = [FaCloud, FaMedal, FaStar]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src="/logo.png" alt="Dyota Cloud" className="logo-img" />
            <span>{company.name.replace('Cloud', '')}<strong>Cloud</strong></span>
          </div>
          <p>{footer.desc}</p>
          <div className="footer-contact">
            <a href={`mailto:${company.email}`}><Mail size={13} /> {company.email}</a>
            <a href={`tel:${company.phone.replace(/\s/g,'')}`}><Phone size={13} /> {company.phone}</a>
          </div>
          <div className="footer-socials">
            {/* {[Linkedin, Twitter, Github, Youtube, Instagram].map((Icon, i) => ( */}
              {[Linkedin].map((Icon, i) => (
              <a key={i} href="https://www.linkedin.com/in/dyotacloud/" target='_blank' aria-label="social"><Icon size={15} /></a>
            ))}
          </div>
          <div className="footer-badges">
            {footer.badges.map((b, i) => {
              const BadgeIcon = badgeIcons[i]
              return <span key={b}>{BadgeIcon && <BadgeIcon size={12} />} {b}</span>
            })}
          </div>
        </div>

        {Object.entries(footer.cols).map(([group, items]) => (
          <div className="footer-col" key={group}>
            <h5>{group}</h5>
            <ul>{items.map(item => <li key={item}><a href="#">{item}</a></li>)}</ul>
          </div>
        ))}
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>{company.copyright}</span>
          {/* <span>Made with <FaHeart style={{ display:'inline', color:'#22c55e', verticalAlign:'middle' }} size={12} /> in India 🇮🇳</span> */}
        </div>
      </div>
    </footer>
  )
}
