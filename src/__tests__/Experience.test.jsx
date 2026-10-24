import { render, screen } from '@testing-library/react'
import { LangProvider } from '../context/LangContext'
import Experience from '../components/Experience'

function renderWithLang(ui) {
  return render(<LangProvider>{ui}</LangProvider>)
}

describe('Experience', () => {
  it('renders without crashing', () => {
    renderWithLang(<Experience />)
  })

  it('renders the experience section', () => {
    const { container } = renderWithLang(<Experience />)
    expect(container.querySelector('#experience')).toBeInTheDocument()
  })

  it('shows the experience label', () => {
    renderWithLang(<Experience />)
    expect(screen.getByText(/\/\/ experiencia/i)).toBeInTheDocument()
  })

  it('shows the independent developer entry with exact dates and modality', () => {
    renderWithLang(<Experience />)
    expect(
      screen.getByText('Desarrollador independiente — Herramientas open source para agentes IA')
    ).toBeInTheDocument()
    expect(screen.getByText('Proyectos propios · Madrid · Remoto · 04/2026 – actualidad')).toBeInTheDocument()
  })

  it('shows Mercanza with exact dates and modality', () => {
    renderWithLang(<Experience />)
    expect(screen.getByText('Junior Developer (Prácticas FP)')).toBeInTheDocument()
    expect(screen.getByText('Mercanza · Madrid · Híbrido · 02/2026 – 06/2026')).toBeInTheDocument()
  })

  it('never claims the Mercanza module is in production', () => {
    const { container } = renderWithLang(<Experience />)
    expect(container.textContent).not.toMatch(/en producción/i)
    // Valid phrasing from the CV
    expect(container.textContent).toMatch(/Preparado para conectar un ERP real/)
  })

  it('never claims freelance/autónomo/clientes for the independent stage', () => {
    const { container } = renderWithLang(<Experience />)
    expect(container.textContent).not.toMatch(/autónomo|freelance|clientes/i)
  })

  it('shows the corrected figures (3.100+ sessions, 1.230 tests, 310 offers)', () => {
    const { container } = renderWithLang(<Experience />)
    expect(container.textContent).toMatch(/3\.100\+ sesiones/)
    expect(container.textContent).toMatch(/1\.230 tests/)
    expect(container.textContent).toMatch(/310 ofertas/)
  })
})
