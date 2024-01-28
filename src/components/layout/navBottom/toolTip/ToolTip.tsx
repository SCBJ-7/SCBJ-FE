import { ReactNode } from "react";

import * as S from "./ToolTip.style";

interface ToolTipProps {
  children: ReactNode;
  onClickClose: React.Dispatch<React.SetStateAction<boolean>>;
}

const ToolTip = ({ children, onClickClose }: ToolTipProps) => {
  return (
    <S.Container>
      <S.Tail />
      <S.Wrapper>
        <S.TextArea>{children}</S.TextArea>
        <S.CloseButton onClick={() => onClickClose(false)} />
      </S.Wrapper>
    </S.Container>
  );
};

export default ToolTip;
