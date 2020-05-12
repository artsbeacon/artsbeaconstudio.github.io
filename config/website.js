module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Arts Beacon', // Navigation and Site Title
  titleAlt: 'Arts Beacon Website', // Title for JSONLD
  description: 'Arts Beacon is a creative arts studio offering classes, commissions, and art consultations.',
  headline: 'Learn more about Arts Beacon', // Headline for schema.org JSONLD
  url: 'https://www.artsbeacon.com', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: '/img/logo-b.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'Arts Beacon', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Arts Beacon', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@artsbeacon', // Twitter Username
  facebook: 'artsbeacon', // Facebook Site Name
  googleAnalyticsID: 'UA-124558697-1',

  skipNavId: 'reach-skip-nav', // ID for the "Skip to content" a11y feature
}
