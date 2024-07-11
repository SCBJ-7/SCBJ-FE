import { Nullable } from "@/types/nullable";
export interface LocaleItem {
  id: number;
  city: string;
  hotelName: string;
  roomType: string;
  imageUrl: string;
  originalPrice: number;
  salePrice: number;
  salePercentage: number;
  checkInDate: string;
  checkOutDate: string;
  hotelRate: string;
  roomThemeCount: number;
  reviewRate: string;
}

export interface LocaleItemsType {
  seoul: Nullable<LocaleItem[]>;
  gangwon: Nullable<LocaleItem[]>;
  busan: Nullable<LocaleItem[]>;
  jeju: Nullable<LocaleItem[]>;
  gyeongsang: Nullable<LocaleItem[]>;
  jeolla: Nullable<LocaleItem[]>;
}

export type WeekendItem = Omit<LocaleItem, "city"> & {
  isBrunchIncluded: boolean;
  isPoolIncluded: boolean;
  isOceanViewIncluded: boolean;
};
