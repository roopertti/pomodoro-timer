import React from 'react'

import useStore from 'Hooks/useStore'
import Intro from 'Components/views/Intro'
import Timer from 'Components/views/Timer'

function ViewRouter () {
  const { state } = useStore()

  return state.introComplete ? <Timer /> : <Intro />
}

export default ViewRouter
