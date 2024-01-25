import { useSearchParams } from "react-router-dom";
import * as S from "./SaleNav.style";
import { useEffect } from "react";
import { NAV_LIST } from "@constants/sale";

const SaleNav = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");
  useEffect(() => {
    if (!status) {
      setSearchParams({ status: "all" });
    }
  }, [status, setSearchParams]);

  return (
    <S.SaleNavContainer>
      {NAV_LIST.map(({ status: itemStatus, label }) => (
        <S.SaleNavCell
          key={itemStatus}
          className={status === itemStatus ? "active" : ""}
          to={`?status=${itemStatus}`}
        >
          {label}
        </S.SaleNavCell>
      ))}
    </S.SaleNavContainer>
  );
};

export default SaleNav;
