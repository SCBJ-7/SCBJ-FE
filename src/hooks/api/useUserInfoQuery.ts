import { useSuspenseQuery } from "@tanstack/react-query";

import type { AccountData, ProfileData } from "@/types/profile";

import { fetchUserInfo } from "@/apis/fetchUserInfo";
import { KEY } from "@/constants/queryKey";

interface AccountQueryProps {
  accountData: AccountData;
  rawData: ProfileData;
}

export const useAccountQuery = () => {
  const accountQuery = useSuspenseQuery<ProfileData, Error, AccountQueryProps>({
    queryKey: [KEY.USER_INFO, "account"],
    queryFn: async () => await fetchUserInfo(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
    select: (res) => {
      const accountData = { accountNumber: res.accountNumber, bank: res.bank };
      const rawData = res;
      return { accountData, rawData };
    },
  });

  return accountQuery;
};

export const useUserInfoQuery = () => {
  const userInfoQuery = useSuspenseQuery<ProfileData>({
    queryKey: [KEY.USER_INFO],
    queryFn: async () => await fetchUserInfo(),
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    refetchInterval: false,
  });
  return userInfoQuery;
};
