import SkillsCategory from '../SkillsCategory/SkillsCategory'

import { SKILLS_CATEGORIES } from '@/utils/skillsCategory'

async function getSkillsMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}-skills.json`)).default
  } catch (error) {}
}

const SkillsCategoriesList: React.FC = async () => {
  //const locale = useAppSelector((state) => state.language.locale)
  const locale = 'ru'
  const messages = await getSkillsMessages(locale)

  return (
    <div className="grid-50-50">
      {SKILLS_CATEGORIES.map((category) => (
        <SkillsCategory {...category} key={category.name} locale={locale} />
      ))}
    </div>
  )
}

export default SkillsCategoriesList
