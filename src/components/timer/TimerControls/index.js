import React, { useContext } from 'react'

import Button from 'Components/common/Button'
import useTimer from 'Hooks/useTimer'
import { AlarmContext } from 'Contexts/AlarmContext'

function TimerControls () {
  const {
    toggleRunning,
    isRunning,
    isComplete,
    isStopped,
    isWorkComplete,
    isBreakComplete,
    startBreak,
    startWork
  } = useTimer()
  const { stopAlarm, isPlaying } = useContext(AlarmContext)

  return (
    <div className="flex justify-center mb-4">
      { (isRunning || isStopped) &&
        <Button
          onClick={toggleRunning}
          variant={isRunning ? 'error' : 'success'}
          testId="timer-btn"
        >
          {isRunning ? 'Stop' : 'Resume'}
        </Button>
      }
      { isComplete && isPlaying &&
        <Button
          onClick={stopAlarm}
          variant="success"
          testId="stop-alarm-btn"
          className="mr-2"
        >
          Stop alarm
        </Button>
      }
      { isWorkComplete &&
        <Button
          onClick={() => {
            stopAlarm()
            startBreak()
          }}
          variant="primary"
          testId="start-break-btn"
        >
          Start break (5min)
        </Button>
      }
      { isBreakComplete &&
        <Button
          onClick={() => {
            stopAlarm()
            startWork()
          }}
          variant="primary"
          testId="start-work-btn"
        >
          Start work (25min)
        </Button>

      }
    </div>
  )
}

export default TimerControls
