// SEO Configuration and Structured Data

export const seoConfig = {
  siteName: 'Dyota Cloud',
  siteUrl: 'https://www.dyotacloud.com',
  logo: 'https://www.dyotacloud.com/logo.png',
  description: 'Dyota Cloud Pvt Ltd is a leading Salesforce partner in India offering LWC, Apex development, CRM solutions, and cloud transformation services.',
  author: 'Dyota Cloud Pvt Ltd',
  email: 'contact@dyotacloud.com',
  phone: '+91-XXXXXXXXXX',
  address: 'India',
}

// Organization Structured Data
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Dyota Cloud Pvt Ltd',
  url: seoConfig.siteUrl,
  logo: seoConfig.logo,
  description: seoConfig.description,
  email: seoConfig.email,
  phone: seoConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IN',
    addressRegion: 'India',
  },
  sameAs: [
    'https://www.linkedin.com/company/dyota-cloud',
    'https://twitter.com/dyotacloud',
    'https://www.facebook.com/dyotacloud',
  ],
}

// Service Structured Data
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Dyota Cloud - Salesforce & IT Services',
  description: 'Salesforce development, LWC, Apex, CRM solutions, and cloud services',
  url: seoConfig.siteUrl,
  image: seoConfig.logo,
  priceRange: '$$',
  areaServed: 'IN',
  serviceType: ['Salesforce Development', 'LWC Development', 'Apex Development', 'CRM Solutions'],
}

// Breadcrumb Schema
export const breadcrumbSchema = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})
