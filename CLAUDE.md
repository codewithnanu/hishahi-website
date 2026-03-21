# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm i          # Install dependencies
npm run dev    # Start dev server (http://localhost:5173)
npm run build  # Production build
```

No test or lint scripts are configured.

## Architecture

This is a React + TypeScript e-commerce website template exported from Figma, built with Vite.

**Routing** (`src/app/routes.ts` + `src/app/App.tsx`):
- React Router v7 with routes: `/`, `/products`, `/products/:id`, `/infrastructure`, `/about`, `/contact`, `/cart`
- `App.tsx` wraps everything in `CartProvider` and `RootLayout`

**State management** (`src/app/context/CartContext.tsx`):
- Cart state lives entirely in React Context via `useCart()` hook
- Cart items: `{ id, name, capacity, quantity, image }`

**Component layers**:
- `src/app/components/ui/` — 46 shadcn/ui (Radix UI) primitives, do not modify these directly
- `src/app/components/` — shared app components (Navigation, Footer, ProductCard)
- `src/app/pages/` — page-level components
- `src/app/layouts/RootLayout.tsx` — shared layout wrapper

**Data** (`src/app/data/products.ts`): Static product database, no backend.

**Styling**:
- Tailwind CSS v4 (configured via `@tailwindcss/vite` plugin, not `tailwind.config.js`)
- Design tokens in `src/app/styles/theme.css` (5000+ lines of CSS variables)
- Path alias `@` maps to `./src`

**UI libraries in use**: shadcn/ui components, Material-UI v7, Lucide icons, Recharts, React Hook Form, Sonner (toasts), Embla carousel, React DnD.
