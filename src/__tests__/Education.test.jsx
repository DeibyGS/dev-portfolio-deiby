import { render, screen, fireEvent } from '@testing-library/react'
import { LangProvider } from '../context/LangContext'
import Education from '../components/Education'

function renderWithLang(ui) {
  return render(<LangProvider>{ui}</LangProvider>)
}

describe('Education', () => {
  it('renders without crashing', () => {
    renderWithLang(<Education />)
  })

  it('shows education label', () => {
    renderWithLang(<Education />)
    expect(screen.getByText(/\/\/ formación/i)).toBeInTheDocument()
  })

  it('shows "The Power" institution', () => {
    renderWithLang(<Education />)
    // Two entries have "The Power · Madrid" as institution
    const thePowerEntries = screen.getAllByText(/The Power/)
    expect(thePowerEntries.length).toBeGreaterThan(0)
  })

  it('shows exactly one "en curso" badge (AI Engineer master in progress)', () => {
    renderWithLang(<Education />)
    // Only the AI Engineer master is still in progress
    const badges = screen.getAllByText('en curso')
    expect(badges.length).toBe(1)
  })

  it('shows certifications terminal command', () => {
    renderWithLang(<Education />)
    // Certifications block now uses npm terminal style
    expect(screen.getByText('npm run verify-certs')).toBeInTheDocument()
  })

  it('shows verified badge on certifications', () => {
    renderWithLang(<Education />)
    // In ES, education.verified = '✓ verificado'
    const verified = screen.getAllByText('✓ verificado')
    expect(verified.length).toBe(6)
  })

  it('shows "Oracle" text in certifications', () => {
    renderWithLang(<Education />)
    // Multiple Oracle certifications exist
    const oracleEntries = screen.getAllByText(/Oracle/)
    expect(oracleEntries.length).toBeGreaterThan(0)
  })

  it('shows the AI Engineer master as in progress in the formal education block', () => {
    renderWithLang(<Education />)
    expect(screen.getByText('Máster en AI Engineer')).toBeInTheDocument()
    expect(screen.getAllByText('en curso').length).toBe(1)
  })

  it('shows only Oracle, IBM and Bejob courses by default (Udemy folded)', () => {
    const { container } = renderWithLang(<Education />)
    expect(screen.getByText('Desarrollador Oracle SQL-PL/SQL')).toBeInTheDocument()
    expect(screen.getByText('Curso Certificado de Python Avanzado orientado al Desarrollo Backend')).toBeInTheDocument()
    // Udemy and Dabo courses stay hidden until the toggle is expanded
    expect(container.textContent).not.toMatch(/Máster en JavaScript/)
    expect(container.textContent).not.toMatch(/Confección y publicación de páginas web/)
    expect(screen.getByText(/otros cursos \(7\)/)).toBeInTheDocument()
  })

  it('reveals the folded courses when the toggle is expanded', () => {
    renderWithLang(<Education />)
    fireEvent.click(screen.getByText(/otros cursos \(7\)/))
    expect(screen.getByText('Máster en JavaScript')).toBeInTheDocument()
    expect(screen.getByText(/Confección y publicación de páginas web/)).toBeInTheDocument()
    expect(screen.getByText(/ocultar otros cursos/)).toBeInTheDocument()
  })
})
