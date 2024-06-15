import { useContext } from "react";

import { BottomSheetContext } from "./bottom-sheet-context";
import { CloseIcon, ControlButton, StyledControl } from "./styles";

const BottomSheetControl = () => {
  const bottomSheetContext = useContext(BottomSheetContext);

  if (!bottomSheetContext)
    throw new Error(
      "BottomSheet.Control must be rendered within a BottomSheet",
    );

  return (
    <StyledControl>
      <ControlButton
        type="button"
        onClick={() => bottomSheetContext?.onClose()}
      >
        <CloseIcon />
      </ControlButton>
    </StyledControl>
  );
};

export { BottomSheetControl };
