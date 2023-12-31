'use client'

import TransparentButton from '@/components/TransparentButton/TransparentButton'
import Skill from '@/components/Skill/Skill'
import { ISkillsCategory } from '@/interfaces/skillsCategory'

import { useTranslations, createTranslator } from 'next-intl'
import { useState, useMemo } from 'react'

interface SkillsCategoryProps {
  locale: string
}

const SkillsCategory: React.FC<ISkillsCategory & SkillsCategoryProps> = ({
  name,
  items,
  locale,
}) => {
  const t = useTranslations('HardSkills')
  const ts = useTranslations('a')

  const [isListExpanded, setIsListExpanded] = useState(false)
  const isShowMoreButtonShown = useMemo(() => {
    return !isListExpanded && items.length > 3
  }, [isListExpanded, items])

  return (
    <article className="flex-column flex-gap-large skills-category">
      <span className="text-h2 fw-semi-bold">{ts(name)}</span>
      <div className="skills-wrapper">
        {items.slice(0, 3).map((item) => (
          <Skill {...item} key={item.name} translator={ts}></Skill>
        ))}
        {isListExpanded &&
          items
            .slice(3)
            .map((item) => (
              <Skill {...item} key={item.name} translator={ts}></Skill>
            ))}
      </div>
      {isShowMoreButtonShown && (
        <TransparentButton size="large" onClick={() => setIsListExpanded(true)}>
          {t('show-more')}
        </TransparentButton>
      )}
    </article>
  )
}

export default SkillsCategory
