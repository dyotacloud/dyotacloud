import React, { useEffect } from 'react'
import SEO from './components/SEO'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
import Salesforce from './components/Salesforce'
import Services from './components/Services'
import Industries from './components/Industries'
import WhyUs from './components/WhyUs'
import CaseStudies from './components/CaseStudies'
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Blog from './components/Blog'
import Careers from './components/Careers'
import Contact from './components/Contact'
import Footer from './components/Footer'
import TrustBar from './components/TrustBar'
import ClienteleBar from './components/ClienteleBar'
import FloatingWidgets from './components/FloatingWidgets'

export default function App() {
  useEffect(() => {
    // Initialize theme from localStorage or system preference
    const saved = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const theme = saved || (prefersDark ? 'dark' : 'light')
    document.documentElement.setAttribute('data-theme', theme)
  }, [])

  return (
    <>
      <SEO />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <About />
        <Salesforce />
        <Services />
        <Industries />
        <WhyUs />
        <CaseStudies />
        <ClienteleBar />
        <Testimonials />
        {/* If you want disply meet out team section then uncomment this line */}
        <Team />
        <Blog />
        {/* If you want display Careers job section */}
        <Careers />
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  )
}
