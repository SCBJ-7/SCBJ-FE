import type { ReactNode } from "react";
import { IReservation } from "@/types/reservationList";

import { create } from "zustand"; // create로 zustand를 불러옵니다.
import { persist } from "zustand/middleware";
import type { MemberResponse } from "@type/login";
import { ISearchFilterInfo } from "@/types/searchFilterInfo";

/* 
  zustand 사용법:
  기본적으로 storeState 타입을 만들고, 이걸 
    create<StoreState>(() => ({ ...storeState }))
  식으로 쓰면 됩니다!
*/

/*
  storeState는 보통 아래처럼 구성합니다.
  {
    데이터,
    데이터 조작 set함수1,
    데이터 조작 set함수2,
    데이터 조작 set함수3,
    ...
  }
*/

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

// 유저정보 전역상태
interface UserState {
  userInfo: MemberResponse | null;
  setUserInfo: (userInfo: MemberResponse) => void;
}

// 유저정보 전역상태 store
export const useUserInfoStore = create<UserState>((set) => ({
  userInfo: null,
  setUserInfo: (updatedInfo) =>
    set((state) => ({
      userInfo: {
        ...state.userInfo,
        ...updatedInfo,
      },
    })),
}));

// export const useUserInfoStore = create<UserState>((set) => ({
//   userInfo: {
//     id: 0,
//     email: "",
//     name: "",
//     phone: "",
//     accountNumber: "",
//     bank: "",
//     linkedToYanolja: false,
//   },
//   setUserInfo: (updatedInfo) =>
//     set((state) => ({
//       userInfo: {
//         ...state.userInfo,
//         ...updatedInfo,
//       },
//     })),
// }));

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
