export class AxiosResponseError extends Error {
  response: {
    status: number;
    data: {
      message: string;
    };
  };

  constructor(status: number, message: string) {
    super(message);
    this.name = "AxiosError";

    this.response = {
      status: status,
      data: {
        message: message,
      },
    };

    Object.setPrototypeOf(this, AxiosResponseError.prototype);
  }
}
