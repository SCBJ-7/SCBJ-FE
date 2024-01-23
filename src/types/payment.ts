export interface StockData {
  hasStock: boolean;
}

export interface PaymentData {
  hotelImage: string;
  hotelName: string;
  roomName: string;
  standardPeople: number;
  maxPeople: number;
  checkInDateTime: string;
  checkOutDateTime: string;
  originalPrice: number;
  salePrice: number;
}

export interface PaymentRequestData {
  url: string;
}
