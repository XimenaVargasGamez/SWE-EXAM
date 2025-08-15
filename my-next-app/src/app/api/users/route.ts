// Import Next.js request/response handlers, database connection and types
import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { CreateUserRequest, CreateUserResponse } from '@/types/user';

// POST request handler for creating new users
export async function POST(request: NextRequest): Promise<NextResponse<CreateUserResponse>> {
  try {
    // Parse JSON body from request
    const body: CreateUserRequest = await request.json();
    
    // Validate required fields are present
    if (!body.email || !body.username) {
      return NextResponse.json(
        { success: false, error: 'Email and username are required' },
        { status: 400 }
      );
    }
    
    // Validate email format using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }
    
    // Validate username minimum length
    if (body.username.trim().length < 3) {
      return NextResponse.json(
        { success: false, error: 'Username must be at least 3 characters long' },
        { status: 400 }
      );
    }
    
    // Check if user already exists with same email or username
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: body.email },
          { username: body.username }
        ]
      }
    });

    // Handle existing user conflicts
    if (existingUser) {
      // Check if email is already taken
      if (existingUser.email === body.email) {
        return NextResponse.json(
          { success: false, error: 'Email already registered' },
          { status: 409 }
        );
      }
      // Check if username is already taken
      if (existingUser.username === body.username) {
        return NextResponse.json(
          { success: false, error: 'Username already taken' },
          { status: 409 }
        );
      }
    }
    
    // Create new user in database
    const newUser = await prisma.user.create({
      data: {
        email: body.email.trim().toLowerCase(),
        username: body.username.trim(),
      },
    });

    // Return successful creation response
    return NextResponse.json({
      success: true,
      user: {
        id: newUser.id,
        email: newUser.email,
        username: newUser.username,
        createdAt: newUser.createdAt,
      }
    }, { status: 201 });

  } catch (error) {
    // Log creation error
    console.error('Error creating user:', error);
    
    // Handle unique constraint database errors
    if (error instanceof Error && error.message.includes('Unique constraint')) {
      return NextResponse.json(
        { success: false, error: 'User with this email or username already exists' },
        { status: 409 }
      );
    }

    // Return general server error response
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// GET request handler for fetching all users
export async function GET(): Promise<NextResponse> {
  try {
    // Fetch all users ordered by creation date
    const users = await prisma.user.findMany({
      orderBy: {
        createdAt: 'desc'
      }
    });
    
    // Return successful response with user list
    return NextResponse.json({
      success: true,
      users: users.map(user => ({
        id: user.id,
        email: user.email,
        username: user.username,
        createdAt: user.createdAt,
      }))
    });
  } catch (error) {
    // Log fetching error
    console.error('Error fetching users:', error);
    // Return error response
    return NextResponse.json(
      { success: false, error: 'Internal server error' },
      { status: 500 }
    );
  }
}