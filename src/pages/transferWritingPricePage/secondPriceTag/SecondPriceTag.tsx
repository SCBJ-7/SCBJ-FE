import InputSection from "../inputSection/InputSection";
import * as S from "./SecondPriceTag.style";

interface PriceTagProps {
  purchasePrice: number;
  inputData: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

const SecondPriceTag = ({
  onChange,
  purchasePrice,
  inputData,
}: PriceTagProps) => {
  return (
    <S.Container>
      <S.Contents>
        <section>
          <h3>체크인</h3>
          <span>{} 시간 남았어요</span>
        </section>
        <section>
          <h3>숙박일</h3>
          <span>23.20 (수) 17:00 ~ 23.21 (목) 10:00</span>
        </section>
      </S.Contents>
      <InputSection
        placeHolder="지정 시간"
        inputPosition="center"
        text={["체크인", "시간전에"]}
        onChange={onChange}
        inputData={inputData}
        purchasePrice={purchasePrice}
      />
      <InputSection
        placeHolder="지정 가격"
        inputPosition="left"
        text={["원으로 가격을 내릴게요"]}
        onChange={onChange}
        inputData={inputData}
        purchasePrice={purchasePrice}
      />
    </S.Container>
  );
};

export default SecondPriceTag;
