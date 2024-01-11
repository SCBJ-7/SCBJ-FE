import * as S from "./AgreementSection.style";
import CheckBoxSection from "../checkBox/CheckBoxSection";

interface AgreementProps {
  setOpt1: React.Dispatch<React.SetStateAction<boolean>>;
  setOpt2: React.Dispatch<React.SetStateAction<boolean>>;
  setOpt3: React.Dispatch<React.SetStateAction<boolean>>;
  setOpt4: React.Dispatch<React.SetStateAction<boolean>>;
}
const TermsSection = ({
  setOpt1,
  setOpt2,
  setOpt3,
  setOpt4,
}: AgreementProps) => {
  return (
    <S.Container>
      <CheckBoxSection
        text="체크인 시간까지 상품이 판매되지 않으면 상품 판매가 자동 만료되며, 만료된 상품은 숙박종료일까지 야놀자에서 이용 가능합니다."
        id="1"
        isChecked={false}
        onChecked={setOpt1}
        fontSize="body6"
        color="greyScale2"
      />
      <CheckBoxSection
        text="설정한 상품 판매가와 중개 수수료를 포함한 정산 총액을 확인하였습니다."
        id="2"
        isChecked={false}
        onChecked={setOpt2}
        fontSize="body6"
        color="greyScale2"
      />
      <CheckBoxSection
        text="설정한 상품 판매가는 이후 수정이 불가하며 이를 확인하였습니다."
        id="3"
        isChecked={false}
        onChecked={setOpt3}
        fontSize="body6"
        color="greyScale2"
      />
      <CheckBoxSection
        text="판매 내용을 모두 확인 하였으며, 판매 진행에 동의 합니다."
        id="4"
        isChecked={false}
        onChecked={setOpt4}
        fontSize="body6"
        color="greyScale2"
      />
    </S.Container>
  );
};

export default TermsSection;
