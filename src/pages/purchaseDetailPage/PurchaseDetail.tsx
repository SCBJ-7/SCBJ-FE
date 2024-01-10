import { useQuery } from "@tanstack/react-query";
import { fetchPurchaseDetail } from "../../apis/fetchPurchaseDetail";
import { IPurchaseData } from "@/types/purchaseDetail";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./PurchaseDetail.style";
import { PATH } from "@/constants/path";

const PurchaseDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();
  const indexFee = 5000;
  const { data, isLoading } = useQuery<IPurchaseData>({
    queryKey: ["roomDetail", id],
    queryFn: () => fetchPurchaseDetail("102"),
  });

  if (isLoading) {
    return <p>로딩 중...</p>;
  }
  if (!data) {
    return <p>데이터를 찾을 수 없습니다.</p>;
  }
  return (
    <S.DetailContainer>
      <S.TopSection>
        <S.TopSectionTitle>
          <S.TopSectionPurchaseDate>
            {data.paymentHistoryDate}
          </S.TopSectionPurchaseDate>
          <S.TopSectionReserveNumber>
            예약번호 {data.paymentHistoryId}
          </S.TopSectionReserveNumber>
        </S.TopSectionTitle>
      </S.TopSection>
      <S.MainSection>
        <S.ItemInfo>
          <S.ItemInfoContent>
            <div>상품 및 이용정보</div>
            <div style={{ color: data.remainingDays >= 0 ? "" : "#151515" }}>
              {data.remainingDays >= 0 ? "이용예정" : "이용완료"}
            </div>
            {data.remainingDays >= 0 && (
              <div>
                {data.remainingDays > 0
                  ? `체크인까지 ${data.remainingDays}일 남았어요!`
                  : data.remainingDays === 0
                    ? "오늘이 체크인이에요!"
                    : ""}
              </div>
            )}
            <S.ImageContainer>
              <S.Image src={data.hotelImage} />
              <S.ImageContent>
                <div>{data.hotelName}</div>
                <div>{data.roomName}</div>
                <div>
                  기준 {data.standardPeople}인 / 최대 {data.maxPeople}인
                </div>
              </S.ImageContent>
            </S.ImageContainer>
            <S.DateContainer>
              <S.CheckInDate>
                <div>체크인</div>
                <div>{data.checkIn}</div>
              </S.CheckInDate>
              <S.CheckOutDate>
                <div>체크아웃</div>
                <div>{data.checkOut}</div>
              </S.CheckOutDate>
            </S.DateContainer>
          </S.ItemInfoContent>
        </S.ItemInfo>
        <S.UserInfoContainer>
          <S.StandardTitle>이용자 정보</S.StandardTitle>
          <S.StandardFlex>
            <S.StandardSubTitle>이름</S.StandardSubTitle>
            <S.StandardInfo>{data.reservationName}</S.StandardInfo>
          </S.StandardFlex>
          <S.StandardFlex>
            <S.StandardSubTitle>휴대폰 번호</S.StandardSubTitle>
            <S.StandardInfo>{data.customerPhoneNumber}</S.StandardInfo>
          </S.StandardFlex>
        </S.UserInfoContainer>
        <S.ReservationInfoContainer>
          <S.StandardTitle>예약정보</S.StandardTitle>
          <S.StandardFlex>
            <S.StandardSubTitle>예약 번호</S.StandardSubTitle>
            <S.StandardInfo>{data.paymentHistoryId}</S.StandardInfo>
          </S.StandardFlex>
          <S.StandardFlex>
            <S.StandardSubTitle>예약 상품</S.StandardSubTitle>
            <S.StandardInfo>{data.hotelName}</S.StandardInfo>
          </S.StandardFlex>
          <S.StandardFlex>
            <S.StandardSubTitle>결제 수단</S.StandardSubTitle>
            <S.StandardInfo>{data.paymentType}</S.StandardInfo>
          </S.StandardFlex>
        </S.ReservationInfoContainer>
        <S.PayContainer>
          <S.PayInfo>
            <S.StandardTitle>결제 금액</S.StandardTitle>
            <S.StandardFlex>
              <S.StandardSubTitle>정가</S.StandardSubTitle>
              <S.StandardInfo>
                {data.originalPrice.toLocaleString()}원
              </S.StandardInfo>
            </S.StandardFlex>
            <S.StandardFlex>
              <S.StandardSubTitle>구매가</S.StandardSubTitle>
              <S.StandardInfo>{data.price.toLocaleString()}원</S.StandardInfo>
            </S.StandardFlex>
            <S.StandardFlex>
              <S.StandardSubTitle>중개 수수료</S.StandardSubTitle>
              <S.StandardInfo>{indexFee.toLocaleString()}원</S.StandardInfo>
            </S.StandardFlex>
            <S.Hr />
          </S.PayInfo>
          <S.StandardFlex>
            <S.TotalPrice>총 결제 금액</S.TotalPrice>
            <S.TotalPriceInfo>
              {(data.price - indexFee).toLocaleString()}원
            </S.TotalPriceInfo>
          </S.StandardFlex>
        </S.PayContainer>
      </S.MainSection>
      <S.HomeButton onClick={() => navigate(PATH.ROOT)}>
        홈으로 가기
      </S.HomeButton>
    </S.DetailContainer>
  );
};

export default PurchaseDetail;
