import { Separator } from '@/components/ui/separator'
import ThemeToggle from '@/components/layout/theme-toggle'

import { useActiveSection } from '@/hooks/use-active-section'
import { useTranslations, type Locale } from '@/i18n'

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
          <span className='hidden overflow-hidden text-sm whitespace-nowrap transition-all duration-300 ease-out lg:inline-block lg:max-w-0 lg:opacity-0 lg:group-hover:ml-2 lg:group-hover:max-w-24 lg:group-hover:opacity-100'>
            {t.nav.mode}
          </span>
        </ThemeToggle>
      </div>
    </nav>
  )
}

export default NavDock
