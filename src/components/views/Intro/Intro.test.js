import React from 'react'
import { render } from '@testing-library/react'

import Intro from '.'

describe('Intro tests', () => {
  it('renders Intro component', () => {
    const { getByTestId } = render(<Intro />)
    expect(getByTestId('intro-view')).toBeInTheDocument()
  })
})
