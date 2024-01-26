export interface ISaleData {
  saleStatus: string;
  checkIn: string;
  checkOut: string;
  hotelImage: string;
  standardPeople: string;
  maxPeople: string;
  leftHour: number;
  hotelName: string;
  roomName: string;
  firstPriceData: {
    originalPrice: number;
    firstSalePrice: number;
  };
  secondPriceData?: {
    startDate: string;
    secondGrantPeriod: number;
    secondPrice: number;
  };
  bank: string;
  accountNumber: string;
}
