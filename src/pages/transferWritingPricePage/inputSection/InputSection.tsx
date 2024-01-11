import * as S from "./InputSection.style";

interface InputProps {
  inputData: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  inputPosition: "left" | "center" | "right";
  text: [string, string] | [string];
  placeHolder: string;
  purchasePrice: number;
}

const InputSection = ({
  inputPosition,
  text,
  onChange,
  placeHolder,
  inputData,
  purchasePrice,
}: InputProps) => {
  const inputHandler = (e: React.ChangeEvent) => {
    const target = e.target as HTMLInputElement;
    if (isNaN(Number(target.value))) return;

    purchasePrice;

    onChange(target.value);
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
