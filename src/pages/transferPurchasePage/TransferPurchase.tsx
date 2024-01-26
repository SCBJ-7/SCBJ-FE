import PurchaseNav from "./components/purchaseNav/PurchaseNav";
import * as S from "./TransferPurchase.style";
import { differenceInDays, parseISO } from "date-fns";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchPurchaseList } from "@/apis/fetchPurchaseList";
import PurchaseItem from "./components/puchaseItem/PuchaseItem";
import { IPurchaseList } from "@/types/purchaseList";
import Loading from "@/components/lottie/loading/Loading";

export interface IPurchaseItemWithRemainDate extends IPurchaseList {
  remainDate: number;
}

const sortProductsByCheckInDate = (
  products: IPurchaseList[] | undefined,
): IPurchaseItemWithRemainDate[] => {
  if (products) {
    return products
      .map((item) => {
        const checkInDate = parseISO(item.checkInDate);
        const today = new Date();
        const remainDate = differenceInDays(checkInDate, today);
        return { ...item, remainDate };
      })
      .sort((a, b) => {
        return b.remainDate - a.remainDate;
      });
  } else {
    return [];
  }
};

const TransferPurchase = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  const { data: purchaseData, isLoading } = useQuery({
    queryKey: ["purchaseList"],
    queryFn: fetchPurchaseList,
  });

  const sortedPurchaseItems = sortProductsByCheckInDate(purchaseData?.products);

  // Filter items based on status and remainDate
  const filteredPurchaseItems = sortedPurchaseItems.filter((item) => {
    if (status === "yet") {
      return item.remainDate >= 0;
    } else if (status === "done") {
      return item.remainDate < 0;
    } else {
      return true;
    }
  });
  console.log(sortedPurchaseItems);
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <PurchaseNav />
      <S.PurchaseList>
        {filteredPurchaseItems.length > 0 ? (
          filteredPurchaseItems.map((item) => (
            <PurchaseItem
              key={item.id}
              imageUrl={item.imageUrl}
              checkInDate={item.checkInDate}
              checkOutDate={item.checkOutDate}
              id={item.id}
              name={item.name}
              price={item.price}
              purchaseDate={item.purchaseDate}
              roomType={item.roomType}
              remainDate={item.remainDate}
            />
          ))
        ) : status === "done" ? (
          <>
            <S.NoResult>구매내역이 없습니다</S.NoResult>
            {!sortedPurchaseItems.length && (
              <S.NoResultAll>
                지금 상품을 구매하고 호캉스 떠나보세요!
              </S.NoResultAll>
            )}
          </>
        ) : status === "yet" ? (
          <>
            <S.NoResult>이용예정 내역이 없습니다</S.NoResult>
            {!sortedPurchaseItems.length && (
              <S.NoResultAll>
                지금 상품을 구매하고 호캉스 떠나보세요!
              </S.NoResultAll>
            )}
          </>
        ) : (
          <>
            <S.NoResult>이용완료 내역이 없습니다</S.NoResult>
            {!sortedPurchaseItems.length && (
              <S.NoResultAll>
                지금 상품을 구매하고 호캉스 떠나보세요!
              </S.NoResultAll>
            )}
          </>
        )}
      </S.PurchaseList>
    </>
  );
};

export default TransferPurchase;
