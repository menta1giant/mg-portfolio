'use client'

import Image from 'next/image'

import BenefitProposition from '../BenefitProposition/BenefitProposition'
import SectionHeader from '../SectionHeader/SectionHeader'
import Feature from '../Feature/Feature'
import Button from '../Button/Button'

import { useTranslations } from 'next-intl'

import { LOGO_SIZE } from '@/utils/image'

const HeroSection: React.FC = () => {
  const t = useTranslations('Hero')

  return (
    <>
      <section className="hero-section">
        <BenefitProposition />
        <div className="fade-up grid-50-50">
          <div className="hero-section__left">
            <Image
              src="/hero-image.svg"
              alt="Next.js Logo"
              width={472}
              height={416}
              priority
            />
          </div>
          <div className={`flex-column flex-gap-large $'hero-section__right'`}>
            <SectionHeader title={t('heading')} description={t('subheading')} />
            <p>{t('description')}</p>
            <div className="cta-container">
              <Button
                type="primary"
                size="large"
                useLink
                linkProps={{ href: '#featured-project', target: '_self' }}
              >
                {t('primary-cta')}
              </Button>
              <Button
                type="secondary"
                size="large"
                useLink
                linkProps={{ href: '#contact', target: '_self' }}
              >
                {t('secondary-cta')}
              </Button>
            </div>
          </div>
        </div>
        <div className="fade-up hero-section-features">
          <Feature title={t('feature-1-title')}>
            {t('feature-1-description')}
          </Feature>
          <Feature title={t('feature-2-title')}>
            <ul>
              <li>
                <Image
                  src="/vuejs-logo.svg"
                  alt="Vue.js Logo"
                  title="Vue.js"
                  width={LOGO_SIZE}
                  height={LOGO_SIZE}
                  priority
                />
              </li>
              <li>
                <Image
                  src="/react-logo.svg"
                  alt="React Logo"
                  title="React"
                  width={LOGO_SIZE}
                  height={LOGO_SIZE}
                  priority
                />
              </li>
              <li>
                <Image
                  src="/ts-logo.svg"
                  alt="Typescript Logo"
                  title="Typescript"
                  width={LOGO_SIZE}
                  height={LOGO_SIZE}
                  priority
                />
              </li>
            </ul>
          </Feature>
          <Feature title={t('feature-3-title')}>
            {t('feature-3-description')}
          </Feature>
        </div>
      </section>
    </>
  )
}

export default HeroSection
