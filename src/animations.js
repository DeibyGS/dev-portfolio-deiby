/**
 * Variantes centralizadas de Framer Motion para el portfolio.
 * Usadas en todas las secciones para stagger de entrada.
 */

// Contenedor que orquesta el stagger de sus hijos
export const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
}

// Cada item individual: entra desde abajo con fade
export const itemVariants = {
  hidden:   { opacity: 0, y: 16 },
  visible:  { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
}
