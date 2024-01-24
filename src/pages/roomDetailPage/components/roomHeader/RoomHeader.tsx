import useIsVisible from "@hooks/common/useIsVisible";

import * as S from "./RoomHeader.style";
import { useNavigate } from "react-router-dom";

interface RoomHeaderProps {
  title: string;
}

const RoomHeader = ({ title }: RoomHeaderProps) => {
  const [setRef, isVisible] = useIsVisible({
    options: {
      rootMargin: "0px",
      threshold: 1.0,
    },
    initialVisible: true,
  });

  const navigate = useNavigate();

  return (
    <>
      <S.HeaderContainer $visible={isVisible}>
        <S.Wrapper>
          <div className="wrap-left">
            <button
              type="button"
              className="btn-back"
              aria-label="뒤로가기"
              onClick={() => navigate(-1)}
            >
              <S.BackIcon $visible={isVisible} />
            </button>
          </div>
          <S.TitleWrapper>
            <S.Title $visible={isVisible}>{title}</S.Title>
          </S.TitleWrapper>
        </S.Wrapper>
      </S.HeaderContainer>
      <S.ScrollObserver ref={setRef} />
    </>
  );
};

export default RoomHeader;
