import { useContext } from 'react'

import { TimerContext } from 'Contexts/TimerContext'
import { parseSecondsToTimeString } from 'Util/timeFormat'
import { TIMER_STATE } from 'Util/constants'

function useTimer () {
  const {
    seconds,
    handleReset,
    startWork,
    timerState,
    startBreak,
    toggleRunning
  } = useContext(TimerContext)

  const getFormattedTime = () => parseSecondsToTimeString(seconds)
  const isRunning = () => timerState === TIMER_STATE.RUNNING
  const isStopped = () => timerState === TIMER_STATE.STOPPED
  const isInitial = () => timerState === TIMER_STATE.INITIAL

  return {
    seconds,
    startWork,
    handleReset,
    getFormattedTime,
    startBreak,
    toggleRunning,
    isRunning,
    isStopped,
    isInitial
  }
}

export default useTimer
