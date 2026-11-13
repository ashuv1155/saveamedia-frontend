# Production Dockerfile for Render / Railway deployment
FROM node:20-alpine

WORKDIR /app

# Install dependencies first (layer caching)
COPY package*.json ./
RUN npm install --omit=dev

# Copy server code
COPY server.js ./

EXPOSE 4000

ENV PORT=4000
ENV NODE_ENV=production

CMD ["node", "server.js"]
