import { fetchPurchaseDetail } from "@/apis/fetchPurchaseDetail";
import { useSuspenseQuery } from "@tanstack/react-query";

import type { IPurchaseData } from "@/types/purchaseDetail";

export const usePurchaseDetailQuery = (productId: string) => {
  const purchaseDetail = useSuspenseQuery<IPurchaseData>({
    queryKey: ["purchase", productId],
    queryFn: async () => await fetchPurchaseDetail(productId),
  });

  return purchaseDetail;
};
