'use client'

import SectionHeader from '../SectionHeader/SectionHeader'
import FormField from '../FormField/FormField'
import Button from '../Button/Button'
import CopyEmail from '../CopyEmail/CopyEmail'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import {
  TELEGRAM_LINK,
  GITHUB_LINK,
  LINKEDIN_LINK,
} from '@/utils/externalLinks'
import ContactForm from '../ContactForm/ContactForm'

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
              <Link href={TELEGRAM_LINK} target="_blank">
                <i className="fa-brands fa-telegram"></i>
              </Link>
              <Link href={LINKEDIN_LINK} target="_blank">
                <i className="fa-brands fa-linkedin"></i>
              </Link>
              <Link href={GITHUB_LINK} target="_blank">
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default ContactSection
