export function dispatchCustomEvent(eventName:string) {
  const customEvent = new CustomEvent(eventName);
  document.dispatchEvent(customEvent);
}