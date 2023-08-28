'use client'

import Image from 'next/image'

import SectionHeader from '../SectionHeader/SectionHeader'
import PreviousJobSection from '../PreviousJobSection/PreviousJobSection'

import { useTranslations } from 'next-intl'

const JobExperienceSection: React.FC = () => {
  const t = useTranslations('JobExperience')
  const tm = useTranslations('Months')

  return (
    <section className="grid-50-50 job-experience-section">
      <div className="flex-column flex-gap-large">
        <SectionHeader title={t('heading')} description={t('subheading')} />
        <div className="flex-column flex-gap-large">
          <PreviousJobSection
            company="Roistat"
            role={t('frontend-developer-job-title')}
            period={`${tm('february')} 2022 - ${tm('may')} 2023`}
          />
          <div>
            <p>{t('paragraph1')}</p>
            <p>{t('paragraph2')}</p>
          </div>
          <ul>
            <li className="li">{t('responsibility1')}</li>
            <li className="li">{t('responsibility2')}</li>
            <li className="li">{t('responsibility3')}</li>
          </ul>
        </div>
      </div>
      <div>
        <Image
          src="/je-section.svg"
          alt={t('image-alt')}
          width={669}
          height={574}
          priority
        />
      </div>
    </section>
  )
}

export default JobExperienceSection
