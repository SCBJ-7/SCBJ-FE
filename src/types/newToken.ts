export interface ResponseData<T> {
  message: string;
  data: T;
}

export interface TokenData {
  accessToken: string;
  refreshToken: string;
}
