import { z } from 'zod'
import { useTranslations, type Locale } from '@/i18n'

// Build the localized service options + zod schema for a given locale.
export function getContactFormConfig(locale: Locale) {
  const t = useTranslations(locale)

  const SERVICE_OPTIONS = t.contact.form.services

  const contactFormSchema = z.object({
    name: z.string().min(2, t.contact.form.errors.name),
    email: z.string().email(t.contact.form.errors.email),
    service: z.string().min(1, t.contact.form.errors.service),
    message: z.string().min(10, t.contact.form.errors.message)
  })

  return { SERVICE_OPTIONS, contactFormSchema }
}

export type ContactFormValues = z.infer<ReturnType<typeof getContactFormConfig>['contactFormSchema']>
