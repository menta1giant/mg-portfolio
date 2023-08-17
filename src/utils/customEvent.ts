export function dispatchCustomEvent(eventName:string) {
  const customEvent = new CustomEvent(eventName);
  document.dispatchEvent(customEvent);
}

export const LOGO_CLICKED_EVENT = 'hs-animation-logo-clicked';
export const PACKAGE_IMPORTED_EVENT = 'hs-animation-package-imported';
export const LETTERS_SCRAMBLED_EVENT = 'hs-animation-letters-scrambled';
export const TYPEWRITER_FINISHED_EVENT = 'hs-animation-typewriter-finished';