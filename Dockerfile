# Etapa 1: Build de la aplicación
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar e instalar dependencias con cache optimizada
COPY package*.json ./
RUN npm ci --omit=dev

# Copiar el resto del código
COPY . .

# Compilar la app Next.js
RUN npm run build

# Etapa 2: Imagen final
FROM node:20-alpine AS runner

WORKDIR /app

# Copiar archivos necesarios desde el build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./package.json

# Instalar solo dependencias necesarias en producción
RUN npm ci --omit=dev

EXPOSE 3000

CMD ["npm", "start"]
