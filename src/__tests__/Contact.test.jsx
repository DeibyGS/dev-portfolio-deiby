import { render, screen } from '@testing-library/react'
import { LangProvider } from '../context/LangContext'
import Contact from '../components/Contact'

function renderWithLang(ui) {
  return render(<LangProvider>{ui}</LangProvider>)
}

describe('Contact', () => {
  it('renders without crashing', () => {
    renderWithLang(<Contact />)
  })

  it('shows "Hablemos" heading', () => {
    renderWithLang(<Contact />)
    // In ES, contact.title = 'Hablemos'
    expect(screen.getByRole('heading', { name: 'Hablemos' })).toBeInTheDocument()
  })

  it('has a LinkedIn link', () => {
    renderWithLang(<Contact />)
    const links = screen.getAllByRole('link')
    const linkedinLink = links.find(l => l.getAttribute('href')?.includes('linkedin.com'))
    expect(linkedinLink).toBeInTheDocument()
  })

  it('has a GitHub link', () => {
    renderWithLang(<Contact />)
    const links = screen.getAllByRole('link')
    const githubLink = links.find(l => l.getAttribute('href')?.includes('github.com'))
    expect(githubLink).toBeInTheDocument()
  })

  it('has an email link with deibygorrin@gmail.com', () => {
    renderWithLang(<Contact />)
    const emailLink = screen.getByRole('link', { name: /deibygorrin@gmail\.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:deibygorrin@gmail.com')
  })
})
