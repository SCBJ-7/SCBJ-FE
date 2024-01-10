import { ColorKeys, TypoKeys } from "@styles/theme";
import * as S from "./CheckBoxSection.style";

interface CheckProps {
  text: string;
  id: string;
  isChecked: boolean;
  onChecked: React.Dispatch<React.SetStateAction<boolean>>;
  fontSize: string;
  color: string;
}

const CheckBoxSection = ({
  text,
  id,
  isChecked,
  onChecked,
  fontSize,
  color,
}: CheckProps) => {
  const checkHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      onChecked(true);
    } else {
      onChecked(false);
    }
  };

  return (
    <S.CheckContainer>
      <S.CheckBox id={id} onChange={checkHandler} />
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
