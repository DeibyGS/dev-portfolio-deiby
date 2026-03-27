import { render, screen } from '@testing-library/react'
import { LangProvider } from '../context/LangContext'
import TechStack from '../components/TechStack'

function renderWithLang(ui) {
  return render(<LangProvider>{ui}</LangProvider>)
}

describe('TechStack', () => {
  it('renders without crashing', () => {
    renderWithLang(<TechStack />)
  })

  it('shows "Stack tecnológico" heading', () => {
    renderWithLang(<TechStack />)
    // In ES, skills.title = 'Stack tecnológico'
    expect(screen.getByText('Stack tecnológico')).toBeInTheDocument()
  })

  it('renders React label', () => {
    renderWithLang(<TechStack />)
    // The label text "React" appears as a <span> below the icon
    const reactLabels = screen.getAllByText('React')
    expect(reactLabels.length).toBeGreaterThan(0)
  })

  it('renders Python label', () => {
    renderWithLang(<TechStack />)
    expect(screen.getByText('Python')).toBeInTheDocument()
  })

  it('renders Oracle SQL fallback text "ORA"', () => {
    renderWithLang(<TechStack />)
    // Oracle SQL has no devicon → renders a div with "ORA" text
    expect(screen.getByText('ORA')).toBeInTheDocument()
  })

  it('renders Power BI fallback text "PBI"', () => {
    renderWithLang(<TechStack />)
    // Power BI has no devicon → renders a div with "PBI" text
    expect(screen.getByText('PBI')).toBeInTheDocument()
  })
})
