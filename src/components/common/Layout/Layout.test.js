import React from 'react'
import { render } from '@testing-library/react'

import Layout from '.'

describe('Layout tests', () => {
  it('render Layout', () => {
    const { getByTestId } = render(
      <Layout>
        <h1 data-testid="test-content">Test content</h1>
      </Layout>
    )
    expect(getByTestId('test-content')).toBeInTheDocument()
    expect(getByTestId('app-layout')).toBeInTheDocument()
  })
})
