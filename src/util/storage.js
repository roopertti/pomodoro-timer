import localforage, { INDEXEDDB, WEBSQL, LOCALSTORAGE } from 'localforage'

export const localStorage = localforage.createInstance({
  name: 'localstorage',
  driver: LOCALSTORAGE
})

export const db = localforage.createInstance({
  name: 'pomodoro-timer-entries',
  driver: [INDEXEDDB, WEBSQL, LOCALSTORAGE]
})
