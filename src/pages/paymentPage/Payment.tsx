import * as S from "./Payment.style";
import PaymentInfoSection from "@/pages/paymentPage/components/paymentInfoSection/PaymentInfoSection";
import PaymentMethodSection from "@/pages/paymentPage/components/paymentMethodSection/PaymentMethodSection";
import TermsAgreementSection from "@/pages/paymentPage/components/termsAgreementSection/TermsAgreementSection";
import UserInfoSection from "@/pages/paymentPage/components/userInfoSection/UserInfoSection";
import { usePaymentQuery } from "@hooks/api/query/usePaymentQuery";
import { useSearchParams } from "react-router-dom";
import PaymentButton from "./components/paymentButton/PaymentButton";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const product = searchParams.get("product") ?? "";

  const { data } = usePaymentQuery(product);

  // TODO: 유저정보 전역으로 관리할 건지?..

  return (
    <S.PaymentContainer>
      <S.Section>
        <PaymentInfoSection payment={data} />
      </S.Section>
      <S.Section>
        <UserInfoSection />
      </S.Section>
      <S.Section>
        <PaymentMethodSection />
      </S.Section>
      <S.Section>
        <TermsAgreementSection />
      </S.Section>
      {/* Alert Message 컴포넌트 */}
      <S.BottomWrapper>
        <PaymentButton payment={data} />
      </S.BottomWrapper>
    </S.PaymentContainer>
  );
};

export default Payment;
