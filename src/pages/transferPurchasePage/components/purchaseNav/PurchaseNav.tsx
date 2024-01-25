import { useSearchParams } from "react-router-dom";
import * as S from "./PurchaseNav.style";
import { PATH } from "@constants/path";

const navList = [
  { status: "", label: "전체" },
  { status: "yet", label: "이용예정" },
  { status: "done", label: "이용완료" },
];

const PurchaseNav = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get("status");

  return (
    <S.PurchaseNavContainer>
      {navList.map(({ status: itemStatus, label }) => (
        <S.PurchaseNavCell
          key={itemStatus}
          className={
            !status && itemStatus === ""
              ? "active"
              : status === itemStatus
                ? "active"
                : ""
          }
          to={itemStatus ? `?status=${itemStatus}` : PATH.MY_PAGE}
        >
          {label}
        </S.PurchaseNavCell>
      ))}
    </S.PurchaseNavContainer>
  );
};

export default PurchaseNav;
