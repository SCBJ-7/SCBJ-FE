import { useSuspenseQuery } from "@tanstack/react-query";

import type { RoomData } from "@/types/room";
import type { AxiosError } from "axios";

import { getRoom } from "@/apis/fetchRoom";
import { calculateDiscount } from "@/utils/calculator";

interface RoomQueryData {
  rawData: RoomData;
  discountRate: string;
}

export const useRoomQuery = (roomId: string, isLoggedIn: boolean) => {
  return useSuspenseQuery<RoomData, AxiosError, RoomQueryData>({
    queryKey: ["room", roomId, isLoggedIn],
    queryFn: () => getRoom(roomId, isLoggedIn),
    select: (data) => {
      const discountRate = calculateDiscount(
        data.originalPrice,
        data.sellingPrice,
      );
      return {
        rawData: data,
        discountRate,
      };
    },
  });
};
