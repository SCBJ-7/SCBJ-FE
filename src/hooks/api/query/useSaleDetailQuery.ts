import { fetchSaleDetail } from "@apis/fetchSaleDetail";
import { useSuspenseQuery } from "@tanstack/react-query";
import type { ISaleData } from "@type/saleDetail";

export const useSaleDetailQuery = (saleId: string) => {
  const saleDetail = useSuspenseQuery<ISaleData>({
    queryKey: ["sale", saleId],
    // FIXME: 백엔드 수정 후 saleId를 넣어서 api 요청하도록 변경 필요
    // queryFn: async () => await fetchSaleDetail(saleId),
    queryFn: async () => await fetchSaleDetail(),
  });

  return saleDetail;
};
