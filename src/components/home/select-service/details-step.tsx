import { useState } from 'react'
import type { FormEvent } from 'react'

import { toast } from 'sonner'

import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { AUTHOR } from '@/consts'
import { useTranslations, type Locale } from '@/i18n'

type DetailsStepProps = {
  service: { title: string; price: string } | undefined
  onSuccess: (name: string, whatsappUrl: string) => void
  locale?: Locale
}

const DetailsStep = ({ service, onSuccess, locale = 'en' }: DetailsStepProps) => {
  const t = useTranslations(locale)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [notes, setNotes] = useState('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    // Predefined WhatsApp message built from the booking + contact fields.
    const w = t.selectService.whatsapp

    const lines = [
      w.greeting,
      '',
      `${w.service}: ${service?.title ?? '—'}${service ? ` · ${service.price}` : ''}`,
      `${w.name}: ${name.trim()}`,
      `${w.email}: ${email.trim()}`
    ]

    if (phone.trim()) lines.push(`${w.phone}: ${phone.trim()}`)
    if (notes.trim()) lines.push(`${w.message}: ${notes.trim()}`)

    const whatsappUrl = `${AUTHOR.whatsapp}?text=${encodeURIComponent(lines.join('\n'))}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')

    toast.success(t.selectService.details.success)
    onSuccess(name.trim(), whatsappUrl)

    setName('')
    setEmail('')
    setPhone('')
    setNotes('')
  }

  return (
    <div className='space-y-4'>
      <div className='space-y-3 rounded-xl bg-(--background-darker) p-4'>
        <div className='flex items-start gap-2'>
          <span className='bg-accent mt-1.5 size-2.5 shrink-0 rounded-full' />
          <div>
            <p className='text-muted-foreground text-[10px] tracking-wide uppercase'>{t.selectService.details.service}</p>
            <p className='text-sm font-semibold'>{service?.title ?? '—'}</p>
          </div>
        </div>

        <div className='flex items-start gap-2'>
          <span className='bg-accent mt-1.5 size-2.5 shrink-0 rounded-full' />
          <div>
            <p className='text-muted-foreground text-[10px] tracking-wide uppercase'>{t.selectService.details.price}</p>
            <p className='text-accent text-sm font-bold'>{service?.price ?? '—'}</p>
          </div>
        </div>
      </div>

      <form id='details-form' onSubmit={handleSubmit} className='space-y-4'>
        <div className='space-y-2'>
          <Label htmlFor='details-name'>{t.selectService.details.fullName}</Label>
          <Input
            id='details-name'
            placeholder={t.selectService.details.namePlaceholder}
            className='h-14.5 rounded-[16px] px-4.5 focus-visible:ring-0'
            required
            value={name}
            onChange={event => setName(event.target.value)}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='details-email'>{t.selectService.details.email}</Label>
          <Input
            id='details-email'
            type='email'
            placeholder={t.selectService.details.emailPlaceholder}
            className='h-14.5 rounded-[16px] px-4.5 focus-visible:ring-0'
            required
            value={email}
            onChange={event => setEmail(event.target.value)}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='details-phone'>{t.selectService.details.phone}</Label>
          <Input
            id='details-phone'
            type='tel'
            placeholder={t.selectService.details.phonePlaceholder}
            className='h-14.5 rounded-[16px] px-4.5 focus-visible:ring-0'
            value={phone}
            onChange={event => setPhone(event.target.value)}
          />
        </div>

        <div className='space-y-2'>
          <Label htmlFor='details-notes'>{t.selectService.details.notes}</Label>
          <Textarea
            id='details-notes'
            placeholder={t.selectService.details.notesPlaceholder}
            className='min-h-20 resize-none rounded-[16px] px-4.5 focus-visible:ring-0'
            value={notes}
            onChange={event => setNotes(event.target.value)}
          />
        </div>
      </form>
    </div>
  )
}

export default DetailsStep