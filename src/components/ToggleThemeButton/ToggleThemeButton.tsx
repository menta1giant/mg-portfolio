'use client'

import Button from '@/components/Button/Button'
import { useTheme } from 'next-themes'
import { useMemo } from 'react'

const ToggleThemeButton: React.FC = () => {
  const { theme, systemTheme, setTheme } = useTheme()

  const isThemeLight = useMemo(() => {
    return theme === 'system' ? systemTheme === 'light' : theme === 'light'
  }, [theme, systemTheme])

  return (
    <Button
      type="transparent-green"
      onClick={() => setTheme(isThemeLight ? 'dark' : 'light')}
    >
      <i className={`fa-solid ${isThemeLight ? 'fa-sun' : 'fa-moon'}`}></i>
    </Button>
  )
}

export default ToggleThemeButton
