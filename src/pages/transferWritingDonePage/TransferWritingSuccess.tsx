import * as S from "./TransferWritingSuccess.style";
import TransferDone from "../../assets/icons/frame_TransferDone.svg?react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@constants/path";

const TransferWritingSuccess = () => {
  const navigate = useNavigate();
  const doneHandler = () => {
    navigate(PATH.PURCHASE_LIST);
  };

  return (
    <S.Container>
      <TransferDone />
      <button onClick={doneHandler}>내 판매내역 확인하기</button>
    </S.Container>
  );
};

export default TransferWritingSuccess;
