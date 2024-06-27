import { useQuery } from "@tanstack/react-query";

import { getStock } from "@/apis/fetchPayment";

export const useStockQuery = (productId: string) => {
  return useQuery({
    queryKey: ["stock", productId],
    queryFn: () => getStock(productId),
    enabled: false,
    throwOnError: true,
  });
};
