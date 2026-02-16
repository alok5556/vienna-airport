# Vienna Airport Platform Starter

Monorepo starter for:
- **Payload CMS 3** backend with multilingual content (EN, DE, SK, CZ, HU)
- **Next.js 14** frontend with locale routing
- Custom drag-and-drop upload field with preview grid in CMS admin
- Scalable folder structure for future Vendure integration

## Structure

- `apps/cms`: Payload CMS project
- `apps/web`: Next.js frontend
- `packages/shared`: shared constants/types

## Quick start

1. Install dependencies in each workspace (`npm install` at repo root).
2. Set environment variables for PostgreSQL + Payload.
3. Run:
   - `npm run dev:cms`
   - `npm run dev:web`

## Notes

This starter focuses on CMS + frontend baseline and architecture that matches your requirements list.
Vendure integration can be added as `apps/commerce` or separate service later.
