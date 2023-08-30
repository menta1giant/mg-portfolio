export function getLocalStorageDataByKey(key: string) {
  return localStorage.getItem(key)
}

export function setLocalStorageData(key: string, value: string) {
  return localStorage.setItem(key, value)
}

export function removeLocalStorageData(key: string) {
  return localStorage.removeItem(key)
}

export const LANDING_PAGE_VISITED = 'has_been_visited'
