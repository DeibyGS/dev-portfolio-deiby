# dev-portfolio-deiby

Portfolio personal de Deiby Gorrin — Fullstack Developer.

## Stack

<!-- AUTO-GENERATED -->
| Technology | Version | Purpose |
|------------|---------|---------|
| React | 18 | UI framework |
| Vite | latest | Build tool |
| Tailwind CSS | v3 | Styling |
| JavaScript | ES2022 | Language |
<!-- /AUTO-GENERATED -->

## Estructura del proyecto

<!-- AUTO-GENERATED -->
src/
  components/   # Componentes React (Navbar, Hero, About, Projects, ProjectCard, Contact)
  data/         # Datos estáticos (projects.js)
  App.jsx       # Componente raíz
  main.jsx      # Entry point
  index.css     # Estilos globales + Tailwind directives
<!-- /AUTO-GENERATED -->

## Secciones

<!-- AUTO-GENERATED -->
- **Hero**: Presentación, avatar, título, descripción, CTA y links sociales
- **About**: Bio personal y stack tecnológico con badges
- **Projects**: Tarjetas de proyectos con descripción, stack y link a GitHub
- **Contact**: Links a LinkedIn, GitHub y email
<!-- /AUTO-GENERATED -->

## Setup local

<!-- AUTO-GENERATED -->
```bash
# Clonar el repositorio
git clone https://github.com/DeibyGS/dev-portfolio-deiby.git
cd dev-portfolio-deiby

# Instalar dependencias
npm install

# Levantar en desarrollo
npm run dev

# Build para producción
npm run build
```
<!-- /AUTO-GENERATED -->

## Deploy

<!-- AUTO-GENERATED -->
Listo para deploy en Vercel o GitHub Pages.

**Vercel** (recomendado): Conectar repositorio en vercel.com — detección automática de Vite.

**GitHub Pages**: Añadir `base` en vite.config.js y configurar gh-pages.
<!-- /AUTO-GENERATED -->
