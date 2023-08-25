'use client'

import styles from './skill.module.scss'
import Image from 'next/image'
import { LOGO_SIZE_SMALL } from '@/utils/image'
import { useState } from 'react'
import { ISkill } from '@/interfaces/skill'

const Skill: React.FC<ISkill> = ({ name, description, logo, projectsUsed }) => {
  const [isAccordionOpened, setIsAccordionOpened] = useState(false)

  const handleToggleAccordion = () => {
    setIsAccordionOpened(!isAccordionOpened)
  }

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
          alt={name}
          width={LOGO_SIZE_SMALL}
          height={LOGO_SIZE_SMALL}
        />
        <span>{name}</span>
      </button>
      {isAccordionOpened && (
        <div className={styles['skill__body']}>
          <p>{description}</p>
          <span className="text-large fw-medium">Where used:</span>
          <ul>
            {projectsUsed.map((project) => (
              <li className="li">
                <a href={project.link}>{project.name}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  )
}

export default Skill
