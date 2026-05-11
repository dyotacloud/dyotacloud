import { Helmet } from 'react-helmet'

const SITE_URL = 'https://www.dyotacloud.com'
const SITE_NAME = 'Dyota Cloud'
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`

export default function SEO({
  title = 'Dyota Cloud Pvt Ltd | Salesforce Partner & IT Solutions India',
  description = 'Dyota Cloud is a certified Salesforce Consulting Partner in India with 5+ years experience. Salesforce implementation, Apex & LWC development, cloud, DevOps & AI/ML for enterprises.',
  keywords = 'Salesforce partner India, Salesforce consulting partner India, Apex development India, LWC development India, Salesforce implementation Noida, CRM solutions India, cloud computing India, DevOps services India, AI ML solutions India, hire Salesforce developer India, IT company Noida, Dyota Cloud, digital transformation India, Salesforce certified partner, enterprise CRM India, Salesforce developer Noida, software company Noida',
  url = `${SITE_URL}/`,
  image = DEFAULT_IMAGE,
  type = 'website',
  author = 'Dyota Cloud Pvt Ltd',
  structuredData = null,
  noIndex = false,
}) {
  const fullTitle = title.includes('Dyota Cloud') ? title : `${title} | Dyota Cloud`

  return (
    <Helmet>
      {/* ── Core ── */}
      <html lang="en" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={noIndex ? 'noindex, nofollow' : 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1'} />
      <meta name="theme-color" content="#00A1E0" />

      {/* ── Canonical ── */}
      <link rel="canonical" href={url} />

      {/* ── Open Graph ── */}
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${SITE_NAME} - Salesforce Partner & IT Solutions`} />
      <meta property="og:locale" content="en_IN" />

      {/* ── Twitter ── */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@dyotacloud" />
      <meta name="twitter:creator" content="@dyotacloud" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={`${SITE_NAME} - Salesforce Partner`} />

      {/* ── Structured Data ── */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
