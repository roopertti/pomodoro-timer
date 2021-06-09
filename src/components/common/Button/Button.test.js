import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'

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

  it('renders Button with all variats', () => {
    render(<Button variant="primary">Primary button</Button>)
    const primaryBtn = screen.getByText('Primary button')
    expect(Object.values(primaryBtn.classList)).toEqual(['btn'])

    render(<Button variant="secondary">Secondary button</Button>)
    const secondaryBtn = screen.getByText('Secondary button')
    expect(Object.values(secondaryBtn.classList)).toEqual(['btn', 'btn-secondary'])

    render(<Button variant="success">Success button</Button>)
    const successBtn = screen.getByText('Success button')
    expect(Object.values(successBtn.classList)).toEqual(['btn', 'btn-success'])

    render(<Button variant="error">Error button</Button>)
    const errorBtn = screen.getByText('Error button')
    expect(Object.values(errorBtn.classList)).toEqual(['btn', 'btn-error'])

    render(<Button>Without variant</Button>)
    const btnWithoutVariant = screen.getByText('Without variant')
    expect(Object.values(btnWithoutVariant.classList)).toEqual(['btn'])
  })
})
