import * as S from "./TransferWriting.styled";
import TransferItem from "./transferItemList/transferItem/TransferItem";

const TransferWriting = () => {
  const list = [
    "체크인까지 2일 남았어요!",
    "체크인까지 2일 남았어요!",
    "체크인까지 3일 남았어요!",
    "체크인까지 3일 남았어요!",
    "체크인까지 5일 남았어요!",
  ];

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
