# Twin Pillars Codebase Overview

## Stack & Tooling
- Astro 5 with TypeScript and TailwindCSS powers the site; layout primitives and pages are Astro components.
- UI relies on `astro-icon` for icons, `@fontsource-variable/inter` for typography, and Tailwind utilities configured in `tailwind.config.mjs` (custom neutral/primary palettes, animations, dark-mode selector).
- Build scripts (`package.json`) run `astro check` before `astro build`; local development uses `astro dev`.

## Structure & Layout Flow
- `src/layouts/Layout.astro` wraps every page with navigation, footer, scripts, and global styles; props feed SEO metadata.
- Routes live in `src/pages`, featuring the landing page plus service-specific pages (`business-valuation`, `machinery-and-equipment-valuation`, `real-estate-valuation`), `terms`, and a custom `404`.
- Navigation and footer content are data-driven via `src/config/navigationBar.ts`, `footerNavigation.ts`, `socialLinks.ts`, and site metadata in `config.ts`.

## UI Building Blocks
- Core layout components (`Section`, `Row`, `Col`, `Main`, `Spacer`) implement a 12-column grid with responsive modifiers.
- Reusable UI elements live under `src/components/ui` (buttons, cards, lists, forms) and are composed into higher-level blocks under `src/components/blocks` for hero, features, testimonials, contact, and highlights.
- Forms use `Form.astro` with Formspree submission endpoints; contact cards and CTA blocks reuse shared styling.

## Data & Content
- Feature grids pull from JSON definitions in `src/data/json-files` for each service vertical.
- `src/content.config.ts` registers a blog collection (markdown loader) though no entries ship by default.
- Asset references (hero images, card art, CTA backgrounds) live under `src/assets` and are imported directly into Astro components.

## Client Behavior & Theming
- `src/components/scripts/LocalScripts.astro` attaches DOM behavior after `astro:page-load`: mobile nav toggles, submenu handling, modal helpers, scroll-triggered animations, footer/header interaction, and theme switching persistence.
- Dark/light mode is controlled via a root `mode-*` class from config and Tailwind’s `dark` selector, with optional runtime toggling when `mode-auto` is set.

## Conventions & Integrations
- Components ship with succinct header comments describing purpose; new code should match the existing naming patterns and Tailwind utility style.
- External integrations include Formspree for form submissions and Vercel analytics hooks via `@vercel/analytics` (imported at project level).
- Tests are not defined; use `npm run build` (which runs `astro check`) as the primary verification step.
