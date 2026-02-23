# Repository Skill: Static Profile Site Maintenance

## Purpose
A lightweight workflow for safely updating this static Next.js profile site.

## Workflow
1. Understand whether change affects static-export compatibility.
2. Implement minimal edits in `app/`, `components/`, or config files.
3. Validate with:
   - `npm run lint`
   - `npm run build`
4. If UI changed perceptibly, capture a screenshot artifact.
5. Commit with a focused message.

## Guardrails
- Do not introduce server runtime dependencies for static pages.
- Keep components accessible and semantic.
- Prefer small, composable React components.
