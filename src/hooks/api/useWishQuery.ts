import {
  useMutation,
  useSuspenseInfiniteQuery,
  useQueryClient,
  type InfiniteData,
} from "@tanstack/react-query";

import { deleteWish, getWish, postWish } from "@/apis/fetchWish.ts";
import { type WishDataType } from "@/types/wish";

export function useWishInfiniteQuery() {
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

export function useDeleteWishInfiniteMutation() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteWish,
    onMutate: async (productId) => {
      await queryClient.cancelQueries({ queryKey: ["wish"] });
      const previousWish = queryClient.getQueryData(["wish"]);

      queryClient.setQueryData(
        ["wish"],
        (oldData: InfiniteData<WishDataType>) => {
          return {
            ...oldData,
            pages: oldData.pages.map((page) => ({
              ...page,
              content: page.content.map((product) =>
                product.id === productId
                  ? { ...product, visible: false }
                  : product,
              ),
              totalElements: page.totalElements - 1,
            })),
          };
        },
      );
      return { previousWish };
    },
    onError: (err, productId, context) => {
      queryClient.setQueryData(["wish"], context?.previousWish);
    },
  });

  return { deleteWish: mutate };
}

export function useDeleteWishMutation() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: deleteWish,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wish"] });
    },
  });

  return { deleteWish: mutate };
}

export function usePostWishMutation() {
  const queryClient = useQueryClient();

  const { mutate } = useMutation({
    mutationFn: postWish,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wish"] });
    },
  });

  return { postWish: mutate };
}
