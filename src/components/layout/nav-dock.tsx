import { Separator } from '@/components/ui/separator'
import ThemeToggle from '@/components/layout/theme-toggle'

import { useActiveSection } from '@/hooks/use-active-section'
import { LOCALE_LABELS, localizePath, useTranslations, type Locale } from '@/i18n'

import { cn } from '@/lib/utils'

import UserIcon from '@/assets/svg/user'
import RulerPenIcon from '@/assets/svg/ruler-pen'
import ProgrammingIcon from '@/assets/svg/programming'
import TagPriceIcon from '@/assets/svg/tag-price'
import MailIcon from '@/assets/svg/mail'

type NavDockProps = {
  pathname: string
  locale?: Locale
}

const NavDock = ({ pathname, locale = 'en' }: NavDockProps) => {
  const t = useTranslations(locale)
  const basePath = pathname.replace(/^\/es(?=\/|$)/, '') || '/'

  // Language switcher lives inside the dock (bottom bar on mobile, side rail on desktop),
  // right next to the light/dark mode toggle.
  const targetLocale: Locale = locale === 'es' ? 'en' : 'es'
  const languagePath = localizePath(pathname, targetLocale)
  const languageLabel = targetLocale === 'es' ? t.langSwitch.toEs : t.langSwitch.toEn

  const labelClassName =
    'hidden overflow-hidden text-sm whitespace-nowrap transition-all duration-300 ease-out lg:inline-block lg:max-w-0 lg:opacity-0 lg:group-hover:ml-2 lg:group-hover:max-w-24 lg:group-hover:opacity-100'

  const NAV_ITEMS = [
    { href: '/#about', id: 'about', label: t.nav.about, icon: UserIcon },
    { href: '/#featured-works', id: 'featured-works', label: t.nav.work, icon: RulerPenIcon },
    { href: '/#experience', id: 'experience', label: t.nav.experience, icon: ProgrammingIcon },
    { href: '/#pricing', id: 'pricing', label: t.nav.pricing, icon: TagPriceIcon },

    // There is no contact page anymore — Contact scrolls to the booking form (sends via WhatsApp).
    { href: '/#select-service', id: 'select-service', label: t.nav.contact, icon: MailIcon }
  ]

  const SECTION_IDS = NAV_ITEMS.map(item => item.id)

  const activeId = useActiveSection(SECTION_IDS)

  return (
    <nav className='group fixed bottom-4 left-1/2 z-70 -translate-x-1/2 lg:top-1/2 lg:bottom-auto lg:left-6 lg:translate-x-0 lg:-translate-y-1/2'>
      <div className='bg-card dark:bg-card flex w-fit flex-row items-stretch gap-1.5 rounded-lg border p-2 shadow-sm max-lg:p-1.5 lg:flex-col lg:rounded-[16px]'>
        {NAV_ITEMS.map(item => {
          const href = item.href
          const isActive = basePath === '/' && item.id === activeId

          return (
            <a
              key={item.id}
              href={href}
              aria-label={item.label}
              aria-current={isActive ? 'location' : undefined}
              className={cn(
                'hover:text-accent hover:bg-accent/10 dark:hover:text-accent flex h-8 items-center overflow-hidden rounded-sm px-2 no-underline transition-colors max-lg:h-7 lg:rounded-md',
                isActive ? 'text-accent bg-accent/10' : 'text-muted-foreground'
              )}
            >
              <item.icon className='size-4 shrink-0' />
              <span className='hidden overflow-hidden text-sm whitespace-nowrap transition-all duration-300 ease-out lg:inline-block lg:max-w-0 lg:opacity-0 lg:group-hover:ml-2 lg:group-hover:max-w-24 lg:group-hover:opacity-100'>
                {item.label}
              </span>
            </a>
          )
        })}

        <Separator orientation='vertical' className='lg:hidden' />
        <Separator className='hidden lg:block' />

        <ThemeToggle className='text-muted-foreground hover:text-accent hover:bg-accent/10 flex h-8 items-center overflow-hidden rounded-md px-2 transition-colors max-lg:h-7'>
          <span className={labelClassName}>{t.nav.mode}</span>
        </ThemeToggle>

        <a
          href={languagePath}
          hrefLang={targetLocale}
          aria-label={languageLabel}
          className='text-muted-foreground hover:text-accent hover:bg-accent/10 flex h-8 items-center overflow-hidden rounded-md px-2 transition-colors max-lg:h-7'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            stroke-width='2'
            stroke-linecap='round'
            stroke-linejoin='round'
            className='size-4 shrink-0'
            aria-hidden='true'
          >
            <circle cx='12' cy='12' r='10'></circle>
            <path d='M2 12h20'></path>
            <path
              d='M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z'
            ></path>
          </svg>
          <span className={labelClassName}>{LOCALE_LABELS[targetLocale]}</span>
        </a>
      </div>
    </nav>
  )
}

export default NavDock
