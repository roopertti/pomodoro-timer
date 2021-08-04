import React from 'react'
import renderer from 'react-test-renderer'

import Intro from 'Components/views/Intro'

jest.mock('localforage')

describe('Intro view integration tests', () => {
  it('renders and compares snapshot', () => {
    const tree = renderer.create(<Intro />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
