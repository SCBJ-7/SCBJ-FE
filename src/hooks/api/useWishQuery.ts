import { useMutation, useSuspenseQuery } from "@tanstack/react-query";

import { deleteWish, getWish } from "@/apis/fetchWish.ts";

export function useWishQuery() {
  return useSuspenseQuery({
    queryKey: ["wish"],
    queryFn: getWish,
  });
}

export function useDeleteWishMutation() {
  const { mutate } = useMutation({
    mutationFn: deleteWish,
  });

  return { deleteWish: mutate };
}
