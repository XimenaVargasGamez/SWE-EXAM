// Import Prisma client for database operations
import { PrismaClient } from '@prisma/client';

// Type definition for global Prisma instance
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

// Create or reuse existing Prisma client instance
export const prisma = globalForPrisma.prisma ?? new PrismaClient();

// Store Prisma instance globally in development to prevent multiple connections
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;