import { differenceInDays, parseISO } from "date-fns";
import PurchaseNav from "./components/purchaseNav/PurchaseNav";
import * as S from "./TransferPurchase.style";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchPurchaseList } from "@/apis/fetchPurchaseList";
import PurchaseItem from "./components/puchaseItem/PuchaseItem";
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
  const [purchaseItems, setPurchaseItems] = useState<
    IPurchaseItemWithRemainDate[]
  >([]);
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetchPurchaseList();
        const sortedPurchaseItems = sortProductsByCheckInDate(
          res?.data?.products,
        );

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

        setPurchaseItems(filteredPurchaseItems);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [status]);
  return (
    <>
      <PurchaseNav />
      <S.PurchaseList>
        {purchaseItems.map((item, idx) => {
          return (
            <PurchaseItem
              key={idx}
              ImageUrl={item.ImageUrl}
              checkInDate={item.checkInDate}
              checkOutDate={item.checkOutDate}
              id={item.id}
              name={item.name}
              price={item.price}
              purchaseDate={item.purchaseDate}
              roomType={item.roomType}
              remainDate={item.remainDate}
            />
          );
        })}
      </S.PurchaseList>
    </>
  );
};

export default TransferPurchase;
