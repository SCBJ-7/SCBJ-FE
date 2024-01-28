import { tooltip } from "@utils/tooltip";
import { useEffect, useState } from "react";

const useTooltip = () => {
  const [isToolTipVisible, setIsToolTipVisible] = useState(true);

  useEffect(() => {
    if (tooltip.isValidateHideTooltip) {
      setIsToolTipVisible(false);
    }
  }, []);

  const hideTooltipForWeek = () => {
    tooltip.setHideTooltip();
    setIsToolTipVisible(false);
  };

  return { isToolTipVisible, hideTooltipForWeek };
};

export default useTooltip;
