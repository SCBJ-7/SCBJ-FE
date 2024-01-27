import * as S from "./Payment.style";
import PaymentInfoSection from "@/pages/paymentPage/components/paymentInfoSection/PaymentInfoSection";
import PaymentMethodSection from "@/pages/paymentPage/components/paymentMethodSection/PaymentMethodSection";
import TermsAgreementSection from "@/pages/paymentPage/components/termsAgreementSection/TermsAgreementSection";
import UserInfoSection from "@/pages/paymentPage/components/userInfoSection/UserInfoSection";
import {
  usePaymentCancelQuery,
  usePaymentQuery,
  usePaymentSuccessQuery,
} from "@/hooks/api/usePaymentQuery";
import { useNavigate, useParams } from "react-router-dom";
import PaymentButton from "./components/paymentButton/PaymentButton";
import { useLocation } from "react-router-dom";
import { FormProvider, useForm } from "react-hook-form";
import Caption from "@components/caption/Caption";
import Modal from "@components/modal/Modal";
import { useEffect, useState } from "react";
import { isAxiosError } from "axios";
import { paymentCaptions } from "@constants/caption";
import { ERROR_CODE } from "@/constants/api";

interface PaymentProps {
  action: "default" | "cancel" | "ready";
}

const Payment = ({ action }: PaymentProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { productId } = useParams();
  if (!productId) throw Error("존재하지 않는 productId 입니다.");

  const { data } = usePaymentQuery(productId);

  const searchParams = new URLSearchParams(location.search);
  const pgToken = searchParams.get("pg_token");
  const paymentType = "kakaoPaymentService";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const {
    data: successData,
    isSuccess,
    isError,
    error,
    refetch: paymentSuccessQuery,
  } = usePaymentSuccessQuery({
    paymentType,
    pgToken,
  });

  const { refetch: paymentCancelQuery } = usePaymentCancelQuery(paymentType);

  useEffect(() => {
    if (action === "ready") {
      paymentSuccessQuery();

      if (isSuccess) {
        navigate(`/payment/${successData.paymentHistoryId}/success`);
      }

      if (isError && isAxiosError(error)) {
        if (error.response?.status === ERROR_CODE.NULL_STOCK) {
          setErrorMessage("이미 판매완료된 상품입니다.");
        } else {
          setErrorMessage(
            error.response?.data.message || "오류가 발생했습니다.",
          );
        }
        setIsModalOpen(true);
      }
    }

    if (action === "cancel") {
      paymentCancelQuery();
      setErrorMessage("결제가 취소되었습니다.");
      setIsModalOpen(true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [action, error, isError, isSuccess]);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const methods = useForm({
    mode: "onChange",
    shouldUnregister: false,
  });

  return (
    <S.PaymentContainer>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <p>{errorMessage}</p>
        <button onClick={closeModal}>확인</button>
      </Modal>
      <S.Section>
        <PaymentInfoSection payment={data} />
      </S.Section>
      <FormProvider {...methods}>
        <S.Section>
          <UserInfoSection />
        </S.Section>
        <S.Section>
          <PaymentMethodSection />
        </S.Section>
        <S.Section>
          <TermsAgreementSection />
        </S.Section>
        <S.CaptionWrapper>
          <Caption text={paymentCaptions.text1}>
            {paymentCaptions.text2}
            {paymentCaptions.text3}
          </Caption>
        </S.CaptionWrapper>
        <S.BottomWrapper>
          <PaymentButton productId={productId} price={data.salePrice} />
        </S.BottomWrapper>
      </FormProvider>
    </S.PaymentContainer>
  );
};

export default Payment;
