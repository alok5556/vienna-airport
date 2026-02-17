# Vienna Airport Platform Starter

Monorepo starter with:

- **Payload CMS 3** backend with multilingual content (EN, DE, SK, CZ, HU)
- **Next.js 14** frontend with i18n routing, Tailwind CSS, and Framer Motion
- **Vendure 2** backend starter for commerce
- Custom **drag & drop upload field with preview grid** for Payload admin UI

## Quick start

```bash
pnpm install
pnpm dev
```

Run apps individually:

```bash
pnpm dev:frontend
pnpm dev:cms
pnpm dev:vendure
```

## Project structure

```text
apps/
  frontend/  # Next.js 14 app
  cms/       # Payload CMS app
  vendure/   # Vendure app
packages/
  config/    # shared i18n config
```


## Runtime requirements

- Node.js **20.x or 22.x LTS** (Node 24 is not supported in this starter)
- pnpm **9+**

If you previously ran install on Node 24, clean and retry:

```bash
rm -rf node_modules pnpm-lock.yaml
pnpm store prune
pnpm install
```
