'use client'

import Image from 'next/image'

import SectionHeader from '../SectionHeader/SectionHeader'

import { useTranslations } from 'next-intl'

const SoftSkillsSection: React.FC = () => {
  const t = useTranslations('SoftSkills')

  return (
    <section className="grid-50-50">
      <div className="flex-column flex-gap-large">
        <SectionHeader title={t('heading')} description={t('subheading')} />
        <div>
          <p>
            {t.rich('paragraph1', {
              highlight: (chunks) => (
                <strong className="highlight">{chunks}</strong>
              ),
            })}
          </p>
          <p>
            {t.rich('paragraph2', {
              highlight: (chunks) => (
                <strong className="highlight">{chunks}</strong>
              ),
            })}
          </p>
        </div>
      </div>
      <div>
        <Image
          src="/ss-section.png"
          alt={t('image-alt')}
          width={696}
          height={390}
          priority
        />
      </div>
    </section>
  )
}

export default SoftSkillsSection
