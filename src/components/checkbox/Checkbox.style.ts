import styled, { DefaultTheme, css } from "styled-components";

export interface CheckboxStyleProps {
  size?: "sm" | "md" | "lg";
  variant?: "title" | "caption";
}

const getCheckboxSize = (size: "sm" | "md" | "lg") => {
  switch (size) {
    case "sm":
      return "0.75rem";
    case "lg":
      return "1.25rem";
    default:
      return "1rem";
  }
};

export const CheckboxContainer = styled.label`
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  vertical-align: top;
  position: relative;
`;

export const HiddenCheckbox = styled.input.attrs({
  type: "checkbox",
})`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;

  &:focus-visible + span {
    box-shadow: 0 0 0 3px ${({ theme }) => theme.color.lightBlue};
  }
`;

export const StyledCheckbox = styled.span<CheckboxStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  vertical-align: top;
  user-select: none;
  width: ${({ size }) => (size ? getCheckboxSize(size) : "24px")};
  height: ${({ size }) => (size ? getCheckboxSize(size) : "24px")};
  border-width: 2px;
  border-style: solid;
  border-radius: 0.125rem;
  position: relative;
  border-color: ${({ theme }) => theme.color.greyScale3};
  margin-right: 0.5em;

  &[data-checked] {
    background: ${({ theme }) => theme.color.percentBlue};
    border-color: ${({ theme }) => theme.color.percentBlue};
    color: ${({ theme }) => theme.color.white};
  }

  &[data-checked]:hover {
    background: ${({ theme }) => theme.color.darkBlue};
    border-color: ${({ theme }) => theme.color.darkBlue};
  }

  &[data-disabled] {
    background: ${({ theme }) => theme.color.greyScale6};
    border: none;
    cursor: not-allowed;
    opacity: 0.6;
  }

  &[data-checked][data-disabled] {
    background: ${({ theme }) => theme.color.greyScale5};
    border-color: ${({ theme }) => theme.color.greyScale5};
  }

  &[data-checked][data-disabled] .checkbox-icon {
    color: ${({ theme }) => theme.color.greyScale1};
  }

  .checkbox-icon {
    width: 1em;
    height: 1em;
    display: inline-block;
    line-height: 1em;
    flex-shrink: 0;
    color: ${({ theme }) => theme.color.white};
    vertical-align: middle;
    font-size: 1rem;
    transition-property: transform;
    animation: none;
  }

  &[data-checked] .checkbox-icon {
    animation: checking 200ms linear;
  }

  @keyframes checking {
    0% {
      opacity: 0;
      stroke-dashoffset: 16;
      transform: scale(0.95);
    }
    100% {
      opacity: 1;
      stroke-dashoffset: 0;
      transform: scale(1);
    }
  }
`;

const labelStyles = {
  title: (theme: DefaultTheme) => css`
    color: ${theme.color.greyScale1};
    }
  `,
  caption: (theme: DefaultTheme) => css`
    color: ${theme.color.greyScale3};
    }
  `,
};

export const LabelText = styled.span.withConfig({
  shouldForwardProp: (prop) => !["variant"].includes(prop),
})<CheckboxStyleProps>`
  &[data-checked] {
    color: ${({ theme }) => theme.color.percentBlue};
  }

  &[data-disabled] {
    color: ${({ theme }) => theme.color.greyScale5};
  }

  ${({ theme }) => theme.typo.caption1}

  margin-inline-start: 0.5rem;
  user-select: none;

  & a.link {
    text-decoration: underline;
    text-underline-offset: 2px;
    color: inherit;
  }

  ${({ variant, theme }) => variant && labelStyles[variant](theme)};
`;
