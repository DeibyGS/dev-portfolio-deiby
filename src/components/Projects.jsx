import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2 block">
          Proyectos
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">
          Lo que he construido
        </h2>

        {/* Projects grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
