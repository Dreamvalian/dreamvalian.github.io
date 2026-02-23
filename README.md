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

## Static viewer count on GitHub Pages

Yes—because this site is static, the counter must use a client-side external service (there is no local server/API route on GitHub Pages).

This repo uses `https://api.countapi.xyz` in `components/ViewCounter.tsx` when `NEXT_PUBLIC_STATIC_EXPORT=1`.

Optional env var:

- `NEXT_PUBLIC_COUNTER_NAMESPACE` — customize your counter namespace (default: `dreamvalian-github-io`).

Each page path is tracked separately (for example `home`, `profile`).

