import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET() {
  try {
    const now = new Date();
    const sevenDaysAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
    const [totalUsuarios, nuevosUsuarios] = await Promise.all([
      prisma.user.count(),
      prisma.user.count({
        where: {
          createdAt: {
            gte: sevenDaysAgo,
          },
        },
      }),
    ]);
    return NextResponse.json(
      { totalUsuarios, nuevosUsuarios },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error fetching analytics:', error);
    return NextResponse.json(
      { totalUsuarios: 0, nuevosUsuarios: 0 },
      { status: 500 }
    );
  }
}
