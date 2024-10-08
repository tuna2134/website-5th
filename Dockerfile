FROM node:22-slim as builder

WORKDIR /src

ENV OUTPUT standalone
RUN corepack enable

COPY pnpm-lock.yaml package.json .
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM gcr.io/distroless/nodejs22-debian12

ENV NODE_ENV production
WORKDIR /usr/src

COPY --chown=nonroot:nonroot ./public ./public
COPY --from=builder --chown=nonroot:nonroot /src/.next/standalone ./
COPY --from=builder --chown=nonroot:nonroot /src/.next/static ./.next/static

USER nonroot
EXPOSE 3000
CMD ["server.js"]