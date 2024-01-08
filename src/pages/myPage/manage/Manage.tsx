import * as S from "./Manage.style";
import rightArrow from "@assets/icons/RightArrow.svg";

const Manage = () => {
  const manageList = [
    { path: "/manage-profile", name: "프로필 변경" },
    { path: "/manage-account", name: "정산 계좌 관리" },
  ];

  return (
    <S.ManageListWrapper>
      <h1>관리</h1>
      {manageList.map((item) => {
        return (
          <S.ManageListElement key={item.name}>
            <a href={item.path}>
              <span>{item.name}</span>
              <img src={rightArrow} alt="이동하기" />
            </a>
          </S.ManageListElement>
        );
      })}
    </S.ManageListWrapper>
  );
};

export default Manage;
