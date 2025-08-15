export interface User {
  id: number;
  email: string;
  username: string;
  createdAt: Date;
}

export interface CreateUserRequest {
  email: string;
  username: string;
}

export interface CreateUserResponse {
  success: boolean;
  user?: User;
  error?: string;
}

export interface UserValidationError {
  field: string;
  message: string;
}
