import styled from "styled-components";

export const Container = styled.section`
  background-color: ${({ theme }) => theme.color.greyScale6};

  padding-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${({ theme }) => theme.scroll}

  & div.divider {
    margin: 0 20px;
    height: 1px;
    background-color: ${({ theme }) => theme.color.greyScale6};
  }
`;

export const SaleCarouselContainer = styled.div`
  width: calc(100% - 40px);
  height: 434px;

  background-color: white;
  margin-bottom: 32px;

  border-radius: 12px;
  overflow: hidden;
  box-shadow: 4px 4px 10px 0 rgba(0, 0, 0, 0.1);
`;

export const TextSlider = styled.div`
  height: 72px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.typo.title5}
  & span {
    margin-left: 8px;
    margin-right: 16px;
  }
  & span:last-child {
    margin-right: 0px;
  }
`;

export const WeekendCarouselContainer = styled.div`
  width: 100%;
  height: 467px;
  margin: 0 20px;
  background-color: white;
  margin-bottom: 80px;
`;

export const TitleSection = styled.div`
  margin: 40px 20px 0;
  height: 46px;
  font-size: 18px;
  font-weight: 800;
`;
