import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import Button from '.'

describe('Button tests', () => {
  it('renders Button and tests click', () => {
    const handleClick = jest.fn()
    const { getByText } = render(<Button onClick={handleClick}>TestBtn</Button>)
    const btn = getByText('TestBtn')
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)
    expect(handleClick).toHaveBeenCalled()
  })
})
