'use client'

import IconButton from '@/components/IconButton/IconButton'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'
import { useTranslations } from 'next-intl'

const ToggleThemeButton: React.FC = () => {
  const { theme, systemTheme, setTheme } = useTheme()
  const t = useTranslations('Header')

  const isThemeLight = useMemo(() => {
    return theme === 'system' ? systemTheme === 'light' : theme === 'light'
  }, [theme, systemTheme])

  return (
    <IconButton
      type="transparent-green"
      title={t('change-theme-button-tooltip')}
      onClick={() => setTheme(isThemeLight ? 'dark' : 'light')}
    >
      <i className={`fa-solid ${isThemeLight ? 'fa-sun' : 'fa-moon'}`}></i>
    </IconButton>
  )
}

export default ToggleThemeButton
