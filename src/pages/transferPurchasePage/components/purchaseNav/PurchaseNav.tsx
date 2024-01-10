import { useSearchParams } from "react-router-dom";
import * as S from "./PurchaseNav.style";

const navList = [
  { status: "all", label: "전체" },
  { status: "yet", label: "이용예정" },
  { status: "done", label: "이용완료" },
];

const PurchaseNav = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const status = searchParams.get("status");
  if (!status) {
    setSearchParams({ status: "all" });
  }

  return (
    <S.PurchaseNavContainer>
      {navList.map(({ status: itemStatus, label }) => (
        <S.PurchaseNavCell
          key={itemStatus}
          className={status === itemStatus ? "active" : ""}
          to={`?status=${itemStatus}`}
        >
          {label}
        </S.PurchaseNavCell>
      ))}
    </S.PurchaseNavContainer>
  );
};

export default PurchaseNav;
