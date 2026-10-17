// @ts-check
import { defineConfig } from 'astro/config'
import tailwindcss from '@tailwindcss/vite'
import sitemap from '@astrojs/sitemap'
import mdx from '@astrojs/mdx'
import react from '@astrojs/react'

export default defineConfig({
  site: process.env.SITE_URL || 'https://laura-diaz-portfolio.vercel.app',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    routing: {
      // English lives at "/", Spanish at "/es".
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false
    }
  },
  integrations: [
    react(),
    mdx(),
    sitemap({
      // Exclude nothing by default; i18n adds xhtml:link alternates automatically.
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          es: 'es-ES'
        }
      },
      serialize(item) {
        // Homepage - highest priority
        if (item.url.endsWith('/') && item.url.split('/').filter(Boolean).length === 0) {
          // @ts-expect-error - Valid sitemap changefreq value
          item.changefreq = 'daily'
          item.priority = 1.0
        }

        // Case study detail pages - high priority
        else if (item.url.includes('/case-study/')) {
          // @ts-expect-error - Valid sitemap changefreq value
          item.changefreq = 'monthly'
          item.priority = 0.8
        }

        // Contact page
        else if (item.url.includes('/contact')) {
          // @ts-expect-error - Valid sitemap changefreq value
          item.changefreq = 'monthly'
          item.priority = 0.7
        }

        // All other pages
        else {
          // @ts-expect-error - Valid sitemap changefreq value
          item.changefreq = 'weekly'
          item.priority = 0.6
        }

        return item
      }
    })
  ],
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto'
  },
  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: true,
      minify: 'esbuild'
    },
    ssr: {
      noExternal: ['@radix-ui/*']
    },

    // Pre-bundle the r3f/three stack up front so Vite never re-optimizes it mid-session — a
    // mid-session re-optimize swaps in a new module instance with a fresh React context, which
    // makes IdCard's Band throw "Hooks can only be used within the Canvas component!" even
    // though it's still rendered inside <Canvas>.
    // `<ClientRouter />` pulls these in through the `astro:transitions` virtual
    // module, which Vite's initial dep scan can't see. Without pre-declaring
    // them the optimizer re-runs on the first page load, changes its
    // browserHash mid-flight and 504s any module already served under the old
    // one ("Outdated Optimize Dep").
    optimizeDeps: {
      include: [
        'three',
        '@react-three/fiber',
        '@react-three/drei',
        '@react-three/rapier',
        'astro/virtual-modules/transitions-router.js',
        'astro/virtual-modules/transitions-types.js',
        'astro/virtual-modules/transitions-events.js',
        'astro/virtual-modules/transitions-swap-functions.js'
      ]
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'github-dark',
      wrap: true
    }
  }
})
