import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { deleteWish, getWish, postWish } from "@/apis/fetchWish.ts";

export function useWishQuery() {
  return useQuery({
    queryKey: ["wish"],
    queryFn: getWish,
  });
}

export function useDeleteWishMutation() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteWish,
    onMutate: async (newLike) => {
      await queryClient.cancelQueries({ queryKey: ["wish"] });
      const previousWish = queryClient.getQueryData(["wish"]);
      queryClient.setQueryData(["wish"], newLike);
      return { previousWish };
    },
    onError: (err, newLike, context) => {
      queryClient.setQueryData(["wish"], context?.previousWish);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["wish"] });
    },
  });

  return { deleteWish: mutate };
}

export function usePostWishMutation() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: postWish,
    onMutate: async (newLike) => {
      await queryClient.cancelQueries({ queryKey: ["wish"] });
      const previousWish = queryClient.getQueryData(["wish"]);
      queryClient.setQueryData(["wish"], newLike);
      return { previousWish };
    },
    onError: (err, newLike, context) => {
      queryClient.setQueryData(["wish"], context?.previousWish);
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["wish"] });
    },
  });

  return { postWish: mutate };
}
