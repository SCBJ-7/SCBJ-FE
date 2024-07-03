import styled, { css } from "styled-components";

import { Dialog } from "@/components/ui/dialog";
import { Typo } from "@/components/ui/typo";

interface DialogProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description?: string;
  closeText?: string;
  closeFn?: () => void;
  actionText: string;
  actionFn: () => void;
}

const MiniAlertDialog = ({
  isOpen,
  onClose,
  title,
  description,
  actionText,
  actionFn,
  closeText,
  closeFn,
}: DialogProps) => {
  return (
    <Dialog.Root
      isOpen={isOpen}
      onClose={onClose}
      bg={"white"}
      closeOnClickDim={false}
    >
      <Dialog.Content css={DialogContentStyle}>
        <Dialog.Title typo="button2" color="greyScale1">
          {title}
        </Dialog.Title>
        {description && (
          <Spacing>
            <Typo as="p" typo="body6" color="greyScale2" textAlign="center">
              {description}
            </Typo>
          </Spacing>
        )}
      </Dialog.Content>
      <ButtonGroup>
        <Button
          variants={"action"}
          onClick={actionFn}
          roundedCorners={closeText ? "left" : "both"}
        >
          {actionText}
        </Button>
        {closeText && (
          <Button variants={"close"} onClick={closeFn} roundedCorners="right">
            {closeText}
          </Button>
        )}
      </ButtonGroup>
    </Dialog.Root>
  );
};

export default MiniAlertDialog;

const DialogContentStyle = css`
  padding: 1.25rem 1.5rem 1rem;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
`;

const getVariants = (variant: "action" | "close") => {
  switch (variant) {
    case "action":
      return css`
        background-color: ${({ theme }) => theme.color.percentOrange};
        color: ${({ theme }) => theme.color.white};

        &:hover {
          background-color: ${({ theme }) => theme.color.darkOrange};
        }
      `;
    case "close":
      return css`
        background-color: ${({ theme }) => theme.color.greyScale6};
        color: ${({ theme }) => theme.color.greyScale1};

        &:hover {
          background-color: ${({ theme }) => theme.color.greyScale5};
        }
      `;
    default:
  }
};

const ButtonGroup = styled.div`
  display: flex;
`;

const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !["variants", "roundedCorners"].includes(prop),
})<{ variants: "action" | "close"; roundedCorners: "left" | "right" | "both" }>`
  flex: 1;
  padding: 10px 20px;
  ${({ theme }) => theme.typo.button4};
  ${({ variants }) => getVariants(variants)};
  border: none;
  cursor: pointer;

  ${({ roundedCorners }) => {
    switch (roundedCorners) {
      case "both":
        return css`
          border-radius: 12px;
        `;
      case "left":
        return css`
          border-bottom-left-radius: 12px;
        `;
      case "right":
        return css`
          border-bottom-right-radius: 12px;
        `;
      default:
        return css``;
    }
  }}
`;

const Spacing = styled.div`
  margin-top: 8px;
`;
