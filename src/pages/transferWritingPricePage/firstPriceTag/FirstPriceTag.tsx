import * as S from "./FirstPriceTag.style";
import InputSection from "../inputSection/InputSection";

interface PriceTagProps {
  checkRef: React.MutableRefObject<null>;
  inputRef: React.MutableRefObject<null>;
  purchasePrice: number;
  inputData: string;
  onFirstPriceChange: React.Dispatch<React.SetStateAction<string>>;
}

const FirstPriceTag = ({
  inputRef,
  onFirstPriceChange,
  purchasePrice,
  inputData,
}: PriceTagProps) => {
  return (
    <S.FirstContainer
      initial={{ y: -5, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <S.Headline>판매할 금액을 입력해주세요</S.Headline>
      <S.Contents>
        <InputSection
          maxPrice={purchasePrice}
          placeHolder="지정 가격"
          inputPosition="left"
          inputRef={inputRef}
          inputData={inputData}
          text={["원"]}
          onDataChange={onFirstPriceChange}
          type="price"
        />
      </S.Contents>
    </S.FirstContainer>
  );
};

export default FirstPriceTag;
