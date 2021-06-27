import { useContext } from 'react'

import { TimerContext } from 'Contexts/TimerContext'
import { parseSecondsToTimeString } from 'Util/timeFormat'
import { TIMER_STATE, TIMER_DURATIONS } from 'Util/constants'

function useTimer () {
  const {
    seconds,
    handleReset,
    startWork,
    timerState,
    startBreak,
    toggleRunning,
    currentDuration
  } = useContext(TimerContext)

  /**
   * Returns seconds formatted as time string (MM:SS)
   * @returns {String} Time string
   */
  const getFormattedTime = () => parseSecondsToTimeString(seconds)

  /**
   * Different timer states as boolean values
   */
  const isRunning = timerState === TIMER_STATE.RUNNING
  const isStopped = timerState === TIMER_STATE.STOPPED
  const isInitial = timerState === TIMER_STATE.INITIAL
  const isComplete = timerState === TIMER_STATE.COMPLETE
  const isWorkOngoing = currentDuration === TIMER_DURATIONS.WORK && isRunning
  const isBreakOngoing = currentDuration === TIMER_DURATIONS.BREAK && isRunning
  const isWorkComplete = currentDuration === TIMER_DURATIONS.WORK && isComplete
  const isBreakComplete = currentDuration === TIMER_DURATIONS.BREAK && isComplete

  return {
    seconds,
    startWork,
    handleReset,
    getFormattedTime,
    startBreak,
    toggleRunning,
    isRunning,
    isStopped,
    isInitial,
    isComplete,
    currentDuration,
    isWorkOngoing,
    isBreakOngoing,
    isWorkComplete,
    isBreakComplete
  }
}

export default useTimer
