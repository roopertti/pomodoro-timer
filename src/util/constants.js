/* Local Storage keys */
export const STORE_KEY = 'POMODORO_TIMER_DATA_STORAGE'

/* Action types */
export const SET_INTRO_COMPLETE = 'SET_INTRO_COMPLETE'
export const ADD_ENTRY = 'ADD_ENTRY'

/* Timer states */
export const TIMER_STATE = {
  INITIAL: 'INITIAL',
  RUNNING: 'RUNNING',
  STOPPED: 'STOPPED',
  COMPLETE: 'COMPLETE'
}

export const TIMER_DURATIONS = {
  WORK: 1500,
  BREAK: 300,
  LONG_BREAK: 5
}
