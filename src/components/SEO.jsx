import { Helmet } from 'react-helmet'

export default function SEO({
  title = 'Dyota Cloud Pvt Ltd | Salesforce Partner & Cloud Solutions Company',
  description = 'Dyota Cloud Pvt Ltd is a leading Salesforce partner in India offering LWC, Apex development, CRM solutions, and cloud transformation services for businesses.',
  keywords = 'Dyota Cloud, Salesforce Partner, CRM Solutions, Apex Development, LWC Development, Salesforce Services India',
  url = 'https://www.dyotacloud.com/',
  image = 'https://www.dyotacloud.com/logo.png',
  type = 'website',
  author = 'Dyota Cloud Pvt Ltd',
  structuredData = null
}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Dyota Cloud" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  )
}
