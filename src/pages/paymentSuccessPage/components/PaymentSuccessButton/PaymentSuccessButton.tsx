import { PATH } from "@constants/path";
import * as S from "@pages/paymentSuccessPage/PaymentSuccess.style";
import { useNavigate } from "react-router-dom";

const PaymentSuccessButton = ({ productId }: { productId: string }) => {
  const navigate = useNavigate();

  console.log(productId);

  // FIXME: 구매완료내역 상세 주소 변경 필요
  return (
    <S.ButtonWrapper>
      <S.Button
        type="button"
        variant="outline"
        aria-label="상세내역 확인"
        onClick={() => navigate(PATH.PURCAHSE_DETAIL + `?id=${productId}`)}
      >
        상세내역 확인
      </S.Button>
      <S.Button
        type="button"
        variant="solid"
        aria-label="홈으로 가기"
        onClick={() => navigate(PATH.ROOT)}
      >
        홈으로 가기
      </S.Button>
    </S.ButtonWrapper>
  );
};

export default PaymentSuccessButton;
