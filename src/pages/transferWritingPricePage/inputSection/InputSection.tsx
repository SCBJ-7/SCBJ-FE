import * as S from "./InputSection.style";

interface InputProps {
  inputData: string;
  onDataChange: React.Dispatch<React.SetStateAction<string>>;
  inputPosition: "left" | "center" | "right";
  text: [string, string] | [string];
  placeHolder: string;
  maxPrice?: number;
  remainingTimes?: number;
}

const InputSection = ({
  inputPosition,
  text,
  onDataChange,
  placeHolder,
  inputData,
  maxPrice,
  remainingTimes,
}: InputProps) => {
  const inputHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;

    // 입력값이 숫자가 아니면 입력 불가
    if (isNaN(Number(target.value))) return;

    // 구매가 데이터가 있다면 구매가 이상으로 못 올리게 설정
    if (maxPrice && Number(target.value) > maxPrice) {
      onDataChange(maxPrice.toString());
      return;
    }

    // 남은 시간 데이터가 있다면 남은 시간보다 이전 시간을 설정 못하게 설정
    if (remainingTimes && Number(target.value) > remainingTimes) {
      onDataChange((remainingTimes - 1).toString());
      return;
    }

    onDataChange(target.value);
  };

  return (
    <S.InputDiv>
      {inputPosition === "right" && <p>{text[0]}</p>}
      {inputPosition === "center" && <p>{text[0]}</p>}
      <S.Input
        placeholder={placeHolder}
        onChange={inputHandler}
        value={inputData}
      />
      {inputPosition === "left" && <p>{text[0]}</p>}
      {inputPosition === "center" && <p>{text[1]}</p>}
    </S.InputDiv>
  );
};
export default InputSection;
