import { differenceInDays } from "date-fns";
import SaleNav from "./components/saleNav/SaleNav";
import * as S from "./TransferSale.style";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SaleItem from "./components/saleItem/SaleItem";
import type { ISaleList } from "@type/saleList";
import { fetchSaleList } from "@apis/fetchSaleList";
import { NAV_LIST } from "@constants/sale";

export interface ISaleItemWithRemainDate extends ISaleList {
  remainDate: number;
}

const sortProductsByCheckInDate = (
  data: ISaleList[] | undefined,
): ISaleItemWithRemainDate[] => {
  if (data) {
    return data
      .map((item) => {
        const checkInDate = new Date(item.checkInDate);
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

const TransferSale = () => {
  const [saleItems, setSaleItems] = useState<ISaleItemWithRemainDate[]>([]);
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  const fetchData = async () => {
    try {
      const { data } = await fetchSaleList();
      const sortedSaleItems = sortProductsByCheckInDate(data);
      const filteredSaleItems = sortedSaleItems.filter((item) => {
        const navItem = NAV_LIST.find((nav) => nav.status === status);
        if (!navItem || navItem.status === "all") {
          return true;
        }
        return item.saleStatus === navItem.label;
      });

      setSaleItems(filteredSaleItems);
    } catch (error) {
      console.error(error);
    }
  };

  const NoItemText = () => {
    if (status === "for-sale") return <h2>판매중인 내역이 없습니다</h2>;
    if (status === "sale-completed") return <h2>판매완료 내역이 없습니다</h2>;
    if (status === "calculate-completed")
      return <h2>정산완료 내역이 없습니다</h2>;
    if (status === "sale-expired") return <h2>판매만료 내역이 없습니다</h2>;

    return <h2>판매내역이 없습니다</h2>;
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, [status]);

  if (saleItems.length === 0)
    return (
      <>
        <SaleNav />
        <S.NoSaleItems>
          <NoItemText />
          {status === "all" && (
            <span>계정을 연동하고 판매글을 작성해보세요!</span>
          )}
        </S.NoSaleItems>
      </>
    );

  return (
    <>
      <SaleNav />
      <S.SaleList>
        {saleItems.map((item) => {
          return (
            <SaleItem
              key={item.id}
              id={item.id}
              imageUrl={item.imageUrl}
              name={item.name}
              checkInDate={item.checkInDate}
              checkOutDate={item.checkOutDate}
              roomType={item.roomType}
              firstPrice={item.firstPrice}
              secondPrice={item.secondPrice}
              remainDate={item.remainDate}
              saleStatus={item.saleStatus}
            />
          );
        })}
      </S.SaleList>
    </>
  );
};

export default TransferSale;
