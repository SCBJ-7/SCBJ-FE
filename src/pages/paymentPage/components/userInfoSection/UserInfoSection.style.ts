import styled from "styled-components";

export { HStack, Text } from "@pages/paymentPage/Payment.style";

export const Flex = styled.div`
  display: flex;
`;

export const InputWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;

export const FormWrapper = styled(Flex)`
  flex-direction: column;
  gap: 1rem;
`;

export const Label = styled.label`
  ${({ theme }) => theme.typo.body4}

  color: ${({ theme }) => theme.color.greyScale2};

  flex: 1;
`;

export const Input = styled.input`
  ${({ theme }) => theme.typo.body4}

  color: ${({ theme }) => theme.color.percentBlue};

  border: none;
  border-bottom: 1px solid ${({ theme }) => theme.color.greyScale5};

  flex: 3;
  padding: 0.2rem 0.125rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.greyScale5};
  }

  &:focus {
    outline: none;
  }
`;
