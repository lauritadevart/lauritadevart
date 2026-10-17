import { Badge } from '@/components/ui/badge'
import { useTranslations, type Locale } from '@/i18n'
import { cn } from '@/lib/utils'

type AvailabilityBadgeProps = {
  className?: string
  locale?: Locale
  text?: string
}

const AvailabilityBadge = ({ className, locale = 'en', text }: AvailabilityBadgeProps) => {
  const t = useTranslations(locale)

  return (
    <Badge variant='outline' className={cn('bg-card text-green-600 shadow-sm dark:text-green-400', className)}>
      <span className='relative inline-flex size-1.5'>
        <span className='absolute -inset-0.5 animate-[ping_1.8s_cubic-bezier(0,0,0.2,1)_infinite] rounded-full bg-green-600/40 opacity-75 dark:bg-green-400/40' />
        <span className='relative inline-flex size-1.5 rounded-full bg-green-600 dark:bg-green-400' />
      </span>
      {text ?? t.common.available}
    </Badge>
  )
}

export default AvailabilityBadge
