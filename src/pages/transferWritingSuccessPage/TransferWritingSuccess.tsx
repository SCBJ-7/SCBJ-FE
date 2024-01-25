import * as S from "./TransferWritingSuccess.style";
import TransferDone from "../../assets/icons/frame_TransferDone.svg?react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@constants/path";
import { useSearchParams } from "react-router-dom";
import AccountBottomSheet from "./accountBottomSheet/AccountBottomSheet";

const TransferWritingSuccess = () => {
  const [searchParams] = useSearchParams();

  const firstlyNoAccount = searchParams.get("FNA");
  console.log(firstlyNoAccount, "fna");

  const navigate = useNavigate();
  const doneHandler = () => {
    navigate(PATH.PURCHASE_LIST);
  };

  return (
    <S.Container>
      <TransferDone />
      <button onClick={doneHandler}>내 판매내역 확인하기</button>
      <AccountBottomSheet />
    </S.Container>
  );
};

export default TransferWritingSuccess;
