import styled from "styled-components";
import { hexToRgba } from "@utils/hexTorgba";

export const PageContainer = styled.div`
  padding: 2rem 1.25rem;
`;

export const YanoljaHeader = styled.header`
  display: flex;
  justify-content: center;
  margin: 1.5rem 0 3.5rem;
`;

export const LogoWrapper = styled.div`
  width: 158px;
`;

export const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const InputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > .input_wrapper {
    position: relative;
  }
`;

export const Label = styled.label`
  ${({ theme }) => theme.typo.title5}
  color: ${({ theme }) => theme.color.greyScale1};
  font-weight: 400;
`;

export const Input = styled.input`
  width: 100%;
  height: 48px;

  border: 1px solid ${({ theme }) => theme.color.greyScale5};
  border-radius: 8px;

  padding-left: 0.5rem;

  color: ${({ theme }) => theme.color.yanoljaPink};

  &::placeholder {
    ${({ theme }) => theme.typo.caption1}
    color: ${({ theme }) => theme.color.greyScale5};
    font-weight: 300;
  }

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.color.percentBlue};
  }

  transition: border 0.1s ease-in-out;
`;

export const ConFirmButton = styled.button`
  ${({ theme }) => theme.typo.caption2}
  position: absolute;

  width: 72px;
  height: 28px;

  border: 1px solid ${({ theme }) => theme.color.yanoljaPink};
  border-radius: 8px;

  color: ${({ theme }) => theme.color.yanoljaPink};
  background-color: unset;

  top: 10px;
  right: 10px;

  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${({ theme }) => hexToRgba(theme.color.yanoljaPink, 0.1)};
  }

  &:focus {
    background-color: ${({ theme }) => hexToRgba(theme.color.yanoljaPink, 0.2)};
  }
`;

export const InputCaption = styled.p`
  ${({ theme }) => theme.typo.caption3}
`;

export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: calc(100% - 40px);

  margin-top: 5rem;
`;

export const BottomWrapper = styled.div`
  margin-top: 3.5em;
  text-align: center;
`;

export const Button = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;

  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.yanoljaPink};

  transition: background-color 0.2s ease-in-out;
`;
