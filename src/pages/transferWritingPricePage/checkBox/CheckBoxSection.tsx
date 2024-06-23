import * as S from "./CheckBoxSection.style";

import { ColorKeys, TypoKeys } from "@/styles/theme";

interface CheckProps {
  checkRef: React.MutableRefObject<null>;
  text: string;
  id: string;
  isChecked: boolean;
  onChecked: React.Dispatch<React.SetStateAction<boolean>>;
  checkToFocus?: React.MutableRefObject<null>;
  fontSize: string;
  color: string;
  type: "terms" | "allCheck";
}

const CheckBoxSection = ({
  checkRef,
  text,
  id,
  isChecked,
  onChecked,
  fontSize,
  color,
  type,
}: CheckProps) => {
  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "terms" && e.target.checked) {
      onChecked(true);
    } else {
      onChecked(false);
    }

    // if (type === "trigger" && !firstPrice) {
    //   // 첫 가격이 입력 안 되어있으면 2차 가격 설정 체크 불가
    //   e.target.checked = false;
    //   // 1차 가격 인풋에 포커스
    //   if (checkToFocus?.current) {
    //     (checkToFocus.current as HTMLInputElement).focus();
    //   }
    //   return;
    // }

    // if (type === "allCheck" && e.target.checked) {
    //   onChecked(true);
    //   if (onAllChecked && onAllRef) {
    //     onAllChecked[0](true);
    //     if (onAllRef[0].current) {
    //       (onAllRef[0].current as HTMLInputElement).checked = true;
    //     }

    //     onAllChecked[1](true);
    //     if (onAllRef[1].current) {
    //       (onAllRef[1].current as HTMLInputElement).checked = true;
    //     }

    //     onAllChecked[2](true);
    //     if (onAllRef[2].current) {
    //       (onAllRef[2].current as HTMLInputElement).checked = true;
    //     }
    //   }
    //   return;
    // }

    // if (type === "allCheck" && !e.target.checked) {
    //   onChecked(false);
    //   if (onAllChecked && onAllRef) {
    //     onAllChecked[0](false);
    //     if (onAllRef[0].current) {
    //       (onAllRef[0].current as HTMLInputElement).checked = false;
    //     }

    //     onAllChecked[1](false);
    //     if (onAllRef[1].current) {
    //       (onAllRef[1].current as HTMLInputElement).checked = false;
    //     }

    //     onAllChecked[2](false);
    //     if (onAllRef[2].current) {
    //       (onAllRef[2].current as HTMLInputElement).checked = false;
    //     }
    //   }
    //   return;
    // }

    // if (type === "trigger" && e.target.checked) {
    //   onChecked(true);
    //   return;
    // } else {
    //   onChecked(false);
    //   return;
    // }
  };

  return (
    <S.CheckContainer>
      <S.CheckBox id={id} onChange={checkHandler} $type={type} ref={checkRef} />
      <S.Label
        htmlFor={id}
        $isChecked={isChecked}
        $fontSize={fontSize as TypoKeys}
        $color={color as ColorKeys}
      >
        {text}
      </S.Label>
    </S.CheckContainer>
  );
};

export default CheckBoxSection;
