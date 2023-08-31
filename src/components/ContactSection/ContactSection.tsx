'use client'

import SectionHeader from '../SectionHeader/SectionHeader'
import FormField from '../FormField/FormField'
import Button from '../Button/Button'
import CopyEmail from '../CopyEmail/CopyEmail'

import { useTranslations } from 'next-intl'

const ContactSection: React.FC = () => {
  const t = useTranslations('Contact')

  return (
    <section id="contact" className="flex-column flex-gap-large">
      <SectionHeader title={t('heading')} description={t('subheading')} />
      <div className="grid-50-50">
        <div className="flex-column flex-gap-large">
          <p>{t('paragraph1')}</p>
          <div className="flex-column flex-gap-medium">
            <h3 className="text-large fw-medium text-heading">
              {t('copy-email-label')}
            </h3>
            <CopyEmail email="mikhail-gostev.dev.gmail.com" />
          </div>
          <div className="flex-column flex-gap-medium">
            <h3 className="text-large fw-medium text-heading">
              {t('socials-label')}
            </h3>
            <div className="flex-gap-medium text-large text-heading">
              <i className="fa-brands fa-telegram"></i>
              <i className="fa-brands fa-linkedin"></i>
              <i className="fa-brands fa-github"></i>
            </div>
          </div>
        </div>
        <div className="flex-column flex-gap-extra-large">
          <FormField label={t('name-label')} />
          <FormField label={t('email-label')} />
          <FormField type="textarea" label={t('message-label')} />
          <Button type="primary" size="medium" className="fluid">
            {t('send-button-text')}
          </Button>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
