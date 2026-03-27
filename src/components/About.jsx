const techs = [
  "React", "Node.js", "Python", "MongoDB", "PostgreSQL",
  "Docker", "Git", "Tailwind", "SCSS", "FastAPI",
]

function About() {
  return (
    <section
      id="about"
      className="bg-slate-900 py-16 md:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <span className="text-xs font-semibold text-cyan-400 uppercase tracking-widest mb-2 block">
          Sobre mí
        </span>

        <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-12">
          Un poco de contexto
        </h2>

        {/* Two-column grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: bio */}
          <div className="flex flex-col gap-5">
            <p className="text-slate-400 leading-relaxed">
              Soy estudiante de Desarrollo de Aplicaciones Multiplataforma (DAM) con
              pasión por construir productos digitales completos, desde la base de datos
              hasta la interfaz de usuario. Me interesa especialmente la arquitectura de
              software y cómo las decisiones técnicas impactan en la experiencia real.
            </p>
            <p className="text-slate-400 leading-relaxed">
              He trabajado en proyectos propios que combinan frontend moderno con
              backends escalables, experimentando con sistemas de mensajería como Kafka,
              APIs asíncronas en Python y aplicaciones móviles con React Native. Cada
              proyecto es una oportunidad de aprender algo nuevo y aplicarlo bien.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Fuera del código, me gusta entender el negocio detrás del producto: por qué
              se construye algo, para quién y cómo medir si realmente funciona. Busco un
              entorno donde pueda crecer técnicamente y aportar valor desde el primer día.
            </p>
          </div>

          {/* Right: tech stack */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-6">
              Tecnologías
            </h3>
            <div className="flex flex-wrap gap-3">
              {techs.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-800 text-slate-300 border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 transition-colors duration-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
