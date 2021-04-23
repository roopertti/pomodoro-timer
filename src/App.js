import React from 'react'

import './styles/styles.css'

import Layout from 'Components/common/Layout'
import ViewRouter from 'Components/views/ViewRouter'
import AppWrapper from './AppWrapper'

function App () {
  return (
    <AppWrapper>
      <Layout>
        <ViewRouter />
      </Layout>
    </AppWrapper>
  )
}

export default App
