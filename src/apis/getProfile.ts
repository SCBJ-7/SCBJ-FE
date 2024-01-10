import axios from "axios";

const useProfileApi = () => {
  const getAuth = () => {
    if (localStorage.getItem("token")) {
      const token = localStorage.getItem("token");
      return token;
    }
  };

  const baseUrl = import.meta.env.VITE_SERVER_URL;

  const instance = axios.create({
    baseURL: baseUrl,
    headers: { Authorization: `Bearer  + ${getAuth()}` },
  });

  instance.interceptors.request.use(
    (config) => {
      const token = getAuth();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => {
      console.log("interceptor request error: ", error);
      Promise.reject(error);
    },
  );

  const getProfileData = async (endPoint: string) => {
    const apiURL = `${endPoint}`;
    const { data } = await instance.get(apiURL);

    return data.data;
  };

  return { getProfileData };
};

export default useProfileApi;
