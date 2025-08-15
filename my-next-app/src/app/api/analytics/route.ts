// Import Next.js response handler and database connection
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

// GET request handler for analytics endpoint
export async function GET() {
  try {
    // Get current timestamp
    const now = new Date();
    // Calculate date 7 days ago for filtering new users
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    
    // Execute both database queries in parallel
    const [totalUsuarios, nuevosUsuarios] = await Promise.all([
      // Count all users in database
      prisma.user.count(),
      // Count users created in last 7 days
      prisma.user.count({
        where: {
          createdAt: {
            gte: sevenDaysAgo,
          },
        },
      }),
    ]);
    
    // Return successful response with user counts
    return NextResponse.json(
      { totalUsuarios, nuevosUsuarios },
      { status: 200 }
    );
  } catch (error) {
    // Log error details to console
    console.error('Error fetching analytics:', error);
    // Return error response with default values
    return NextResponse.json(
      { totalUsuarios: 0, nuevosUsuarios: 0 },
      { status: 500 }
    );
  }
}