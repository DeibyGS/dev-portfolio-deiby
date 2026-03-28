import '@testing-library/jest-dom'

// Framer Motion usa IntersectionObserver para whileInView — no existe en jsdom
/* eslint-disable no-undef */
global.IntersectionObserver = class {
  constructor() {}
  observe() {}
  unobserve() {}
  disconnect() {}
}
/* eslint-enable no-undef */
