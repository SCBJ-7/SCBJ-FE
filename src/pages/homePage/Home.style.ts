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

export const SequneceSection = styled.div`
  height: 50px;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SequneceIndicator = styled.div`
  display: flex;

  section {
    width: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  section span {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background-color: ${({ theme }) => theme.color.greyScale5};
  }

  section span.current {
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background-color: ${({ theme }) => theme.color.black};
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
