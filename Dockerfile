# Etapa 1: Build de la aplicación
FROM node:20-alpine AS builder

# Crear y establecer el directorio de trabajo
WORKDIR /app

# Copiar dependencias e instalar
COPY package.json package-lock.json* pnpm-lock.yaml* ./
RUN npm install

# Copiar el resto del código
COPY . .

# Compilar la aplicación Next.js
RUN npm run build

# Etapa 2: Imagen final con servidor
FROM node:20-alpine AS runner

# Establecer directorio de trabajo
WORKDIR /app

# Copiar solo lo necesario desde el build
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Puerto que expondrá la app
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
