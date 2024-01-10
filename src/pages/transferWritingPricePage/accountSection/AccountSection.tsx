import * as S from "./AccountSection.style";

const AccountSection = () => {
  // 계좌
  return (
    <S.Container>
      <S.Contents>
        <h1>입금 계좌</h1>
        <section>
          <h2>{accountNumber ? accountNumber : "계좌를 등록해주세요"}</h2>
          <S.rightBtn></S.rightBtn>
        </section>
      </S.Contents>
    </S.Container>
  );
};

export default AccountSection;
