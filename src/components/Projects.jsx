import { projects } from '../data/projects'
import ProjectCard from './ProjectCard'
import { useLang } from '../context/LangContext'
import { translations } from '../data/i18n'

function Projects() {
  const { lang } = useLang()
  const t = translations[lang].projects

  return (
    <section id="projects" className="bg-slate-950 py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2 block">
          {t.label}
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">
          {t.title}
        </h2>

        <div className="flex flex-col gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
