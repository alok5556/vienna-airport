# Vienna Airport Enterprise Monorepo

## Stack
- Node.js 20 LTS
- pnpm workspaces monorepo
- Next.js 14 App Router + TypeScript + Tailwind + Framer Motion + next-intl
- Payload CMS 3.76.1 (PostgreSQL)
- Vendure 2.0 (PostgreSQL)

## Folder Tree

```txt
.
├── apps
│   ├── cms
│   ├── shop
│   └── web
├── packages
│   ├── config
│   ├── types
│   └── ui
├── docker-compose.yml
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## Setup

1. Install deps:
```bash
pnpm install
```

2. Copy env files:
```bash
cp apps/cms/.env.example apps/cms/.env
cp apps/shop/.env.example apps/shop/.env
cp apps/web/.env.example apps/web/.env.local
```

3. Start infrastructure:
```bash
docker compose up -d postgres
```

4. Start apps:
```bash
pnpm --filter cms dev
pnpm --filter shop dev
pnpm --filter web dev
```

## Docker full stack
```bash
docker compose up --build
```

## Highlights
- 5 locales (EN/DE/SK/CZ/HU) with EN fallback across CMS and frontend.
- Payload pages builder with 15 reusable blocks, draft/review/publish flow, scheduled publish, expiration, autosave, version notes.
- Payload localization-aware SEO, translation status, source-change notifications, and side-by-side translation support placeholder.
- Media library with metadata, folders, tags, optimization profiles, DAM sync cron mock every 15 minutes.
- Vendure plugins for airport service catalog, variants, dynamic pricing metadata, bundles.
- Next.js SSR/SSG-ready app router with dynamic page rendering from Payload, block renderer, animated transitions, cart UI.
