import React, { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

export const DBContext = React.createContext()

const { Provider } = DBContext

const DB_NAME = 'pomodoro-timer-entry-db'
const DB_INITIAL_VERSION = 1
const DB_STORE_NAME = 'timerEntries'

export function DBProvider ({ children }) {
  const dbRef = useRef(null)

  useEffect(() => {
    console.log('opening indexed db instance')
    if (!window.indexedDB) {
      console.warn('IndexedDB is not supported by your browser. Time entries will not be saved between page reloads.')
      return
    }

    const request = window.indexedDB.open(DB_NAME, DB_INITIAL_VERSION)

    request.onerror = () => {
      console.warn('IndexedDB was not allowed, time entries will not be saved between page reloads.')
    }

    request.onsuccess = (event) => {
      dbRef.current = event.target.result
      dbRef.current.onerror = () => console.error(`Database error: ${event.target.errorCode}`)
      dbRef.current.onversionchange = () => {
        dbRef.current.close()
        alert('Database is outdated, please reload the page.')
      }
      console.log('db opened')
    }

    request.onupgradeneeded = (event) => {
      const db = event.target.result
      const objectStore = db.createObjectStore(DB_STORE_NAME, { keyPath: 'id', autoIncrement: true })
      objectStore.createIndex('type', 'type', { unique: false })
    }
  }, [])

  return <Provider value={null}>{children}</Provider>
}

DBProvider.propTypes = {
  children: PropTypes.node
}
