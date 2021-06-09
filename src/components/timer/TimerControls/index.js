import React from 'react'

import Button from 'Components/common/Button'
import useTimer from 'Hooks/useTimer'

function TimerControls () {
  const { toggleRunning, isRunning } = useTimer()

  return (
    <div className="flex justify-center mb-4">
      <Button
        onClick={toggleRunning}
        variant={isRunning() ? 'error' : 'success'}
        testId="timer-btn"
      >
        {isRunning() ? 'Stop' : 'Resume'}
      </Button>
    </div>
  )
}

export default TimerControls
