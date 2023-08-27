'use client'

import Button from '@/components/Button/Button'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next-intl/client'
import { useTransition } from 'react'

const ToggleLanguageButton: React.FC = () => {
  const [isPending, startTransition] = useTransition()
  const locale = useLocale()
  const router = useRouter()
  const pathname = usePathname()

  function toggleLanguage() {
    console.log({ pathname, locale })
    startTransition(() => {
      router.replace(pathname, { locale: locale === 'ru' ? 'en' : 'ru' })
    })
  }

  return (
    <Button
      type="transparent-green"
      className="desktop"
      onClick={toggleLanguage}
    >
      <i
        className={`fa-solid ${
          locale === 'ru' ? 'fa-earth-europe' : 'fa-earth-americas'
        }`}
      ></i>
    </Button>
  )
}

export default ToggleLanguageButton
