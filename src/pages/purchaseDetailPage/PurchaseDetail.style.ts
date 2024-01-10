import styled from "styled-components";

export const DetailContainer = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.color.greyScale7};
  padding-bottom: 160px;
  color: ${({ theme }) => theme.color.black};
  color: ${({ theme }) => theme.scroll};
`;

export const TopSection = styled.section`
  width: 100%;
  height: 92px;
  background-color: white;
`;
export const TopSectionTitle = styled.div`
  padding: 1.5rem 1rem;
`;
export const TopSectionPurchaseDate = styled.div`
  ${({ theme }) => theme.typo.body3}
  margin-bottom:0.5rem;
`;

export const TopSectionReserveNumber = styled.div`
  ${({ theme }) => theme.typo.body2}
`;

export const MainSection = styled.section`
  padding: 0.5rem;
  width: 100%;
`;

export const ItemInfo = styled.div`
  width: 100%;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.color.greyScale6};
`;

export const ItemInfoContent = styled.div`
  width: 100%;
  padding: 2rem 1rem;
  > div:first-child {
    ${({ theme }) => theme.typo.body2}
    margin-bottom: 2rem;
  }
  > div:nth-child(2) {
    font-size: 1.375rem;
    font-weight: 700;
    color: ${({ theme }) => theme.color.percentOrange};
  }
  > div:nth-child(3) {
    padding-top: 0.5rem;
    color: ${({ theme }) => theme.color.percentOrange};
    ${({ theme }) => theme.typo.body5}
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  color: ${({ theme }) => theme.color.black};
  margin-bottom: 1.2rem;
`;

export const Image = styled.img`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  background-color: #f9f9f9;
  border-radius: 12px;
  object-fit: cover;
  margin-right: 1rem;
  cursor: pointer;
`;

export const ImageContent = styled.div`
  height: 69px;
  flex-direction: column;
  justify-content: center;
  margin: auto 0;
  padding: 5.5px 0;
  color: ${({ theme }) => theme.color.black};

  > div:first-child {
    ${({ theme }) => theme.typo.body2}
    margin-bottom: 0.5rem;
  }
  > div:nth-child(2) {
    ${({ theme }) => theme.typo.body4}
    margin-bottom: 0.5rem;
  }
  > div:nth-child(3) {
    ${({ theme }) => theme.typo.body4}
  }
`;

export const DateContainer = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  justify-content: space-between;
`;

export const CheckInDate = styled.div`
  width: calc(50% - 2px);
  background-color: ${({ theme }) => theme.color.greyScale7};
  height: 100%;
  border-radius: 12px 0 0 12px;
  padding: 1rem;
  > div:first-child {
    color: #404040;
    ${({ theme }) => theme.typo.body3};
    margin-bottom: 0.5rem;
  }
  > div:last-child {
    ${({ theme }) => theme.typo.body3};
  }
`;

export const CheckOutDate = styled.div`
  width: calc(50% - 2px);
  background-color: ${({ theme }) => theme.color.greyScale7};
  height: 100%;
  border-radius: 0 12px 12px 0;
  padding: 1rem;

  > div:first-child {
    color: #404040;
    ${({ theme }) => theme.typo.body3};
    margin-bottom: 0.5rem;
  }
  > div:last-child {
    ${({ theme }) => theme.typo.body3};
  }
`;

export const UserInfoContainer = styled.div`
  height: 133px;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.color.greyScale6};
  > div:first-child {
    margin-bottom: 1.5rem;
  }
  > div:nth-child(2) {
    margin-bottom: 0.5rem;
  }
`;

export const StandardTitle = styled.div`
  ${({ theme }) => theme.typo.body2};
`;

export const StandardFlex = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StandardSubTitle = styled.div`
  color: ${({ theme }) => theme.color.greyScale2};
  ${({ theme }) => theme.typo.body4}
`;

export const StandardInfo = styled.div`
  ${({ theme }) => theme.typo.body4}
`;

export const ReservationInfoContainer = styled.div`
  height: 190px;
  width: 100%;
  padding: 1.5rem 1rem;
  background-color: white;
  border-bottom: 1px solid ${({ theme }) => theme.color.greyScale6};
  > div:first-child {
    margin-bottom: 1.5rem;
  }
  > div:nth-child(2) {
    margin-bottom: 1.5rem;
  }
  > div:nth-child(3) {
    margin-bottom: 1.5rem;
  }
`;

export const Hr = styled.div`
  border-top: 1px dashed #cdcdcd;
  height: 1px;
`;
export const PayContainer = styled.div`
  width: 100%;
  background-color: white;
  height: 228px;
  padding: 1.5rem 1rem 1.75rem 1rem;
  box-shadow: 0 10px 4px -4px #e4e4e4;
  position: relative;
  z-index: 1;
`;

export const PayInfo = styled.div`
  width: 100%;
  height: 118px;
  margin-bottom: 1.5rem;
  > div {
    margin-bottom: 1rem;
    margin-top: 1rem;
  }
`;

export const TotalPrice = styled.div`
  ${({ theme }) => theme.typo.body2}
  margin-top: 1rem;
`;

export const TotalPriceInfo = styled.div`
  color: ${({ theme }) => theme.color.percentOrange};
  ${({ theme }) => theme.typo.body2};
  margin-top: 1rem;
`;

export const HomeButton = styled.div`
  margin: 1rem auto;
  border-radius: 0.5rem;
  width: calc(100% - 40px);
  height: 47px;
  background-color: ${({ theme }) => theme.color.percentOrange};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  ${({ theme }) => theme.typo.button2};
  cursor: pointer;
`;
