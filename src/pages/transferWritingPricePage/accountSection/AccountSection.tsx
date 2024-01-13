import { useUserInfoStore } from "@/store/store";
import * as S from "./AccountSection.style";

const AccountSection = () => {
  const userInfo = useUserInfoStore((state) => state.userInfo);

  const AccountPageOpenHandler = () => {
    console.log("계좌 페이지 오픈!");
  };

  return (
    <S.Container
      onClick={AccountPageOpenHandler}
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <S.Contents $accountNumber={userInfo.accountNumber}>
        <h1>입금 계좌</h1>
        <section>
          <h2>
            {userInfo.accountNumber
              ? `${userInfo.bank} ${userInfo.accountNumber}`
              : "계좌를 등록해주세요"}
          </h2>
          <S.rightBtn></S.rightBtn>
        </section>
      </S.Contents>
    </S.Container>
  );
};

export default AccountSection;
