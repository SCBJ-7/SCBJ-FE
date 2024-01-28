import { useNavigate } from "react-router-dom";

import * as S from "./AccountInfo.style";
import { PATH } from "@constants/path";
import type { ProfileData, AccountData } from "@type/profile";

const AccountInfo = ({
  data,
  accountInfo,
}: {
  data: ProfileData;
  accountInfo: AccountData;
}) => {
  const { bank, accountNumber, name } = data;
  const navigate = useNavigate();

  return (
    <S.AccountInfoContainer>
      <S.AccountInfoWrapper>
        <h2>은행명</h2>
        <div>{bank}</div>
      </S.AccountInfoWrapper>

      <S.AccountInfoWrapper>
        <h2>계좌번호</h2>
        <div>{accountNumber}</div>
      </S.AccountInfoWrapper>

      <S.AccountInfoWrapper>
        <h2>예금주</h2>
        <div>{name}</div>
      </S.AccountInfoWrapper>
      <S.AccountEditButton
        type="button"
        onClick={() =>
          navigate(PATH.ACCOUNT_EDIT, {
            state: accountInfo,
          })
        }
      >
        계좌 변경하기
      </S.AccountEditButton>
    </S.AccountInfoContainer>
  );
};

export default AccountInfo;
