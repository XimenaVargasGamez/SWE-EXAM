// Import Next.js response handler and database connection
import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// GET request handler for health check endpoint
export async function GET() {
        try {
        // Initialize database status as unknown
        let dbStatus = 'unknown';
            try {
                // Test database connection with simple query
                await prisma.$queryRaw`SELECT 1`;
                // Set status to connected if query succeeds
                dbStatus = 'connected';
            } catch (dbError) {
            // Set status to disconnected if query fails
            dbStatus = 'disconnected';
            // Log database connection error
            console.error('Database health check failed:', dbError);
        }
            // Create health response object
            const healthData = {
            message: 'EL SERVIDOR FUNCIONA CORRECTAMENTE'
        };
            // Determine HTTP status based on database connection
            const httpStatus = dbStatus === 'connected' ? 200 : 503;
            // Return health check response
            return NextResponse.json(healthData, { status: httpStatus });
        } catch (error) {
            // Log general health check error
            console.error('Health check failed:', error);
            // Return error response
            return NextResponse.json(
            {
                message: 'Error en el servidor'
            },
            { status: 500 }
        );
    }
}