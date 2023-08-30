'use client'

import styles from './header.module.scss'

import Image from 'next/image'
import Button from '@/components/Button/Button'
import Navigation from './Navigation'
import ToggleLanguageButton from '@/components/ToggleLanguageButton/ToggleLanguageButton'
import AnimatedElements from '@/components/AnimatedElements/AnimatedElements'
import { applyStickyHeader } from '@/utils/header'

import { useRef, useEffect, useCallback } from 'react'

import dynamic from 'next/dynamic'

const ToggleThemeButton = dynamic(
  () => import('@/components/ToggleThemeButton/ToggleThemeButton'),
  {
    ssr: false,
  },
)

export default function Header() {
  const header = useRef<HTMLDivElement>(null)

  const checkWindowScroll = useCallback(() => {
    applyStickyHeader(header.current!)
  }, [header])

  useEffect(() => {
    checkWindowScroll()

    window.addEventListener('scroll', checkWindowScroll)

    return () => window.removeEventListener('scroll', checkWindowScroll)
  })

  return (
    <header ref={header}>
      <div className={styles.header}>
        <AnimatedElements />
        <Image
          id="logo"
          src="/logo.svg"
          alt="Logo"
          width={48}
          height={48}
          priority
        />
        <Navigation />
        <div className={styles.buttons}>
          <Button type="primary-green">
            <span className="desktop">GET IN TOUCH</span>
            <span className="mobile">{'==>'}</span>
          </Button>
          <ToggleThemeButton />
          <ToggleLanguageButton />
        </div>
      </div>
    </header>
  )
}
