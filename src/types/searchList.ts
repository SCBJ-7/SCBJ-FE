export interface ISearchList {
  id: number;
  name: string;
  roomType: string;
  imageUrl: string;
  originalPrice: number;
  salePrice: number;
  salePercentage: number;
  isFirstPrice: boolean;
  checkIn: string;
  checkOut: string;
  hotelRate: number;
  reviewRate: number;
}
