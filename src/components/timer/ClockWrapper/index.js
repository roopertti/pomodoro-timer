import React from 'react'
import propTypes from 'prop-types'
import clsx from 'clsx'

import useTimer from 'Hooks/useTimer'

function ClockWrapper ({ children }) {
  const {
    isWorkOngoing,
    isBreakOngoing,
    isStopped,
    isWorkComplete,
    isBreakComplete,
    isComplete
  } = useTimer()

  const renderDescription = () => {
    if (isWorkOngoing) {
      return 'Work now until the timer runs out...'
    }

    if (isBreakOngoing) {
      return 'Enjoy your break for now! Come back here when the timer runs out...'
    }

    if (isStopped) {
      return 'Timer paused'
    }

    if (isWorkComplete) {
      return 'Work period complete! Time to have a break!'
    }

    if (isBreakComplete) {
      return 'Break is over! Back to work!'
    }
  }

  const classes = clsx(
    'flex',
    'justify-center',
    'text-lg',
    'my-4',
    (isStopped || isComplete) && 'font-semibold'
  )

  return (
    <>
      <p className={classes} data-testid="timer-description">{renderDescription()}</p>
      <div className="flex justify-center my-4">
        {children}
      </div>
    </>
  )
}

ClockWrapper.propTypes = {
  children: propTypes.node
}

export default ClockWrapper
