'use client'

import { useRef, useEffect } from 'react'
import styles from './header.module.scss'
import { dispatchCustomEvent } from '@/utils/customEvent'

export default function Navigation() {
  const navigation = useRef<HTMLDivElement>(null)

  function initiateTypewriter() {
    const textNodes = navigation.current?.querySelectorAll('span, a')!;

    textNodes.forEach(node => {
      node.classList.add('visually-hidden');
    })

    const speeds = [...(new Array(6).fill(23)), 12];

    processTextNodesSequentially(textNodes, speeds);
  }

  function processTextNodesSequentially(textNodes:NodeListOf<Element>, speeds:Array<number>, index = 0) {
    if (index >= textNodes.length) {
      return;
    }
  
    createTypewriterEffect(textNodes[index], speeds[index])
      .then(() => {
        processTextNodesSequentially(textNodes, speeds, index + 1); // Process the next node
      });
  }

  function createTypewriterEffect(node:Element, speed:number) {
    console.log(speed);

    return new Promise(resolve => {
      const text = node.textContent!;
      const parent = node.parentNode;
      
      if (parent instanceof Element) {
        // Create overlay element using ::after pseudo-element
        const overlay = document.createElement('span');
        overlay.classList.add('typewriter-overlay');
    
        // Set initial styles for the overlay
        overlay.style.backgroundColor = 'var(--background-color)';
        overlay.style.position = 'absolute';
        overlay.style.width = `${text.length}ch`;
        overlay.style.height = '100%';
        overlay.style.right = '0px';

        if (node.id === 'package-name') {
          setTimeout(() => {
            node.classList.add('text-white-400');
            node.classList.remove('visually-hidden');

            setTimeout(() => {
              node.classList.remove('text-white-400');
              resolve(true);
            }, 800)

            dispatchCustomEvent('typewriter-finished');
          }, 150)

          return;
        }

        node.appendChild(overlay);
        node.classList.remove('visually-hidden');
    
        let index = 0;
        const interval = setInterval(() => {
          overlay.style.width = text.length - (index + 1) + 'ch';
          index++;
          if (index >= text.length) {
            clearInterval(interval);
            overlay.remove();
            resolve(true);
          }
        }, 1000 / speed);
      }
    })
  }

  useEffect(() => {
    document.addEventListener('logo-clicked', initiateTypewriter);
  })

  return (
    <div className={styles.navigation} ref={navigation}>
      <span className="visually-hidden">import </span>
      <span className="text-large text-heading visually-hidden">{ `{ ` }</span>
      <nav className="text-large text-heading">
        <ul>
          <li><a className="visually-hidden">jobExperience, </a></li>
          <li><a className="visually-hidden">hardSkills, </a></li>
          <li><a className="visually-hidden">softSkills </a></li>
        </ul>
      </nav>
      <span className="text-large text-heading visually-hidden">{ `} `}</span>
      <div className="nowrap inline-flex">
        <span className="visually-hidden">from </span>
        <span id="package-name" className="text-heading text-large visually-hidden">&quot;MikhailGostev&quot;</span>
      </div>
    </div>
  )
}
