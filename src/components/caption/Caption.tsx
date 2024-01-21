import React from "react";
import * as S from "./Cation.style";

interface CaptionProps {
  text: string;
  children?: React.ReactNode;
}

const Caption = ({ text, children }: CaptionProps) => {
  return (
    <S.CaptionContainer>
      <S.CaptionWrapper>
        <S.WarningIcon />
        <S.Text variant="caption3" color="cautionRed">
          {text}
        </S.Text>
      </S.CaptionWrapper>
      {React.Children.map(children, (child) => (
        <S.Text variant="caption3" color="greyScale3">
          {child}
        </S.Text>
      ))}
    </S.CaptionContainer>
  );
};

export default Caption;
