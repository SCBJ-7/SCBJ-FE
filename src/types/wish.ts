export interface WishDataType {
  products: ProductType[];
}

export interface ProductType {
  hotelName: string;
  roomType: string;
  imageUrl: string;
  checkInDate: string;
  checkOutDate: string;
  price: number;
}
