import { Nullable } from "@type/nullable";
export interface LocaleItem {
  id: number;
  city: string;
  name: string;
  roomType: string;
  imageUrl: string;
  originalPrice: number;
  salePrice: number;
  salePercentage: number;
  checkInDate: string;
  checkOutDate: string;
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
  brunch: boolean;
  pool: boolean;
  oceanView: boolean;
};

export interface WeekendItemsType {
  [weekend: string]: WeekendItem[];
}

export type MainApiType = LocaleItemsType & WeekendItemsType;
