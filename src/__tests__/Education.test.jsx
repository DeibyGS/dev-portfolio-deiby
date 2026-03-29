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

  it('shows "En curso" badge for in-progress entries', () => {
    renderWithLang(<Education />)
    // In ES, education.inProgress = 'En curso' — two entries are in progress
    const badges = screen.getAllByText('En curso')
    expect(badges.length).toBeGreaterThan(0)
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
    expect(verified.length).toBe(4)
  })

  it('shows "Oracle" text in certifications', () => {
    renderWithLang(<Education />)
    // Multiple Oracle certifications exist
    const oracleEntries = screen.getAllByText(/Oracle/)
    expect(oracleEntries.length).toBeGreaterThan(0)
  })
})
