FROM node:20-alpine
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/cms/package.json apps/cms/package.json
COPY packages ./packages
RUN pnpm install --filter cms... --frozen-lockfile=false
COPY apps/cms ./apps/cms
WORKDIR /app/apps/cms
EXPOSE 3001
CMD ["pnpm", "dev"]
