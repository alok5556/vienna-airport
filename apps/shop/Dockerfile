FROM node:20-alpine
WORKDIR /app
RUN corepack enable
COPY package.json pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/shop/package.json apps/shop/package.json
COPY packages ./packages
RUN pnpm install --filter shop... --frozen-lockfile=false
COPY apps/shop ./apps/shop
WORKDIR /app/apps/shop
EXPOSE 3002
CMD ["pnpm", "dev"]
