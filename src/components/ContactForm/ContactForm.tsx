'use client'

import { useState } from 'react'
import FormField from '../FormField/FormField'
import Button from '../Button/Button'
import { useTranslations } from 'next-intl'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const t = useTranslations('Contact')

  async function handleSubmit(event: any) {
    console.dir(event.target)
    event.preventDefault()
    setLoading(true)

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    }

    console.log(data)

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      console.log('Message sent successfully')
      setLoading(false)
      // reset the form
      event.target.name.value = ''
      event.target.email.value = ''
      event.target.message.value = ''
    }
    if (!response.ok) {
      console.log('Error sending message')
      setLoading(false)
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex-column flex-gap-extra-large">
        <FormField label={t('name-label')} name="name" required />
        <FormField label={t('email-label')} name="email" required />
        <FormField
          type="textarea"
          label={t('message-label')}
          name="message"
          required
        />
        <Button type="primary" size="medium" className="fluid">
          {t('send-button-text')}
        </Button>
      </div>
    </form>
  )
}
