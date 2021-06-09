import React, { useMemo } from 'react'

import useTimer from 'Hooks/useTimer'

function Clock () {
  const { seconds, getFormattedTime } = useTimer()

  const timerString = useMemo(() => {
    return getFormattedTime()
  }, [seconds])

  return (
    <div data-testid="timer-component" className="flex justify-center mb-4">
      <span data-testid="timer-mmss" className="timer">{timerString}</span>
    </div>
  )
}

export default Clock
