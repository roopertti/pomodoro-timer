import React from 'react'
import renderer from 'react-test-renderer'

import { render, waitFor, fireEvent } from 'Util/testUtils'
import Intro from 'Components/views/Intro'
import { STORE_KEY } from 'Util/constants'

describe('Intro view integration tests', () => {
  it('renders and compares snapshot', () => {
    const tree = renderer.create(<Intro />).toJSON()
    expect(tree).toMatchSnapshot()
  })

  it('renders Intro view, completes intro', async () => {
    const { getByTestId } = render(<Intro />)
    expect(getByTestId('intro-view')).toBeInTheDocument()
    fireEvent.click(getByTestId('get-started-btn'))
    await waitFor(() => {
      expect(JSON.parse(global.localStorage.getItem(STORE_KEY))).toStrictEqual({ introComplete: true })
    })
  })
})
