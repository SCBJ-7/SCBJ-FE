import { useEffect, useState } from "react";

import useToastConfig from "./useToastConfig";

import { useToastStore } from "@/store/store";

export type PhaseType = "1stInput" | "2ndInput" | "finalConfirm";

interface NavProps {
  firstPrice: string;
  setIs2ndChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

const useTransferNavigation = ({ firstPrice, setIs2ndChecked }: NavProps) => {
  const [phase, setPhase] = useState<PhaseType>("1stInput");
  const [phaseHistory, setPhaseHistory] = useState<PhaseType[]>(["1stInput"]);

  const { handleToast } = useToastConfig();
  const resetToast = useToastStore((state) => state.resetToast);

  const handleAddPhaseHistory = (newPhase: PhaseType) => {
    const tempNum = Number(firstPrice.split(",").join(""));
    if (firstPrice === "" || isNaN(tempNum) || tempNum < 100) {
      if (newPhase === "2ndInput") {
        handleToast(true, [
          <>판매할 금액을 입력해야 2차 가격을 입력하실 수 있습니다.</>,
        ]);
      } else if (newPhase === "finalConfirm") {
        handleToast(true, [
          <>판매할 금액을 입력해야 정산 계좌를 등록할 수 있습니다.</>,
        ]);
      }
      return;
    }
    setPhaseHistory([...phaseHistory, newPhase]);
    setPhase(newPhase);

    if (newPhase === "2ndInput") {
      setIs2ndChecked(true);
    }
  };

  const handleSubPhaseHistory = () => {
    const newPhase = [...phaseHistory];
    const pop = newPhase.pop();
    setPhaseHistory(newPhase);
    setPhase(newPhase[newPhase.length - 1] || "1stInput");

    console.log(newPhase);

    console.log(pop, "pop");

    if (pop === "2ndInput") {
      setIs2ndChecked(false);
    }
  };

  useEffect(() => {
    resetToast();
  }, [phase, resetToast]);

  return { handleAddPhaseHistory, handleSubPhaseHistory, phase };
};

export default useTransferNavigation;
