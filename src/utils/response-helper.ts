import type { Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';

import ErrorCodes from '@/constants/error-codes.constants';
import type { ErrorResponse, SuccessResponse } from '@/types/common/api.type';

class ResponseHelper {
  public ok<T>(res: Response, data?: T, count?: number): void {
    this.sendSuccessResponse(res, StatusCodes.OK, ReasonPhrases.OK, data, count);
  }

  public created<T>(res: Response, data?: T): void {
    this.sendSuccessResponse(res, StatusCodes.CREATED, ReasonPhrases.CREATED, data);
  }

  public noContent(res: Response): void {
    res.status(StatusCodes.NO_CONTENT).send();
  }

  private sendSuccessResponse<T>(res: Response, statusCode: number, message: string, data?: T, count?: number): void {
    const response: SuccessResponse<T> = {
      statusCode,
      message,
    };

    if (count !== undefined && count !== null) {
      response.count = count;
    }

    if (data) {
      response.data = data;
    }

    res.status(response.statusCode).json(response);
  }

  public badRequest(res: Response, message = ReasonPhrases.BAD_REQUEST, errorCode = ErrorCodes.BAD_REQUEST) {
    this.sendErrorResponse(res, StatusCodes.BAD_REQUEST, message, errorCode);
  }

  public unauthorized(res: Response, message = ReasonPhrases.UNAUTHORIZED, errorCode = ErrorCodes.UNAUTHORIZED): void {
    this.sendErrorResponse(res, StatusCodes.UNAUTHORIZED, message, errorCode);
  }

  public forbidden(res: Response, message = ReasonPhrases.FORBIDDEN, errorCode = ErrorCodes.FORBIDDEN): void {
    this.sendErrorResponse(res, StatusCodes.FORBIDDEN, message, errorCode);
  }

  public notFound(res: Response, message = ReasonPhrases.NOT_FOUND, errorCode = ErrorCodes.NOT_FOUND): void {
    this.sendErrorResponse(res, StatusCodes.NOT_FOUND, message, errorCode);
  }

  public conflict(res: Response, message = ReasonPhrases.CONFLICT, errorCode = ErrorCodes.CONFLICT): void {
    this.sendErrorResponse(res, StatusCodes.CONFLICT, message, errorCode);
  }

  public tooManyRequests(
    res: Response,
    message = ReasonPhrases.TOO_MANY_REQUESTS,
    errorCode = ErrorCodes.TOO_MANY_REQUESTS,
  ): void {
    this.sendErrorResponse(res, StatusCodes.TOO_MANY_REQUESTS, message, errorCode);
  }

  public error(
    res: Response,
    message = ReasonPhrases.INTERNAL_SERVER_ERROR,
    errorCode = ErrorCodes.INTERNAL_SERVER_ERROR,
  ): void {
    this.sendErrorResponse(res, StatusCodes.INTERNAL_SERVER_ERROR, message, errorCode);
  }

  public custom(res: Response, statusCode: number, message: string): void {
    this.sendErrorResponse(res, statusCode, message);
  }

  private sendErrorResponse(res: Response, statusCode: number, message: string, errorCode?: string): void {
    const response: ErrorResponse = {
      statusCode,
      message,
    };

    if (errorCode) {
      response.errorCode = errorCode;
    }

    res.status(response.statusCode).json(response);
  }
}

export default new ResponseHelper();
