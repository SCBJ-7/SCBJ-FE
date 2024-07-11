import { useEffect, useRef, useState } from "react";

import * as S from "./AgreementSection.style";
import CheckBoxSection from "../checkBox/CheckBoxSection";

interface AgreementProps {
  opt1: boolean;
  opt2: boolean;
  opt3: boolean;
  optFinal: boolean;
  setOpt1: React.Dispatch<React.SetStateAction<boolean>>;
  setOpt2: React.Dispatch<React.SetStateAction<boolean>>;
  setOpt3: React.Dispatch<React.SetStateAction<boolean>>;
  setOptFinal: React.Dispatch<React.SetStateAction<boolean>>;
}
const TermsSection = ({
  opt1,
  opt2,
  opt3,
  optFinal,
  setOpt1,
  setOpt2,
  setOpt3,
  setOptFinal,
}: AgreementProps) => {
  const [allChecked, setAllChecked] = useState(false);

  const check1Ref = useRef(null);
  const check2Ref = useRef(null);
  const check3Ref = useRef(null);
  const check4Ref = useRef(null);

  useEffect(() => {
    if (opt1 && check1Ref.current) {
      (check1Ref.current as HTMLInputElement).checked = true;
    }
    if (opt2 && check2Ref.current) {
      (check2Ref.current as HTMLInputElement).checked = true;
    }
    if (opt3 && check3Ref.current) {
      (check3Ref.current as HTMLInputElement).checked = true;
    }
    if (optFinal && check4Ref.current) {
      (check4Ref.current as HTMLInputElement).checked = true;
    }

    if (opt1 && opt2 && opt3 && optFinal) {
      setAllChecked(true);
    } else {
      setAllChecked(false);
    }
  }, [opt1, opt2, opt3, optFinal]);

  return (
    <S.Container initial={{ y: -5, opacity: 0 }} animate={{ y: 0, opacity: 1 }}>
      <CheckBoxSection
        checkRef={check1Ref}
        text="체크인 시간까지 상품이 판매되지 않으면 판매가 종료돼요."
        id="1"
        isChecked={opt1}
        onChecked={setOpt1}
        fontSize="body6"
        color="greyScale2"
        type="terms"
      />
      <CheckBoxSection
        checkRef={check2Ref}
        text="판매 종료된 상품은 숙박종료일까지 야놀자에서 이용 가능해요."
        id="2"
        isChecked={opt2}
        onChecked={setOpt2}
        fontSize="body6"
        color="greyScale2"
        type="terms"
      />
      <CheckBoxSection
        checkRef={check3Ref}
        text="설정한 상품 판매가와 중개수수료를 제한 정산받을 금액을 마지막으로 한번 더 확인해주세요."
        id="3"
        isChecked={opt3}
        onChecked={setOpt3}
        fontSize="body6"
        color="greyScale2"
        type="terms"
      />
      <CheckBoxSection
        checkRef={check4Ref}
        text="설정한 상품 판매가는 이후 수정이 불가해요."
        id="4"
        isChecked={optFinal}
        onChecked={setOptFinal}
        fontSize="body6"
        color="greyScale2"
        type="terms"
      />
      <S.FinalTerm $allChecked={allChecked}>
        판매 내용을 모두 확인 하였으며, 판매 진행에 동의 합니다.
      </S.FinalTerm>
    </S.Container>
  );
};

export default TermsSection;
