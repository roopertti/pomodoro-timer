import React from 'react'
import { render, waitFor } from '@testing-library/react'

import Blockquote from '.'

describe('Blockquote tests', () => {
  it('render Blockquote', async () => {
    const { getByText } = render(
      <Blockquote
        quote="Example quote"
        citeUrl="https://en.wikipedia.org/wiki/Pomodoro_Technique"
        caption="Wikipedia"
      />
    )
    await waitFor(() => expect(getByText('"Example quote"')).toBeInTheDocument())
  })
})
