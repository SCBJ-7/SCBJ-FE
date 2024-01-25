import { useSearchParams } from "react-router-dom";
import * as S from "./SaleNav.style";
import { NAV_LIST } from "@constants/sale";
import { PATH } from "@constants/path";

const SaleNav = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  return (
    <S.SaleNavContainer>
      {NAV_LIST.map(({ status: itemStatus, label }) => (
        <S.SaleNavCell
          key={itemStatus}
          className={
            !status && itemStatus === ""
              ? "active"
              : status === itemStatus
                ? "active"
                : ""
          }
          to={itemStatus ? `?status=${itemStatus}` : PATH.SALE_LIST}
        >
          {label}
        </S.SaleNavCell>
      ))}
    </S.SaleNavContainer>
  );
};

export default SaleNav;
