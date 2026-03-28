import { render, screen } from '@testing-library/react'
import { LangProvider } from '../context/LangContext'
import About from '../components/About'

const renderAbout = () => render(
  <LangProvider>
    <About />
  </LangProvider>
)

describe('About', () => {
  it('renders without crashing', () => {
    expect(() => renderAbout()).not.toThrow()
  })

  it('renders the about section', () => {
    const { container } = renderAbout()
    expect(container.querySelector('#about')).toBeTruthy()
  })

  it('renders [OK] skill items', () => {
    renderAbout()
    const okItems = screen.getAllByText('[OK]')
    expect(okItems.length).toBeGreaterThan(0)
  })
})
