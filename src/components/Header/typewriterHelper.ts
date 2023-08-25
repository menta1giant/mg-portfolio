import {
  dispatchCustomEvent,
  TYPEWRITER_FINISHED_EVENT,
} from '@/utils/customEvent'

function createTypewriterEffect(node: Element, speed: number) {
  return new Promise((resolve) => {
    const text = node.textContent!
    const parent = node.parentNode

    if (parent instanceof Element) {
      const overlay = document.createElement('span')
      overlay.classList.add('typewriter-overlay')

      overlay.style.backgroundColor = 'var(--background-color)'
      overlay.style.position = 'absolute'
      overlay.style.width = `${text.length}ch`
      overlay.style.height = '100%'
      overlay.style.right = '0px'

      if (node.id === 'package-name') {
        setTimeout(() => {
          node.classList.add('text-white-400')
          node.classList.remove('visually-hidden')

          setTimeout(() => {
            node.classList.remove('text-white-400')
            resolve(true)
          }, 800)

          dispatchCustomEvent(TYPEWRITER_FINISHED_EVENT)
        }, 150)

        return
      }

      node.appendChild(overlay)
      node.classList.remove('visually-hidden')

      let index = 0
      const interval = setInterval(() => {
        overlay.style.width = text.length - (index + 1) + 'ch'

        index++

        if (index >= text.length) {
          clearInterval(interval)
          overlay.remove()
          resolve(true)
        }
      }, 1000 / speed)
    }
  })
}

export default function processTextNodesSequentially(
  textNodes: NodeListOf<Element>,
  speeds: Array<number>,
  index = 0,
) {
  if (index >= textNodes.length) {
    return
  }

  createTypewriterEffect(textNodes[index], speeds[index]).then(() => {
    processTextNodesSequentially(textNodes, speeds, index + 1)
  })
}
