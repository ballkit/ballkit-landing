FROM node:23.3.0-alpine3.20 AS build

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

COPY . .
RUN yarn build

FROM caddy:alpine

COPY --from=build /app/dist /srv

COPY Caddyfile /etc/caddy/Caddyfile

EXPOSE 8080
