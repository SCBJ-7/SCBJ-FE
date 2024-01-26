import * as S from "./TransferWritingSuccess.style";
import TransferDone from "../../assets/icons/frame_TransferDone.svg?react";
import { useNavigate } from "react-router-dom";
import { PATH } from "@constants/path";
import { useSearchParams } from "react-router-dom";
import AccountBottomSheet from "./accountBottomSheet/AccountBottomSheet";
import { useEffect, useState } from "react";

const TransferWritingSuccess = () => {
  const [content, setContent] = useState<
    "default" | "agreement" | "firstlyNoAccount"
  >("default");

  const [searchParams] = useSearchParams();
  const firstlyNoAccount = searchParams.get("FNA");

  useEffect(() => {
    if (firstlyNoAccount === "true") {
      setContent("firstlyNoAccount");
    }
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();
  const doneHandler = () => {
    navigate(PATH.MY_PAGE);
  };

  return (
    <S.Container>
      <TransferDone />
      <button onClick={doneHandler}>내 판매내역 확인하기</button>
      <AccountBottomSheet content={content} onSetContent={setContent} />
    </S.Container>
  );
};

export default TransferWritingSuccess;
