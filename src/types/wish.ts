export interface WishDataType {
  products: ProductType[];
}

export interface ProductType {
  hotelName: string;
  roomType: string;
  productId: number;
  imageUrl: string;
  checkInDate: string;
  checkOutDate: string;
  price: number;
}
