import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function GET() {
        try {
        let dbStatus = 'unknown';
            try {
                await prisma.$queryRaw`SELECT 1`;
                dbStatus = 'connected';
            } catch (dbError) {
            dbStatus = 'disconnected';
            console.error('Database health check failed:', dbError);
        }
            const healthData = {
            message: 'EL SERVIDOR FUNCIONA CORRECTAMENTE'
        };
            const httpStatus = dbStatus === 'connected' ? 200 : 503;
            return NextResponse.json(healthData, { status: httpStatus });
        } catch (error) {
            console.error('Health check failed:', error);
            return NextResponse.json(
            {
                message: 'Error en el servidor'
            },
            { status: 500 }
        );
    }
}