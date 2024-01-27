import { useParams } from "react-router-dom";
import { usePurchaseDetailQuery } from "@/hooks/api/usePurchaseQuery";
import { formatDateString } from "@utils/dateFormatter";

import PaymentSuccessInfo from "@pages/paymentSuccessPage/components/PaymentSuccessInfo/PaymentSuccessInfo";
import PaymentSuccessButton from "@pages/paymentSuccessPage/components/PaymentSuccessButton/PaymentSuccessButton";
import Card from "@components/card/Card";
import CardItem from "@components/cardItem/CardItem";

import * as S from "./PaymentSuccess.style";

const PaymentSuccess = () => {
  const { productId } = useParams();
  if (!productId) throw Error("존재하지 않는 productId 입니다.");

  const { data } = usePurchaseDetailQuery(productId);

  return (
    <S.PurchasedContainer>
      <S.HeaderWrapper>
        <S.TitleText variant="title3">구매 완료되었습니다.</S.TitleText>
        <S.SubtitleText variant="body3" color="greyScale2">
          구매일시 {formatDateString(data.paymentHistoryDate)}
        </S.SubtitleText>
        <S.SubtitleText variant="body3">
          예약번호 {data.paymentHistoryId}
        </S.SubtitleText>
      </S.HeaderWrapper>
      <S.PurchasedWrapper>
        <S.CardWrapper>
          <Card title="상품 정보">
            <PaymentSuccessInfo info={data} />
          </Card>
        </S.CardWrapper>
        <S.CardWrapper>
          <Card title="이용자 정보">
            <CardItem label="이름" content={data.customerName} />
            <CardItem label="휴대폰 번호" content={data.customerPhoneNumber} />
          </Card>
        </S.CardWrapper>
        <S.CardWrapper>
          <Card title="예약 정보">
            <CardItem label="예약번호" content={data.paymentHistoryId} />
            <CardItem label="예약 상품" content={data.hotelName} />
            <CardItem label="결제 수단" content={data.paymentType} />
          </Card>
        </S.CardWrapper>
        <S.BottomCardWrapper>
          <Card title="결제 금액">
            <CardItem
              label="야놀자 정가"
              content={data.originalPrice.toLocaleString("ko-KR") + "원"}
            />
            <CardItem
              label="구매가"
              content={data.price.toLocaleString("ko-KR") + "원"}
            />
            <CardItem
              type="recipe"
              label="총 결제 금액"
              content={data.price.toLocaleString("ko-KR") + "원"}
            />
          </Card>
        </S.BottomCardWrapper>
      </S.PurchasedWrapper>
      <S.BottomWrapper>
        <PaymentSuccessButton productId={productId} />
      </S.BottomWrapper>
    </S.PurchasedContainer>
  );
};

export default PaymentSuccess;
