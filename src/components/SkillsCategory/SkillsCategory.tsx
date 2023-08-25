import TransparentButton from '@/components/TransparentButton/TransparentButton'
import styles from './skills-category.module.scss'
import Skill from '@/components/Skill/Skill'
import { ISkillsCategory } from '@/interfaces/skillsCategory'

const SkillsCategory: React.FC<ISkillsCategory> = ({ name, items }) => {
  return (
    <article
      className={`flex-column flex-gap-large ${styles['skills-category']}`}
    >
      <span className="text-h2 fw-semi-bold">{name}</span>
      <div className={styles['skills-wrapper']}>
        {items.slice(0, 4).map((item) => (
          <Skill {...item}></Skill>
        ))}
      </div>
      <TransparentButton size="large">Show more...</TransparentButton>
    </article>
  )
}

export default SkillsCategory
