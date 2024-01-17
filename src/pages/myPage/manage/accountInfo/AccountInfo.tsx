import { ProfileData } from "../manageProfile/ManageProfile.type";
import * as S from "./AccountInfo.style";

const AccountInfo = ({
  data,
  onClick,
}: {
  data: ProfileData;
  onClick: () => void;
}) => {
  const { bank, accountNumber, name } = data;

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
      <S.AccountEditButton type="button" onClick={onClick}>
        계좌 변경하기
      </S.AccountEditButton>
    </S.AccountInfoContainer>
  );
};

export default AccountInfo;
