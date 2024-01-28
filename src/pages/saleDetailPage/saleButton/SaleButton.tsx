import { cancelSale } from "@apis/cancelSale";
import { PATH } from "@constants/path";
import useToastConfig from "@hooks/common/useToastConfig";
import * as PaymentStyle from "@pages/paymentSuccessPage/PaymentSuccess.style";
import { useMutation } from "@tanstack/react-query";
import { isAxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./SaleButton.style";


const SaleButton = ({
  saleId,
  saleStatus,
}: {
  saleId: string;
  saleStatus: string;
}) => {
  const navigate = useNavigate();
  const [showCancelModal, setShowCancelModal] = useState<boolean>(false);
  const { handleToast } = useToastConfig();

  const cancelConfirmHandler = useMutation({
    mutationFn: () => cancelSale(saleId),
    onSuccess: (res) => {
      setShowCancelModal(false);
      console.log(res);
      navigate(PATH.SALE_LIST, {
        replace: true,
      });
    },
    onError: (error) => {
      if (!isAxiosError(error)) {
        setShowCancelModal(false);
        throw error;
      }
      if (error.response && error.response.status === 404) {
        setShowCancelModal(false);
        handleToast(true, [<>상품 정보를 찾을 수 없습니다.</>]);
      }
    },
    throwOnError: true,
  });

  if (saleStatus !== "판매중")
    return (
      <PaymentStyle.ButtonWrapper>
        <PaymentStyle.Button
          type="button"
          variant="solid"
          aria-label="홈으로 가기"
          onClick={() => navigate(PATH.ROOT)}
        >
          홈으로 가기
        </PaymentStyle.Button>
      </PaymentStyle.ButtonWrapper>
    );

  return (
    <>
      {showCancelModal && (
        <S.DimmedBackground>
          <S.LogoutModal>
            <S.ModalText>
              <h2>판매를 취소할까요?</h2>
              <span>
                판매를 취소하시면 판매내역을 조회하거나 복구할 수 없어요.
              </span>
            </S.ModalText>
            <S.ModalButtonWrapper>
              <S.ConfirmButton onClick={() => cancelConfirmHandler.mutate()}>
                취소하기
              </S.ConfirmButton>
              <S.CancelButton onClick={() => setShowCancelModal(false)}>
                유지하기
              </S.CancelButton>
            </S.ModalButtonWrapper>
          </S.LogoutModal>
        </S.DimmedBackground>
      )}
      <PaymentStyle.ButtonWrapper>
        <PaymentStyle.Button
          type="button"
          variant="outline"
          aria-label="판매 취소하기"
          onClick={() => setShowCancelModal(true)}
        >
          판매 취소하기
        </PaymentStyle.Button>
        <PaymentStyle.Button
          type="button"
          variant="solid"
          aria-label="홈으로 가기"
          onClick={() => navigate(PATH.ROOT)}
        >
          홈으로 가기
        </PaymentStyle.Button>
      </PaymentStyle.ButtonWrapper>
    </>
  );
};

export default SaleButton;
