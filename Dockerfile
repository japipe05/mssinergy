# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json* ./
COPY . .

RUN npm install
RUN npm run build

# Etapa 2: Producción
FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/package.json /app/package-lock.json* ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/src ./src
COPY --from=builder /app/next.config.js ./next.config.js
#COPY --from=builder /app/tailwind.config.js ./tailwind.config.js
#COPY --from=builder /app/postcss.config.js ./postcss.config.js
COPY --from=builder /app/tsconfig.json ./tsconfig.json

RUN npm install --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
