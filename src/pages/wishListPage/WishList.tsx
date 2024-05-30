import styled from "styled-components";

import Header from "@/components/layout/header/HeaderTop.tsx";
import Layout from "@/components/layout/Layout.tsx";
import WishCard from "@/pages/wishListPage/components/wishCard/WishCard.tsx";
import { WishDataType } from "@/types/wish.ts";
import { remCalc } from "@/utils/styleFormatter.ts";

const WishList = () => {
  return (
    <>
      <Header text={`찜한 숙소(${mock.products.length})`} />
      <Layout
        bg={"greyScale7"}
        pt={20}
        pb={32}
        paddingInline={16}
        isBottomNavOn
      >
        <ListWrapper>
          {mock.products.map((product, index) => (
            <WishCard key={index} product={product} />
          ))}
        </ListWrapper>
      </Layout>
    </>
  );
};

export default WishList;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${remCalc(16)};
`;

const mock: WishDataType = {
  products: [
    {
      hotelName: "롯데시그니엘",
      roomType: "스탠다드 더블",
      imageUrl: "https://via.placeholder.com/150",
      checkInDate: "2023-11-12",
      checkOutDate: "2023-11-14",
      price: 2400000,
    },
    {
      hotelName: "롯데시그니엘",
      roomType: "디럭스 트윈",
      imageUrl: "https://via.placeholder.com/150",
      checkInDate: "2023-11-15",
      checkOutDate: "2023-11-17",
      price: 2800000,
    },
    {
      hotelName: "신라호텔",
      roomType: "스탠다드 더블",
      imageUrl: "https://via.placeholder.com/150",
      checkInDate: "2023-12-01",
      checkOutDate: "2023-12-03",
      price: 2200000,
    },
    {
      hotelName: "신라호텔",
      roomType: "디럭스 더블",
      imageUrl: "https://via.placeholder.com/150",
      checkInDate: "2023-12-04",
      checkOutDate: "2023-12-06",
      price: 2600000,
    },
    {
      hotelName: "파라다이스시티",
      roomType: "스탠다드 더블",
      imageUrl: "https://via.placeholder.com/150",
      checkInDate: "2023-11-20",
      checkOutDate: "2023-11-22",
      price: 2300000,
    },
    {
      hotelName: "파라다이스시티",
      roomType: "디럭스 더블",
      imageUrl: "https://via.placeholder.com/150",
      checkInDate: "2023-11-25",
      checkOutDate: "2023-11-27",
      price: 2700000,
    },
    {
      hotelName: "그랜드조선",
      roomType: "스탠다드 더블",
      imageUrl: "https://via.placeholder.com/150",
      checkInDate: "2023-11-30",
      checkOutDate: "2023-12-02",
      price: 2500000,
    },
    {
      hotelName: "그랜드조선",
      roomType: "디럭스 더블",
      imageUrl: "https://via.placeholder.com/150",
      checkInDate: "2023-12-05",
      checkOutDate: "2023-12-07",
      price: 2900000,
    },
    {
      hotelName: "인터컨티넨탈",
      roomType: "스탠다드 더블",
      imageUrl: "https://via.placeholder.com/150",
      checkInDate: "2023-11-18",
      checkOutDate: "2023-11-20",
      price: 2400000,
    },
    {
      hotelName: "인터컨티넨탈",
      roomType: "디럭스 더블",
      imageUrl: "https://via.placeholder.com/150",
      checkInDate: "2023-12-08",
      checkOutDate: "2023-12-10",
      price: 2800000,
    },
    {
      hotelName: "포시즌스",
      roomType: "스탠다드 더블",
      imageUrl: "https://via.placeholder.com/150",
      checkInDate: "2023-11-28",
      checkOutDate: "2023-11-30",
      price: 2600000,
    },
    {
      hotelName: "포시즌스",
      roomType: "디럭스 더블",
      imageUrl: "https://via.placeholder.com/150",
      checkInDate: "2023-12-12",
      checkOutDate: "2023-12-14",
      price: 3000000,
    },
  ],
};
