import React, { useContext, useEffect, useMemo } from 'react'
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPause, faBell } from '@fortawesome/free-solid-svg-icons'

import useTimer from 'Hooks/useTimer'
import { AlarmContext } from 'Contexts/AlarmContext'

function Clock () {
  const { seconds, getFormattedTime, currentDuration, isStopped, isComplete } = useTimer()
  const { startAlarm, isPlaying } = useContext(AlarmContext)

  const timerString = useMemo(() => {
    return getFormattedTime()
  }, [seconds])

  useEffect(() => {
    if (isComplete) {
      startAlarm()
    }
  }, [isComplete])

  return (
    <div data-testid="timer-component" className="flex justify-center mb-4 w-48">
      <CircularProgressbarWithChildren
        value={currentDuration - seconds}
        maxValue={currentDuration}
        strokeWidth={2}
        styles={buildStyles({
          strokeLinecap: 'butt',
          pathColor: 'rgba(96, 165, 250)'
        })}
      >
        {isStopped && <FontAwesomeIcon color="rgba(248, 113, 113)" icon={faPause} />}
        {isPlaying && <FontAwesomeIcon color="#34D399" icon={faBell} />}
        <span data-testid="timer-mmss" className="timer">{timerString}</span>
      </CircularProgressbarWithChildren>
    </div>
  )
}

export default Clock
