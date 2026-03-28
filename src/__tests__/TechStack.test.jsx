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

  it('shows skills label', () => {
    renderWithLang(<TechStack />)
    expect(screen.getByText(/\/\/ tecnologías/i)).toBeInTheDocument()
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

  it('renders Oracle SQL label', () => {
    renderWithLang(<TechStack />)
    // Oracle SQL now uses devicon oracle-original.svg
    expect(screen.getByText('Oracle SQL')).toBeInTheDocument()
  })

  it('renders Power BI label', () => {
    renderWithLang(<TechStack />)
    // Power BI now uses Simple Icons CDN
    expect(screen.getByText('Power BI')).toBeInTheDocument()
  })

  it('renders TypeScript label (replaced Angular)', () => {
    renderWithLang(<TechStack />)
    expect(screen.getByText('TypeScript')).toBeInTheDocument()
  })

  it('renders npm-style terminal footer', () => {
    renderWithLang(<TechStack />)
    expect(screen.getByText(/paquetes cargados/)).toBeInTheDocument()
  })
})
