export function applyStickyHeader(header: HTMLDivElement) {
  const scrollPosition = window.scrollY

  if (scrollPosition > 150) {
    header.classList.add('sticky-header')
  } else {
    header.classList.remove('sticky-header')
  }
}
