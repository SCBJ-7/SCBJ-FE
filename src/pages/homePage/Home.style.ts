import styled from "styled-components";

export const Container = styled.section<{ $weekLength: undefined | number }>`
  background-color: ${({ theme }) => theme.color.greyScale6};

  padding-top: 80px;
  padding-bottom: ${({ $weekLength }) => !$weekLength && "200px"};
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
  width: 100%;
  height: 434px;

  background-color: white;

  overflow: hidden;
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
  height: 497px;
  margin: 0 20px;
  background-color: white;
  margin-bottom: 60px;
`;

export const TitleSection = styled.div`
  margin: 40px 20px 8px;
  font-size: 18px;
  font-weight: 800;
`;

export const SubTitle = styled.div`
  width: 100%;
  ${({ theme }) => theme.typo.body3}
  margin: 0 20px 25px;
`;
