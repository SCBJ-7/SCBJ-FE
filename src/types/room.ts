export type RoomData = {
  hotelName: string;
  hotelImageUrlList: string[];
  roomName: string;
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
  roomAllRating: number;
  hotelLevel: string;
  sellerCommentList: string[];
  facilityInformation: string;
  isLike: boolean;
};
type RoomTheme = {
  parkingZone: boolean;
  breakfast: boolean;
  pool: boolean;
  oceanView: boolean;
};

export interface MapData {
  documents: TLatLng[];
}

export type TLatLng = {
  x: string;
  y: string;
};
