import * as S from "./Payment.style";
import PaymentInfoSection from "@/pages/paymentPage/components/paymentInfoSection/PaymentInfoSection";
import PaymentMethodSection from "@/pages/paymentPage/components/paymentMethodSection/PaymentMethodSection";
import TermsAgreementSection from "@/pages/paymentPage/components/termsAgreementSection/TermsAgreementSection";
import UserInfoSection from "@/pages/paymentPage/components/userInfoSection/UserInfoSection";
import { usePaymentQuery } from "@hooks/api/query/usePaymentQuery";
import { useSearchParams } from "react-router-dom";
import PaymentButton from "./components/paymentButton/PaymentButton";

import { FormProvider, useForm } from "react-hook-form";
import Caption from "@components/caption/Caption";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const product = searchParams.get("product") ?? "";

  const { data } = usePaymentQuery(product);

  const methods = useForm({
    mode: "onChange",
    shouldUnregister: false,
  });

  return (
    <S.PaymentContainer>
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
          <PaymentButton productId={product} payment={data} />
        </S.BottomWrapper>
      </FormProvider>
    </S.PaymentContainer>
  );
};

export default Payment;
