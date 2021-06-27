import { useContext } from 'react'

import { StorageContext } from 'Contexts/StorageContext'

function useStorage () {
  const { state, setState } = useContext(StorageContext)

  function completeIntro () {
    setState({ ...state, introComplete: true })
  }

  return {
    state,
    completeIntro
  }
}

export default useStorage
