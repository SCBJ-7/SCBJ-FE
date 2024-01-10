import { useQuery } from "@tanstack/react-query";
import { fetchPurchaseDetail } from "../../apis/fetchPurchaseDetail";
import { IPurchaseData } from "@/types/purchaseDetail";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as S from "./PurchaseDetail.style";
import { format, parseISO } from "date-fns";
import { ko } from "date-fns/locale";
import { PATH } from "@/constants/path";

const PurchaseDetail = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useNavigate();
  const { data, isLoading } = useQuery<IPurchaseData>({
    queryKey: ["roomDetail", id],
    queryFn: () => fetchPurchaseDetail(),
  });
  if (isLoading) {
    return <p>로딩 중...</p>;
  }
  const formatDateAndTime = (originalDate: string) => {
    const parsedDate = parseISO(originalDate);

    const dayOfWeek = format(parsedDate, "E", { locale: ko });

    const formattedDate =
      format(parsedDate, "yy.MM.dd (") +
      dayOfWeek +
      format(parsedDate, ") HH:mm", { locale: ko });

    return formattedDate;
  };
  const formatPhoneNumber = (originalNumber: string) => {
    const formattedNumber = `010-${originalNumber.slice(
      3,
      7,
    )}-${originalNumber.slice(7)}`;

    return formattedNumber;
  };
  return (
    <S.DetailContainer>
      <S.TopSection>
        <S.TopSectionTitle>
          <S.TopSectionPurchaseDate>
            {format(data.purchaseDate, "yyyy. MM. dd (ccc)", {
              locale: ko,
            })}
          </S.TopSectionPurchaseDate>
          <S.TopSectionReserveNumber>
            예약번호 {data.reservationNumber}
          </S.TopSectionReserveNumber>
        </S.TopSectionTitle>
      </S.TopSection>
      <S.MainSection>
        <S.ItemInfo>
          <S.ItemInfoContent>
            <div>상품 및 이용정보</div>
            <div style={{ color: data.remainDate > 0 ? "" : "black" }}>
              {data.remainDate > 0 ? "이용예정" : "이용완료"}
            </div>
            {data.remainDate >= 0 && (
              <div>
                {data.remainDate > 0
                  ? `체크인까지 ${data.remainDate}일 남았어요!`
                  : data.remainDate === 0
                    ? "오늘이 체크인이에요 !"
                    : ""}
              </div>
            )}
            <S.ImageContainer>
              <S.Image src={data.hotelImage} />
              <S.ImageContent>
                <div>{data.hotelName}</div>
                <div>{data.hotelType}</div>
                <div>
                  기준 {data.standardNumber}인 / 최대 {data.maxNumber}인
                </div>
              </S.ImageContent>
            </S.ImageContainer>
            <S.DateContainer>
              <S.CheckInDate>
                <div>체크인</div>
                <div>{formatDateAndTime(data.checkInDate)}</div>
              </S.CheckInDate>
              <S.CheckOutDate>
                <div>체크아웃</div>
                <div>{formatDateAndTime(data.checkOutDate)}</div>
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
            <S.StandardInfo>
              {formatPhoneNumber(data.userPhoneNumber)}
            </S.StandardInfo>
          </S.StandardFlex>
        </S.UserInfoContainer>
        <S.ReservationInfoContainer>
          <S.StandardTitle>예약정보</S.StandardTitle>
          <S.StandardFlex>
            <S.StandardSubTitle>예약 번호</S.StandardSubTitle>
            <S.StandardInfo>{data.reservationNumber}</S.StandardInfo>
          </S.StandardFlex>
          <S.StandardFlex>
            <S.StandardSubTitle>예약 상품</S.StandardSubTitle>
            <S.StandardInfo>{data.hotelName}</S.StandardInfo>
          </S.StandardFlex>
          <S.StandardFlex>
            <S.StandardSubTitle>결제 수단</S.StandardSubTitle>
            <S.StandardInfo>{data.payment}</S.StandardInfo>
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
              <S.StandardInfo>
                {data.purchasePrice.toLocaleString()}원
              </S.StandardInfo>
            </S.StandardFlex>
            <S.StandardFlex>
              <S.StandardSubTitle>중개 수수료</S.StandardSubTitle>
              <S.StandardInfo>{data.fee.toLocaleString()}원</S.StandardInfo>
            </S.StandardFlex>
            <S.Hr />
          </S.PayInfo>
          <S.StandardFlex>
            <S.TotalPrice>총 결제 금액</S.TotalPrice>
            <S.TotalPriceInfo>
              {(data.purchasePrice - data.fee).toLocaleString()}원
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
