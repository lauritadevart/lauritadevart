import Eyebrow from '@/components/shared/eyebrow/eyebrow'
import ProfileShowcase from '@/components/shared/profile-showcase'
import ContactForm from '@/components/contact/contact-form/contact-form'
import { useTranslations, type Locale } from '@/i18n'

type ContactHeroProps = {
  locale?: Locale
}

const ContactHero = ({ locale = 'en' }: ContactHeroProps) => {
  const t = useTranslations(locale)

  return (
    <section className='border-b py-8 sm:py-16 lg:py-24'>
      <div className='mx-auto max-w-245 space-y-10 px-4 sm:px-6 lg:space-y-16 lg:px-10.5'>
        <div className='max-w-2xl space-y-2'>
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <h1 className='text-2xl font-semibold sm:text-3xl lg:text-[36px]'>{t.contact.title}</h1>
        </div>

        <div className='grid gap-8 lg:grid-cols-2 lg:items-start'>
          <ContactForm className='order-2 lg:order-1' locale={locale} />

          <ProfileShowcase
            className='order-1 mx-auto max-h-130 w-full lg:order-2'
            backgroundImageClassName='max-h-93.5 w-full'
            profileImageClassName='max-w-105'
            locale={locale}
          />
        </div>
      </div>
    </section>
  )
}

export default ContactHero
