# Agent Instructions for this Repository

## Scope
These instructions apply to the entire repository.

## Goals
- Maintain static-export compatibility for GitHub Pages deployment.
- Prioritize performance and minimal client-side overhead.

## Implementation guidance
- Prefer static rendering and client logic only when needed.
- Avoid adding API-route assumptions in static-only user flows.
- Keep changes small and easy to review.

## Validation
Before finalizing changes, run:

```bash
npm run lint
npm run build
```
