import React, { useEffect, useMemo, useReducer } from 'react'
import PropTypes from 'prop-types'

import {
  STORE_KEY,
  SET_INTRO_COMPLETE
} from 'Util/constants'

const initialState = JSON.parse(localStorage.getItem(STORE_KEY)) || { introComplete: false, entries: [] }

export const StoreContext = React.createContext(initialState)

const { Provider } = StoreContext

function reducer (state, action) {
  /* DIY "redux-logger" :-) */
  if (process.env.NODE_ENV === 'development') {
    console.group(`Current action: ${action.type}`)
    console.log('-- Payload --')
    console.log(action.payload)
    console.log('-- Current state --')
    console.log(state)
    console.groupEnd()
  }

  switch (action.type) {
    case SET_INTRO_COMPLETE:
      return { ...state, introComplete: action.payload }
    default:
      return state
  }
}

export function StoreProvider ({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState)

  // Prevent unnecessary rerenders
  const contextValue = useMemo(() => {
    return { state, dispatch }
  }, [state, dispatch])

  // Sync data to Local storage on state changes
  useEffect(() => {
    localStorage.setItem(STORE_KEY, JSON.stringify(state))
  }, [state])

  return <Provider value={contextValue}>{children}</Provider>
}

StoreProvider.propTypes = {
  children: PropTypes.node
}
