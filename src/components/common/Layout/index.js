import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

/**
 * Return Layout motion props
 * @param {Number} delay Delay before component turns visible
 */
function getMotionProps (delay = 0) {
  return {
    initial: 'hidden',
    animate: 'visible',
    variants,
    transition: { duration: 1, delay }
  }
}

function Layout ({ children }) {
  return (
    <div className="h-full flex flex-col items-center" data-testid="app-layout">
      <header className="text-2xl py-8">
        <motion.h1 {...getMotionProps()}>
          Pomodoro timer
        </motion.h1>
      </header>
      <main className="flex-grow">{children}</main>
      <motion.footer className="py-8" {...getMotionProps(4)}>
        Github link
      </motion.footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
