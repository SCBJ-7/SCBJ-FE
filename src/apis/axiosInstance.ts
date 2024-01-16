import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://3.34.147.187.nip.io",
  timeout: 5000,
  withCredentials: true,
});
