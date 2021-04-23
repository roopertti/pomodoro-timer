import React from 'react'

import './styles/styles.css'

import Layout from './components/Layout'
import Blockquote from './components/Blockquote'

function App () {
  return (
    <Layout>
      <Blockquote
        quote="The Pomodoro Technique is a time management method developed by Francesco Cirillo in the late 1980s. The technique uses a timer to break down work into intervals, traditionally 25 minutes in length, separated by short breaks."
        citeUrl="https://en.wikipedia.org/wiki/Pomodoro_Technique"
        caption="Wikipedia"
      />
    </Layout>
  )
}

export default App
