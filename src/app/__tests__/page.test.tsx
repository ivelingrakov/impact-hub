import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../page'

test('renders homepage with heading', () => {
  const { getByRole } = render(<Home />)
  const heading = getByRole('heading', { name: /welcome to next\.js/i })
  expect(heading).toBeInTheDocument()
})
