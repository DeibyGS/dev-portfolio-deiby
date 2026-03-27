/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        matrix: '#00FF41',
        'cool-gray': '#E2E8F0',
        'dark-bg':      '#0D0D0D',
        'dark-surface': '#141414',
        'dark-card':    '#1A1A1A',
        'dark-border':  '#2A2A2A',
        'dark-text':    '#F8F8F8',
        'dark-muted':   '#6B6B6B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      transitionTimingFunction: {
        'cyber': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
