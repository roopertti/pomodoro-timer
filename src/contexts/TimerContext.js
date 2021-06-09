import React, { useEffect, useMemo, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import { TIMER_STATE } from 'Util/constants'

export const TimerContext = React.createContext()
const { Provider } = TimerContext

export function TimerProvider ({ children }) {
  const [seconds, setSeconds] = useState(0)
  const [timerState, setTimerState] = useState(TIMER_STATE.INITIAL)
  const timer = useRef(null)

  // This effect is fired when seconds change / timer gets activated
  useEffect(() => {
    // Stop here if timer is not running
    if (timerState === TIMER_STATE.INITIAL || timerState === TIMER_STATE.STOPPED) {
      clearTimeout(timer.current)
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
    setSeconds(1500)
    setTimerState(TIMER_STATE.RUNNING)
  }

  function startBreak () {
    setSeconds(300)
    setTimerState(TIMER_STATE.STOPPED)
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
      toggleRunning
    }
  }, [seconds, timerState, handleReset, startWork, startBreak, toggleRunning])

  return (
    <Provider value={contextValue}>{children}</Provider>
  )
}

TimerProvider.propTypes = {
  children: PropTypes.node
}
