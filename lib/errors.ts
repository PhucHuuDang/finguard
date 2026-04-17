/**
 * Standard Application Error Base Class
 */
export class AppError extends Error {
  public statusCode: number
  public code?: string
  public isOperational: boolean

  constructor(
    message: string,
    statusCode = 500,
    code?: string,
    isOperational = true
  ) {
    super(message)
    this.name = "AppError"
    this.statusCode = statusCode
    this.code = code
    this.isOperational = isOperational // true if it's a predicted error (API fail), false if it's a bug (undefined variable)

    // Capture stack trace, excluding the constructor call from it
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor)
    }
  }
}

/**
 * Specifically for API requests failing
 */
export class ApiError extends AppError {
  constructor(message: string, statusCode = 500, code?: string) {
    super(message, statusCode, code, true)
    this.name = "ApiError"
  }
}

/**
 * For Authorization/Authentication failures
 */
export class AuthError extends AppError {
  constructor(
    message = "Tài khoản không có quyền thực hiện thao tác này",
    statusCode = 401
  ) {
    super(message, statusCode, "UNAUTHORIZED", true)
    this.name = "AuthError"
  }
}

/**
 * For Database/Validation Input failures
 */
export class ValidationError extends AppError {
  constructor(message = "Dữ liệu đầu vào không hợp lệ", statusCode = 400) {
    super(message, statusCode, "VALIDATION_FAILED", true)
    this.name = "ValidationError"
  }
}
