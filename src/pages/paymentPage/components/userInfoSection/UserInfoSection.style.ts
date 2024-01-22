import styled from "styled-components";

export { HStack, Text } from "@pages/paymentPage/Payment.style";

export const Flex = styled.div`
  display: flex;
`;

export const LabelWrapper = styled(Flex)`
  justify-content: space-between;
  align-items: center;
`;

export const FormWrapper = styled(Flex)`
  flex-direction: column;
  gap: 1rem;
`;

export const InputWrapper = styled(Flex)`
  flex-direction: column;
  gap: 0.5rem;

  flex: 3;
`;

export const Label = styled.label`
  ${({ theme }) => theme.typo.body4}

  color: ${({ theme }) => theme.color.greyScale2};

  flex: 1;
`;

export const Input = styled.input<{ $isError?: boolean }>`
  ${({ theme }) => theme.typo.body4}

  color: ${({ theme }) => theme.color.percentBlue};

  border: none;
  border-bottom: 1px solid
    ${({ theme, $isError }) =>
      $isError ? theme.color.cautionRed : theme.color.greyScale5};

  padding: 0.2rem 0.125rem;

  &::placeholder {
    color: ${({ theme }) => theme.color.greyScale5};
  }

  &::before {
    border-bottom: 1px solid rgba(0, 0, 0, 0.42);
    left: 0px;
    bottom: 0px;
    content: " ";
    position: absolute;
    right: 0px;
    transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    pointer-events: none;
  }

  &::after {
    border-bottom: 2px solid ${({ theme }) => theme.color.percentBlue};
    left: 0px;
    bottom: 0px;
    content: "";
    position: absolute;
    right: 0px;
    transform: scaleX(0);
    transition: transform 200ms cubic-bezier(0, 0, 0.2, 1) 0ms;
    pointer-events: none;
  }

  &:focus {
    outline: none;
  }

  &[data-focus]::after {
    transform: scaleX(1) translateX(0px);
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }

  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

interface InputCaptionProps {
  error?: boolean;
}

export const InputCaption = styled.p.withConfig({
  shouldForwardProp: (prop) => !["error", "success"].includes(prop),
})<InputCaptionProps>`
  color: ${({ error, theme }) =>
    error ? theme.color.cautionRed : theme.color.percentBlue};

  ${({ theme }) => theme.typo.caption3};
`;
