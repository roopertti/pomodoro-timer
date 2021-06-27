import React from 'react'
import PropTypes from 'prop-types'

import { StoreProvider } from 'Contexts/StoreContext'
import { TimerProvider } from 'Contexts/TimerContext'
import { AlarmProvider } from 'Contexts/AlarmContext'

function AppWrapper ({ children }) {
  return (
    <StoreProvider>
      <TimerProvider>
        <AlarmProvider>
          {children}
        </AlarmProvider>
      </TimerProvider>
    </StoreProvider>
  )
}

AppWrapper.propTypes = {
  children: PropTypes.node
}

export default AppWrapper
