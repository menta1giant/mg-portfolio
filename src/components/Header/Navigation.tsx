'use client'

import { useRef, useEffect, useMemo, useCallback } from 'react'
import styles from './header.module.scss'
import { LOGO_CLICKED_EVENT } from '@/utils/customEvent'
import { usePathname } from 'next/navigation'
import processTextNodesSequentially from './typewriterHelper'

export default function Navigation() {
  const navigation = useRef<HTMLDivElement>(null)
  const pathname = usePathname()

  function getNavigationNodes() {
    return navigation.current?.querySelectorAll('span, a')!;
  }

  function hideNavigation(navigationNodes:NodeListOf<Element>) {
    navigationNodes.forEach(node => {
      node.classList.add('visually-hidden');
    })
  }

  function showNavigation() {
    navigation.current?.classList.remove('visually-hidden')
  }

  const initiateTypewriter = useCallback(() => {
    showNavigation();

    const textNodes = getNavigationNodes()

    hideNavigation(textNodes);

    const speeds = [...(new Array(6).fill(23)), 12]

    processTextNodesSequentially(textNodes, speeds)
  }, [])

  useEffect(() => {
    document.addEventListener(LOGO_CLICKED_EVENT, initiateTypewriter);

    return () => document.removeEventListener(LOGO_CLICKED_EVENT, initiateTypewriter)
  }, [initiateTypewriter])

  return (
    <div className={`${pathname === '/' ? 'visually-hidden' : ''} ${styles.navigation}`} ref={navigation}>
      <span>import </span>
      <span className="text-large text-heading">{ `{ ` }</span>
      <nav className="text-large text-heading">
        <ul>
          <li>
            <a>jobExperience, </a>
          </li>
          <li>
            <a>hardSkills, </a>
          </li>
          <li>
            <a>softSkills </a>
          </li>
        </ul>
      </nav>
      <span className="text-large text-heading">{ `} `}</span>
      <div className="nowrap inline-flex">
        <span>from </span>
        <span id="package-name" className="text-heading text-large">&quot;MikhailGostev&quot;</span>
      </div>
    </div>
  )
}
