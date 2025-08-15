// Main user entity interface with all properties
export interface User {
  id: number;
  email: string;
  username: string;
  createdAt: Date;
}

// Request interface for creating new users
export interface CreateUserRequest {
  email: string;
  username: string;
}

// Response interface for user creation operations
export interface CreateUserResponse {
  success: boolean;
  user?: User;
  error?: string;
}

// Interface for validation error details
export interface UserValidationError {
  field: string;
  message: string;
}