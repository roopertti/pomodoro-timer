import React from 'react'

import { render } from 'Util/testUtils'
import { STORE_KEY } from 'Util/constants'
import Layout from '.'

describe('Layout tests', () => {
  it('render initial Layout', () => {
    global.localStorage.setItem(STORE_KEY, JSON.stringify({ introComplete: false }))
    const { getByTestId } = render(
      <Layout>
        <h1 data-testid="test-content">Test content</h1>
      </Layout>
    )
    expect(getByTestId('test-content')).toBeInTheDocument()
    expect(getByTestId('app-layout')).toBeInTheDocument()
  })

  it('render Layout when intro is completed', () => {
    global.localStorage.setItem(STORE_KEY, JSON.stringify({ introComplete: true }))
    const { getByTestId } = render(
      <Layout>
        <h1 data-testid="test-content">Test content</h1>
      </Layout>
    )
    expect(getByTestId('test-content')).toBeInTheDocument()
    expect(getByTestId('app-layout')).toBeInTheDocument()
  })
})
