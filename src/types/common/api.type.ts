export interface SuccessResponse<T> {
  statusCode: number;
  message: string;
  count?: number;
  data?: T;
}

export interface ErrorResponse {
  statusCode: number;
  message: string;
  errorCode?: string;
}
