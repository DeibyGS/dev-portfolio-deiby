import { render, screen, fireEvent } from '@testing-library/react'
import { LangProvider } from '../context/LangContext'
import LangSwitch from '../components/LangSwitch'

function renderWithLang(ui) {
  return render(<LangProvider>{ui}</LangProvider>)
}

describe('LangSwitch', () => {
  it('renders without crashing', () => {
    renderWithLang(<LangSwitch />)
  })

  it('shows ES and EN buttons', () => {
    renderWithLang(<LangSwitch />)
    expect(screen.getByRole('button', { name: 'ES' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'EN' })).toBeInTheDocument()
  })

  it('ES button is active by default (has text-cyan-400 class)', () => {
    renderWithLang(<LangSwitch />)
    const esButton = screen.getByRole('button', { name: 'ES' })
    // LangProvider defaults to localStorage value or 'es'
    // In test environment localStorage is empty → lang = 'es'
    expect(esButton.className).toMatch(/text-cyan-400/)
  })

  it('EN button is NOT active by default', () => {
    renderWithLang(<LangSwitch />)
    const enButton = screen.getByRole('button', { name: 'EN' })
    expect(enButton.className).not.toMatch(/text-cyan-400/)
  })

  it('clicking EN makes EN button active', () => {
    renderWithLang(<LangSwitch />)
    const enButton = screen.getByRole('button', { name: 'EN' })
    fireEvent.click(enButton)
    expect(enButton.className).toMatch(/text-cyan-400/)
  })

  it('clicking EN makes ES button inactive', () => {
    renderWithLang(<LangSwitch />)
    const esButton = screen.getByRole('button', { name: 'ES' })
    const enButton = screen.getByRole('button', { name: 'EN' })
    fireEvent.click(enButton)
    expect(esButton.className).not.toMatch(/text-cyan-400/)
  })
})
