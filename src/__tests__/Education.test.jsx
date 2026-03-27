import { render, screen } from '@testing-library/react'
import { LangProvider } from '../context/LangContext'
import Education from '../components/Education'

function renderWithLang(ui) {
  return render(<LangProvider>{ui}</LangProvider>)
}

describe('Education', () => {
  it('renders without crashing', () => {
    renderWithLang(<Education />)
  })

  it('shows "Formación & Certificaciones" heading', () => {
    renderWithLang(<Education />)
    // In ES, education.title = 'Formación & Certificaciones'
    expect(screen.getByText('Formación & Certificaciones')).toBeInTheDocument()
  })

  it('shows "The Power" institution', () => {
    renderWithLang(<Education />)
    // Two entries have "The Power · Madrid" as institution
    const thePowerEntries = screen.getAllByText(/The Power/)
    expect(thePowerEntries.length).toBeGreaterThan(0)
  })

  it('shows "En curso" badge for in-progress entries', () => {
    renderWithLang(<Education />)
    // In ES, education.inProgress = 'En curso' — two entries are in progress
    const badges = screen.getAllByText('En curso')
    expect(badges.length).toBeGreaterThan(0)
  })

  it('shows certifications section heading', () => {
    renderWithLang(<Education />)
    // In ES, education.certTitle = 'Certificaciones'
    expect(screen.getByText('Certificaciones')).toBeInTheDocument()
  })

  it('shows "Oracle" text in certifications', () => {
    renderWithLang(<Education />)
    // Multiple Oracle certifications exist
    const oracleEntries = screen.getAllByText(/Oracle/)
    expect(oracleEntries.length).toBeGreaterThan(0)
  })
})
