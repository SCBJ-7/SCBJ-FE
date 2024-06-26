import {
  useMutation,
  useSuspenseInfiniteQuery,
  useQueryClient,
} from "@tanstack/react-query";

import { deleteWish, getWish, postWish } from "@/apis/fetchWish.ts";

export function useWishQuery() {
  return useSuspenseInfiniteQuery({
    queryKey: ["wish"],
    queryFn: getWish,
    getNextPageParam: (lastPage, allPages) => {
      // 마지막 페이지가 아니면 다음 페이지 번호를 반환
      if (!lastPage.last) {
        return allPages.length; // 페이지 번호 증가
      } else {
        return undefined; // 더 이상 불러올 페이지 없음
      }
    },
    initialPageParam: 0,
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
