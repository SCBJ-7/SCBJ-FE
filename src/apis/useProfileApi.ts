import { axiosInstance } from "./axiosInstance";

const useProfileApi = () => {
  const getProfileData = async (endPoint: string) => {
    const apiURL = `${endPoint}`;
    const { data } = await axiosInstance.get(apiURL);

    return data.data;
  };

  const changeName = async (endPoint: string, name: string) => {
    const apiURL = `${endPoint}`;
    const res = await axiosInstance.patch(apiURL, { name });
    return res;
  };

  const changeNumber = async (endPoint: string, number: string) => {
    const apiURL = `${endPoint}`;
    const res = await axiosInstance.patch(apiURL, { phone: number });
    return res;
  };

  return { getProfileData, changeName, changeNumber };
};

export default useProfileApi;
