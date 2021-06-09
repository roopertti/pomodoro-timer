import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

import useStore from 'Hooks/useStore'

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

/**
 * Return Layout motion props
 * @param {Number} delay Delay before component turns visible
 */
function getMotionProps (initial = 'hidden', delay = 0) {
  return {
    initial,
    animate: 'visible',
    variants,
    transition: { duration: 1, delay }
  }
}

function Layout ({ children }) {
  const { state } = useStore()

  const headerMotionProps = state.introComplete ? getMotionProps('visible') : getMotionProps()
  const footerMotionProps = state.introComplete ? getMotionProps('visible') : getMotionProps('hidden', 4)

  return (
    <div className="h-full flex flex-col items-center" data-testid="app-layout">
      <header>
        <motion.h1 {...headerMotionProps}>
          Pomodoro timer
        </motion.h1>
      </header>
      <main className="flex-grow">{children}</main>
      <motion.footer className="py-8" {...footerMotionProps}>
        Github link
      </motion.footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
