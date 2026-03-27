import { render, screen } from '@testing-library/react'
import Projects from '../components/Projects'

describe('Projects', () => {
  it('renders without crashing', () => {
    render(<Projects />)
  })

  it('shows "Proyectos" section label', () => {
    render(<Projects />)
    expect(screen.getByText('Proyectos')).toBeInTheDocument()
  })

  it('renders the gmail-ai-agent card', () => {
    render(<Projects />)
    expect(screen.getByText('gmail-ai-agent')).toBeInTheDocument()
  })

  it('renders the EvolutFit card', () => {
    render(<Projects />)
    expect(screen.getByText('EvolutFit')).toBeInTheDocument()
  })
})
