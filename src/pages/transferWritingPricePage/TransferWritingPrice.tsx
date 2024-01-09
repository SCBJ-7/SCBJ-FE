import { useState } from "react";
import * as S from "./TransferWritingPrice.style";
import FirstPriceTag from "./firstPriceTag/FirstPriceTag";
import SecondPriceTag from "./secondPriceTag/SecondPriceTag";
import { useLocation } from "react-router-dom";
import PaymentSection from "./paymentSection/PaymentSection";
import AccountSection from "./accountSection/AccountSection";

const TransferWritingPrice = () => {
  // queryString to get Datas from previous page
  const { search } = useLocation();
  const params = new URLSearchParams(search); // 쿼리스트링 분리
  const purchasePrice = Number(params.get("purchasePrice"));

  // first price values
  const [firstPrice, setFirstPrice] = useState("");
  const [secondPrice, setSecondPrice] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  // second price values

  return (
    <S.Container>
      <FirstPriceTag
        purchasePrice={purchasePrice}
        inputData={firstPrice}
        onChange={setFirstPrice}
        isChecked={isChecked}
        onChecked={setIsChecked}
      />
      <SecondPriceTag
        onChange={setSecondPrice}
        purchasePrice={Number(firstPrice)}
        inputData={secondPrice}
      />
      <PaymentSection />
      <AccountSection />
    </S.Container>
  );
};

export default TransferWritingPrice;
