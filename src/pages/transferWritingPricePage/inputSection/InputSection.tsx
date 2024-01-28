import priceFormat from "@/utils/priceFormat";
import useToastConfig from "@hooks/common/useToastConfig";

import * as S from "./InputSection.style";

interface InputProps {
  inputPosition: "left" | "center" | "right";
  inputRef?: React.MutableRefObject<null>;
  inputData: string;
  onDataChange: React.Dispatch<React.SetStateAction<string>>;
  text: [string, string] | [string];
  placeHolder: string;
  maxPrice?: number;
  remainingTimes?: number;
  type?: "time" | "price";
}

const InputSection = ({
  inputPosition,
  inputRef,
  text,
  onDataChange,
  placeHolder,
  inputData,
  maxPrice,
  remainingTimes,
  type = "price",
}: InputProps) => {
  const { handleToast } = useToastConfig();
  const inputDataHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    // 쉼표 제거
    const temp = target.value.split(",").join("");

    if (temp === "") {
      onDataChange("");
      return;
    }

    // 입력값이 숫자가 아니면 입력 불가
    if (isNaN(Number(temp))) return;

    // 구매가 이상으로 못 올리게 설정
    if (maxPrice && Number(temp) > maxPrice) {
      onDataChange(priceFormat(maxPrice));
      handleToast(true, [<>가격을 이전 단계의 가격보다 낮게 설정해주세요</>]);

      return;
    }

    // 남은 시간보다 더 전의 시간을 설정 못하게 설정
    if (remainingTimes && Number(temp) > remainingTimes) {
      onDataChange((remainingTimes - 1).toString());
      return;
    }

    onDataChange(priceFormat(temp));
  };

  const inputBlurHandler = (e: React.FocusEvent) => {
    const inputEl = e.target as HTMLInputElement;
    if (type === "time") {
      const temp = inputEl.value;
      if (Number(temp) <= 3) {
        onDataChange("4");
        handleToast(true, [
          <>체크인 3시간 전까지만 2차 가격 설정이 가능해요</>,
        ]);
        return;
      }
      return;
    }

    if (type === "price") {
      const temp = inputEl.value.split(",").join("");
      const beforeTwoDigits = temp.slice(0, temp.length - 2);
      const lastTwoDigits = temp.slice(-2);

      if (Number(temp) < 100) {
        handleToast(true, [<>가격은 백원 단위로 입력가능합니다</>]);
        onDataChange("");
        return;
      }

      // 백원 이하 단위로
      if (lastTwoDigits !== "00") {
        onDataChange(priceFormat(beforeTwoDigits + "00"));
        handleToast(true, [<>가격은 백원 단위로 입력가능합니다</>]);
        return;
      }
    }
  };

  return (
    <S.InputDiv className="children">
      {inputPosition === "right" && <p>{text[0]}</p>}
      {inputPosition === "center" && <p>{text[0]}</p>}
      <S.Input
        ref={inputRef}
        placeholder={placeHolder}
        onChange={inputDataHandler}
        onBlur={inputBlurHandler}
        value={inputData}
      />
      {inputPosition === "left" && <p>{text[0]}</p>}
      {inputPosition === "center" && <p>{text[1]}</p>}
    </S.InputDiv>
  );
};
export default InputSection;
