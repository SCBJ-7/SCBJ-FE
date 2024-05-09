import { type ButtonHTMLAttributes, useContext } from "react";

import { BottomSheetContext } from "./bottom-sheet-context";
import { StyledButton, StyledButtonGroup } from "./styles";

export type ButtonVariantType = "outline" | "fill" | "none";
export type ButtonDirection = "horizontal" | "vertical" | "none";

interface BottomSheetButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariantType;
  direction?: ButtonDirection;
  actionText: string;
  actionFunc: () => void;
  closeText?: string;
  closeFunc?: () => void;
}

const BottomSheetButton = ({
  variant = "fill",
  direction = "none",
  actionText,
  actionFunc,
  closeText,
  closeFunc,
  ...props
}: BottomSheetButtonProps) => {
  const bottomSheetContext = useContext(BottomSheetContext);

  if (!bottomSheetContext)
    throw new Error("BottomSheet.Button must be rendered within a BottomSheet");

  return (
    <StyledButtonGroup direction={direction} variant={variant}>
      <StyledButton
        type="button"
        variant={variant}
        className="action"
        onClick={actionFunc}
        {...props}
      >
        {actionText}
      </StyledButton>
      {closeText && closeFunc && (
        <StyledButton
          type="button"
          variant={variant}
          className="close"
          onClick={closeFunc || actionFunc}
          {...props}
        >
          {closeText}
        </StyledButton>
      )}
    </StyledButtonGroup>
  );
};

export { BottomSheetButton };
