import React from 'react'
import { motion } from 'framer-motion'

import ActivitySelection from 'Components/timer/ActivitySelection'
import Clock from 'Components/timer/Clock'
import ClockWrapper from 'Components/timer/ClockWrapper'
import TimerControls from 'Components/timer/TimerControls'
import useTimer from 'Hooks/useTimer'

const hiddenVariants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(-30px)'
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0px)'
  }
}

const shrinkVariants = {
  hidden: {
    opacity: 0,
    height: '0'
  },
  visible: {
    opacity: 1,
    height: '100%'
  }
}

function Timer () {
  const { isInitial } = useTimer()

  return (
    <motion.section
      data-testid="timer-view"
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: 'easeOut' }}
      variants={hiddenVariants}
    >
      <motion.div
        initial="visible"
        animate={isInitial ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        variants={shrinkVariants}
      >
        <ActivitySelection />
      </motion.div>
      <motion.div
        initial="hidden"
        animate={!isInitial ? 'visible' : 'hidden'}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        variants={shrinkVariants}
      >
        <ClockWrapper>
          <Clock />
        </ClockWrapper>
        <TimerControls />
      </motion.div>
    </motion.section>
  )
}

export default Timer
