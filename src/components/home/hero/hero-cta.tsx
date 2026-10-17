import { ArrowRightIcon } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { useTranslations, type Locale } from '@/i18n'

type HeroCtaProps = {
  locale?: Locale
}

const HeroCta = ({ locale = 'en' }: HeroCtaProps) => {
  const t = useTranslations(locale)
  // No dedicated contact page: CTAs anchor to the booking form (which sends via WhatsApp)
  // and to the credentials block (CV + thesis downloads).
  const contactHref = '#select-service'
  const cvHref = '#credentials'

  return (
    <div className='flex flex-wrap items-center gap-2.5 pt-2'>
      <Button
        variant='outline'
        className='hover:bg-background dark:bg-background hover:text-accent h-11 rounded-full px-4 text-base'
        render={<a href={contactHref} />}
        nativeButton={false}
      >
        {t.common.letsConnect}
      </Button>
      <Button
        variant='outline'
        className='hover:bg-card bg-card dark:bg-card hover:text-accent group/button h-11 gap-2.5 rounded-full pr-4 pl-4 text-base shadow-sm transition-[padding] duration-300 hover:pl-2'
        render={
          <a href={cvHref}>
            <span className='bg-accent relative flex size-2.5 items-center justify-center overflow-hidden rounded-full transition-all duration-300 group-hover/button:size-6.5'>
              <ArrowRightIcon className='text-accent-foreground absolute size-4.5 -translate-x-3 opacity-0 transition-all duration-300 group-hover/button:translate-x-0 group-hover/button:opacity-100' />
            </span>
            {t.hero.downloadCv}
          </a>
        }
        nativeButton={false}
      />
    </div>
  )
}

export default HeroCta
