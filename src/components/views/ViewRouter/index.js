import React from 'react'

import useStorage from 'Hooks/useStorage'
import Intro from 'Components/views/Intro'
import Main from 'Components/views/Main'

function ViewRouter () {
  const { state } = useStorage()

  return state.introComplete ? <Main /> : <Intro />
}

export default ViewRouter
