import styled from "styled-components";

export const SignUpContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 40px 20px 0 20px;
`;

export const SignUpTitle = styled.p`
  ${({ theme }) => theme.typo.title3}
  color: #3A3A3A;

  margin: 0 0 64px 0;
`;

export const SignUpInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  margin: 0 0 40px 0;

  width: 100%;
`;

export const SignUpInputWrapper = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const SignUpInputTitle = styled.p`
  ${({ theme }) => theme.typo.caption1}
  color: ${({ theme }) => theme.color.greyScale1};
  font-weight: 400;
`;

export const SignUpInput = styled.input`
  width: 100%;
  height: 48px;

  border: 1px solid ${({ theme }) => theme.color.greyScale5};
  border-radius: 8px;

  padding-left: 8px;

  &::placeholder {
    ${({ theme }) => theme.typo.caption1}
    color: ${({ theme }) => theme.color.greyScale5};
    font-weight: 300;
  }
`;

export const SignUpInputBtn = styled.button`
  ${({ theme }) => theme.typo.caption2}
  position: absolute;

  width: 72px;
  height: 28px;

  border: 1px solid #f27c18;
  border-radius: 8px;

  color: #f27c18;

  top: 10px;
  right: 10px;
`;

export const SignUpInputCaption = styled.span<{ $color: string }>`
  ${({ theme }) => theme.typo.caption3}
  color: ${({ $color }) => $color};
`;

export const SignUpCheckBoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 100%;

  margin: 0 0 64px 0;
`;

export const SignUpCheckBoxWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

export const SignUpCheckBoxInput = styled.input``;

export const SignUpCheckBoxTitle = styled.span<{ $color: string }>`
  ${({ theme }) => theme.typo.caption1}
  color: ${({ $color }) => $color};
  font-weight: 400;
`;

export const SignUpCheckBoxLink = styled.a`
  text-decoration: underline;
  text-underline-offset: 2px;
`;

export const SignUpSubmitBtn = styled.button`
  width: 100%;
  height: 48px;
  border-radius: 8px;

  color: white;

  background-color: ${({ theme }) => theme.color.greyScale5};

  margin: 0 0 64px 0;
`;
