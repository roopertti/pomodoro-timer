import React, { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'

import {
  STORE_KEY
} from 'Util/constants'
import { localStorage as storage } from 'Util/storage'

const initialState = { introComplete: false }

export const StorageContext = React.createContext(initialState)

const { Provider } = StorageContext

export function StorageProvider ({ children }) {
  const [state, setState] = useState(initialState)

  const initState = async () => {
    const data = await storage.getItem(STORE_KEY)
    if (data) {
      setState(JSON.parse(data))
    }
  }

  useEffect(() => {
    initState()
  }, [])

  // Sync data to Local storage on state changes
  useEffect(() => {
    storage.setItem(STORE_KEY, JSON.stringify(state))
  }, [state])

  // Prevent unnecessary rerenders
  const contextValue = useMemo(() => {
    return { state, setState }
  }, [state, setState])

  return <Provider value={contextValue}>{children}</Provider>
}

StorageProvider.propTypes = {
  children: PropTypes.node
}
