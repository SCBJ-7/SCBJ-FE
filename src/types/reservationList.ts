export interface IReservation {
  hotelName: string;
  roomName: string;
  startDate: Date;
  endDate: Date;
  refundPrice: number;
  purchasePrice: number;
  remainingDays: number;
  remainingTimes: number;
  hotelImage: string;
}
