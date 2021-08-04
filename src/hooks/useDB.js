import { useContext } from 'react'

import { DBContext } from 'Contexts/DBContext'

function useDB () {
  const { insert, findAll, update } = useContext(DBContext)

  const createEntry = ({ type, length }) => {
    const entry = {
      type,
      length,
      createdAt: new Date().getTime(),
      description: null
    }
    return insert(entry)
  }

  const findAllEntries = () => findAll()

  const updateEntry = async (entry) => update(entry)

  return { createEntry, findAllEntries, updateEntry }
}

export default useDB
