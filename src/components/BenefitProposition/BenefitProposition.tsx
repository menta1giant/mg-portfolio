'use client'

import './benefit-proposition.scss'
import { useEffect, useRef } from 'react'
import { dispatchCustomEvent, PACKAGE_IMPORTED_EVENT, LETTERS_SCRAMBLED_EVENT } from '@/utils/customEvent'

const BenefitProposition: React.FC = () => {
  const textContainer = useRef<HTMLDivElement>(null);
  const phrase = 'ПОСТРОИМ КРУТОТУ ВМЕСТЕ';

  function initiateScramblePhrase() {
    const scrambledPart = textContainer.current!.querySelector('.benefit-proposition--active')!;
    const unscrambledPart = textContainer.current!.querySelector(':last-child')!;
    let iteration = 0;
    let interval: ReturnType<typeof setTimeout> | null = null;
  
    interval && clearInterval(interval);
    
    interval = setInterval(() => {
      scrambledPart.innerHTML = phrase.slice(0,iteration)

      unscrambledPart.innerHTML = phrase.slice(iteration)
        .split("")
        .map(() => {
          return phrase[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= textContainer.current!.dataset.value!.length){ 
        interval && clearInterval(interval);
        dispatchCustomEvent(LETTERS_SCRAMBLED_EVENT);
      }
      
      iteration += (1/3);
    }, 30);
  }

  useEffect(() => {
    document.addEventListener(PACKAGE_IMPORTED_EVENT, initiateScramblePhrase)
  })

  return (
    <div className="text-monospace benefit-proposition" ref={textContainer} data-value={phrase}><span className="benefit-proposition--active"></span><span>FULLSTACK WEB DEVELOPER</span></div>
  )
}

export default BenefitProposition