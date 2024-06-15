import { useNavigate } from "react-router-dom";

import * as S from "./NoResult.style";

import Blank from "@/components/lottie/blank/Blank";

interface NoResultProps {
  title: string;
  desc: string | React.ReactNode;
  buttonDesc?: string;
  navigateTo?: string;
}

const NoResult = ({ title, desc, buttonDesc, navigateTo }: NoResultProps) => {
  const navigate = useNavigate();

  return (
    <S.Container>
      <S.MainWrapper>
        <S.LogoWrapper>
          <Blank />
        </S.LogoWrapper>
        <S.TitleWrapper>
          <S.Title>{title}</S.Title>
          <S.SubTitle>{desc}</S.SubTitle>
        </S.TitleWrapper>
      </S.MainWrapper>
      <S.BottomWrapper>
        {buttonDesc && navigateTo && (
          <S.Button
            type="button"
            variant="solid"
            onClick={() => navigate(navigateTo)}
          >
            {buttonDesc}
          </S.Button>
        )}
      </S.BottomWrapper>
    </S.Container>
  );
};

export default NoResult;
