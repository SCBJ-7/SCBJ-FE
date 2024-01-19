import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  background-color: ${({ theme }) => theme.color.greyScale6};

  padding: 56px 20px 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => theme.scroll}

  & div.divider {
    margin: 0 20px;
    height: 1px;
    background-color: ${({ theme }) => theme.color.greyScale6};
  }
`;

export const SaleCarouselContainer = styled.div`
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
  gap: 16px;

  ${({ theme }) => theme.typo.title5}

  & strong {
    font-size: 18px;
    font-weight: 800;
  }
  & strong.percentage {
    color: ${({ theme }) => theme.color.percentBlue};
  }
`;

export const SequneceIndicator = styled.div`
  height: 50px;
`;

export const WeekendCarouselContainer = styled.div`
  height: 750px;
  width: 100%;
  background-color: white;
`;
