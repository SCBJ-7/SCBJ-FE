import { FallbackProps } from "react-error-boundary";
import * as S from "./ErrorFallback.style";
import Blank from "@components/lottie/blank/Blank";
import getErrorMessage from "@/utils/getErrorMessage";
import { useNavigate } from "react-router-dom";

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
    <S.Container>
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
    </S.Container>
  );
};

export default ErrorFallback;
