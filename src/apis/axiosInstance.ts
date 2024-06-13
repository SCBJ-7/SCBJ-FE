import axios from "axios";

import { fetchNewToken } from "./fetchNewToken";

import type {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";

import { ResponseError } from "@/components/error/Error";
import {
  ACCESS_TOKEN,
  BASE_URL,
  ERROR_CODE,
  REFRESH_TOKEN,
  STATUS_CODE,
} from "@/constants/api";
import { PATH } from "@/constants/path";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  withCredentials: true,
});

const addToken = (config: InternalAxiosRequestConfig) => {
  if (!config.headers || config.headers.Authorization) return config;

  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) {
    throw new ResponseError(401, "토큰이 없습니다.");
  }

  config.headers.Authorization = `${accessToken}`;

  return config;
};

interface ResponseDataType {
  statusCode: number;
  message: string;
}
interface AxiosRequestConfigWithRetry extends AxiosRequestConfig {
  _retry?: boolean;
}

const handleExpiredToken = async (error: AxiosError<ResponseDataType>) => {
  if (!error.response) return Promise.reject(error);

  const originalRequest = error.config as AxiosRequestConfigWithRetry;

  if (!originalRequest || !originalRequest.headers)
    return Promise.reject(error);

  const { data, status } = error.response;

  if (status === STATUS_CODE.UNAUTHORIZED && !originalRequest._retry) {
    try {
      originalRequest._retry = true; // 무한루프 되지 않도록
      const { accessToken, refreshToken } = await fetchNewToken();
      originalRequest.headers.Authorization = `${accessToken}`;
      localStorage.setItem(ACCESS_TOKEN, accessToken);
      localStorage.setItem(REFRESH_TOKEN, refreshToken);

      return axiosInstance(originalRequest);
    } catch (refreshError) {
      window.location.href = PATH.ROOT;
      throw new Error("토큰 재발급에 실패했습니다.");
    }
  }

  if (status === ERROR_CODE.INVALID_TOKEN) {
    localStorage.removeItem(ACCESS_TOKEN);
    localStorage.removeItem(REFRESH_TOKEN);

    throw new ResponseError(status, data.message);
  }

  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(addToken);

axiosInstance.interceptors.response.use(
  (response) => response,
  handleExpiredToken,
);
