import React from 'react'

import { render } from 'Util/testUtils'
import Timer from '.'

describe('Timer tests', () => {
  it('renders Timer component', () => {
    const { getByTestId } = render(<Timer />)
    expect(getByTestId('timer-component')).toBeInTheDocument()
    expect(getByTestId('timer-mmss')).toHaveTextContent('00:00')
  })
})
