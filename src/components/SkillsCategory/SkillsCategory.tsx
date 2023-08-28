'use client'

import TransparentButton from '@/components/TransparentButton/TransparentButton'
import Skill from '@/components/Skill/Skill'
import { ISkillsCategory } from '@/interfaces/skillsCategory'
import { useTranslations, createTranslator } from 'next-intl'

interface SkillsCategoryProps {
  messages: any
  locale: string
}

const SkillsCategory: React.FC<ISkillsCategory & SkillsCategoryProps> = ({
  name,
  items,
  locale,
  messages,
}) => {
  const t = useTranslations('HardSkills')
  const translator = createTranslator({ locale, messages, onError: () => {} })

  return (
    <article className="flex-column flex-gap-large skills-category">
      <span className="text-h2 fw-semi-bold">{translator(name)}</span>
      <div className="skills-wrapper">
        {items.slice(0, 4).map((item) => (
          <Skill {...item} key={item.name} translator={translator}></Skill>
        ))}
      </div>
      <TransparentButton size="large">{t('show-more')}</TransparentButton>
    </article>
  )
}

export default SkillsCategory
