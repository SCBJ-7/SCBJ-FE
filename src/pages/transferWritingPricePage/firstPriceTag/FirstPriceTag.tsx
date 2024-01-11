import priceFormat from "@/utils/priceFormat";
import CheckBoxSection from "../checkBox/CheckBoxSection";
import InputSection from "../inputSection/InputSection";
import * as S from "./FirstPriceTag.style";
import { useEffect, useRef } from "react";

interface PriceTagProps {
  purchasePrice: number;
  inputData: string;
  onFirstPriceChange: React.Dispatch<React.SetStateAction<string>>;
  is2ndChecked: boolean;
  on2ndChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const FirstPriceTag = ({
  onFirstPriceChange,
  purchasePrice,
  inputData,
  is2ndChecked,
  on2ndChecked,
}: PriceTagProps) => {
  const checkRef = useRef(null);

  useEffect(() => {
    // 1차 가격의 길이가 0이 되면 2차 가격 설정 체크 해제
    if (inputData.length === 0) {
      on2ndChecked(false);
      if (checkRef.current) {
        const inputEl = checkRef.current as HTMLInputElement;
        inputEl.checked = false;
      }
    }
  }, [inputData, on2ndChecked]);

  return (
    <>
      <S.FirstContainer $is2ndChecked={is2ndChecked}>
        <S.Headline>판매할 금액을 입력해주세요</S.Headline>
        <S.Contents>
          <section>
            <h3>야놀자 구매가</h3>
            <span>{priceFormat(purchasePrice)}원</span>
          </section>
          <section>
            <h3>판매 희망가</h3>
            <InputSection
              maxPrice={purchasePrice}
              placeHolder="지정 가격"
              inputPosition="left"
              inputData={inputData}
              text={["원"]}
              onDataChange={onFirstPriceChange}
            />
          </section>
        </S.Contents>
        <CheckBoxSection
          checkRef={checkRef}
          firstPrice={inputData}
          id="first"
          text="2차 판매 가격 설정으로 자동 가격 내리기"
          isChecked={is2ndChecked}
          onChecked={on2ndChecked}
          fontSize="body4"
          color="greyScale1"
          type="trigger"
        />
      </S.FirstContainer>
      {is2ndChecked && <S.Hr />}
    </>
  );
};

export default FirstPriceTag;