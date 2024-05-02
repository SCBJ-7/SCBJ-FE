import { fetchSaleDetail } from "@/apis/fetchSaleDetail";
import { fetchSaleList } from "@/apis/fetchSaleList";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";

import type { ProfileData } from "@/types/profile";
import type { ISaleData } from "@/types/saleDetail";
import type { ISaleList } from "@/types/saleList";

import { KEY } from "@/constants/queryKey";

export const useSaleDetailQuery = (saleId: number, isPaymentId: boolean) => {
  const saleDetail = useSuspenseQuery<ISaleData>({
    queryKey: [KEY.SALE, saleId],
    queryFn: () => fetchSaleDetail(saleId, isPaymentId),
    staleTime: 5 * 60 * 1000,
    gcTime: 60 * 60 * 1000,
  });

  return saleDetail;
};

export const useSaleListQuery = (
  isLoggedIn: boolean,
  userInfo: ProfileData | null,
) => {
  const saleList = useQuery<ISaleList[]>({
    queryKey: [KEY.SALE, userInfo?.email],
    queryFn: () => fetchSaleList(),
    enabled: !!userInfo && !!isLoggedIn,
  });

  return saleList;
};
