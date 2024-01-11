import * as S from "./PaymentSection.style";

const PaymentSection = () => {
  return (
    <S.Container>
      <S.Contents>
        <h1>예상 정산금액</h1>
        <section>
          <h3>상품 판매가</h3>
          <span>160,000원</span>
        </section>
        <section>
          <h3>중개 수수료</h3>
          <span>5,000원</span>
        </section>
        <S.Hr />
      </S.Contents>
      <S.Result>
        <section>
          <h2>정산 총액</h2>
          <span>155,000원</span>
        </section>
        <h6>정산 총액은 양도 판매가에 중개 수수료를 제외한 값입니다.</h6>
      </S.Result>
    </S.Container>
  );
};

export default PaymentSection;
