export class ResponseError extends Error {
  response: {
    status: number;
    data: {
      message: string;
    };
  };
  source?: string;

  constructor(status: number, message: string, source?: string) {
    super(message);
    this.name = "CustomError";
    this.response = {
      status: status,
      data: {
        message: message,
      },
    };
    this.source = source;

    Object.setPrototypeOf(this, ResponseError.prototype);
  }
}
