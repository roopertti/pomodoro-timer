import React from 'react'

import Button from 'Components/common/Button'
import useTimer from '../../../hooks/useTimer'

function ActivitySelection () {
  const { startWork, startBreak } = useTimer()

  return (
    <>
      <header className="py-4 mb-4">
        <h2>Select your next activity</h2>
        <p className="text-center">Either start working or have a short break.</p>
      </header>
      <div className="block sm:flex">
        <div className="mb-4 sm:mr-2">
          <Button testId="start-work" onClick={startWork} variant="success">Start working (25min)</Button>
        </div>
        <div className="mb-4">
          <Button testId="start-break" onClick={startBreak} variant="secondary">Start break (5min)</Button>
        </div>
      </div>
    </>
  )
}

export default ActivitySelection
