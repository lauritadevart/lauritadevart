import { getCollection, type CollectionEntry } from 'astro:content'
import type { Locale } from '@/i18n'

export type CaseStudyMetadata = {
  slug: string
  lang?: 'en' | 'es'
  title?: string
  description?: string
  organisation?: string
  role?: string
  duration?: string
  tools?: string[]
  publishedAt?: string
  image?: string
  heroImage?: string
  logo?: string
}

export async function getAllCaseStudies(lang?: Locale): Promise<CollectionEntry<'case-studies'>[]> {
  const caseStudies = await getCollection('case-studies', entry => (lang ? entry.data.lang === lang : true))

  return caseStudies.sort((a, b) => new Date(b.data.publishedAt).valueOf() - new Date(a.data.publishedAt).valueOf())
}

export async function getCaseStudies(limit?: number, lang?: Locale): Promise<CaseStudyMetadata[]> {
  const caseStudies = await getAllCaseStudies(lang)
  const metadata = caseStudies.map(entry => entry.data)

  return limit ? metadata.slice(0, limit) : metadata
}

export async function getCaseStudyBySlug(slug: string, lang?: Locale): Promise<CollectionEntry<'case-studies'> | null> {
  const caseStudies = await getAllCaseStudies(lang)

  return caseStudies.find(entry => entry.data.slug === slug) ?? null
}
