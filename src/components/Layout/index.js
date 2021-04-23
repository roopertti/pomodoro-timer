import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 }
}

function Layout ({ children }) {
  return (
    <div className="h-full flex flex-col items-center" data-testid="app-layout">
      <header className="text-2xl py-8">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={variants}
          transition={{ duration: 1 }}
        >
          Pomodoro timer
        </motion.h1>
      </header>
      <main className="flex-grow">{children}</main>
      <motion.footer
        className="py-8"
        initial="hidden"
        animate="visible"
        variants={variants}
        transition={{ duration: 1, delay: 3 }}
      >
        Github link
      </motion.footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node
}

export default Layout
