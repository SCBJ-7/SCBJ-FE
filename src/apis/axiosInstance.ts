import axios from "axios";
import type {
  AxiosError,
  AxiosRequestConfig,
  InternalAxiosRequestConfig,
} from "axios";
import { fetchNewToken } from "./fetchNewToken";
import { ACCESS_TOKEN, REFRESH_TOKEN, ERROR_CODE } from "@constants/api";
import { PATH } from "@constants/path";
import { AxiosResponseError } from "@components/error/Error";

export const axiosInstance = axios.create({
  baseURL: "https://3.34.147.187.nip.io",
  timeout: 5000,
  withCredentials: true,
});

const addToken = (config: InternalAxiosRequestConfig) => {
  if (!config.headers || config.headers.Authorization) return config;

  const accessToken = localStorage.getItem(ACCESS_TOKEN);

  if (!accessToken) {
    alert("다시 로그인 해 주세요."); // or 로그인
    window.location.href = PATH.ROOT;
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
  const originalRequest = error.config as AxiosRequestConfigWithRetry;

  if (!error.response || !originalRequest.headers)
    throw new Error("에러가 발생했습니다.");

  const { data, status } = error.response;

  if (status === ERROR_CODE.EXPIRED_TOKEN && !originalRequest._retry) {
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

    throw new AxiosResponseError(status, data.message);
  }

  return Promise.reject(error);
};

axiosInstance.interceptors.request.use(addToken);

axiosInstance.interceptors.response.use(
  (response) => response,
  handleExpiredToken,
);
