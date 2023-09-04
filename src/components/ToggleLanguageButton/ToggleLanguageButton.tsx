'use client'

import IconButton from '@/components/IconButton/IconButton'
import './toggle-language-button.scss'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'
import { useTransition } from 'react'
import { useTranslations } from 'next-intl'

const ToggleLanguageButton: React.FC = () => {
  const [isPending, startTransition] = useTransition()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()
  const t = useTranslations('Header')

  function toggleLanguage() {
    startTransition(() => {
      router.replace(pathname, { locale: locale === 'ru' ? 'en' : 'ru' })
    })
  }

  return (
    <IconButton
      title={t('change-language-button-tooltip', {
        language: locale === 'ru' ? 'английский' : 'Russian',
      })}
      onClick={toggleLanguage}
    >
      <>
        <i className={`fa-solid fa-globe`}></i>
        <div className="toggle-language-button__badge">
          {locale === 'ru' ? 'РУС' : 'ENG'}
        </div>
      </>
    </IconButton>
  )
}

export default ToggleLanguageButton
