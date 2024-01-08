import { useEffect, useState } from "react";
import * as S from "./PuchaseItem.style";
import { fetchPurchaseList } from "@/apis/fetchPurchaseList";
import styled from "styled-components";
import { format } from "date-fns/format";
import { ko } from "date-fns/locale";
const sortProductsByCheckInDate = (products: IPurchaseList[] | undefined) => {
  if (products) {
    return products.sort((a, b) => {
      const dateA = new Date(a.checkInDate);
      const dateB = new Date(b.checkInDate);

      if (dateA > dateB) return -1;
      if (dateA < dateB) return 1;
      return 0;
    });
  } else {
    return [];
  }
};
const PuchaseItem = () => {
  const [purchaseItems, setPurchaseItems] = useState<IPurchaseList[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchPurchaseList();
        const sortedPurchaseItems = sortProductsByCheckInDate(
          res?.data?.products,
        );
        setPurchaseItems(sortedPurchaseItems); // 데이터를 state에 저장하거나 필요한 작업 수행
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);
  return (
    <S.PurchaseList>
      {purchaseItems.map((item, idx) => (
        <PuchaseItems
          key={idx}
          $imageUrl={item.ImageUrl}
          $checkInDate={item.checkInDate}
          $checkOutDate={item.checkOutDate}
          $id={item.id}
          $name={item.name}
          $price={item.price}
          $purchaseDate={item.purchaseDate}
          $roomType={item.roomType}
        >
          <S.PurchaseItemContainer>
            <S.PurchaseItemTitle>
              체크인까지 3일남았어요!{" "}
              <S.ArrowRightBtnIcon></S.ArrowRightBtnIcon>
            </S.PurchaseItemTitle>
            <S.PurchaseItemContent>
              <S.PurchaseItemImage src={item.ImageUrl} />
              <S.PuchaseItemInfo>
                <S.PurchaseItemName>{item.name}</S.PurchaseItemName>
                <S.PuChaseItemType>{item.roomType}</S.PuChaseItemType>
                <S.PuChaseItemDate>
                  {`${format(item.checkInDate, "yyyy. MM. dd (ccc)", {
                    locale: ko,
                  })} ~ `}
                  {`${format(item.checkOutDate, "yyyy. MM. dd (ccc)", {
                    locale: ko,
                  })}`}
                </S.PuChaseItemDate>
                <S.PurchaseItemPrice>{`${item.price.toLocaleString()}원`}</S.PurchaseItemPrice>
              </S.PuchaseItemInfo>
            </S.PurchaseItemContent>
          </S.PurchaseItemContainer>
        </PuchaseItems>
      ))}
    </S.PurchaseList>
  );
};

export default PuchaseItem;

const PuchaseItems = styled.div<IPurchaseList>``;
