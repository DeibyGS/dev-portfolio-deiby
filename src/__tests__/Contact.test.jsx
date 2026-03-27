import { render, screen } from '@testing-library/react'
import Contact from '../components/Contact'

describe('Contact', () => {
  it('renders without crashing', () => {
    render(<Contact />)
  })

  it('shows "Hablemos" heading', () => {
    render(<Contact />)
    expect(screen.getByRole('heading', { name: 'Hablemos' })).toBeInTheDocument()
  })

  it('has a LinkedIn link', () => {
    render(<Contact />)
    const links = screen.getAllByRole('link')
    const linkedinLink = links.find(l => l.getAttribute('href')?.includes('linkedin.com'))
    expect(linkedinLink).toBeInTheDocument()
  })

  it('has a GitHub link', () => {
    render(<Contact />)
    const links = screen.getAllByRole('link')
    const githubLink = links.find(l => l.getAttribute('href')?.includes('github.com'))
    expect(githubLink).toBeInTheDocument()
  })

  it('has an email link', () => {
    render(<Contact />)
    const emailLink = screen.getByRole('link', { name: /deiby@email\.com/i })
    expect(emailLink).toHaveAttribute('href', 'mailto:deiby@email.com')
  })
})
