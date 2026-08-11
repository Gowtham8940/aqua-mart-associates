# Aqua Mart Associates (AMA Waters)

Marketing site for Aqua Mart Associates — low-cost RO, desalination and water-recycling plant
designers/contractors for villages, gated communities and small municipalities across India.

A React migration of the original static landing page, rebuilt with a component-based
architecture, motion-driven interactions, and mobile/tablet-first responsiveness.

## Stack

- **[Vite](https://vite.dev/)** + **React 18** (JavaScript)
- **[Tailwind CSS v4](https://tailwindcss.com/)** — theme tokens in [`src/index.css`](src/index.css)
- **[Framer Motion](https://motion.dev/)** — scroll reveals, hover/tap micro-interactions
- **[lucide-react](https://lucide.dev/)** — icon set

## Architecture

- `src/data/site.js` — all copy/content as structured data; components stay presentational
- `src/components/` — one component per page section, plus shared primitives
  (`Button`, `Reveal`, `Icon`, `SectionHead`)
- `src/App.jsx` — composes sections; below-the-fold sections (`WhyUs`, `Projects`,
  `EnquiryForm`, `About`, `Footer`) are `React.lazy` + `Suspense` code-split so the initial
  bundle only pays for the hero/header/services above the fold

## Performance

- Route-level code splitting per section, vendor chunking (react / framer-motion / lucide)
- Brotli compression at build time
- Hero LCP image preloaded + `fetchpriority="high"`; all other images lazy-loaded
- Tailwind JIT ships only the utility CSS actually used

## Develop

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```
