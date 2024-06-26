export interface WishDataType {
  content: ProductType[];
  pageable: Pageable;
  totalElements: number;
  totalPages: number;
  last: boolean;
  size: number;
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  numberOfElements: number;
  first: boolean;
  empty: boolean;
}

interface ProductType {
  id: number;
  name: string;
  roomType: string;
  imageUrl: string;
  originalPrice: number;
  isFirstPrice: boolean;
  salePrice: number;
  salePercentage: number;
  checkIn: string;
  checkOut: string;
  createdAt: string;
  reviewRate: string;
  hotelRate: string;
}

interface Pageable {
  pageNumber: number;
  pageSize: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  offset: number;
  paged: boolean;
  unpaged: boolean;
}
