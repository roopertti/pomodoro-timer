import React from 'react'
import PropTypes from 'prop-types'

import { StoreProvider } from 'Contexts/StoreContext'

function AppWrapper ({ children }) {
  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  )
}

AppWrapper.propTypes = {
  children: PropTypes.node
}

export default AppWrapper
