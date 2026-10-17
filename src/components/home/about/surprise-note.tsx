import { useState } from 'react'

import { useTranslations, type Locale } from '@/i18n'
import { cn } from '@/lib/utils'

type SurpriseNoteProps = {
  locale?: Locale
}

const SurpriseNote = ({ locale = 'en' }: SurpriseNoteProps) => {
  const t = useTranslations(locale)

  const NOTES = [
    { text: t.about.note.grab, position: 'top-[10%] left-[12%] rotate-[-8deg]' },
    { text: t.about.note.again, position: 'top-[4%] left-[62%] rotate-[10deg]' },
    { text: t.about.note.one, position: 'top-[3%] left-[3%] rotate-[-6deg]' },
    { text: t.about.note.four, position: 'top-[54%] left-[68%] rotate-[12deg]' },
    { text: t.about.note.five, position: 'top-[45%] left-[36%] rotate-[4deg]' },
    { text: t.about.note.end, position: '-top-[2%] -left-[3%] rotate-[-10deg]' }
  ]

  const [step, setStep] = useState(0)
  const note = NOTES[step]

  return (
    <div className='relative h-full'>
      {/* Decorative grab bar */}
      <div className='bg-background absolute top-8 right-[16%] left-[16%] h-2 rounded-full' />

      <div
        onMouseEnter={() => setStep(prev => (prev + 1) % NOTES.length)}
        data-cursor='pointer'
        className={cn('absolute z-20 w-32 cursor-pointer transition-all duration-500', note.position)}
      >
        <img src='/images/about-me/note.webp' alt='Note bg' className='w-full' />
        <p className='absolute inset-0 flex items-center justify-center px-4 text-center [font-family:var(--font-handwritten)] text-neutral-800'>
          {note.text}
        </p>
      </div>

      <p className='text-card-foreground absolute bottom-0 left-[10%] text-[26px] font-medium sm:text-nowrap md:left-1/2 md:-translate-x-1/2'>
        {t.about.note.title}
      </p>
    </div>
  )
}

export default SurpriseNote
