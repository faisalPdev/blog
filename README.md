# faisalpalliyali.online

Personal portfolio and blog — a terminal-inspired, minimal site built with [Astro](https://astro.build).

**Live:** https://faisalpalliyali.online

## Stack

- **[Astro 5](https://astro.build)** — static site generation, zero client-side framework
- **TypeScript** — `astro/tsconfigs/strict`
- **Plain CSS** — no Tailwind, no UI library; design tokens in [`src/styles/global.css`](src/styles/global.css)
- **Vercel** — hosting and deploys

No runtime JavaScript framework ships to the browser. The only client-side scripts are a theme toggle, the command palette, and small cursor/hover effects.

## Getting started

Requires Node.js 18.20.8+, 20.3+, or 22+.

```bash
npm install
npm run dev      # dev server at http://localhost:4321
```

| Command | Description |
| --- | --- |
| `npm run dev` | Start the dev server with hot reload |
| `npm run build` | Build the production site to `dist/` |
| `npm run preview` | Preview the production build locally |

## Configuration

Copy the example env file and adjust as needed:

```bash
cp .env.example .env
```

| Variable | Default | Purpose |
| --- | --- | --- |
| `PUBLIC_CAL_LINK` | `faisal-palliyali` | Cal.com booking link — `username` or `username/event-slug`. Used by the contact page embed. |

The canonical site URL lives in [`astro.config.mjs`](astro.config.mjs). Vercel's build settings and legacy `/writing` → `/posts` redirects are in [`vercel.json`](vercel.json).

## Project structure

```
src/
├── components/     UI pieces — Nav, Hero, Footer, SearchPalette, BlogCard, ProjectRow, CalEmbed
├── config/
│   ├── site.ts     Cal.com booking link
│   └── projects.ts Case-study data rendered on /work
├── content/
│   ├── blog/       Published posts (Markdown)
│   ├── _archived/  Drafts — the underscore keeps Astro from building these
│   └── config.ts   Content collection schema
├── layouts/        BaseLayout (shell) and PostLayout (article)
├── pages/          File-based routes
└── styles/
    └── global.css  Design tokens and all site styling
public/             Static assets served as-is (logos, .htaccess)
```

### Routes

| Route | Source |
| --- | --- |
| `/` | [`src/pages/index.astro`](src/pages/index.astro) |
| `/about` | [`src/pages/about.astro`](src/pages/about.astro) |
| `/experience` | [`src/pages/experience.astro`](src/pages/experience.astro) |
| `/work` | [`src/pages/work.astro`](src/pages/work.astro) — rendered from `src/config/projects.ts` |
| `/posts` | [`src/pages/posts.astro`](src/pages/posts.astro) |
| `/posts/[slug]` | [`src/pages/posts/[slug].astro`](src/pages/posts/[slug].astro) — one page per entry in `src/content/blog/` |
| `/contact` | [`src/pages/contact.astro`](src/pages/contact.astro) |

## Writing a post

Add a Markdown file to `src/content/blog/`. The filename becomes the URL slug, and the frontmatter is validated against the Zod schema in [`src/content/config.ts`](src/content/config.ts) — a build fails loudly if a field is missing or mistyped.

```markdown
---
title: How I Reduced My AI Coding Costs Without Sacrificing Productivity
description: A one-line summary used for the card and meta description.
category: Engineering
tags:
  - AI
  - Workflow
pubDate: 2026-05-31
featured: true
---

Post body in Markdown.
```

| Field | Type | Notes |
| --- | --- | --- |
| `title` | string | Required |
| `description` | string | Required |
| `category` | string | Required |
| `tags` | string[] | Required, at least one |
| `pubDate` | date | Required, coerced from `YYYY-MM-DD` |
| `featured` | boolean | Optional, defaults to `false` — surfaces the post on the home page |

To park a draft, move it into `src/content/_archived/blog/`; Astro ignores underscore-prefixed directories.

New pages and posts are not automatically searchable — add an entry to the static index at the top of [`src/components/SearchPalette.astro`](src/components/SearchPalette.astro) so it shows up in the command palette.

## Adding a project

Append a `Project` object to the array in [`src/config/projects.ts`](src/config/projects.ts). The type is defined in the same file and covers `slug`, `index`, `title`, `client`, `summary`, `problem`, `architecture`, `outcome`, `stack`, `featuredTags`, and `featured`. The `/work` page renders the list; `slug` becomes the anchor link.

## Features

- **Light and dark themes** — toggled in the nav, persisted to `localStorage`, driven by `data-theme` on `<html>`
- **Command palette** — <kbd>Cmd</kbd>/<kbd>Ctrl</kbd> + <kbd>K</kbd> to search pages, projects, and posts; arrow keys to navigate, <kbd>Esc</kbd> to close
- **Type-safe content** — post frontmatter validated at build time
- **Terminal aesthetic** — monospace accents, `~/` prompt styling, muted paper-and-ink palette in both themes

## Deployment

Deployed on Vercel. Pushes to `main` trigger a build (`npm run build` → `dist/`). Configuration lives in [`vercel.json`](vercel.json).
