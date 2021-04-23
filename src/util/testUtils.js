import { render } from '@testing-library/react'
import AppWrapper from '../AppWrapper'

function renderWithWrappers (ui, options) {
  return render(
    ui,
    {
      wrapper: AppWrapper,
      ...options
    }
  )
}

export * from '@testing-library/react'

export { renderWithWrappers as render }
