# Prince Giri — Digital Marketing Portfolio

A modern, high-performance personal portfolio website for Prince Giri, a digital marketing expert. Built with React, TypeScript, Vite, and Tailwind CSS, it showcases services, strategies, case studies, testimonials, blog content, and more with smooth animations and a professional visual style.

## Table of Contents
- **Overview**
- **Live Demo**
- **Features**
- **Tech Stack**
- **Getting Started**
- **Available Scripts**
- **Project Structure**
- **Styling & Theming**
- **Animations**
- **Content Sections**
- **SEO & Meta**
- **Deployment**
- **Contributing**

## Overview
This portfolio highlights Prince Giri’s capabilities in digital marketing—covering strategy, services, results (case studies), client testimonials, and a blog for thought leadership. It’s responsive, fast, and designed for clarity and conversions with clear CTAs.

## Live Demo
- Local development runs at `http://localhost:3000/` (configured in `vite.config.ts`).
- Add your production URL here once deployed.

## Features
- **Responsive UI**: Mobile-first, responsive layouts using Tailwind CSS.
- **Modern Stack**: React + TypeScript + Vite for fast DX and builds.
- **Smooth UX**: GSAP-powered smooth scrolling and subtle animations.
- **Clear Information Architecture**: Hero, About, Services, Strategies, Case Studies, Process, Testimonials, FAQ, Blog, and CTAs.
- **Easy Theming**: Centralized color palette, typography, and utilities via Tailwind config.
- **Production-ready**: Linting, type-checking, and optimized builds.

## Tech Stack
- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS (with custom theme)
- **Animations**: GSAP (`ScrollToPlugin` for smooth anchor scrolling)
- **Icons**: `lucide-react`
- **Potential Integrations**: Supabase SDK is available (not required by default) for forms or blog data if desired

## Getting Started
### Prerequisites
- Node.js 18+ recommended
- PNPM/NPM/Yarn (examples below use NPM)

### Installation
```bash
npm install
```

### Run in Development
```bash
npm run dev
```
The dev server starts at `http://localhost:3000/`.

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

### Lint
```bash
npm run lint
```

### Type Check
```bash
npm run typecheck
```

## Available Scripts
Defined in `package.json`:
- `dev`: Start Vite dev server
- `build`: Build for production
- `preview`: Preview the production build
- `lint`: Run ESLint
- `typecheck`: Run TypeScript type checking (`tsconfig.app.json`)

## Project Structure
```text
src/
  App.tsx                 // Main page composition and smooth-scroll setup
  main.tsx                // React root
  index.css               // Tailwind layers, fonts, utilities, keyframes
  components/
    About.tsx
    Blog.tsx
    CaseStudies.tsx
    CTA.tsx
    Differentiators.tsx
    FAQ.tsx
    FinalCTA.tsx
    Footer.tsx
    Header.tsx
    Hero.tsx
    Process.tsx
    Services.tsx
    Strategies.tsx
    Testimonials.tsx
  types/
    gsap.d.ts             // GSAP typings helper (if needed)
```
Other key files:
- `index.html`: HTML entry (sets `<title>` and mounts the app)
- `tailwind.config.js`: Theme, colors, animations, and scanning paths
- `vite.config.ts`: Vite configuration (React plugin, dev server at port 3000)

## Styling & Theming
Tailwind is configured in `tailwind.config.js` with a professional palette:
- `primary`, `secondary`, `accent`, `dark`, `light`, plus `text-primary`/`text-secondary`
- Custom fonts: `Inter` for body, `Poppins` for headings (loaded in `src/index.css`)
- Scales for `h1`, `h2`, `h3`, and body text via clamp-based sizes
- Utility classes like `glass-effect`, `text-gradient`, and animation helpers

To adjust the brand look, edit colors, fonts, shadows, and radii in `tailwind.config.js`. Global typography and utilities live in `src/index.css`.

## Animations
GSAP is used for progressive enhancements:
- Smooth anchor scrolling with `ScrollToPlugin` (initialized in `App.tsx`)
- Optional keyframe-based utility animations (`float`, `gradient`, `slideUp`, `fadeIn`) defined in `tailwind.config.js` and `src/index.css`

## Content Sections
Page composition is defined in `App.tsx`:
- `Header` — site navigation with anchor links
- `Hero` — primary headline and CTA
- `About` — introduction and expertise
- `WhyHireMe` & `Differentiators` — positioning and unique value
- `Services` — offerings as a digital marketing expert
- `Strategies` — approach, frameworks, or tactics
- `CaseStudies` — results and social proof
- `Process` — engagement workflow
- `Blog` — content marketing and thought leadership
- `Testimonials` — trust signals
- `FAQ` — common questions
- `CTA` & `Footer` — conversion and site footer

You can reorder, remove, or enhance these sections directly within `App.tsx` and the respective component files in `src/components/`.

## SEO & Meta
- Update the page title in `index.html` (`<title>Prince Giri Personal Portfolio Website</title>`)
- Add meta tags (description, Open Graph, Twitter) to improve SEO and sharing
- Consider a sitemap and `robots.txt` if deploying publicly

## Deployment
This project builds to static assets (ideal for CDNs and static hosts):

### Vercel
- Import the repository into Vercel
- Framework preset: Vite
- Build command: `npm run build`
- Output directory: `dist`

### Netlify
- Build command: `npm run build`
- Publish directory: `dist`

### GitHub Pages or Static Hosts
- Run `npm run build`
- Serve the `dist/` folder via your static host

## Contributing
For content or UI updates, open a pull request with a clear description and screenshots (where helpful). For larger changes (routing, data fetching, design overhaul), please open an issue to discuss approach first.

---

Crafted for Prince Giri to showcase digital marketing expertise with clarity, credibility, and conversions. 🚀
