import { styled } from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.color.greyScale6};
`;

export const Wrapper = styled.div`
  max-width: 768px;
  min-width: 360px;
  width: 100%;
  height: 100%;

  background-color: white;
`;

/* 
SHeader에 들어갈 컴포넌트 예시입니다.
export const SHeader = styled.div`
  width: 100%;
  height: 56px;
  background-color: ${(props) => props.theme.color.greyScale2};
`;
*/
