export interface ISaleList {
  id: number | null;
  productId: number | null;
  imageUrl: string;
  name: string;
  roomType: string;
  checkInDate: string;
  checkOutDate: string;
  firstPrice: number;
  secondPrice: number;
  saleStatus: string;
}
