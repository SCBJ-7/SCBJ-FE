import { useEffect } from "react";
import * as S from "./TransferWriting.styled";
import TransferItem from "./transferItemList/transferItem/TransferItem";

const TransferWriting = () => {
  useEffect(() => {}, []);

  const list = [2, 2, 3, 4, 5];

  return (
    <>
      <S.Subtitle>판매할 내역을 선택해주세요.</S.Subtitle>
      <S.TransferItemList>
        {list.map((item, idx) => {
          return <TransferItem key={idx} item={item} />;
        })}
      </S.TransferItemList>
    </>
  );
};

export default TransferWriting;
