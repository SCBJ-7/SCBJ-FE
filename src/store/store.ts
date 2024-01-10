import { IReservation } from "@/types/reservationList";
import { create } from "zustand"; // create로 zustand를 불러옵니다.

interface storeState {
  selectedItem: IReservation;
  setSelectedItem: (selectedItem: {
    reservationId: number;
    hotelName: string;
    roomName: string;
    startDate: Date;
    endDate: Date;
    refundPrice: number;
    purchasePrice: number;
    remainingDays: number;
    remainingTimes: number;
    imageUrl: string;
  }) => void;
}

const useSelectedItemStore = create<storeState>((set) => ({
  selectedItem: {
    reservationId: 0,
    hotelName: "",
    roomName: "",
    startDate: new Date(),
    endDate: new Date(),
    refundPrice: 0,
    purchasePrice: 0,
    remainingDays: 0,
    remainingTimes: 0,
    imageUrl: "",
  },
  setSelectedItem: (selectedItem) =>
    set((state) => ({
      selectedItem: {
        ...state.selectedItem,
        ...selectedItem,
      },
    })),
}));

export default useSelectedItemStore;
