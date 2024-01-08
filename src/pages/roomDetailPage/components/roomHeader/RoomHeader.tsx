import useIsVisible from "@hooks/useIsVisible";
import * as S from "./RoomHeader.style";

interface RoomHeaderProps {
  title: string;
}

const RoomHeader = ({ title }: RoomHeaderProps) => {
  const [setRef, isVisible] = useIsVisible({
    options: {
      rootMargin: "0px",
      threshold: 1.0,
    },
    initialVisible: false,
  });

  return (
    <>
      <S.HeaderContainer $visible={isVisible}>
        <S.Wrapper>
          <div className="wrap-left">
            <button className="btn-back">
              <S.BackIcon $visible={isVisible} />
            </button>
          </div>
          <S.Title $visible={isVisible}>{title}</S.Title>
        </S.Wrapper>
      </S.HeaderContainer>
      <S.ScrollObserver ref={setRef} />
    </>
  );
};

export default RoomHeader;
