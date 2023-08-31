'use client'

import SectionHeader from '../SectionHeader/SectionHeader'
import { PropsWithChildren } from 'react'

import { useTranslations } from 'next-intl'

const HardSkillsSection: React.FC<PropsWithChildren> = ({ children }) => {
  const t = useTranslations('HardSkills')

  return (
    <section id="hard-skills" className="skills-section">
      <div className="flex-column flex-gap-large">
        <SectionHeader title={t('heading')} description={t('subheading')} />
        {children}
      </div>
      <div></div>
    </section>
  )
}

export default HardSkillsSection
