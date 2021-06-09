import React from 'react'
import { act } from 'react-dom/test-utils'
import renderer from 'react-test-renderer'

import AppWrapper from '../src/AppWrapper'
import Timer from 'Components/views/Timer'
import { render, fireEvent, waitFor, cleanup } from 'Util/testUtils'

describe('Timer view integration tests', () => {
  it('renders Timer view and compares snapshot', () => {
    const tree = renderer.create(
      (
        <AppWrapper>
          <Timer />
        </AppWrapper>
      )
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Timer, start work timer and pause timer', async () => {
    const { getByTestId } = render(<Timer />)
    expect(getByTestId('timer-view')).toBeInTheDocument()
    fireEvent.click(getByTestId('start-work'))
    await waitFor(() => {
      expect(getByTestId('timer-mmss')).toHaveTextContent('25:00')
    })
    expect(getByTestId('timer-btn')).toHaveTextContent('Stop')
    fireEvent.click(getByTestId('timer-btn'))
    expect(getByTestId('timer-btn')).toHaveTextContent('Resume')
  })
})
