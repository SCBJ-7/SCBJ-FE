import type { ReactNode } from "react";

import { create } from "zustand";
import { persist } from "zustand/middleware";

import type { ProfileData } from "@/types/profile";
import type { IReservation } from "@/types/reservationList";

import { ISearchFilterInfo } from "@/types/searchFilterInfo";

// 예약내역 선택 아이템 전역상태 타입
interface ReservationState {
  selectedItem: IReservation; // 데이터 기본값
  setSelectedItem: (selectedItem: IReservation) => void; // 데이터 조작 set함수
}

// 예약내역 선택 아이템 전역상태 store
export const useSelectedItemStore = create(
  persist<ReservationState>(
    (set) => ({
      // 데이터 기본값
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
      // 데이터 조작 set 함수
      setSelectedItem: (updatedItem) =>
        set((state) => ({
          selectedItem: {
            ...state.selectedItem,
            ...updatedItem,
          },
        })),
    }),
    {
      name: "reservationStorage",
    },
  ),
);

interface UserState {
  userInfo: ProfileData | null;
  setUserInfo: (userInfo: Partial<ProfileData | null>) => void;
}

export const useUserInfoStore = create<UserState>((set) => ({
  userInfo: null,
  setUserInfo: (updatedInfo) =>
    set((state) => ({
      userInfo: state.userInfo
        ? { ...state.userInfo, ...updatedInfo }
        : (updatedInfo as ProfileData),
    })),
}));

export type configType = {
  isShow: boolean;
  isError: boolean;
  strings: (string | ReactNode)[];
};

interface ToastStates {
  config: configType;
  setToastConfig: (updatedConfig: configType) => void;
}

export const useToastStore = create<ToastStates>((set) => ({
  config: {
    isShow: false,
    isError: false,
    strings: [],
  },
  setToastConfig: (updated) =>
    set((state) => ({
      config: {
        ...state.config,
        ...updated,
      },
    })),
}));

interface SearchState {
  searchInfo: ISearchFilterInfo;
  setSearchInfo: (updatedInfo: Partial<ISearchFilterInfo>) => void;
}

// 유저정보 전역상태 store
export const useSearchFilterInfoStore = create(
  persist<SearchState>(
    (set) => ({
      // 데이터 기본값
      searchInfo: {
        location: null,
        checkIn: null,
        checkOut: null,
        quantityPeople: null,
        sorted: null,
        brunch: null,
        pool: null,
        oceanView: null,
      },
      // 데이터 조작 set 함수
      setSearchInfo: (updatedInfo) =>
        set((state) => ({
          searchInfo: {
            ...state.searchInfo,
            ...updatedInfo,
          },
        })),
    }),
    { name: "searchFilterStorage" },
  ),
);
type Iheader = {
  title: string;
  undo: () => void;
};

interface HeaderStates {
  headerConfig: Iheader;
  setHeaderConfig: (updated: Iheader) => void;
}

export const useStateHeaderStore = create<HeaderStates>((set) => ({
  headerConfig: {
    title: "",
    undo: () => {},
  },
  setHeaderConfig: (updated) =>
    set((state) => ({
      headerConfig: {
        ...state.headerConfig,
        ...updated,
      },
    })),
}));
