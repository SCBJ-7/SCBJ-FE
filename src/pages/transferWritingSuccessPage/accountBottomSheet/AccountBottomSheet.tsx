import * as S from "./AccountBottomSheet.style";

interface BottomSheetProps {
  content: string;
  onSetContent: React.Dispatch<
    React.SetStateAction<"default" | "agreememt" | "firstlyNoAccount">
  >;
}

const AccountBottomSheet = ({ content, onSetContent }: BottomSheetProps) => {
  if (content === "default") {
    return <></>;
  } else {
    return (
      <S.Dim onClick={() => onSetContent("default")}>
        <S.Container>
          {content === "firstlyNoAccount" && (
            <>
              <S.Header>지금 입력한 계좌를 기본 계좌로 등록할까요?</S.Header>
              {/* <S.Buttons></S.Buttons> */}
            </>
          )}
          {content === "agreement" && (
            <>
              <S.Header>
                등록한 계좌 정보를 저장하면 편하게 게시물을 판매할 수 있어요!
              </S.Header>
              <S.Body></S.Body>
              {/* <S.Buttons></S.Buttons> */}
            </>
          )}
        </S.Container>
      </S.Dim>
    );
  }
};

export default AccountBottomSheet;
