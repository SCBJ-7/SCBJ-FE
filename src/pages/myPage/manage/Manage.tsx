import { PATH } from "@constants/path";
import * as S from "./Manage.style";
import rightArrow from "@assets/icons/RightArrow.svg";

const Manage = () => {
  const manageList = [
    { path: PATH.MANAGE_PROFILE, name: "프로필 변경" },
    { path: PATH.MANAGE_ACCOUNT, name: "정산 계좌 관리" },
  ];

  return (
    <S.ManageListWrapper>
      <h1>관리</h1>
      {manageList.map((item) => {
        return (
          <S.ManageListElement key={item.name}>
            <S.ManageLink to={item.path}>
              <span>{item.name}</span>
              <img src={rightArrow} alt={`${item.name}으로 이동하기`} />
            </S.ManageLink>
          </S.ManageListElement>
        );
      })}
    </S.ManageListWrapper>
  );
};

export default Manage;
