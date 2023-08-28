import '@/styles/landing-page.scss'

import React from 'react'
import { useLocale } from 'next-intl'

import HeroSection from '@/components/HeroSection/HeroSection'
import JobExperienceSection from '@/components/JobExperienceSection/JobExperienceSection'
import FeaturedProjectSection from '@/components/FeaturedProjectSection/FeaturedProjectSection'
import SkillsCategoriesList from '@/components/SkillsCategoriesList/SkillsCategoriesList'
import HardSkillsSection from '@/components/HardSkillsSection/HardSkillsSection'
import SoftSkillsSection from '@/components/SoftSkillsSection/SoftSkillsSection'
import ContactSection from '@/components/ContactSection/ContactSection'

const Home: React.FC = () => {
  const locale = useLocale()

  return (
    <>
      <HeroSection />
      <JobExperienceSection />
      <FeaturedProjectSection />
      <HardSkillsSection>
        <SkillsCategoriesList locale={locale} />
      </HardSkillsSection>
      <SoftSkillsSection />
      <ContactSection />
    </>
  )
}

export default Home
