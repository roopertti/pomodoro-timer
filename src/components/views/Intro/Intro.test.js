import React from 'react'
import { render, fireEvent } from 'Util/testUtils'
import { STORE_KEY } from 'Util/constants'

import Intro from '.'

describe('Intro tests', () => {
  it('renders Intro component, click "Get started!" button', () => {
    const expectedStoreState = {
      introComplete: true
    }
    const { getByTestId, getByText } = render(<Intro />)
    expect(getByTestId('intro-view')).toBeInTheDocument()
    fireEvent.click(getByText('Get started!'))
    expect(global.localStorage.getItem(STORE_KEY)).toBe(JSON.stringify(expectedStoreState))
  })
})
