import Timeline from '@/components/ui/timeline'
import ExperienceTimelineItem from '@/components/home/experience/experience-timeline-item'
import { useTranslations, type Locale } from '@/i18n'

type ExperienceTimelineProps = {
  locale?: Locale
}

const ExperienceTimeline = ({ locale = 'en' }: ExperienceTimelineProps) => {
  const t = useTranslations(locale)

  const LOGOS = ['/images/features/logo-01.webp', '/images/features/logo-02.webp', '/images/features/logo-03.webp', '/images/features/logo-04.webp']

  const EXPERIENCES = t.experience.items.map((item, index) => ({
    index: String(index + 1).padStart(2, '0'),
    logo: LOGOS[index % LOGOS.length],
    company: item.company,
    role: item.role,
    period: item.period,
    status: { text: item.status, tone: (index === 0 ? 'positive' : 'accent') as 'positive' | 'accent' },
    stack: t.skills.categories.map(c => c.name).slice(index, index + 4),
    achievement: item.achievement,
    description: item.description,

    // The Automation Engineering degree gets a highlighted treatment in the timeline.
    highlight: item.company === 'CUJAE'
  }))

  return (
    <Timeline
      data={EXPERIENCES.map(({ index, ...experience }) => ({
        index,
        content: <ExperienceTimelineItem {...experience} />
      }))}
    />
  )
}

export default ExperienceTimeline
