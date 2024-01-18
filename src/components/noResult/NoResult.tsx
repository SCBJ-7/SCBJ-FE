import { useNavigate } from "react-router-dom";
import * as S from "./NoResult.style";

interface NoResultProps {
  width?: string;
  height?: string;
  title: string;
  desc: string;
  buttonDesc: string;
  navigateTo: string;
}

const NoResult = ({
  width = "100%",
  height = "100%",
  title,
  desc,
  buttonDesc,
  navigateTo,
}: NoResultProps) => {
  const navigate = useNavigate();
  return (
    <S.Container $width={width} $height={height}>
      <S.TitleSection>
        <h4>{title}</h4>
        <h5>{desc}</h5>
      </S.TitleSection>
      <button onClick={() => navigate(navigateTo)}>{buttonDesc}</button>
    </S.Container>
  );
};

export default NoResult;
