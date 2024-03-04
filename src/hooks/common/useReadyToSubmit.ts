import { useEffect } from "react";

import { ProfileData } from "@/types/profile";

interface ReadyToSubmitProps {
  setReadyToSubmit: React.Dispatch<React.SetStateAction<boolean>>;
  firstPrice: string;
  secondPrice: string;
  opt1: boolean;
  opt2: boolean;
  opt3: boolean;
  optFinal: boolean;
  bank: string | null;
  accountNumber: string | null;
  is2ndChecked: boolean;
  downTimeAfter: string;
  userData: ProfileData;
}

const useReadyToSubmit = ({
  setReadyToSubmit,
  firstPrice,
  opt1,
  opt2,
  opt3,
  optFinal,
  bank,
  accountNumber,
  is2ndChecked,
  secondPrice,
  downTimeAfter,
  userData,
}: ReadyToSubmitProps) => {
  useEffect(() => {
    setReadyToSubmit(() => {
      if (
        firstPrice &&
        opt1 &&
        opt2 &&
        opt3 &&
        optFinal &&
        bank &&
        accountNumber
      ) {
        // accountNumber 추가
        if (!is2ndChecked) return true; // 2차 가격 설정하기 체크 안 하고 계좌 등록된 경우

        if (is2ndChecked && secondPrice && downTimeAfter) {
          return true; // 2차 가격 설정한 경우
        } else if (is2ndChecked && !secondPrice && !downTimeAfter) {
          return false; // 2차 가격 체크했지만 아무것도 쓰지 않은 경우는 일단 가능
        } else if (is2ndChecked && !secondPrice && downTimeAfter) {
          return false; // 2차 가격 체크하고 2차 가격 입력 안 하고 시간만 입력한 경우
        } else if (is2ndChecked && secondPrice && !downTimeAfter) {
          return false; // 2차 가격 체크하고 2차 시간 입력 안 하고 가격만 입력한 경우
        } else if (!userData?.bank || !userData?.accountNumber) {
          return false;
        }
      }

      return false; // 1차가격 설정과 약관 동의 안한 경우
    });
  }, [
    setReadyToSubmit,
    firstPrice,
    opt1,
    opt2,
    opt3,
    optFinal,
    is2ndChecked,
    secondPrice,
    downTimeAfter,
    userData,
    bank,
    accountNumber,
  ]);
};

export default useReadyToSubmit;
