import { useContext } from 'react'

import { StoreContext } from 'Contexts/StoreContext'
import { SET_INTRO_COMPLETE } from 'Util/constants'

function useStore () {
  const { state, dispatch } = useContext(StoreContext)

  function completeIntro () {
    dispatch({
      type: SET_INTRO_COMPLETE,
      payload: true
    })
  }

  return {
    state,
    completeIntro
  }
}

export default useStore
