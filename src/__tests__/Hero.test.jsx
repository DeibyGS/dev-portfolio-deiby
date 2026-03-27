import { render, screen } from '@testing-library/react'
import Hero from '../components/Hero'

describe('Hero', () => {
  it('renders without crashing', () => {
    render(<Hero />)
  })

  it('shows "Deiby Gorrin" in h1', () => {
    render(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Deiby Gorrin')
  })

  it('shows "Fullstack Developer"', () => {
    render(<Hero />)
    expect(screen.getByText('Fullstack Developer')).toBeInTheDocument()
  })

  it('has "Ver proyectos" CTA link pointing to #projects', () => {
    render(<Hero />)
    const cta = screen.getByText('Ver proyectos').closest('a')
    expect(cta).toHaveAttribute('href', '#projects')
  })

  it('has a GitHub link', () => {
    render(<Hero />)
    const links = screen.getAllByRole('link')
    const githubLink = links.find(l => l.getAttribute('href')?.includes('github.com'))
    expect(githubLink).toBeInTheDocument()
  })

  it('has a LinkedIn link', () => {
    render(<Hero />)
    const links = screen.getAllByRole('link')
    const linkedinLink = links.find(l => l.getAttribute('href')?.includes('linkedin.com'))
    expect(linkedinLink).toBeInTheDocument()
  })
})
