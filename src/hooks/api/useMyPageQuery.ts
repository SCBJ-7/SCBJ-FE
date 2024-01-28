import { useSuspenseQuery } from "@tanstack/react-query";
import { END_POINTS } from "@/constants/api";
import useProfileApi from "@/apis/useProfileApi";
import type { AccountData, ProfileData } from "@/types/profile";

interface AccountQueryProps {
  accountData: AccountData;
  rawData: ProfileData;
}

export const useAccountQuery = () => {
  const { getProfileData } = useProfileApi();

  const accountQuery = useSuspenseQuery<ProfileData, Error, AccountQueryProps>({
    queryKey: ["myProfile"],
    queryFn: async () => await getProfileData(END_POINTS.USER_INFO),
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
