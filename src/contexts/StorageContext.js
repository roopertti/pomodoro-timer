import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import {
  STORE_KEY
} from 'Util/constants'

const initialState = JSON.parse(localStorage.getItem(STORE_KEY)) || { introComplete: false }

export const StorageContext = React.createContext(initialState)

const { Provider } = StorageContext

export function StorageProvider ({ children }) {
  const [state, setState] = useState(initialState)

  // Prevent unnecessary rerenders
  const contextValue = useMemo(() => {
    return { state, setState }
  }, [state, setState])

  // Sync data to Local storage on state changes
  useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(state))
  }, [state])

  return <Provider value={contextValue}>{children}</Provider>
}

StorageProvider.propTypes = {
  children: PropTypes.node
}
