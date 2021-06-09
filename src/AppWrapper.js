import React from 'react'
import PropTypes from 'prop-types'

import { StoreProvider } from 'Contexts/StoreContext'
import { TimerProvider } from 'Contexts/TimerContext'

function AppWrapper ({ children }) {
  return (
    <StoreProvider>
      <TimerProvider>
        {children}
      </TimerProvider>
    </StoreProvider>
  )
}

AppWrapper.propTypes = {
  children: PropTypes.node
}

export default AppWrapper
