import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import TerminalInput from '../components/TerminalInput'

const t = {
  hint: "escribe 'help' para explorar",
  whoami: ['Deiby Gorrin', 'Fullstack Developer · disponible para oportunidades'],
  help: [
    'help          → muestra este mensaje',
    'ls            → lista las secciones',
  ],
  ls: ['hero', 'about', 'projects'],
  notFound: (cmd) => `comando no encontrado: ${cmd}. Escribe 'help'.`,
  goto: (section) => `→ navegando a #${section}`,
  gotoUnknown: (section) => `sección desconocida: ${section}. Usa 'ls'.`,
  opening: (target) => `→ abriendo ${target}...`,
}

function renderTerminal() {
  return render(<TerminalInput t={t} />)
}

describe('TerminalInput', () => {
  it('renders without crashing', () => {
    renderTerminal()
  })

  it('shows the hint text initially', () => {
    renderTerminal()
    expect(screen.getByText(/escribe 'help' para explorar/i)).toBeInTheDocument()
  })

  it('hides hint on focus', () => {
    renderTerminal()
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    expect(screen.queryByText(/\[>\]/)).not.toBeInTheDocument()
  })

  it('executes "help" and shows output', () => {
    renderTerminal()
    const input = screen.getByRole('textbox')
    fireEvent.focus(input)
    fireEvent.change(input, { target: { value: 'help' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(screen.getByText(/muestra este mensaje/i)).toBeInTheDocument()
  })

  it('executes "whoami" and shows name', () => {
    renderTerminal()
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'whoami' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(screen.getByText('Deiby Gorrin')).toBeInTheDocument()
  })

  it('executes "ls" and shows sections', () => {
    renderTerminal()
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'ls' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(screen.getByText(/hero.*about.*projects/i)).toBeInTheDocument()
  })

  it('shows error for unknown command', () => {
    renderTerminal()
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'foobar' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(screen.getByText(/comando no encontrado: foobar/i)).toBeInTheDocument()
  })

  it('clears output with "clear"', () => {
    renderTerminal()
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'whoami' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    fireEvent.change(input, { target: { value: 'clear' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    expect(screen.queryByText('Deiby Gorrin')).not.toBeInTheDocument()
  })

  it('autocompletes "hel" to "help" with Tab', () => {
    renderTerminal()
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'hel' } })
    fireEvent.keyDown(input, { key: 'Tab' })
    expect(input.value).toBe('help')
  })

  it('navigates history with ArrowUp', () => {
    renderTerminal()
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'whoami' } })
    fireEvent.keyDown(input, { key: 'Enter' })
    fireEvent.change(input, { target: { value: '' } })
    fireEvent.keyDown(input, { key: 'ArrowUp' })
    expect(input.value).toBe('whoami')
  })
})
