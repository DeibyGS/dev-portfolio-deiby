import { render, screen } from '@testing-library/react'
import { LangProvider } from '../context/LangContext'
import Hero from '../components/Hero'

function renderWithLang(ui) {
  return render(<LangProvider>{ui}</LangProvider>)
}

describe('Hero', () => {
  it('renders without crashing', () => {
    renderWithLang(<Hero />)
  })

  it('shows "Deiby Gorrin" in h1', () => {
    renderWithLang(<Hero />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('Deiby Gorrin')
  })

  it('shows "Fullstack Developer" in terminal block', () => {
    renderWithLang(<Hero />)
    // In the Cyber-Minimalist redesign, "Fullstack Developer" is part of the
    // terminal line `role: "Fullstack Developer"`, split across child elements.
    // We use a substring matcher to locate the containing div.
    expect(
      screen.getByText((content) => content.includes('Fullstack Developer'))
    ).toBeInTheDocument()
  })

  it('renders the interactive terminal input', () => {
    renderWithLang(<Hero />)
    // CTA replaced by TerminalInput — check the $ prompt and input are present
    expect(screen.getByRole('textbox', { name: /terminal/i })).toBeInTheDocument()
  })


  it('has a GitHub link', () => {
    renderWithLang(<Hero />)
    const links = screen.getAllByRole('link')
    const githubLink = links.find(l => l.getAttribute('href')?.includes('github.com'))
    expect(githubLink).toBeInTheDocument()
  })

  it('has a LinkedIn link', () => {
    renderWithLang(<Hero />)
    const links = screen.getAllByRole('link')
    const linkedinLink = links.find(l => l.getAttribute('href')?.includes('linkedin.com'))
    expect(linkedinLink).toBeInTheDocument()
  })

  it('renders avatar img with alt="Deiby Gorrin"', () => {
    renderWithLang(<Hero />)
    // Avatar is now an <img> element (Cyber-Minimalist redesign), not a div with "DG" text
    const avatar = screen.getByRole('img', { name: 'Deiby Gorrin' })
    expect(avatar).toBeInTheDocument()
  })

  it('renders the CV download link', () => {
    renderWithLang(<Hero />)
    const links = screen.getAllByRole('link')
    const cvLink = links.find(l => l.getAttribute('href')?.includes('CV_Deiby_Gorrin.pdf'))
    expect(cvLink).toBeInTheDocument()
  })

  it('CV link has the download attribute', () => {
    renderWithLang(<Hero />)
    const links = screen.getAllByRole('link')
    const cvLink = links.find(l => l.getAttribute('href')?.includes('CV_Deiby_Gorrin.pdf'))
    expect(cvLink).toHaveAttribute('download')
  })
})
