export type RoomData = {
  hotelName: string;
  roomName: string;
  hotelImageUrlList: string[];
  checkIn: string;
  checkOut: string;
  originalPrice: number;
  sellingPrice: number;
  standardPeople: number;
  maxPeople: number;
  bedType: string;
  roomTheme: RoomTheme;
  hotelAddress: string;
  hotelInfoUrl: string;
  saleStatus: boolean;
  isSeller: boolean;
};
type RoomTheme = {
  parkingZone: boolean;
  breakfast: boolean;
  pool: boolean;
  oceanView: boolean;
};

export type RoomNavBarData = Pick<
  RoomData,
  "originalPrice" | "sellingPrice" | "saleStatus" | "isSeller"
>;
