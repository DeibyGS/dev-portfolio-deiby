import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'

describe('Navbar', () => {
  it('renders without crashing', () => {
    render(<Navbar />)
  })

  it('shows "Deiby Gorrin" text', () => {
    render(<Navbar />)
    expect(screen.getByText('Deiby Gorrin')).toBeInTheDocument()
  })

  it('has an About nav link', () => {
    render(<Navbar />)
    expect(screen.getByText('About')).toBeInTheDocument()
  })

  it('has a Projects nav link', () => {
    render(<Navbar />)
    expect(screen.getByText('Projects')).toBeInTheDocument()
  })

  it('has a Contact nav link', () => {
    render(<Navbar />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('About link points to #about', () => {
    render(<Navbar />)
    const link = screen.getByText('About').closest('a')
    expect(link).toHaveAttribute('href', '#about')
  })

  it('Projects link points to #projects', () => {
    render(<Navbar />)
    const link = screen.getByText('Projects').closest('a')
    expect(link).toHaveAttribute('href', '#projects')
  })

  it('Contact link points to #contact', () => {
    render(<Navbar />)
    const link = screen.getByText('Contact').closest('a')
    expect(link).toHaveAttribute('href', '#contact')
  })
})
