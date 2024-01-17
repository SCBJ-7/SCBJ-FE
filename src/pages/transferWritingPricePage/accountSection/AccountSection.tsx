import { IUserInfo } from "@/types/userInfo";
import * as S from "./AccountSection.style";

interface AccountProps {
  bank: string | null;
  accountNumber: string | null;
  userInfo?: IUserInfo;
  onSetAccount: React.Dispatch<React.SetStateAction<"none" | "enter">>;
}

const AccountSection = ({
  userInfo,
  onSetAccount,
  bank,
  accountNumber,
}: AccountProps) => {
  const setAccountHandler = () => {
    onSetAccount("enter");
  };
  return (
    <S.Container
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      onClick={setAccountHandler}
    >
      <S.Contents $accountNumber={accountNumber}>
        <h1>입금 계좌</h1>
        <section>
          <h2>
            {userInfo?.accountNumber
              ? `${userInfo.bank} ${userInfo.accountNumber}`
              : bank && accountNumber
                ? `${bank} ${accountNumber}`
                : "계좌를 등록해주세요"}
          </h2>
          <S.rightBtn></S.rightBtn>
        </section>
      </S.Contents>
    </S.Container>
  );
};

export default AccountSection;
