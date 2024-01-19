import * as S from "./PaymentInfoSection.style";
import { formatDate } from "@utils/dateFormatter";
import type { PaymentData } from "@type/payment";

interface PaymentInfoSectionProps {
  payment: PaymentData;
}

const PaymentInfoSection = ({ payment }: PaymentInfoSectionProps) => {
  const checkInDate = formatDate(payment.checkInDateTime);
  const checkOutDate = formatDate(payment.checkOutDateTime);

  return (
    <S.HStack>
      <S.Row>
        <S.ThumbnailWrapper>
          <S.Thumbnail
            src={payment.hotelImage}
            alt={payment.hotelName + "썸네일"}
          />
        </S.ThumbnailWrapper>
        <S.TitleWrapper>
          <S.Text variant="body2">{payment.hotelName}</S.Text>
          <S.Text variant="body4">{payment.roomName}</S.Text>
          <S.Text variant="body4">
            기준 {payment.standardPeople}인 / 최대 {payment.maxPeople}인
          </S.Text>
        </S.TitleWrapper>
      </S.Row>
      <S.VStack3>
        <S.LeftBox>
          <S.Text variant="body3" color="greyScale1">
            체크인
          </S.Text>
          <S.Text variant="body3">{checkInDate}</S.Text>
        </S.LeftBox>
        <S.RightBox>
          <S.Text variant="body3" color="greyScale1">
            체크아웃
          </S.Text>
          <S.Text variant="body3">{checkOutDate}</S.Text>
        </S.RightBox>
      </S.VStack3>
      <S.HStack>
        <S.Text variant="body2">결제 금액</S.Text>
        <S.ItemWrapper>
          <S.Text variant="body4" color="greyScale2">
            정가
          </S.Text>
          <S.Text variant="body4" color="black">
            {payment.originalPrice.toLocaleString("ko-KR")}원
          </S.Text>
        </S.ItemWrapper>
        <S.ItemWrapper>
          <S.Text variant="body4" color="greyScale2">
            판매가
          </S.Text>
          <S.Row>
            <S.Text variant="body4" color="black">
              {payment.salePrice.toLocaleString("ko-KR")}원
            </S.Text>
          </S.Row>
        </S.ItemWrapper>
        <S.Hr />
      </S.HStack>
      <S.ItemWrapper>
        <S.Text variant="body2">총 결제 금액</S.Text>
        <S.Text variant="body2" color="percentOrange">
          {payment.salePrice.toLocaleString("ko-KR")}원
        </S.Text>
      </S.ItemWrapper>
    </S.HStack>
  );
};

export default PaymentInfoSection;
