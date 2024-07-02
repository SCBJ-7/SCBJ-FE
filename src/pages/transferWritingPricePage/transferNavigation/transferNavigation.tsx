import * as S from "./transferNavigation.style";
import { PhaseType } from "../TransferWritingPrice";

interface TransferNavProps {
  phase: PhaseType;
  onSubmit: () => void;
  onAddHistory: (phase: PhaseType) => void;
}

const TransferNavigation = ({
  phase,
  onSubmit,
  onAddHistory,
}: TransferNavProps) => {
  return (
    <S.Container>
      <S.Div>
        {phase === "1stInput" && (
          <>
            <S.SecondaryButton //
              onClick={() => onAddHistory("2ndInput")}
            >
              2차 가격 설정
            </S.SecondaryButton>
            <S.PrimaryButton //
              onClick={() => onAddHistory("finalConfirm")}
            >
              정산받을 계좌 확인
            </S.PrimaryButton>
          </>
        )}
        {phase === "2ndInput" && (
          <>
            <S.PrimaryButton //
              onClick={() => onAddHistory("finalConfirm")}
            >
              정산받을 계좌 확인
            </S.PrimaryButton>
          </>
        )}
        {phase === "finalConfirm" && (
          <>
            <S.PrimaryButton //
              onClick={onSubmit}
            >
              판매 게시글 올리기
            </S.PrimaryButton>
          </>
        )}
      </S.Div>
    </S.Container>
  );
};

export default TransferNavigation;
