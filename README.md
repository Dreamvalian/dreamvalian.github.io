# dreamvalian.github.io

Minimal personal profile site built with Next.js (App Router) and exported as static assets for GitHub Pages.

## Quick start

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Build & export

```bash
npm run build
```

This project uses `output: "export"` in Next config, so pages are generated statically.

## Optimization notes

- Keep pages static-first (avoid server-only runtime features/API routes unless deployment target changes).
- Prefer optimized image assets under `public/`.
- Run `npm run lint` and `npm run build` before publishing.
- Keep large visual/media assets compressed to reduce first load time.
