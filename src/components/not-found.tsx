import { Button } from '@/components/ui/button'

import Icon404 from '@/assets/svg/404'
import { useTranslations, type Locale } from '@/i18n'

type NotFoundProps = {
  locale?: Locale
}

const NotFound = ({ locale = 'en' }: NotFoundProps) => {
  const t = useTranslations(locale)
  const homeHref = locale === 'es' ? '/es' : '/'

  return (
    <div className='flex h-screen flex-col items-center justify-center gap-9 p-6'>
      <Icon404 className='h-auto w-full sm:h-120 sm:w-146' />
      <div className='flex flex-col items-center gap-4 text-center'>
        <p className='text-muted-foreground text-xl sm:text-2xl'>{t.notFound.title}</p>
        <Button size='lg' render={<a href={homeHref}>{t.common.goToHome}</a>} nativeButton={false} />
      </div>
    </div>
  )
}

export default NotFound
