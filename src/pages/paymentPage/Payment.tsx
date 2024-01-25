import * as S from "./Payment.style";
import PaymentInfoSection from "@/pages/paymentPage/components/paymentInfoSection/PaymentInfoSection";
import PaymentMethodSection from "@/pages/paymentPage/components/paymentMethodSection/PaymentMethodSection";
import TermsAgreementSection from "@/pages/paymentPage/components/termsAgreementSection/TermsAgreementSection";
import UserInfoSection from "@/pages/paymentPage/components/userInfoSection/UserInfoSection";
import {
  usePaymentQuery,
  usePaymentSuccessQuery,
} from "@hooks/api/query/usePaymentQuery";
import { useNavigate, useParams } from "react-router-dom";
import PaymentButton from "./components/paymentButton/PaymentButton";

import { FormProvider, useForm } from "react-hook-form";
import Caption from "@components/caption/Caption";
import Modal from "@components/modal/Modal";
import { useEffect, useState } from "react";
import { isAxiosError } from "axios";

const Payment = () => {
  const navigate = useNavigate();
  const { productId } = useParams();
  if (!productId) throw Error("존재하지 않는 productId 입니다.");

  console.log(productId);

  const { data } = usePaymentQuery(productId);

  const searchParams = new URLSearchParams(location.search);
  const pgToken = searchParams.get("pg_token");
  const paymentType = "kakaoPaymentService";
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const { isSuccess, isError, error } = usePaymentSuccessQuery({
    paymentType,
    pgToken,
  });

  useEffect(() => {
    if (isSuccess) {
      navigate(`/payment/${productId}/success`);
    }

    if (isError && isAxiosError(error)) {
      console.error(error);
      setErrorMessage(error.response?.data.message || "오류가 발생했습니다.");
      setIsModalOpen(true);
    }
  }, [isSuccess, isError, error, navigate, productId]);

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
          <Caption text="일부 상품의 경우, 결제완료 후 예약 확정까지 최대 1시간이 소요될 수 있습니다.">
            {
              "숙소 사정에 의해 예약 확정 불가 시, 자동 취소처리 및 전액환불 처리됩니다. <예약 확정 대기> 상태에서도 취소요청이 가능하나, 상품별 취소 정책에 따라 취소수수료가 부과되거나 환불이 불가할 수 있습니다."
            }
            {
              "(주)야놀자는 통신판매중개업자로서, 통신판매의 당사자가 아니라는 사실을 고지하며 상품의 결제, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다."
            }
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
