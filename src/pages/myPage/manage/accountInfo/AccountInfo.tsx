import * as S from "./AccountInfo.style";
import { useUserInfoStore } from "@/store/store";

const AccountInfo = () => {
  const { userInfo } = useUserInfoStore();

  return (
    <S.AccountInfoContainer>
      <S.AccountInfoWrapper>
        <h2>은행명</h2>
        <div>{userInfo.bank}</div>
      </S.AccountInfoWrapper>

      <S.AccountInfoWrapper>
        <h2>계좌번호</h2>
        <div>{userInfo.accountNumber}</div>
      </S.AccountInfoWrapper>

      <S.AccountInfoWrapper>
        <h2>예금주</h2>
        <div>{userInfo.name}</div>
      </S.AccountInfoWrapper>
    </S.AccountInfoContainer>
  );
};

export default AccountInfo;
