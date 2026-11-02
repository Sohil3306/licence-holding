# Base image with Node.js LTS
FROM node:22-alpine

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files
COPY . .

# Build frontend production bundle into dist/
RUN npm run build

# Set production environment
ENV NODE_ENV=production
ENV PORT=3000

EXPOSE 3000

# Start Express server (serves API + static frontend bundle)
CMD ["npm", "start"]
