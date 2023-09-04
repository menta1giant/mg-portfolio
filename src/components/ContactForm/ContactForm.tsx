'use client'

import { useState } from 'react'
import FormField from '../FormField/FormField'
import Button from '../Button/Button'
import { useTranslations } from 'next-intl'
import Alert from '@mui/material/Alert'
import Snackbar from '@mui/material/Snackbar'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [isSuccessAlertShown, setIsSuccessAlertShown] = useState(false)
  const [isErrorAlertShown, setIsErrorAlertShown] = useState(false)
  const t = useTranslations('Contact')

  async function handleSubmit(event: any) {
    event.preventDefault()
    setLoading(true)

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    }

    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      event.target.name.value = ''
      event.target.email.value = ''
      event.target.message.value = ''

      setIsSuccessAlertShown(true)
    } else {
      setIsErrorAlertShown(true)
    }

    setLoading(false)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex-column flex-gap-extra-large">
          <FormField label={t('name-label')} name="name" required />
          <FormField
            label={t('email-label')}
            name="email"
            type="email"
            required
          />
          <FormField
            type="textarea"
            label={t('message-label')}
            name="message"
            required
          />
          <Button
            type="primary"
            size="medium"
            className="fluid"
            loading={loading}
          >
            {t('send-button-text')}
          </Button>
        </div>
      </form>
      <div style={{ maxWidth: 'max(100%, 500px)' }}>
        <Snackbar
          open={isSuccessAlertShown}
          autoHideDuration={3000}
          onClose={() => setIsSuccessAlertShown(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            severity="success"
            sx={{ width: '100%' }}
            classes={{
              message: 'text-primary text-medium',
              icon: 'text-large flex-center',
            }}
          >
            {t('contact-form-send-success')}
          </Alert>
        </Snackbar>
        <Snackbar
          open={isErrorAlertShown}
          autoHideDuration={3000}
          onClose={() => setIsErrorAlertShown(false)}
          anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <Alert
            severity="error"
            sx={{ width: '100%' }}
            classes={{
              message: 'text-primary text-medium',
              icon: 'text-large flex-center',
            }}
          >
            {t('contact-form-send-error')}
          </Alert>
        </Snackbar>
      </div>
    </>
  )
}
