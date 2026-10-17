import { useEffect, useState } from 'react'

import { AnimatePresence, motion } from 'motion/react'

import type { Locale } from '@/i18n'

// Each greeting carries its own "I am / soy" connector so the headline always reads
// "Hello, I am Laura" / "Hola, soy Laura", whichever rotating word is on screen.
const GREETINGS_BY_LOCALE: Record<Locale, string[]> = {
  en: ['Hello, I am', 'Hi, I am', "I'm", 'Hey, I am'],
  es: ['Hola, soy', 'Buenas, soy', 'Soy', 'Hola! Soy']
}

const INTERVAL_MS = 2200

type GreetingWordProps = {
  locale?: Locale
}

const GreetingWord = ({ locale = 'en' }: GreetingWordProps) => {
  const GREETINGS = GREETINGS_BY_LOCALE[locale]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex(prev => (prev + 1) % GREETINGS.length)
    }, INTERVAL_MS)

    return () => clearInterval(timer)
  }, [])

  return (
    <span className='mr-2 inline-grid overflow-hidden align-bottom'>
      {/* Invisible sizers reserve space for the widest greeting so surrounding text doesn't shift */}
      {GREETINGS.map(word => (
        <span key={word} className='invisible col-start-1 row-start-1 whitespace-nowrap' aria-hidden='true'>
          {word}
        </span>
      ))}

      <AnimatePresence mode='popLayout' initial={false}>
        <motion.span
          key={GREETINGS[index]}
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: '0%', opacity: 1 }}
          exit={{ y: '-100%', opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className='col-start-1 row-start-1 inline-block whitespace-nowrap'
        >
          {GREETINGS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}

export default GreetingWord
