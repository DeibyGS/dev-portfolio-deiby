import { render, screen } from '@testing-library/react'
import ProjectCard from '../components/ProjectCard'

// mockProject includes all current fields used by ProjectCard
const mockProject = {
  id: 1,
  name: 'test-project',
  description: 'A test project description.',
  stack: ['React', 'Node.js', 'MongoDB'],
  githubUrl: 'https://github.com/DeibyGS/test-project',
  liveUrl: null,
  imageUrl: null,
}

const mockProjectWithLive = {
  ...mockProject,
  id: 2,
  name: 'live-project',
  liveUrl: 'https://live-project.vercel.app/',
}

describe('ProjectCard', () => {
  it('renders without crashing', () => {
    render(<ProjectCard project={mockProject} />)
  })

  it('shows the project name', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('test-project')).toBeInTheDocument()
  })

  it('shows the project description', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('A test project description.')).toBeInTheDocument()
  })

  it('shows stack tags', () => {
    render(<ProjectCard project={mockProject} />)
    expect(screen.getByText('React')).toBeInTheDocument()
    expect(screen.getByText('Node.js')).toBeInTheDocument()
    expect(screen.getByText('MongoDB')).toBeInTheDocument()
  })

  it('has a GitHub link with the correct href', () => {
    render(<ProjectCard project={mockProject} />)
    const githubLink = screen.getByRole('link', { name: /ver test-project en github/i })
    expect(githubLink).toHaveAttribute('href', 'https://github.com/DeibyGS/test-project')
  })

  it('does NOT show live URL icon when liveUrl is null', () => {
    render(<ProjectCard project={mockProject} />)
    // The live demo link has aria-label "Ver demo de <name>"
    expect(screen.queryByRole('link', { name: /ver demo de test-project/i })).not.toBeInTheDocument()
  })

  it('shows live URL icon when liveUrl is provided', () => {
    render(<ProjectCard project={mockProjectWithLive} />)
    const liveLink = screen.getByRole('link', { name: /ver demo de live-project/i })
    expect(liveLink).toHaveAttribute('href', 'https://live-project.vercel.app/')
  })
})
