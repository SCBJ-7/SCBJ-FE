import { IReservation } from "@/types/reservationList";
import { IUserInfo } from "@/types/userInfo";
import { create } from "zustand"; // create로 zustand를 불러옵니다.

interface storeState {
  selectedItem: IReservation;
  setSelectedItem: (selectedItem: IReservation) => void;
}

export const useSelectedItemStore = create<storeState>((set) => ({
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

interface UserState {
  userInfo: IUserInfo;
  setUserInfo: (userInfo: IUserInfo) => void;
}

export const useUserInfoStore = create<UserState>((set) => ({
  userInfo: {
    id: "",
    email: "",
    name: "",
    phone: "",
    accountNumber: null,
    bank: null,
    linkToYanolja: false,
  },
  setUserInfo: (userInfo) =>
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        ...userInfo,
      },
    })),
}));
