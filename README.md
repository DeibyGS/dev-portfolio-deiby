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
| devicon | CDN | Tech icons for TechStack section |
<!-- /AUTO-GENERATED -->

## Estructura del proyecto

<!-- AUTO-GENERATED -->
src/
  components/   # Componentes React (Navbar, Hero, About, TechStack, Education, Projects, ProjectCard, Contact, AvailabilityBadge, LangSwitch)
  context/      # LangContext.jsx — contexto React para idioma activo
  data/         # Datos estáticos (projects.js, i18n.js, availability.js)
  App.jsx       # Componente raíz
  main.jsx      # Entry point
  index.css     # Estilos globales + Tailwind directives
<!-- /AUTO-GENERATED -->

## Secciones

<!-- AUTO-GENERATED -->
- **Hero**: Presentación, avatar placeholder (iniciales DG), bio de 2 párrafos del CV real, CTA y links sociales — soporta i18n ES/EN
- **TechStack**: 18 tecnologías con iconos devicon (CDN) organizados en grid responsive
- **Education**: Timeline con 5 formaciones académicas + 4 certificaciones Oracle/IBM del CV real
- **Projects**: Layout vertical — tarjetas horizontales con espacio para imagen, descripción, stack y links (GitHub + live demo opcional)
- **Contact**: Email real (deibygorrin@gmail.com), links a LinkedIn y GitHub — soporta i18n ES/EN
<!-- /AUTO-GENERATED -->

## i18n

<!-- AUTO-GENERATED -->
Soporte de idioma ES/EN implementado con React Context:

- **LangContext** (`src/context/LangContext.jsx`): provee el estado del idioma global
- **i18n.js** (`src/data/i18n.js`): objeto con todas las traducciones ES/EN para cada sección
- **LangSwitch** (`src/components/LangSwitch.jsx`): toggle ES/EN en el Navbar, persiste en `localStorage` con clave `portfolio-lang`
- Hook de consumo: `const { lang } = useLang()` en cualquier componente
- **Fade de idioma**: al cambiar idioma, el contenido principal hace fade-out/fade-in (150ms) via `AnimatePresence` con `key={lang}` en `MainContent`
<!-- /AUTO-GENERATED -->

## SEO

<!-- AUTO-GENERATED -->
Meta tags configurados en `index.html`:

- `<title>` y `<meta name="description">` con descripción real del portfolio
- **Open Graph** (`og:title`, `og:description`, `og:type`, `og:url`, `og:image`) para previews en redes sociales
- **Twitter Card** (`twitter:card`, `twitter:title`, `twitter:description`) para Twitter/X
- `<meta name="theme-color" content="#0D0D0D">` para mobile browsers
- OG image placeholder en `/public/og-image.png` — reemplazar con imagen real antes del deploy
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
