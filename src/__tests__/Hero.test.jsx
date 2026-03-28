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

  it('has "Ver proyectos" CTA link pointing to #projects', () => {
    renderWithLang(<Hero />)
    // In ES, hero.cta = 'Ver proyectos'
    const cta = screen.getByText('Ver proyectos').closest('a')
    expect(cta).toHaveAttribute('href', '#projects')
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
})
