import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'

const variants = {
  hovered: {
    transform: 'translateY(-3px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  initial: {
    transform: 'translateY(0px)'
  }
}

function Button ({ children, onClick }) {
  return (
    <motion.button
      className="btn"
      variants={variants}
      initial="initial"
      whileHover="hovered"
      whileFocus="hovered"
      transition={{ duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}

export default Button
