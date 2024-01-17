export class AxiosResponseError extends Error {
  statusCode: number;
  errorMessage: string;

  constructor(message: string, statusCode: number, errorMessage: string) {
    super(message);
    this.statusCode = statusCode;
    this.errorMessage = errorMessage;

    // Error를 확장할 때 필요한 코드
    Object.setPrototypeOf(this, AxiosResponseError.prototype);
  }
}
