import { render } from '@testing-library/react'
import About from '../components/About'

// About.jsx now returns null — it was merged into Hero.
// Tests only verify it does not crash.

describe('About', () => {
  it('renders without crashing', () => {
    // Should not throw even though the component returns null
    expect(() => render(<About />)).not.toThrow()
  })

  it('renders nothing (returns null)', () => {
    const { container } = render(<About />)
    expect(container).toBeEmptyDOMElement()
  })
})
