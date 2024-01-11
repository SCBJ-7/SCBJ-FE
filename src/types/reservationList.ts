export interface IReservation {
  reservationId: number;
  hotelName: string;
  roomName: string;
  startDate: Date;
  endDate: Date;
  refundPrice: number;
  purchasePrice: number;
  remainingDays: number;
  remainingTimes: number;
  imageUrl: string;
}
