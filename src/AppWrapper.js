import React from 'react'
import PropTypes from 'prop-types'

import { StorageProvider } from 'Contexts/StorageContext'
import { TimerProvider } from 'Contexts/TimerContext'
import { AlarmProvider } from 'Contexts/AlarmContext'
import { DBProvider } from 'Contexts/DBContext'

function AppWrapper ({ children }) {
  return (
    <DBProvider>
      <StorageProvider>
        <TimerProvider>
          <AlarmProvider>
            {children}
          </AlarmProvider>
        </TimerProvider>
      </StorageProvider>
    </DBProvider>
  )
}

AppWrapper.propTypes = {
  children: PropTypes.node
}

export default AppWrapper
