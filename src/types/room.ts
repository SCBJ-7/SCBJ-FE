export type RoomData = {
  hotelName: string;
  roomName: string;
  hotelImageUrl: string[];
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
};
type RoomTheme = {
  parkingZone: boolean;
  breakfast: boolean;
  pool: boolean;
  oceanView: boolean;
};

export type RoomNavBarData = Pick<
  RoomData,
  "originalPrice" | "sellingPrice" | "saleStatus"
>;
