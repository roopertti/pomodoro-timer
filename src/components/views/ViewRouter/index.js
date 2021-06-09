import React from 'react'

import useStore from 'Hooks/useStore'
import Intro from 'Components/views/Intro'
import Main from 'Components/views/Main'

function ViewRouter () {
  const { state } = useStore()

  return state.introComplete ? <Main /> : <Intro />
}

export default ViewRouter
