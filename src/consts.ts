// Site Configuration
// Centralized configuration for site metadata, SEO, and branding.

// TODO(personal): replace with your real production domain before deploying (see new.md).
// Vercel will assign you a *.vercel.app URL — set the SITE_URL env var or update this fallback.
export const SITE_URL = process.env.SITE_URL || 'https://laura-diaz-portfolio.vercel.app'

// Personal info — edit these with your real contact details (placeholders marked with TODO).
export const AUTHOR = {
  name: 'Laura Díaz Pérez',
  firstName: 'Laura',
  role: 'Senior Web Developer',
  roleEs: 'Desarrolladora Web Senior',
  specialty: 'WordPress & E-commerce Specialist',
  location: 'Cuba',
  availability: 'Open to remote work',
  email: 'lauritadevart@gmail.com',
  phone: '+5355283038',
  whatsapp: 'https://wa.me/5355283038'
}

// Site title & description (English defaults; Spanish handled via i18n dictionaries).
export const SITE_TITLE = 'Laura Díaz Pérez — Senior Web Developer & E-commerce Specialist'
export const SITE_DESCRIPTION =
  'Senior Web Developer with 5+ years of experience building and optimizing websites and online stores with WordPress, Elementor, WooCommerce, Shopify, and SEO. Available for remote international work.'

export const GITHUB_URL = 'https://github.com/lauradiaz' // TODO(personal)
export const LINKEDIN_URL = 'https://linkedin.com/in/lauradiaz' // TODO(personal)
export const INSTAGRAM_URL = 'https://instagram.com/lauradiaz' // TODO(personal)
export const TWITTER_URL = 'https://twitter.com/lauradiaz' // TODO(personal)

export const SITE_METADATA = {
  title: {
    template: '%s — Laura Díaz Pérez',
    default: SITE_TITLE
  },
  description: SITE_DESCRIPTION,
  keywords: [
    'Senior Web Developer',
    'WordPress Developer',
    'Elementor Expert',
    'WooCommerce',
    'Shopify',
    'E-commerce Developer',
    'SEO',
    'Freelance Web Developer',
    'Remote Developer',
    'Cuba'
  ],
  authors: [{ name: AUTHOR.name, url: SITE_URL }],
  creator: AUTHOR.name,
  publisher: AUTHOR.name,
  robots: {
    index: true,
    follow: true
  },
  language: 'en',
  locale: 'en_US',
  icons: {
    icon: [
      { url: '/favicon/favicon.ico', sizes: '48x48' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' }
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: [{ url: '/favicon/favicon.ico' }]
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: AUTHOR.name,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Laura Díaz Pérez — Senior Web Developer',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: TWITTER_URL,
    creator: TWITTER_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/images/og-image.png']
  },
  verification: {
    google: '', // TODO(personal): Add your Google verification code
    yandex: '',
    bing: ''
  }
}

// Social media links
export const SOCIAL_LINKS = {
  github: GITHUB_URL,
  linkedin: LINKEDIN_URL,
  instagram: INSTAGRAM_URL,
  twitter: TWITTER_URL,
  whatsapp: AUTHOR.whatsapp,
  email: `mailto:${AUTHOR.email}`
}

// Person / structured data for SEO (schema.org Person).
export const PERSON_INFO = {
  name: AUTHOR.name,
  jobTitle: AUTHOR.role,
  jobTitleEs: AUTHOR.roleEs,
  url: SITE_URL,
  email: AUTHOR.email,
  address: {
    addressLocality: '',
    addressCountry: 'CU'
  },
  sameAs: [GITHUB_URL, LINKEDIN_URL, INSTAGRAM_URL, TWITTER_URL].filter(Boolean)
}
