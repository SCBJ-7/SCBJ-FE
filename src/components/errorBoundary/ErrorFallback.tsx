import getErrorMessage from "@/utils/getErrorMessage";
import Blank from "@components/lottie/blank/Blank";
import { FallbackProps } from "react-error-boundary";
import { useNavigate } from "react-router-dom";

import * as S from "./ErrorFallback.style";

const ErrorFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  const navigate = useNavigate();
  const { title, content, button, nav } = getErrorMessage(error);

  const onClickHandler = () => {
    if (!nav) {
      resetErrorBoundary();
    } else {
      navigate(nav);
    }
  };

  return (
    <S.ErrorContainer>
      <S.MainWrapper>
        <S.LogoWrapper>
          <Blank />
        </S.LogoWrapper>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{content}</S.SubTitle>
        </S.TitleWrapper>
      </S.MainWrapper>
      <S.BottomWrapper>
        <S.Button type="button" variant="solid" onClick={onClickHandler}>
          {button}
        </S.Button>
      </S.BottomWrapper>
    </S.ErrorContainer>
  );
};

export default ErrorFallback;
