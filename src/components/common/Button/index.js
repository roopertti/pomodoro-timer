import React from 'react'
import PropTypes from 'prop-types'
import clsx from 'clsx'

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
    <button
      className={clsx('btn', mapVariantToClass(), className)}
      onClick={onClick}
      data-testid={testId}
    >
      {children}
    </button>
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
