import { render, screen } from '@testing-library/react'
import { LangProvider } from '../context/LangContext'
import Navbar from '../components/Navbar'

function renderWithLang(ui) {
  return render(<LangProvider>{ui}</LangProvider>)
}

describe('Navbar', () => {
  it('renders without crashing', () => {
    renderWithLang(<Navbar />)
  })

  it('shows "~/deiby" brand text', () => {
    renderWithLang(<Navbar />)
    expect(screen.getByText('~/deiby')).toBeInTheDocument()
  })

  it('has a Skills nav link', () => {
    renderWithLang(<Navbar />)
    // In ES, nav.skills = 'Skills'
    expect(screen.getByText('Skills')).toBeInTheDocument()
  })

  it('has a Projects nav link', () => {
    renderWithLang(<Navbar />)
    // In ES, nav.projects = 'Proyectos'
    expect(screen.getByText('Proyectos')).toBeInTheDocument()
  })

  it('has an Education nav link', () => {
    renderWithLang(<Navbar />)
    // In ES, nav.education = 'Formación'
    expect(screen.getByText('Formación')).toBeInTheDocument()
  })

  it('has a Contact nav link', () => {
    renderWithLang(<Navbar />)
    // In ES, nav.contact = 'Contacto'
    expect(screen.getByText('Contacto')).toBeInTheDocument()
  })

  it('Skills link points to #skills', () => {
    renderWithLang(<Navbar />)
    const link = screen.getByText('Skills').closest('a')
    expect(link).toHaveAttribute('href', '#skills')
  })

  it('Projects link points to #projects', () => {
    renderWithLang(<Navbar />)
    const link = screen.getByText('Proyectos').closest('a')
    expect(link).toHaveAttribute('href', '#projects')
  })

  it('Contact link points to #contact', () => {
    renderWithLang(<Navbar />)
    const link = screen.getByText('Contacto').closest('a')
    expect(link).toHaveAttribute('href', '#contact')
  })

  it('shows ES and EN buttons (LangSwitch)', () => {
    renderWithLang(<Navbar />)
    expect(screen.getByRole('button', { name: 'ES' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'EN' })).toBeInTheDocument()
  })

  it('renders AvailabilityBadge for both desktop and mobile (two instances)', () => {
    renderWithLang(<Navbar />)
    // Badge renders twice: hidden md:flex (desktop) + flex md:hidden (mobile)
    // Tailwind hides via CSS, not conditional rendering — both are in the DOM
    const badges = screen.getAllByText(/Disponible|Not available|No disponible/i)
    expect(badges.length).toBeGreaterThanOrEqual(2)
  })
})
