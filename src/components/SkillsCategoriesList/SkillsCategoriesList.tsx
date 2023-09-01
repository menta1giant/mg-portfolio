import SkillsCategory from '../SkillsCategory/SkillsCategory'
import { SKILLS_CATEGORIES } from '@/utils/skillsCategory'

const SkillsCategoriesList: React.FC = async () => {
  const locale = 'ru'

  return (
    <div className="grid-50-50">
      {SKILLS_CATEGORIES.map((category) => (
        <SkillsCategory {...category} key={category.name} locale={locale} />
      ))}
    </div>
  )
}

export default SkillsCategoriesList
