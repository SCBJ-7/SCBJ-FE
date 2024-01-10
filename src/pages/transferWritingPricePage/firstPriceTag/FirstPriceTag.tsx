import CheckBoxSection from "../checkBox/CheckBoxSection";
import InputSection from "../inputSection/InputSection";
import * as S from "./FirstPriceTag.style";

interface PriceTagProps {
  purchasePrice: number;
  inputData: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  isChecked: boolean;
  onChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const FirstPriceTag = ({
  onChange,
  purchasePrice,
  inputData,
  isChecked,
  onChecked,
}: PriceTagProps) => {
  return (
    <S.FirstContainer>
      <S.Headline>판매할 금액을 입력해주세요</S.Headline>
      <S.Contents>
        <section>
          <h3>야놀자 구매가</h3>
          <span>212,000원</span>
        </section>
        <section>
          <h3>판매 희망가</h3>
          <InputSection
            purchasePrice={purchasePrice}
            placeHolder="지정 가격"
            inputPosition="left"
            inputData={inputData}
            text={["원"]}
            onChange={onChange}
          />
        </section>
      </S.Contents>
      <CheckBoxSection
        id="first"
        text="2차 판매 가격 설정으로 자동 가격 내리기"
        isChecked={isChecked}
        onChecked={onChecked}
        fontSize="body4"
        color="greyScale1"
      />
    </S.FirstContainer>
  );
};

export default FirstPriceTag;
