import { useSuspenseQuery } from "@tanstack/react-query";
import { getRoom } from "@apis/fetchRoom";
import { calculateDiscount } from "@utils/calculator";

import type { RoomData } from "@type/room";
import type { AxiosError } from "axios";

interface RoomQueryData {
  rawData: RoomData;
  discountRate: string;
}

export const useRoomQuery = (roomId: string) => {
  return useSuspenseQuery<RoomData, AxiosError, RoomQueryData>({
    queryKey: ["room", roomId],
    queryFn: () => getRoom(roomId),
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
