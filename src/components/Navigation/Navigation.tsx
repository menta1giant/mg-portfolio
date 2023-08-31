'use client'

import { useRef, useEffect, useMemo, useCallback } from 'react'
import styles from '../Header/header.module.scss'
import Link from 'next/link'
import { LOGO_CLICKED_EVENT } from '@/utils/customEvent'
import { useState } from 'react'
import processTextNodesSequentially from '../../utils/typewriterHelper'
import {
  getLocalStorageDataByKey,
  LANDING_PAGE_VISITED,
} from '@/utils/localStorage'
import MobileMenu from '@/components/MobileMenu/MobileMenu'

export default function Navigation() {
  const navigation = useRef<HTMLDivElement>(null)

  let [hasBeenVisited, setHasBeenVisited] = useState(false)

  function getNavigationNodes() {
    return navigation.current?.querySelectorAll('span, a')!
  }

  function hideNavigation(navigationNodes: NodeListOf<Element>) {
    navigationNodes.forEach((node) => {
      node.classList.add('visually-hidden')
    })
  }

  function showNavigation() {
    navigation.current?.classList.remove('visually-hidden')
  }

  const initiateTypewriter = useCallback(() => {
    showNavigation()

    const textNodes = getNavigationNodes()

    hideNavigation(textNodes)

    const speeds = [...new Array(6).fill(23), 12]

    processTextNodesSequentially(textNodes, speeds)
  }, [])

  const shouldHideNavigation = useMemo(() => {
    return !hasBeenVisited
  }, [hasBeenVisited])

  useEffect(() => {
    document.addEventListener(LOGO_CLICKED_EVENT, initiateTypewriter)

    setHasBeenVisited(Boolean(getLocalStorageDataByKey(LANDING_PAGE_VISITED)))

    return () =>
      document.removeEventListener(LOGO_CLICKED_EVENT, initiateTypewriter)
  }, [initiateTypewriter])

  return (
    <>
      <div
        className={`${shouldHideNavigation ? 'visually-hidden' : ''} ${
          styles.navigation
        } desktop`}
        ref={navigation}
      >
        <span>import </span>
        <span className="text-large text-heading">{`{ `}</span>
        <nav className="text-large text-heading">
          <ul>
            <li>
              <Link href="#job-experience">jobExperience, </Link>
            </li>
            <li>
              <Link href="#hard-skills">hardSkills, </Link>
            </li>
            <li>
              <Link href="#soft-skills">softSkills </Link>
            </li>
          </ul>
        </nav>
        <span className="text-large text-heading">{`} `}</span>
        <div className="nowrap inline-flex">
          <span>from </span>
          <span id="package-name" className="text-heading text-large">
            &quot;MikhailGostev&quot;
          </span>
        </div>
      </div>
      <MobileMenu />
    </>
  )
}
