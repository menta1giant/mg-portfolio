import Image from 'next/image'
import { gsap } from 'gsap'
import { useCallback, useEffect, useRef } from 'react'
import './animated-elements.scss'
import {
  dispatchCustomEvent,
  LOGO_CLICKED_EVENT,
  PACKAGE_IMPORTED_EVENT,
  TYPEWRITER_FINISHED_EVENT,
} from '@/utils/customEvent'

const HeroSectionAnimatedElements: React.FC = () => {
  const mockCursor = useRef<HTMLImageElement>(null)
  const mockEnter = useRef<HTMLDivElement>(null)
  const mockCursorPulse = useRef<HTMLDivElement>(null)

  function moveMockCursor(targetElement: HTMLElement) {
    gsap.to('.cursor', {
      left: 0,
      top: 0,
      duration: 0,
    })

    const cursor = mockCursor.current!
    const cursorPulse = mockCursorPulse.current!

    cursor.classList.remove('visually-hidden')

    const targetElementRect = targetElement.getBoundingClientRect()
    const cursorParentRect = cursor.parentElement!.getBoundingClientRect()

    const translateX =
      targetElementRect.left +
      targetElement.clientWidth / 2 -
      cursorParentRect.left
    const translateY = targetElementRect.top + targetElement.clientHeight / 2

    gsap.to('.cursor', {
      left: translateX,
      top: translateY,
      duration: 0.5,
      ease: 'power2.out',
      onComplete: () => {
        cursorPulse.classList.add('expand')

        const isDesktop = window.matchMedia('(min-width: 0px)').matches

        isDesktop
          ? dispatchCustomEvent(LOGO_CLICKED_EVENT)
          : dispatchCustomEvent(PACKAGE_IMPORTED_EVENT)

        setTimeout(() => {
          cursorPulse.classList.remove('expand')
          cursor.classList.add('visually-hidden')
        }, 700)
      },
    })
  }

  function clickMockEnter() {
    const CURSOR_PULSE_OFFSET = 12

    const packageName = document.getElementById('package-name')!
    const mockEnterElem = mockEnter.current!
    const cursorPulse = mockCursorPulse.current!
    const packageNameRect = packageName.getBoundingClientRect()
    const targetParentRect =
      mockEnterElem.parentElement!.getBoundingClientRect()

    const translateX =
      packageNameRect.right + CURSOR_PULSE_OFFSET - targetParentRect.left
    const translateY = packageNameRect.top + CURSOR_PULSE_OFFSET

    gsap.to('.cursor', {
      left: translateX,
      top: translateY,
      duration: 0,
      onComplete: () => {
        mockEnterElem.classList.remove('visually-hidden')
        mockEnterElem.classList.add('fade-in')

        setTimeout(() => {
          mockEnterElem.classList.add('mock-enter--active')
          cursorPulse.classList.add('expand', 'expand-enter')

          dispatchCustomEvent(PACKAGE_IMPORTED_EVENT)

          setTimeout(() => {
            cursorPulse.classList.remove('expand', 'expand-enter')
            mockEnterElem.classList.remove('mock-enter--active')
            mockEnterElem.classList.add('visually-hidden')
          }, 900)
        }, 700)
      },
    })
  }

  const handleLogoClick = useCallback(() => {
    const logo = document.getElementById('logo')!

    moveMockCursor(logo)

    document.addEventListener(TYPEWRITER_FINISHED_EVENT, clickMockEnter)
  }, [])

  useEffect(() => {
    const logo = document.getElementById('logo')!

    logo.addEventListener('click', handleLogoClick)

    handleLogoClick()

    return () => logo.removeEventListener('click', handleLogoClick)
  }, [handleLogoClick])

  return (
    <>
      <div className="mock-enter cursor visually-hidden" ref={mockEnter}>
        Enter
      </div>
      <div
        className="mock-cursor-pulse cursor visually-hidden"
        ref={mockCursorPulse}
      ></div>
      <Image
        className="mock-cursor cursor fade-in"
        ref={mockCursor}
        src="/cursor.svg"
        alt="Cursor"
        width={24}
        height={24}
        priority
      />
    </>
  )
}

export default HeroSectionAnimatedElements
