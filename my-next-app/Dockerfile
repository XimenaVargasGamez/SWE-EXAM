# Base image with Node.js 18 on Alpine Linux
FROM node:18-alpine AS base
# Dependencies installation stage
FROM base AS deps

# Install compatibility library for Alpine Linux
RUN apk add --no-cache libc6-compat
# Set working directory
WORKDIR /app

# Copy package files for dependency installation
COPY package.json package-lock.json* ./
# Install production dependencies only
RUN npm ci --only=production

# Application build stage
FROM base AS builder
# Set working directory
WORKDIR /app
# Copy installed dependencies from deps stage
COPY --from=deps /app/node_modules ./node_modules
# Copy all application source files
COPY . .

# Generate Prisma client
RUN npx prisma generate
# Build the Next.js application
RUN npm run build

# Production runtime stage
FROM base AS runner
# Set working directory
WORKDIR /app

# Set production environment variable
ENV NODE_ENV production

# Create system group for Node.js
RUN addgroup --system --gid 1001 nodejs
# Create system user for Next.js
RUN adduser --system --uid 1001 nextjs

# Copy public assets from builder stage
COPY --from=builder /app/public ./public

# Create .next directory for Next.js files
RUN mkdir .next
# Set ownership of .next directory to nextjs user
RUN chown nextjs:nodejs .next

# Copy standalone application files with proper ownership
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# Copy static files with proper ownership
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Switch to non-root user for security
USER nextjs

# Expose port 3000 for the application
EXPOSE 3000

# Set port environment variable
ENV PORT 3000
# Set hostname to accept all connections
ENV HOSTNAME "0.0.0.0"

# Start the Node.js server
CMD ["node", "server.js"]