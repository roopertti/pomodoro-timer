import React, { useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { TIMER_STATE, TIMER_DURATIONS, ENTRY_TYPES } from 'Util/constants'
import useDB from 'Hooks/useDB'

export const TimerContext = React.createContext()
const { Provider } = TimerContext

export function TimerProvider ({ children }) {
  const [seconds, setSeconds] = useState(0)
  const [currentDuration, setCurrentDuration] = useState(0)
  const [timerState, setTimerState] = useState(TIMER_STATE.INITIAL)
  const timer = useRef(null)
  const { createEntry } = useDB()

  // This effect is fired when seconds change / timer gets activated
  useEffect(() => {
    // Stop here if timer is not running
    if (timerState === TIMER_STATE.INITIAL || timerState === TIMER_STATE.STOPPED || timerState === TIMER_STATE.COMPLETE) {
      clearTimeout(timer.current)
      return
    }

    // Set timer as completed
    if (seconds <= 0 && timerState === TIMER_STATE.RUNNING) {
      setTimerState(TIMER_STATE.COMPLETE)
      switch (currentDuration) {
        case TIMER_DURATIONS.WORK:
          createEntry({ type: ENTRY_TYPES.WORK, length: currentDuration })
          break
        case TIMER_DURATIONS.BREAK:
          createEntry({ type: ENTRY_TYPES.WORK, length: currentDuration })
          break
        default:
          break
      }
      return
    }

    // Declare new timeout to decrease seconds by 1
    timer.current = setTimeout(
      () => setSeconds(seconds - 1),
      1000
    )

    // Cleanup function if timeout needs to be interrupted
    return () => clearTimeout(timer.current)
  }, [timerState, seconds])

  function startWork () {
    setSeconds(TIMER_DURATIONS.WORK)
    setCurrentDuration(TIMER_DURATIONS.WORK)
    setTimerState(TIMER_STATE.RUNNING)
  }

  function startBreak () {
    setSeconds(TIMER_DURATIONS.BREAK)
    setCurrentDuration(TIMER_DURATIONS.BREAK)
    setTimerState(TIMER_STATE.RUNNING)
  }

  function handleReset () {
    setSeconds(0)
    setTimerState(TIMER_STATE.INITIAL)
  }

  function toggleRunning () {
    switch (timerState) {
      case TIMER_STATE.INITIAL:
      case TIMER_STATE.STOPPED:
        setTimerState(TIMER_STATE.RUNNING)
        break
      case TIMER_STATE.RUNNING:
        setTimerState(TIMER_STATE.STOPPED)
        break
      default:
        break
    }
  }

  const contextValue = useMemo(() => {
    return {
      seconds,
      timerState,
      handleReset,
      startWork,
      startBreak,
      toggleRunning,
      currentDuration
    }
  }, [
    seconds,
    timerState,
    handleReset,
    startWork,
    startBreak,
    toggleRunning,
    currentDuration
  ])

  return (
    <Provider value={contextValue}>{children}</Provider>
  )
}

TimerProvider.propTypes = {
  children: PropTypes.node
}
