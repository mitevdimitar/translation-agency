# Project: Translation & Localization Agency

## Purpose

Build a premium English-language website for a new
translation and localization agency helping international
companies enter Balkan markets.

Technology localization is a key differentiator, but the
agency also offers general business translation services.

The agency name is undecided. Use "BRAND NAME".

## Tech Stack

- Next.js App Router
- TypeScript
- Tailwind CSS
- ESLint
- npm

## Design Direction

- Premium, modern, accessible SaaS-inspired design
- Light page background: #F8FAFC
- Dark hero background: #0B1220
- Primary text: #172033
- Teal accent: #46C6B5
- Secondary accent: #7C9CFF
- Generous whitespace and responsive layouts
- English copy throughout

## Homepage

- Header and navigation
- Hero: "Go Global. Speak Local."
- Value proposition
- Balkan market coverage
- Services
- Technology advantage
- Industries
- How we work
- About the founders
- Final call to action
- Footer

## Engineering Rules

- Prefer React Server Components.
- Use client components only when necessary.
- Keep components small and reusable.
- Avoid unnecessary dependencies.
- Use semantic HTML and accessible markup.
- Follow existing project conventions.
- Never invent testimonials, client logos, certifications,
  partnerships, or business statistics.
- Do not implement backend services, CMS, or working
  contact forms during Phase 1.

## Tailwind Conventions

- Apply these conventions to all future components.
- Prefer standard Tailwind CSS v4 utilities over arbitrary-value classes
  for spacing, sizing, positioning,
  typography, and border radius; reuse existing brand and layout tokens.
- Avoid arbitrary pixel offsets and spacing when standard utilities exist.
- Use Grid, Flexbox, relative positioning, alignment utilities, and fractional positioning
  instead of manually calculated pixel offsets.
- Allow arbitrary values only for a clear technical reason when no
  standard utility or existing token fits. Introduce named reusable tokens
  for repeated nonstandard values, and document necessary exceptions.
- Preserve mathematically exact alignment; do not substitute approximate
  spacing utilities when they would misalign elements.
- Reserve the project-wide arbitrary-value audit and cleanup for Task 14.

## Agent Workflow

- Complete one small task at a time.
- Do not scan node_modules, .next, or generated files.
- Read only files relevant to the current task.
- Do not repeatedly inspect the same unchanged files.
- Avoid unnecessary research and subagents.
- Make minimal, focused changes.
- Run npm run lint and npm run build when appropriate.
- Stop after completing the requested task.
- Summarize changed files and verification results.

## Image Assets and Copyright

This is a commercial website. All visual assets must have appropriate commercial-use rights.

Rules:

- Prefer original CSS and SVG illustrations for decorative graphics.
- Never copy images or designs directly from Dribbble, Behance, Pinterest, or other inspiration websites.
- Never download arbitrary images from search results.
- Use third-party photographs only when their commercial-use licenses have been verified.
- Record the source URL, creator (if available), license, and attribution requirements for every third-party image.
- Store approved third-party assets locally in the project.
- Do not use images containing recognizable brands, logos, or people without checking relevant rights and restrictions.
- Do not assume that publicly accessible images are free to use.
- If licensing is unclear, do not include the asset.
- Do not introduce new external image assets without explicit approval.
