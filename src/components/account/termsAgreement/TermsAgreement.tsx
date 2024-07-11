import useToastConfig from "@/hooks/common/useToastConfig";
import { ColorKeys, TypoKeys } from "@/styles/theme";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PRIVACY_POLICY } from "./PrivacyPolicy";
import * as S from "./TermsAgreement.style";

import usePreventLeave from "@/hooks/common/usePreventLeave";

interface Term {
  id: string;
  content: string;
  typo: TypoKeys;
  color: ColorKeys;
}

const TermsAgreement = ({ onClickHandler }: { onClickHandler: () => void }) => {
  const { handleToast } = useToastConfig();
  const scrollRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  usePreventLeave(true);

  const termsList: Term[] = [
    {
      id: "agree-all",
      content: "전체 동의",
      typo: "body1",
      color: "greyScale1",
    },
    {
      id: "over-14",
      content: "[필수] 만 14세 이상입니다",
      typo: "body3",
      color: "greyScale2",
    },
    {
      id: "agree-privacy-policy",
      content: "[필수] 개인정보 처리방침에 동의합니다.",
      typo: "body3",
      color: "greyScale2",
    },
  ];

  const [checkedTerms, setCheckedTerms] = useState<Record<string, boolean>>({
    "agree-all": false,
    "over-14": false,
    "agree-privacy-policy": false,
  });

  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;

    if (id === "agree-all") {
      // 전체 동의 체크박스를 선택하면 나머지 체크박스의 상태를 동일하게 설정
      setCheckedTerms((prev) => {
        const updatedTerms = { ...prev };
        Object.keys(updatedTerms).forEach((termId) => {
          updatedTerms[termId] = checked;
        });
        return updatedTerms;
      });
      return;
    }
    // 전체 동의가 체크 되어 있다면
    if (checkedTerms["agree-all"]) {
      setCheckedTerms((prev) => ({
        ...prev,
        "agree-all": false,
        [id]: checked,
      }));
      return;
    }

    // 개별 체크
    setCheckedTerms((prev) => ({
      ...prev,
      [id]: checked,
    }));

    // 개별 체크 시 두 항목 모두 체크할 경우
    if (checked === true) {
      setCheckedTerms((prev) => ({
        ...prev,
        "agree-all":
          checkedTerms["over-14"] || checkedTerms["agree-privacy-policy"],
      }));
    }
  };

  const showErrorToast = () => {
    handleToast(true, [<>모든 약관에 동의해주세요</>]);
  };

  const btnOnClick = () => {
    if (checkedTerms["agree-all"]) onClickHandler();
    else {
      scrollRef.current?.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
      showErrorToast();
    }
  };

  return (
    <>
      <S.Header>
        <a>
          <S.XIcon onClick={() => navigate(-1)} />
        </a>
      </S.Header>
      <S.TermsAgreementContainer ref={scrollRef}>
        <h1>계좌등록을 위한 필수 약관입니다</h1>
        {termsList.map((term) => (
          <S.CheckContainer key={term.id}>
            <S.CheckBox
              id={term.id}
              onChange={checkHandler}
              checked={checkedTerms[term.id]}
            />
            <S.Label
              htmlFor={term.id}
              $isChecked={checkedTerms[term.id]}
              $typo={term.typo}
              $color={term.color}
            >
              {term.content}
            </S.Label>
          </S.CheckContainer>
        ))}
        <PRIVACY_POLICY />
        <S.Button $disabled={!checkedTerms["agree-all"]} onClick={btnOnClick}>
          모든 약관에 동의합니다
        </S.Button>
      </S.TermsAgreementContainer>
    </>
  );
};

export default TermsAgreement;
