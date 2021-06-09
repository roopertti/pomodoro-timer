import React from 'react'
import PropTypes from 'prop-types'
import { motion } from 'framer-motion'
import clsx from 'clsx'

const variants = {
  hovered: {
    transform: 'translateY(-3px)',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
  },
  initial: {
    transform: 'translateY(0px)'
  }
}

// TODO: add text postfix text

function Button ({ children, onClick, className, variant, testId }) {
  function mapVariantToClass () {
    switch (variant) {
      case 'success':
        return 'btn-success'
      case 'error':
        return 'btn-error'
      case 'secondary':
        return 'btn-secondary'
      case 'primary':
      default:
        return null
    }
  }

  return (
    <motion.button
      className={clsx('btn', mapVariantToClass(), className)}
      variants={variants}
      initial="initial"
      whileHover="hovered"
      whileFocus="hovered"
      transition={{ duration: 0.2 }}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </motion.button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func,
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'success', 'error', 'secondary']),
  testId: PropTypes.string
}

Button.defaultProps = {
  variant: 'primary'
}

export default Button
