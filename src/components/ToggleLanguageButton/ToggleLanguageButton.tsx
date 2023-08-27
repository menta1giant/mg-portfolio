'use client'

import Button from '@/components/Button/Button'
import { useAppDispatch, useAppSelector } from '@/lib/redux/hooks'
import { toggleLanguage } from '@/lib/redux/slices/languageSlice'

const ToggleLanguageButton: React.FC = () => {
  const isLanguageRus = useAppSelector((state) => state.language.isLanguageRus)

  const dispatch = useAppDispatch()

  const linkProps = {
    href: `/`,
  }

  return (
    <Button
      type="transparent-green"
      className="desktop"
      linkProps={linkProps}
      useLink
      onClick={() => dispatch(toggleLanguage())}
    >
      f
    </Button>
  )
}

export default ToggleLanguageButton
