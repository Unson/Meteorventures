export const Head = () => {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Meteor Ventures - Veteran-owned SEO and digital marketing agency helping small businesses get found online. Expert SEO strategy, technical fixes, and targeted ad campaigns." />
      <meta name="keywords" content="SEO, digital marketing, local SEO, web optimization, Philadelphia" />
      <meta name="theme-color" content="#0a0015" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Meteor Ventures - SEO & Digital Marketing Agency" />
      <meta property="og:description" content="Veteran-owned SEO and digital marketing agency helping small businesses get found online." />
      <meta property="og:image" content="https://static.wixstatic.com/media/ca33ee_6dcf35694fff417dafe85309b4013119~mv2.png?originWidth=1152&originHeight=576" />
      <meta property="og:url" content="https://meteorventures.com" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Meteor Ventures - SEO & Digital Marketing Agency" />
      <meta name="twitter:description" content="Veteran-owned SEO and digital marketing agency helping small businesses get found online." />
      <meta name="twitter:image" content="https://static.wixstatic.com/media/ca33ee_9aa87b6534ad461ea602780140a97a2e~mv2.png?originWidth=1152&originHeight=576" />
      
      {/* Canonical */}
      <link rel="canonical" href="https://meteorventures.com" />
      
      {/* Fonts */}
      <link rel="preconnect" href="https://static.parastorage.com" />
      
      {/* Structured Data - Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Meteor Ventures",
            "url": "https://meteorventures.com",
            "logo": "https://static.wixstatic.com/media/ca33ee_82d23ff1853f424a95a0622312fec653~mv2.png?originWidth=576&originHeight=576",
            "description": "Veteran-owned SEO and digital marketing agency",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Philadelphia",
              "addressRegion": "PA",
              "addressCountry": "US"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "telephone": "+1-215-948-2839",
              "email": "shane@meteorventures.com"
            },
            "sameAs": [
              "https://www.linkedin.com/company/meteor-ventures",
              "https://www.facebook.com/meteorventures"
            ]
          })
        }}
      />
      
      {/* Structured Data - LocalBusiness */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Meteor Ventures",
            "image": "https://static.wixstatic.com/media/ca33ee_5f4e2ff58b07402497c582cbd80352a4~mv2.png?originWidth=576&originHeight=576",
            "description": "Veteran-owned SEO and digital marketing agency helping small businesses get found online",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Philadelphia",
              "addressRegion": "PA",
              "addressCountry": "US"
            },
            "telephone": "+1-215-948-2839",
            "email": "shane@meteorventures.com",
            "priceRange": "$",
            "areaServed": "US",
            "serviceType": ["SEO", "Digital Marketing", "Web Optimization"]
          })
        }}
      />
    </>
  );
};
