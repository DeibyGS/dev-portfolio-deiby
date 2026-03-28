import { render, screen } from '@testing-library/react'
import { LangProvider } from '../context/LangContext'
import Projects from '../components/Projects'

function renderWithLang(ui) {
  return render(<LangProvider>{ui}</LangProvider>)
}

describe('Projects', () => {
  it('renders without crashing', () => {
    renderWithLang(<Projects />)
  })

  it('shows projects label', () => {
    renderWithLang(<Projects />)
    expect(screen.getByText(/\/\/ proyectos/i)).toBeInTheDocument()
  })

  it('renders the gmail-ai-agent card', () => {
    renderWithLang(<Projects />)
    expect(screen.getByText('gmail-ai-agent')).toBeInTheDocument()
  })

  it('renders the EvolutFit card', () => {
    renderWithLang(<Projects />)
    expect(screen.getByText('EvolutFit')).toBeInTheDocument()
  })
})
