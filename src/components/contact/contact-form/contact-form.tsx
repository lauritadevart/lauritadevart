import { useMemo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'sonner'

import type { ContactFormValues } from '@/components/contact/contact-form/contact-form-schema'
import { getContactFormConfig } from '@/components/contact/contact-form/contact-form-schema'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Field, FieldError, FieldGroup, FieldLabel } from '@/components/ui/field'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue, SelectGroup } from '@/components/ui/select'

import { useTranslations, type Locale } from '@/i18n'
import { cn } from '@/lib/utils'

type ContactFormProps = {
  className?: string
  locale?: Locale
}

const ContactForm = ({ className, locale = 'en' }: ContactFormProps) => {
  const t = useTranslations(locale)
  const { SERVICE_OPTIONS, contactFormSchema } = useMemo(() => getContactFormConfig(locale), [locale])

  const SERVICE_ITEMS = SERVICE_OPTIONS.map(option => ({ label: option, value: option }))

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      service: '',
      message: ''
    }
  })

  const onSubmit = (_values: ContactFormValues) => {
    toast.success(t.contact.form.success)
    reset()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn(className)} noValidate>
      <FieldGroup>
        <Field data-invalid={!!errors.name} className='gap-1'>
          <FieldLabel htmlFor='contact-name' className='text-muted-foreground text-base'>
            {t.contact.form.name}
          </FieldLabel>
          <Input
            id='contact-name'
            placeholder={t.contact.form.namePlaceholder}
            aria-invalid={!!errors.name}
            className='border-border h-11 rounded-[12px] bg-(--background-darker)'
            {...register('name')}
          />
          <FieldError errors={errors.name ? [errors.name] : undefined} />
        </Field>

        <Field data-invalid={!!errors.email} className='gap-1'>
          <FieldLabel htmlFor='contact-email' className='text-muted-foreground text-base'>
            {t.contact.form.email}
          </FieldLabel>
          <Input
            id='contact-email'
            type='email'
            placeholder={t.contact.form.emailPlaceholder}
            aria-invalid={!!errors.email}
            className='border-border h-11 rounded-[12px] bg-(--background-darker)'
            {...register('email')}
          />
          <FieldError errors={errors.email ? [errors.email] : undefined} />
        </Field>

        <Field data-invalid={!!errors.service} className='gap-1'>
          <FieldLabel htmlFor='contact-service' className='text-muted-foreground text-base'>
            {t.contact.form.service}
          </FieldLabel>
          <Controller
            control={control}
            name='service'
            render={({ field }) => (
              <Select
                items={SERVICE_ITEMS}
                value={field.value || null}
                onValueChange={value => field.onChange(value ?? '')}
              >
                <SelectTrigger
                  id='contact-service'
                  className='border-border h-11! w-full rounded-[12px] bg-(--background-darker)'
                >
                  <SelectValue placeholder={t.contact.form.servicePlaceholder} />
                </SelectTrigger>
                <SelectContent alignItemWithTrigger={false}>
                  <SelectGroup>
                    {SERVICE_ITEMS.map(item => (
                      <SelectItem key={item.value} value={item.value}>
                        {item.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          <FieldError errors={errors.service ? [errors.service] : undefined} />
        </Field>

        <Field data-invalid={!!errors.message} className='gap-1'>
          <FieldLabel htmlFor='contact-message' className='text-muted-foreground text-base'>
            {t.contact.form.message}
          </FieldLabel>
          <Textarea
            id='contact-message'
            placeholder={t.contact.form.messagePlaceholder}
            aria-invalid={!!errors.message}
            className='border-border min-h-25 rounded-[12px] bg-(--background-darker)'
            {...register('message')}
          />
          <FieldError errors={errors.message ? [errors.message] : undefined} />
        </Field>

        <Button
          type='submit'
          variant='outline'
          className='hover:bg-card hover:text-accent bg-card h-10 w-full rounded-[12px]'
        >
          {t.contact.form.submit}
        </Button>
      </FieldGroup>
    </form>
  )
}

export default ContactForm
