import { CreateUserRequest, CreateUserResponse, User } from '@/types/user';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || '';

export class UserService {
  private static validateUserData(data: CreateUserRequest): string[] {
    const errors: string[] = [];
    if (!data.username || data.username.trim().length < 3) {
      errors.push('Username must be at least 3 characters long');
    }
    if (!data.email || !this.isValidEmail(data.email)) {
      errors.push('Please provide a valid email address');
    }
    return errors;
  }
  private static isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  static async createUser(userData: CreateUserRequest): Promise<CreateUserResponse> {
    try {
      const validationErrors = this.validateUserData(userData);
      if (validationErrors.length > 0) {
        return {
          success: false,
          error: validationErrors.join(', ')
        };
      }
      const response = await fetch(`${API_BASE_URL}/api/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });
      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return {
        success: true,
        user: result.user
      };
    } catch (error) {
      console.error('Error creating user:', error);
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      };
    }
  }
  static async getUsers(): Promise<User[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/api/users`);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const result = await response.json();
      return result.users || [];
    } catch (error) {
      console.error('Error fetching users:', error);
      throw error;
    }
  }
}
