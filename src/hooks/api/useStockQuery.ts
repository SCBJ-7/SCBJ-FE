import { getStock } from "@apis/fetchPayment";
import { useQuery } from "@tanstack/react-query";

export const useStockQuery = (productId: string) => {
  return useQuery({
    queryKey: ["stock", productId],
    queryFn: () => getStock(productId),
    enabled: false,
    throwOnError: true,
  });
};
