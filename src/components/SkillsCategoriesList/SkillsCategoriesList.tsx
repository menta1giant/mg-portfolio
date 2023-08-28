import SkillsCategory from '../SkillsCategory/SkillsCategory'

import { createTranslator } from 'next-intl'

import { SKILLS_CATEGORIES } from '@/utils/skillsCategory'

async function getSkillsMessages(locale: string) {
  try {
    return (await import(`../../messages/${locale}-skills.json`)).default
  } catch (error) {}
}

const SkillsCategoriesList: React.FC<{ locale: string }> = async ({
  locale,
}) => {
  const messages = await getSkillsMessages(locale)

  return (
    <div className="grid-50-50">
      {SKILLS_CATEGORIES.map((category) => (
        <SkillsCategory
          {...category}
          key={category.name}
          locale={locale}
          messages={messages}
        />
      ))}
    </div>
  )
}

export default SkillsCategoriesList
