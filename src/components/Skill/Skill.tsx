'use client'

import styles from './skill.module.scss'
import Image from 'next/image'
import { LOGO_SIZE_SMALL } from '@/utils/image'
import { useState } from 'react'
import { ISkill } from '@/interfaces/skill'
import { useTranslations } from 'next-intl'

interface SkillsProps {
  translator: (...args: any[]) => React.ReactNode
}

const Skill: React.FC<ISkill & SkillsProps> = ({
  name,
  id,
  logo,
  projectsUsed,
  translator,
}) => {
  const t = useTranslations('HardSkills')

  const [isAccordionOpened, setIsAccordionOpened] = useState(false)

  const handleToggleAccordion = () => {
    setIsAccordionOpened(!isAccordionOpened)
  }

  const localizedSkillName = translator(`${id}.name`)
  const localizedSkillDescription = translator(`${id}.description`)

  return (
    <article
      className={`${styles['skill']} ${
        isAccordionOpened ? styles['skill--active'] : ''
      }`}
    >
      <button
        className={styles['skill__title']}
        onClick={handleToggleAccordion}
      >
        <Image
          src={logo}
          alt={localizedSkillName!.toString()}
          width={LOGO_SIZE_SMALL}
          height={LOGO_SIZE_SMALL}
        />
        <span>{localizedSkillName}</span>
      </button>
      {isAccordionOpened && (
        <div className={styles['skill__body']}>
          <p>{localizedSkillDescription}</p>
          <span className="text-large fw-medium">{t('where-used')}</span>
          <ul>
            {projectsUsed.map((project) => (
              <li className="li" key={project.name}>
                <a href={project.link}>{translator(project.name)}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export default Skill
