import { render, screen } from '@testing-library/react'
import About from '../components/About'

describe('About', () => {
  it('renders without crashing', () => {
    render(<About />)
  })

  it('shows "Sobre mí" heading', () => {
    render(<About />)
    expect(screen.getByText('Sobre mí')).toBeInTheDocument()
  })

  it('shows "Tecnologías" heading', () => {
    render(<About />)
    expect(screen.getByText('Tecnologías')).toBeInTheDocument()
  })

  it('renders React tech badge', () => {
    render(<About />)
    expect(screen.getByText('React')).toBeInTheDocument()
  })

  it('renders Node.js tech badge', () => {
    render(<About />)
    expect(screen.getByText('Node.js')).toBeInTheDocument()
  })

  it('renders Python tech badge', () => {
    render(<About />)
    expect(screen.getByText('Python')).toBeInTheDocument()
  })
})
