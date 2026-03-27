import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect, beforeEach } from 'vitest'
import { LangProvider } from '../context/LangContext'

// Mock the availability module so we can control the status per test.
// vi.mock is hoisted to the top by Vitest, so we use a factory that reads
// a mutable variable declared in module scope.
let mockStatus = 'available_remote'

vi.mock('../data/availability', () => ({
  get availabilityStatus() {
    return mockStatus
  },
}))

// Import AFTER the mock is set up
import('../components/AvailabilityBadge')

function renderWithLang(ui) {
  return render(<LangProvider>{ui}</LangProvider>)
}

describe('AvailabilityBadge', () => {
  beforeEach(async () => {
    // Reset to default before each test
    mockStatus = 'available_remote'
  })

  it('renders without crashing', async () => {
    const { default: AvailabilityBadge } = await import('../components/AvailabilityBadge')
    renderWithLang(<AvailabilityBadge />)
  })

  it('shows "Disponible remoto" when status is available_remote', async () => {
    mockStatus = 'available_remote'
    const { default: AvailabilityBadge } = await import('../components/AvailabilityBadge')
    renderWithLang(<AvailabilityBadge />)
    // In ES, availability.available_remote = 'Disponible remoto'
    expect(screen.getByText('Disponible remoto')).toBeInTheDocument()
  })

  it('has green dot (bg-green-400 class) for available_remote state', async () => {
    mockStatus = 'available_remote'
    const { default: AvailabilityBadge } = await import('../components/AvailabilityBadge')
    const { container } = renderWithLang(<AvailabilityBadge />)
    const dot = container.querySelector('.bg-green-400')
    expect(dot).toBeInTheDocument()
  })

  it('shows "No disponible" when status is not_available', async () => {
    mockStatus = 'not_available'
    const { default: AvailabilityBadge } = await import('../components/AvailabilityBadge')
    renderWithLang(<AvailabilityBadge />)
    // In ES, availability.not_available = 'No disponible'
    expect(screen.getByText('No disponible')).toBeInTheDocument()
  })
})
