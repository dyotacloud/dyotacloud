// ── Dyota Cloud — Centralised SEO / Structured Data ──

export const SITE_URL = 'https://www.dyotacloud.com'
export const SITE_NAME = 'Dyota Cloud'
export const OG_IMAGE = `${SITE_URL}/og-image.png`

// ── Organization ──────────────────────────────────────────────
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}/#organization`,
  name: 'Dyota Cloud Pvt Ltd',
  legalName: 'Dyota Cloud Private Limited',
  url: SITE_URL,
  logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png`, width: 200, height: 60 },
  image: OG_IMAGE,
  description: 'Certified Salesforce Consulting Partner in India delivering Salesforce, cloud, DevOps & AI/ML solutions.',
  foundingDate: '2025',
  email: 'info@dyotacloud.com',
  telephone: '+17864054800',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Sector 62',
    addressLocality: 'Noida',
    addressRegion: 'Uttar Pradesh',
    postalCode: '201309',
    addressCountry: 'IN',
  },
  sameAs: [
    'https://www.linkedin.com/company/dyota-cloud',
    'https://twitter.com/dyotacloud',
    'https://www.facebook.com/dyotacloud',
    'https://www.instagram.com/dyotacloud',
  ],
}

// ── WebSite ───────────────────────────────────────────────────
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#website`,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { '@id': `${SITE_URL}/#organization` },
}

// ── BreadcrumbList ────────────────────────────────────────────
export const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'About', item: `${SITE_URL}/#about` },
    { '@type': 'ListItem', position: 3, name: 'Services', item: `${SITE_URL}/#services` },
    { '@type': 'ListItem', position: 4, name: 'Projects', item: `${SITE_URL}/#projects` },
    { '@type': 'ListItem', position: 5, name: 'Blog', item: `${SITE_URL}/#blog` },
    { '@type': 'ListItem', position: 6, name: 'Careers', item: `${SITE_URL}/#careers` },
    { '@type': 'ListItem', position: 7, name: 'Contact', item: `${SITE_URL}/#contact` },
  ],
}

// ── FAQPage ───────────────────────────────────────────────────
export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Dyota Cloud an official Salesforce partner?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes, Dyota Cloud is a certified Salesforce Consulting Partner since 2022 with 50+ certified experts.' },
    },
    {
      '@type': 'Question',
      name: 'What Salesforce services does Dyota Cloud offer?',
      acceptedAnswer: { '@type': 'Answer', text: 'We offer Salesforce implementation, Apex development, LWC development, API integration, data migration, and 24/7 support & maintenance.' },
    },
    {
      '@type': 'Question',
      name: 'Where is Dyota Cloud located?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dyota Cloud is headquartered in Sector 62, Noida, Uttar Pradesh, India. We serve clients globally.' },
    },
    {
      '@type': 'Question',
      name: 'How many projects has Dyota Cloud delivered?',
      acceptedAnswer: { '@type': 'Answer', text: 'Dyota Cloud has delivered 200+ enterprise projects across 15+ industries since 2019.' },
    },
    {
      '@type': 'Question',
      name: 'Does Dyota Cloud offer cloud services beyond Salesforce?',
      acceptedAnswer: { '@type': 'Answer', text: 'Yes. We offer AWS, Azure, GCP cloud architecture, DevOps & CI/CD pipelines, AI/ML solutions, and web & mobile development.' },
    },
  ],
}

// ── Helper: Article schema for blog posts ─────────────────────
export const articleSchema = ({ title, description, image, datePublished, url }) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: title,
  description,
  image,
  datePublished,
  url,
  author: { '@id': `${SITE_URL}/#organization` },
  publisher: { '@id': `${SITE_URL}/#organization` },
})
