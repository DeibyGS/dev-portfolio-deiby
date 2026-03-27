function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-14 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#hero"
          className="text-slate-100 font-semibold hover:text-cyan-400 transition-colors"
        >
          Deiby Gorrin
        </a>

        {/* Nav links — hidden on mobile */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#about"
            className="text-sm text-slate-400 font-medium hover:text-cyan-400 transition-colors duration-200"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-sm text-slate-400 font-medium hover:text-cyan-400 transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-slate-400 font-medium hover:text-cyan-400 transition-colors duration-200"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
