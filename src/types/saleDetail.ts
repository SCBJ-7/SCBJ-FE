export interface ISaleData {
  saleStatus: string;
  checkIn: string;
  checkOut: string;
  hotelImage: string;
  standardPeople: number;
  maxPeople: number;
  leftHour: number;
  hotelName: string;
  roomName: string;
  firstPrice: {
    originalPrice: number;
    firstSalePrice: number;
  };
  secondPrice?: {
    secondPriceStartDate: string;
    secondPrice: number;
  };
  bank: string;
  accountNumber: string;
  createdAt: string | null;
}
