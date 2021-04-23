import React from 'react'
import { motion } from 'framer-motion'

import Blockquote from 'Components/common/Blockquote'
import Button from 'Components/common/Button'

const variants = {
  hidden: {
    opacity: 0,
    transform: 'translateY(-30px)'
  },
  visible: {
    opacity: 1,
    transform: 'translateY(0px)'
  }
}

/**
 * Returns Intro motion props
 * @param {Number} delay Delay before component turns visible
 */
function getMotionProps (delay = 0) {
  return {
    animate: 'visible',
    initial: 'hidden',
    variants,
    transition: { duration: 1.5, ease: 'easeOut', delay }
  }
}

function Intro () {
  return (
    <section data-testid="intro-view">
      <motion.div {...getMotionProps(1.5)}>
        <Blockquote
          quote="The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks."
          citeUrl="https://en.wikipedia.org/wiki/Pomodoro_Technique"
          caption="Wikipedia"
        />
      </motion.div>
      <motion.div
        className="flex justify-center py-8"
        {...getMotionProps(3)}
      >
        <Button>Get started!</Button>
      </motion.div>
    </section>
  )
}

export default Intro