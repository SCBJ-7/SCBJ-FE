import * as S from "@pages/paymentSuccessPage/PaymentSuccess.style";
import type { IPurchaseData } from "@type/purchaseDetail";
import { formatDateString } from "@utils/dateFormatter";

interface PaymentSuccessInfoProps {
  info: IPurchaseData;
}

const PaymentSuccessInfo = ({ info }: PaymentSuccessInfoProps) => {
  // FIXME: 공통 컴포넌트화 필요
  return (
    <>
      <S.Row>
        <S.ThumbnailWrapper>
          <S.Thumbnail src={info.hotelImage} alt={info.hotelName + "썸네일"} />
        </S.ThumbnailWrapper>
        <S.TitleWrapper>
          <S.Text variant="body2">{info.hotelName}</S.Text>
          <S.Text variant="body4">{info.roomName}</S.Text>
          <S.Text variant="body4">
            기준 {info.standardPeople}인 / 최대 {info.maxPeople}인
          </S.Text>
        </S.TitleWrapper>
      </S.Row>
      <S.VStack3>
        <S.LeftBox>
          <S.Text variant="body3" color="greyScale1">
            체크인
          </S.Text>
          <S.Text variant="body3">{formatDateString(info.checkIn)}</S.Text>
        </S.LeftBox>
        <S.RightBox>
          <S.Text variant="body3" color="greyScale1">
            체크아웃
          </S.Text>
          <S.Text variant="body3">{formatDateString(info.checkOut)}</S.Text>
        </S.RightBox>
      </S.VStack3>
    </>
  );
};

export default PaymentSuccessInfo;
