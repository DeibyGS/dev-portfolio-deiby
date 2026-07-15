# Deiby Gorrin — Developer Portfolio

[![Live](https://img.shields.io/badge/Live-deiby.dev-00FF41?style=flat-square&logo=vercel&logoColor=white)](https://deiby.dev)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vite.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v3-38BDF8?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/License-MIT-gray?style=flat-square)](LICENSE)

Personal portfolio built with React 19 and Vite 8 — terminal-inspired dark theme, bilingual ES/EN, deployed on Vercel.

> **AI-assisted development** — built with [Claude Code](https://claude.ai/code) and [OpenCode](https://opencode.ai) as AI copilots. This project reflects how I integrate AI tooling into my day-to-day development workflow to ship faster and with higher quality.

---

## Live Demo

**[deiby.dev](https://deiby.dev)**

---

## Features

- **Terminal aesthetic** — dark matrix theme with monospace typography, animated bars and npm-style section headers
- **Bilingual** — full ES/EN language switch via React Context, persisted in `localStorage`
- **Smooth animations** — section transitions and list reveals powered by Framer Motion
- **GitHub Activity** — live contribution calendar via `react-github-calendar`
- **PDF certificates** — clickable cert cards open PDFs in a modal viewer
- **Responsive** — mobile-first layout with Tailwind CSS v3
- **Tested** — unit tests with Vitest + React Testing Library, coverage threshold enforced in CI

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI framework | React | 19 |
| Build tool | Vite | 8 |
| Styling | Tailwind CSS | v3 |
| Animation | Framer Motion | 12 |
| Language | JavaScript (ES2022) | — |
| Testing | Vitest + React Testing Library | 4 |
| Icons | devicon CDN + Simple Icons | — |
| Deploy | Vercel | — |

---

## Project Structure

```
src/
  components/       # All UI components
    TechStack.jsx   # Skills grouped in 5 sections: Languages, IA, Testing, Databases, Styles
    Education.jsx   # Formal education, certifications (with PDFs), and courses
    Projects.jsx    # Project cards with GitHub + live demo links
    Hero.jsx        # Animated terminal-style intro
    GithubActivity.jsx  # Live GitHub contribution calendar
    Contact.jsx     # Email + LinkedIn + GitHub
  context/
    LangContext.jsx # ES/EN language context
  data/
    i18n.js         # All translations (ES/EN) — single source of truth
    projects.js     # Project data
  __tests__/        # Unit tests (Vitest + RTL)
```

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Terminal-animated intro, bio, CTA, availability badge |
| **About** | Professional summary and background |
| **Skills** | 33 technologies across 5 groups with 4 skill levels (advanced / intermediate / basic / learning) |
| **Education** | Formal training + 6 certifications (Oracle, IBM, Microsoft) + 10 courses |
| **Projects** | Portfolio of personal and professional projects |
| **GitHub Activity** | Real-time contribution calendar |
| **Contact** | Direct contact links |

---

## AI-Assisted Development

This portfolio was built with AI copilots integrated throughout the development process:

| Tool | Role |
|---|---|
| [Claude Code](https://claude.ai/code) | Architecture decisions, component design, debugging, code review |
| [OpenCode](https://opencode.ai) | In-editor AI assistance, refactoring, quick iterations |

Using AI copilots reduced iteration time and allowed focus on design decisions and product quality rather than boilerplate. The result is a production-ready portfolio with tested components, a clean design system, and consistent bilingual support.

---

## Local Setup

```bash
# Clone the repository
git clone https://github.com/DeibyGS/dev-portfolio-deiby.git
cd dev-portfolio-deiby

# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm test

# Production build
npm run build
```

---

## Deploy

Deployed on **Vercel** with automatic deploys on push to `main`.

To deploy your own fork: connect the repo at [vercel.com](https://vercel.com) — Vite is auto-detected, no additional configuration needed.
