import SEO from './components/SEO'
import Loader from './components/Loader'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import About from './components/About'
// import Salesforce from './components/Salesforce'   // COMMENTED — see HIDDEN_SECTIONS.txt
import Services from './components/Services'
// import Industries from './components/Industries'   // COMMENTED — see HIDDEN_SECTIONS.txt
import Projects from './components/Projects'
import WhyUs from './components/WhyUs'
// import CaseStudies from './components/CaseStudies' // COMMENTED — see HIDDEN_SECTIONS.txt
import Testimonials from './components/Testimonials'
import Team from './components/Team'
import Blog from './components/Blog'
// import Careers from './components/Careers'  // COMMENTED — see HIDDEN_SECTIONS.txt
import Contact from './components/Contact'
import Footer from './components/Footer'
import TrustBar from './components/TrustBar'
import ClienteleBar from './components/ClienteleBar'
import FloatingWidgets from './components/FloatingWidgets'

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',     item: 'https://www.dyotacloud.com/' },
    { '@type': 'ListItem', position: 2, name: 'About',    item: 'https://www.dyotacloud.com/#about' },
    { '@type': 'ListItem', position: 3, name: 'Services', item: 'https://www.dyotacloud.com/#services' },
    { '@type': 'ListItem', position: 4, name: 'Projects', item: 'https://www.dyotacloud.com/#projects' },
    { '@type': 'ListItem', position: 5, name: 'Blog',     item: 'https://www.dyotacloud.com/#blog' },
    { '@type': 'ListItem', position: 6, name: 'Careers',  item: 'https://www.dyotacloud.com/#careers' },
    { '@type': 'ListItem', position: 7, name: 'Contact',  item: 'https://www.dyotacloud.com/#contact' },
  ],
}

export default function App() {
  return (
    <>
      <SEO structuredData={breadcrumbSchema} />
      <Loader />
      <Navbar />
      <main>
        <Hero />
        {/* <TrustBar /> */}
        <Stats />
        <About />

        {/* <Salesforce /> */}

        <Services />

        {/* <Industries /> */}

        <Projects />
        <WhyUs />

        {/* <CaseStudies /> */}

        {/* <ClienteleBar /> */}
        {/* <Testimonials /> */}
        {/* <Team /> */}
        {/* <Blog /> */}
        {/* <Careers /> */}
        <Contact />
      </main>
      <Footer />
      <FloatingWidgets />
    </>
  )
}
