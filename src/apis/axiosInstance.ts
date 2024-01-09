import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/v1",
  timeout: 5000,
  withCredentials: true,
});
