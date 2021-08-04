import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { v4 } from 'uuid'

import { db } from 'Util/storage'

export const DBContext = React.createContext()

const { Provider } = DBContext

export function DBProvider ({ children }) {
  const insert = async (value) => {
    const key = v4()
    const record = await db.setItem(key, { key, ...value })
    return record
  }

  const findAll = async (key) => {
    const keys = await db.keys()
    const promises = keys.map(k => db.getItem(k))
    const records = await Promise.all(promises)
    return records
  }

  const update = async (value) => {
    const updatedRecord = await db.setItem(value.key, value)
    return updatedRecord
  }

  const contextValue = useMemo(() => {
    return { insert, findAll, update }
  }, [insert, findAll, update])

  return <Provider value={contextValue}>{children}</Provider>
}

DBProvider.propTypes = {
  children: PropTypes.node
}
