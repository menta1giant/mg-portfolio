'use client'

import Image from 'next/image'
import { gsap } from "gsap"
import { useEffect, useRef } from 'react'
import './animated-elements.scss'
import { dispatchCustomEvent, LOGO_CLICKED_EVENT, PACKAGE_IMPORTED_EVENT, TYPEWRITER_FINISHED_EVENT, LETTERS_SCRAMBLED_EVENT } from '@/utils/customEvent'

const HeroSectionAnimatedElements: React.FC = () => {
  const mockCursor = useRef<HTMLImageElement>(null);
  const mockEnter = useRef<HTMLDivElement>(null);
  const mockCursorPulse = useRef<HTMLDivElement>(null);

  function moveMockCursor(elem1:HTMLElement, elem2:HTMLElement) {
    gsap.to('.cursor', {
      left: 0,
      top: 0,
      duration: 0
    }) 
    mockCursor.current?.classList.remove('visually-hidden');

    const elem1Rect = elem1.getBoundingClientRect();
    const elem2Rect = elem2.getBoundingClientRect();
  
    const translateX = elem2Rect.left + elem2.clientWidth / 2;
    const translateY = elem2Rect.top + elem2.clientHeight / 2;

    console.dir(mockCursor);
  
    gsap.to('.cursor', {
      left: translateX,
      top: translateY,
      duration: 0.5, // Animation duration in seconds
      ease: "power2.out", // Easing function
      onComplete: () => {
        mockCursorPulse.current?.classList.add('expand');

        const isDesktop = window.matchMedia("(min-width: 600px)").matches;
        console.log(isDesktop);
        isDesktop ? dispatchCustomEvent(LOGO_CLICKED_EVENT) : dispatchCustomEvent(PACKAGE_IMPORTED_EVENT);

        setTimeout(() => {
          mockCursorPulse.current?.classList.remove('expand');
          mockCursor.current?.classList.add('visually-hidden');
        }, 700)
      }
    });
  };

  function clickMockEnter() {
    const packageName = document.getElementById('package-name')!;
    const mockEnterElem = mockEnter.current!;
    const packageNameRect = packageName.getBoundingClientRect();
  
    const translateX = packageNameRect.right + 12;
    const translateY = packageNameRect.top + 12;

    gsap.to('.cursor', {
      left: translateX,
      top: translateY,
      duration: 0,
      onComplete: () => {
        mockEnterElem.classList.remove('visually-hidden');
        mockEnterElem.classList.add('fade-in');

        setTimeout(() => {
          mockEnterElem.classList.add('mock-enter--active');
          mockCursorPulse.current?.classList.add('expand', 'expand-enter');

          dispatchCustomEvent(PACKAGE_IMPORTED_EVENT);
          setTimeout(() => {
            mockCursorPulse.current?.classList.remove('expand', 'expand-enter');
            mockEnterElem.classList.remove('mock-enter--active');
            mockEnterElem.classList.add('visually-hidden');
          }, 900)
        }, 700)
      }
    }) 
  }

  function fadeUpHeroSection() {
    console.log('a');
    const nodes = document.querySelectorAll('.fade-up-later');

    nodes.forEach(node => {
      node.classList.remove('fade-up-later');
      node.classList.add('fade-up');
    })
  }

  function logoClickHandler() {
    const logo = document.getElementById("logo")!;

    moveMockCursor(mockCursor.current!, logo);

    document.addEventListener(TYPEWRITER_FINISHED_EVENT, clickMockEnter);
  }

  useEffect(()=>{
    const logo = document.getElementById("logo")!;

    logo.addEventListener('click', logoClickHandler);

    document.addEventListener(LETTERS_SCRAMBLED_EVENT, fadeUpHeroSection);

    logoClickHandler();
  }, [])

  return (
    <>
      
      <div className="mock-enter cursor visually-hidden" ref={mockEnter}>Enter</div>
      <div className="mock-cursor-pulse cursor visually-hidden" ref={mockCursorPulse}></div>
      <Image
        id="mock-cursor"
        className="cursor fade-in"
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