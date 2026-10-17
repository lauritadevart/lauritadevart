import { useState } from 'react'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

import { useTranslations, type Locale } from '@/i18n'
import { cn } from '@/lib/utils'

// Folder photos — Cuba (replaced the template's Spain shots).
// Sources (all CC0 / public domain via Wikimedia Commons):
//   folder-01.jpg — "Old Havana, Cuba" by Scott Fleming
//   folder-02.jpg — "Havana, Cuba" by Michele Spinnato
//   folder-03.jpg — "Street in Trinidad, Cuba 2024" by Dudva
const PHOTOS = [
  {
    src: '/images/about-me/folder-01.jpg',
    collapsed: 'rotate-[2deg] -translate-y-[48%]',
    hover:
      'group-hover/folder:rotate-[3deg] group-hover/folder:-translate-y-[52%] group-hover/folder:translate-x-1 group-hover/folder:scale-90',
    expanded: '-translate-x-16 -rotate-[10deg] -translate-y-18 scale-110'
  },
  {
    src: '/images/about-me/folder-02.jpg',
    collapsed: '-translate-y-[43%]',
    hover: 'group-hover/folder:-translate-y-[47%] group-hover/folder:scale-90',
    expanded: '-translate-y-18 scale-110'
  },
  {
    src: '/images/about-me/folder-03.jpg',
    collapsed: '-rotate-[2deg] -translate-y-[38%]',
    hover:
      'group-hover/folder:-rotate-[3deg] group-hover/folder:-translate-y-[42%] group-hover/folder:-translate-x-1 group-hover/folder:scale-90',
    expanded: 'translate-x-16 -translate-y-16 rotate-[10deg] scale-110'
  }
]

type TripFolderCardProps = {
  locale?: Locale
}

const TripFolderCard = ({ locale = 'en' }: TripFolderCardProps) => {
  const t = useTranslations(locale)
  const [expanded, setExpanded] = useState(false)

  return (
    <Card
      onClick={() => setExpanded(prev => !prev)}
      data-cursor='pointer'
      className='ring-border cursor-pointer justify-end gap-5 overflow-visible rounded-[24px] bg-(--background-darker) shadow-none'
    >
      <CardContent>
        <div className='group/folder relative flex aspect-video items-end justify-center'>
          {/* Back panel — always-visible backdrop behind the photos, matched to the folder's own width */}
          <div className='dark:border-primary/10 absolute bottom-0 left-1/2 z-0 h-36 w-40 -translate-x-1/2 rounded-xl border bg-(--background-darker)' />

          {PHOTOS.map((photo, i) => (
            <div
              key={photo.src}
              style={{ zIndex: i + 1 }}
              className={cn(
                'absolute aspect-290/230 h-auto w-36 overflow-hidden transition-all duration-500',
                expanded ? photo.expanded : cn(photo.collapsed, photo.hover)
              )}
            >
              <img
                src={photo.src}
                alt={`${t.about.folder.title} photo ${i + 1}`}
                loading='lazy'
                decoding='async'
                className='h-full w-full object-cover'
              />
            </div>
          ))}

          <div
            className={cn(
              'relative z-10 origin-bottom transform-[perspective(2000px)_rotateX(-25deg)] transition-transform duration-500',
              !expanded && 'hover:transform-[perspective(3000px)_rotateX(-35deg)]',
              expanded && 'transform-[perspective(4000px)_rotateX(-45deg)]'
            )}
          >
            <img
              src='/images/about-me/folder-front.webp'
              alt='folder front'
              loading='lazy'
              decoding='async'
              className='w-40'
            />

            {/* Country label sticker — covers the location printed on the folder illustration */}
            <span
              className={cn(
                '[font-family:var(--font-handwritten)] text-neutral-800',
                'absolute top-[34%] left-1/2 -translate-x-1/2 -rotate-2',
                'rounded-md border border-black/10 bg-white px-2.5 py-0.5',
                'text-sm shadow-sm sm:text-base'
              )}
            >
              {t.about.folder.title}
            </span>
          </div>
        </div>
      </CardContent>

      <CardContent>
        <div className='flex items-center justify-center gap-3'>
          <p className='text-foreground text-xl font-medium text-nowrap xl:text-[26px]'>{t.about.folder.title}</p>
          <Badge
            variant='secondary'
            className='text-muted dark:bg-background dark:text-primary/70 h-6.5 rounded-sm bg-white font-light'
          >
            {t.about.folder.photos}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}

export default TripFolderCard
