// Spanish site metadata — mirrors the SITE_METADATA shape in src/consts.ts.
// Used by HeadSeo.astro when rendering the Spanish (es) locale.

import { SITE_URL, AUTHOR } from '@/consts'

export const SITE_METADATA = {
  title: {
    template: '%s — Laura Díaz Pérez',
    default: 'Laura Díaz Pérez — Desarrolladora Web Senior y Especialista en E-commerce'
  },
  description:
    'Desarrolladora Web Senior con más de 5 años de experiencia creando y optimizando sitios web y tiendas en línea con WordPress, Elementor, WooCommerce, Shopify y SEO. Disponible para trabajo remoto internacional.',
  keywords: [
    'Desarrolladora Web Senior',
    'Desarrolladora WordPress',
    'Experta en Elementor',
    'WooCommerce',
    'Shopify',
    'Desarrolladora E-commerce',
    'SEO',
    'Desarrolladora Freelance',
    'Trabajo Remoto',
    'Cuba'
  ],
  authors: [{ name: AUTHOR.name, url: SITE_URL }],
  creator: AUTHOR.name,
  publisher: AUTHOR.name,
  language: 'es',
  locale: 'es_ES',
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
    locale: 'es_ES',
    siteName: AUTHOR.name,
    title: 'Laura Díaz Pérez — Desarrolladora Web Senior y Especialista en E-commerce',
    description:
      'Desarrolladora Web Senior con más de 5 años de experiencia creando y optimizando sitios web y tiendas en línea con WordPress, Elementor, WooCommerce, Shopify y SEO.',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Laura Díaz Pérez — Desarrolladora Web Senior',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: AUTHOR.name,
    creator: AUTHOR.name,
    title: 'Laura Díaz Pérez — Desarrolladora Web Senior y Especialista en E-commerce',
    description:
      'Desarrolladora Web Senior con más de 5 años de experiencia creando y optimizando sitios web y tiendas en línea con WordPress, WooCommerce, Shopify y SEO.',
    images: ['/images/og-image.png']
  },
  verification: {
    google: '',
    yandex: '',
    bing: ''
  }
}
