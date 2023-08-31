'use client'

import Image from 'next/image'

import SectionHeader from '../SectionHeader/SectionHeader'
import Button from '../Button/Button'
import TransparentButton from '../TransparentButton/TransparentButton'

import { useTranslations } from 'next-intl'

import { LOGO_SIZE_SMALL } from '@/utils/image'
import { NERIF_LINK, NERIF_REPO_LINK } from '@/utils/externalLinks'

const FeaturedProjectSection: React.FC = () => {
  const t = useTranslations('FeaturedProject')
  const tm = useTranslations('Months')
  const tc = useTranslations('Common')

  return (
    <section id="featured-project" className="featured-project-section">
      <div className="flex-column flex-gap-large">
        <SectionHeader title={t('heading')} description={t('subheading')} />
        <div className="flex-column flex-gap-large">
          <div className="grid-50-50 featured-project-card">
            <div className="flex-column flex-gap-large">
              <div className="featured-project-card__row">
                <span className="text-h2 fw-semi-bold">Nerif</span>
                <span>{`${tm('may')} 2023 - ${tm('july')} 2023`}</span>
              </div>
              <div className="featured-project-card__row">
                <span className="text-large fw-medium">{t('role')}</span>
                <span className="project-role">{t('role-design')}</span>
                <span className="project-role">{t('role-frontend')}</span>
                <span className="project-role">{t('role-backend')}</span>
              </div>
              <div className="featured-project-card__row">
                <span className="text-large fw-medium">{t('stack')}</span>
                <Image
                  src="/vuejs-logo.svg"
                  alt={tc('logo-alt', { logoOwner: 'VueJS' })}
                  title="Vue.js"
                  width={LOGO_SIZE_SMALL}
                  height={LOGO_SIZE_SMALL}
                />
                <Image
                  src="/react-logo.svg"
                  alt={tc('logo-alt', { logoOwner: 'React' })}
                  title="React"
                  width={LOGO_SIZE_SMALL}
                  height={LOGO_SIZE_SMALL}
                />
                <Image
                  src="/ts-logo.svg"
                  alt={tc('logo-alt', { logoOwner: 'Typescript' })}
                  title="Typescript"
                  width={LOGO_SIZE_SMALL}
                  height={LOGO_SIZE_SMALL}
                />
                <TransparentButton>
                  {t('and-n-more', { value: 9 })}
                </TransparentButton>
              </div>
              <div>
                <p>{t('paragraph1')}</p>
                <p>{t('paragraph2')}</p>
              </div>
              <div className="cta-container">
                <Button
                  type="primary"
                  size="medium"
                  linkProps={{ href: NERIF_LINK }}
                  useLink
                >
                  {t('primary-cta')}{' '}
                  <div className="icon-wrapper">
                    <i className="fa-solid fa-external-link text-medium"></i>
                  </div>
                </Button>
                <Button
                  type="secondary"
                  size="medium"
                  linkProps={{ href: NERIF_REPO_LINK }}
                  useLink
                >
                  {t('secondary-cta')}
                  <div className="icon-wrapper">
                    <i className="fa-brands fa-github"></i>
                  </div>
                </Button>
              </div>
            </div>
            <div>
              <Image
                src="/nerif-showcase.png"
                alt={t('image-alt')}
                width={645}
                height={553}
              />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </section>
  )
}

export default FeaturedProjectSection
