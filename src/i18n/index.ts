// Internationalization (i18n) core
// Central configuration + helpers for the EN/ES locale routing and translations.

import { en } from '@/i18n/translations/en'
import { es } from '@/i18n/translations/es'

export const LOCALES = ['en', 'es'] as const
export type Locale = (typeof LOCALES)[number]

export const DEFAULT_LOCALE: Locale = 'en'

// Human-readable labels for the language switcher.
export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  es: 'ES'
}

export const translations: Record<Locale, typeof en> = { en, es }

// Detect the locale from an Astro URL pathname ("/" -> en, "/es/..." -> es).
export function localeFromPath(pathname: string): Locale {
  const segment = pathname.split('/').filter(Boolean)[0]

  return (LOCALES as readonly string[]).includes(segment) ? (segment as Locale) : DEFAULT_LOCALE
}

// Strip the locale prefix from a pathname ("/es/case-study/x" -> "/case-study/x", "/es" -> "/").
export function stripLocale(pathname: string, locale: Locale): string {
  const segments = pathname.split('/').filter(Boolean)

  if (segments[0] === locale) segments.shift()
  const rest = segments.join('/')

  return rest ? `/${rest}` : '/'
}

// Build the equivalent path in the other locale ("/case-study/x" -> "/es/case-study/x").
export function localizePath(pathname: string, target: Locale): string {
  const clean = stripLocale(pathname, localeFromPath(pathname))

  if (target === DEFAULT_LOCALE) return clean

  return clean === '/' ? `/${target}` : `/${target}${clean}`
}

// Typed translator helper — returns the nested translation object for a locale.
export function useTranslations<T extends Locale>(locale: T): (typeof translations)[T] {
  return translations[locale] as (typeof translations)[T]
}
