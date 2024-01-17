import priceFormat from "@/utils/priceFormat";
import * as S from "./InputSection.style";
import { useToastStore } from "@/store/store";

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
  const setToastConfig = useToastStore((state) => state.setToastConfig);
  const inputDataHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    // 쉼표 제거
    const temp = target.value.split(",").join("");
    console.log(temp, "temp");

    if (temp === "") {
      onDataChange("");
      return;
    }

    // 입력값이 숫자가 아니면 입력 불가
    if (isNaN(Number(temp))) return;

    // 구매가 이상으로 못 올리게 설정
    if (maxPrice && Number(temp) > maxPrice) {
      const message = [<>가격을 이전 단계의 가격보다 낮게 설정해주세요</>];
      onDataChange(priceFormat(maxPrice));
      setToastConfig({
        isShow: true,
        isError: true,
        strings: message,
      });
      setTimeout(() => {
        setToastConfig({
          isShow: false,
          isError: true,
          strings: message,
        });
      }, 5000);

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
    if (type === "time") return;
    const inputEl = e.target as HTMLInputElement;
    const temp = inputEl.value.split(",").join("");
    const beforeTwoDigits = temp.slice(0, temp.length - 2);
    const lastTwoDigits = temp.slice(-2);

    if (Number(temp) < 100) {
      onDataChange("0");
      return;
    }

    if (lastTwoDigits !== "00") {
      onDataChange(priceFormat(beforeTwoDigits + "00"));
      return;
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
