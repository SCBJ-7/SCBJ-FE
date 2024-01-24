import { useParams } from "react-router-dom";
import * as S from "./SaleDetail.style";
// import { useSaleDetailQuery } from "@hooks/api/query/useSaleDetailQuery";
import Card from "@components/card/Card";
import CardItem from "@components/cardItem/CardItem";
import { fetchSaleDetail } from "@apis/fetchSaleDetail";
import { useEffect, useState } from "react";
import { ISaleData } from "@type/saleDetail";
import SaleInfo from "./saleInfo/SaleInfo";
import SaleButton from "./saleButton/SaleButton";
import { calculateFee } from "@utils/calculator";
import { CaptionWrapper } from "@pages/paymentPage/Payment.style";
import Caption from "@components/caption/Caption";

const SaleDetail = () => {
  const { saleId } = useParams();
  if (!saleId) throw new Error("존재하지 않는 saleId 입니다.");

  // FIXME as below (백엔드 수정 후)
  // const { data } = useSaleDetailQuery(saleId);

  // 아래 부분 대신 위로 수정
  const [data, setData] = useState<ISaleData>();
  const fetch = async () => {
    const res = await fetchSaleDetail();
    setData(res);
  };
  useEffect(() => {
    fetch();
  }, []);
  //

  const StatusText = () => {
    if (!data) return;

    if (data.saleStatus === "판매중")
      return <span>판매종료까지 {data.leftHour}시간 남았어요!</span>;
    if (data.saleStatus === "판매만료")
      return <span>체크인 시간이 지나 판매 종료된 상품입니다</span>;
    if (data.saleStatus === "정산완료")
      return <span>정산금액이 계좌로 입금 되었습니다</span>;
    if (data.saleStatus === "판매완료")
      return <span>{`${data.checkIn.substring(0, 12)} 입금예정`}</span>;
  };

  const CardByStatus = () => {
    if (!data) return;

    const firstFee =
      calculateFee(data.firstPriceData.firstSalePrice).toLocaleString("ko-KR") +
      "원";
    const firstExpectedPrice =
      (
        data.firstPriceData.firstSalePrice -
        calculateFee(data.firstPriceData.firstSalePrice)
      ).toLocaleString("ko-KR") + "원";

    let secondFee, secondExpectedPrice;

    if (data.secondPriceData) {
      secondFee =
        calculateFee(data.secondPriceData.secondPrice).toLocaleString("ko-KR") +
        "원";
      secondExpectedPrice =
        (
          data.secondPriceData.secondPrice -
          calculateFee(data.secondPriceData.secondPrice)
        ).toLocaleString("ko-KR") + "원";
    }

    if (data.saleStatus === "판매중")
      return (
        <>
          <S.PurchasedWrapper>
            <S.CardWrapper>
              <Card title="1차 판매 정산 정보">
                <CardItem
                  label="야놀자 구매가"
                  content={
                    data.firstPriceData.originalPrice.toLocaleString("ko-KR") +
                    "원"
                  }
                />
                <CardItem
                  label="1차 판매가"
                  content={
                    data.firstPriceData.firstSalePrice.toLocaleString("ko-KR") +
                    "원"
                  }
                />
                <CardItem label="중개 수수료" content={firstFee} />
                <CardItem
                  type="recipe"
                  label="예상 정산 금액"
                  content={firstExpectedPrice}
                />
              </Card>
            </S.CardWrapper>
          </S.PurchasedWrapper>
          {data.secondPriceData && (
            <S.PurchasedWrapper>
              <S.CardWrapper>
                <S.SecondStartDate>
                  {data.secondPriceData.startDate + "부터 2차 판매 시작"}
                </S.SecondStartDate>
                <Card title="2차 판매 정산 정보">
                  <CardItem
                    label="2차 판매가"
                    content={
                      data.secondPriceData.secondPrice.toLocaleString("ko-KR") +
                      "원"
                    }
                  />
                  <CardItem label="중개 수수료" content={secondFee} />
                  <CardItem
                    type="recipe"
                    label="예상 정산 금액"
                    content={secondExpectedPrice}
                  />
                </Card>
              </S.CardWrapper>
            </S.PurchasedWrapper>
          )}
          <S.PurchasedWrapper>
            <S.CardWrapper>
              <Card title="입금 계좌">
                <CardItem label={data.bank} content={data.accountNumber} />
              </Card>
            </S.CardWrapper>
          </S.PurchasedWrapper>
        </>
      );

    if (data.saleStatus === "판매완료" || data.saleStatus === "정산완료")
      return (
        <>
          <S.PurchasedWrapper>
            <S.CardWrapper>
              <Card title="판매 정보">
                <CardItem
                  label="야놀자 구매가"
                  content={
                    data.firstPriceData.originalPrice.toLocaleString("ko-KR") +
                    "원"
                  }
                />
                <CardItem
                  label="판매가"
                  content={
                    data.secondPriceData
                      ? data.secondPriceData.secondPrice.toLocaleString(
                          "ko-KR",
                        ) + "원"
                      : data.firstPriceData.firstSalePrice.toLocaleString(
                          "ko-KR",
                        ) + "원"
                  }
                />
                <CardItem
                  label="중개 수수료"
                  content={data.secondPriceData ? secondFee : firstFee}
                />
                <CardItem
                  type="recipe"
                  label="정산 금액"
                  content={
                    data.secondPriceData
                      ? secondExpectedPrice
                      : firstExpectedPrice
                  }
                />
              </Card>
            </S.CardWrapper>
          </S.PurchasedWrapper>
          <S.PurchasedWrapper>
            <S.CardWrapper>
              <Card title="입금 계좌">
                <CardItem label={data.bank} content={data.accountNumber} />
              </Card>
            </S.CardWrapper>
          </S.PurchasedWrapper>
        </>
      );

    if (data.saleStatus === "판매만료")
      return (
        <S.PurchasedWrapper>
          <S.CardWrapper>
            <Card title="판매 정보">
              <CardItem
                label="야놀자 구매가"
                content={
                  data.firstPriceData.originalPrice.toLocaleString("ko-KR") +
                  "원"
                }
              />
              <CardItem
                label="판매가"
                content={
                  data.secondPriceData
                    ? data.secondPriceData.secondPrice.toLocaleString("ko-KR") +
                      "원"
                    : data.firstPriceData.firstSalePrice.toLocaleString(
                        "ko-KR",
                      ) + "원"
                }
              />
            </Card>
          </S.CardWrapper>
        </S.PurchasedWrapper>
      );
  };

  return (
    <>
      {data && (
        <S.PurchasedContainer>
          {(data.saleStatus === "판매완료" ||
            data.saleStatus === "정산완료") && (
            <S.TopSection>
              <S.TopSectionTitle>
                <S.TopSectionPurchaseDate>판매일시</S.TopSectionPurchaseDate>
                <S.TopSectionReserveNumber>
                  {/* FIXME: checkIn 시간이 아닌 판매된 시간으로 변경 (백엔드 수정 후) */}
                  {data.checkIn}
                </S.TopSectionReserveNumber>
              </S.TopSectionTitle>
            </S.TopSection>
          )}
          <S.PurchasedWrapper>
            <S.CardWrapper>
              <Card title="판매상품 정보">
                <S.SaleStatus $saleStatus={data.saleStatus}>
                  <h2>{data.saleStatus}</h2>
                  <StatusText />
                </S.SaleStatus>
                <SaleInfo info={data} />
              </Card>
            </S.CardWrapper>
          </S.PurchasedWrapper>
          <CardByStatus />
          <CaptionWrapper>
            <Caption text="체크인 시간 전까지 판매되지 않은 상품은 퍼센트 호텔 판매내역에서 자동 만료되며 체크아웃 전까지 야놀자에서 정상 이용 가능합니다." />
            <Caption text="정산금액의 등록 계좌 입금은 영업일 기준 최대 3-5일이 소요됩니다. " />
          </CaptionWrapper>
          <S.BottomWrapper>
            <SaleButton saleId={saleId} saleStatus={data.saleStatus} />
          </S.BottomWrapper>
        </S.PurchasedContainer>
      )}
    </>
  );
};

export default SaleDetail;