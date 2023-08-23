'use client'

import './benefit-proposition.scss'
import { useEffect, useRef, useState } from 'react'
import { dispatchCustomEvent, PACKAGE_IMPORTED_EVENT } from '@/utils/customEvent'

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

const BenefitProposition: React.FC = () => {
  const textContainer = useRef<HTMLDivElement>(null);
  const [texts, setTexts] = useState({
    scrambled: 'FULLSTACK WEB DEVELOPER',
    unscrambled: '',
  })
  const phrase = 'ПОСТРОИМ КРУТОТУ ВМЕСТЕ';

  function initiateScramblePhrase() {
    let iteration = 0;
    let interval: ReturnType<typeof setTimeout> | null = null;
  
    interval && clearInterval(interval);
    
    interval = setInterval(() => {
      let newScrambledPart = phrase.slice(iteration)
        .split("")
        .map((letter, index) => {
          if (phrase[index + Math.floor(iteration)] === ' ') return ' '
          return ALPHABET[Math.floor(Math.random() * ALPHABET.length)]
        })
        .join("");
    
      setTexts({
        scrambled: newScrambledPart,
        unscrambled: phrase.slice(0, iteration)
      });
      
      if (iteration >= textContainer.current!.dataset.value!.length){ 
        interval && clearInterval(interval);
      }
      
      iteration += (1/2);
    }, 30);
  }

  useEffect(() => {
    document.addEventListener(PACKAGE_IMPORTED_EVENT, initiateScramblePhrase)
  }, [])

  return (
    <div className="text-monospace benefit-proposition" ref={textContainer} data-value={phrase}>
      <h1 className="benefit-proposition--active">{ texts.unscrambled }</h1>
      <span>{ texts.scrambled }</span>
    </div>
  )
}

export default BenefitProposition