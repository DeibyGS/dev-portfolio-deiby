import '@testing-library/jest-dom'

// Framer Motion usa IntersectionObserver para whileInView — no existe en jsdom
global.IntersectionObserver = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
