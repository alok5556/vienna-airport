# Vienna Airport Monorepo

## Folder tree

```text
root/
  apps/
    cms/
    web/
    shop/
  packages/
    ui/
    types/
    config/
  package.json
  tsconfig.base.json
  README.md
```

## Setup commands

```bash
# bootstrap workspaces root
npm install

# create apps (reference commands used)
npx create-payload-app@latest apps/cms --template website
npx create-next-app@latest apps/web --ts --tailwind --app --eslint false --src-dir false --import-alias "@/*"
npx @vendure/create@latest apps/shop

# install dependencies after manual configuration
npm install

# run all apps
npm run dev
```

## Environment files

- `apps/cms/.env`
- `apps/web/.env.local`
- `apps/shop/.env`

Copy from `.env.example` in each app.

## Scripts

- `npm run dev`
- `npm run build`
- `npm run start`
- `npm run dev:cms`
- `npm run dev:web`
- `npm run dev:shop`
