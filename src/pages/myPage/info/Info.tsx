import * as S from "./Info.style";

const Info = () => {
  const infoList = [
    { name: "문의하기", handler: () => alert("문의하기") },
    { name: "로그아웃", handler: () => alert("로그아웃") },
    { name: "탈퇴하기", handler: () => alert("탈퇴하기") },
  ];

  return (
    <S.InfoListWrapper>
      <h1>정보</h1>
      {infoList.map((item) => {
        return (
          <S.InfoListElement key={item.name}>
            <button onClick={item.handler}>
              <span>{item.name}</span>
            </button>
          </S.InfoListElement>
        );
      })}
    </S.InfoListWrapper>
  );
};

export default Info;
