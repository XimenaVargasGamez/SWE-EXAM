// Import user-related type definitions
import { CreateUserRequest, CreateUserResponse, User } from '@/types/user';

// Service class for handling user-related operations
export class UserService {
  // Private method to validate user data before creation
  private static validateUserData(data: CreateUserRequest): string[] {
    // Array to collect validation errors
    const errors: string[] = [];
    
    // Validate username length requirement
    if (!data.username || data.username.trim().length < 3) {
      errors.push('Username must be at least 3 characters long');
    }
    
    // Validate email presence and format
    if (!data.email || !this.isValidEmail(data.email)) {
      errors.push('Please provide a valid email address');
    }
    
    // Return collected validation errors
    return errors;
  }

  // Private method to check email format validity
  private static isValidEmail(email: string): boolean {
    // Email validation regex pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // Test email against regex pattern
    return emailRegex.test(email);
  }

  // Public method to create a new user
  static async createUser(userData: CreateUserRequest): Promise<CreateUserResponse> {
    try {
      // Validate user data before API call
      const validationErrors = this.validateUserData(userData);
      
      // Return early if validation fails
      if (validationErrors.length > 0) {
        return {
          success: false,
          error: validationErrors.join(', ')
        };
      }

      // Make API request to create user
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      // Handle non-successful HTTP responses
      if (!response.ok) {
        // Attempt to extract error message from response
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      // Parse successful response
      const result = await response.json();
      // Return success response with user data
      return {
        success: true,
        user: result.user
      };
    } catch (error) {
      // Log error details
      console.error('Error creating user:', error);
      // Return error response
      return {
        success: false,
        error: error instanceof Error ? error.message : 'An unexpected error occurred'
      };
    }
  }

  // Public method to fetch all users
  static async getUsers(): Promise<User[]> {
    try {
      // Make API request to get users
      const response = await fetch('/api/users');
      
      // Handle non-successful HTTP responses
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      
      // Parse response JSON
      const result = await response.json();
      // Return users array or empty array as fallback
      return result.users || [];
    } catch (error) {
      // Log error details
      console.error('Error fetching users:', error);
      // Re-throw error for caller to handle
      throw error;
    }
  }
}