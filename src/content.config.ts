import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const caseStudies = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
    base: './src/content/case-studies',
    // The EN and ES variants of a case study share the same frontmatter `slug`, and the
    // default id uses `data.slug`, which made the two locales overwrite each other in the
    // content store. Derive the id from the file path so both variants coexist.
    generateId: ({ entry }) => entry.replace(/\.(md|mdx)$/, '')
  }),
  schema: z.object({
    lang: z.enum(['en', 'es']).default('en'),
    slug: z.string(),
    title: z.string(),
    description: z.string(),
    organisation: z.string().optional(),
    role: z.string().optional(),
    duration: z.string().optional(),
    tools: z.array(z.string()).default([]),
    publishedAt: z.string(),
    image: z.string().optional(),
    heroImage: z.string().optional(),
    logo: z.string().optional()
  })
})

export const collections = { 'case-studies': caseStudies }
