import React from 'react'
import { render } from '@testing-library/react'

import App from '../src/App'

describe('App component tests', () => {
  it('render App', () => {
    const { getByTestId } = render(<App />)
    expect(getByTestId('app-layout')).toBeInTheDocument()
  })
})
