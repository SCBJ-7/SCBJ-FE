import useToastConfig from "@/hooks/common/useToastConfig";
import { useSelectedItemStore } from "@/store/store";
import { ProfileData } from "@/types/profile";

interface SubmitProps {
  readyToSubmit: boolean;
  firstPrice: string;
  secondPrice: string;
  downTimeAfter: string;
  firstInputRef: React.MutableRefObject<null>;
  secondPriceInputRef: React.MutableRefObject<null>;
  secondTimeInputRef: React.MutableRefObject<null>;
  is2ndChecked: boolean;
  userData: ProfileData;
  mutate: () => void;
  opt1: boolean;
  opt2: boolean;
  opt3: boolean;
  optFinal: boolean;
}

const useSubmitHandler = ({
  readyToSubmit,
  firstPrice,
  secondPrice,
  downTimeAfter,
  firstInputRef,
  secondPriceInputRef,
  secondTimeInputRef,
  is2ndChecked,
  userData,
  mutate,
  opt1,
  opt2,
  opt3,
  optFinal,
}: SubmitProps) => {
  const { handleToast } = useToastConfig();
  const selectedItem = useSelectedItemStore((state) => state.selectedItem);

  const submitHandler = () => {
    if (!readyToSubmit) {
      const firstPriceNum = Number(firstPrice.split(",").join(""));
      const secondPriceNum = Number(secondPrice.split(",").join(""));
      const downTimeAfterNum = Number(downTimeAfter);

      if (!firstPriceNum) {
        handleToast(true, [<>1차 가격을 설정해주세요</>]);
        if (firstInputRef.current) {
          (firstInputRef.current as HTMLInputElement).focus();
          // + 스크롤 상단으로 올리기
        }
        // 1차 가격이 판매가보다 높을 때
      } else if (firstPriceNum > selectedItem.purchasePrice) {
        handleToast(true, [
          <>판매가격이 구매가보다 높아요! 판매가격을 확인해주세요</>,
        ]);

        if (firstInputRef.current) {
          (firstInputRef.current as HTMLInputElement).focus();
          // + 스크롤 상단으로 올리기
        }
        // 2차 가격이 1차 가격보다 높을 때
      } else if (secondPriceNum > firstPriceNum) {
        handleToast(true, [<>2차가격은 1차 가격보다 낮게 설정해주세요</>]);

        if (secondPriceInputRef.current) {
          (secondPriceInputRef.current as HTMLInputElement).focus();
          // + 스크롤 상단으로 올리기
        }
        // 2차가격 인하 시간을 3시간 이하로 설정했을 때
      } else if (downTimeAfterNum && downTimeAfterNum < 3) {
        handleToast(true, [
          <>체크인 3시간 전까지만 2차 가격 설정이 가능해요</>,
        ]);

        if (secondTimeInputRef.current) {
          (secondTimeInputRef.current as HTMLInputElement).focus();
          // + 스크롤 상단으로 올리기
        }
        // 2차 가격만 입력하고 2차 기준시간은 입력 안 했을 때
      } else if (is2ndChecked && secondPrice && !downTimeAfter) {
        handleToast(true, [<>2차 가격으로 내릴 시간을 입력해주세요</>]);

        if (secondTimeInputRef.current) {
          (secondTimeInputRef.current as HTMLInputElement).focus();
          // + 스크롤 상단으로 올리기
        }
        // 2차 기준시간만 입력하고 2차 가격은 입력 안 했을 때
      } else if (is2ndChecked && !secondPrice && downTimeAfter) {
        handleToast(true, [<>2차 가격을 입력해주세요</>]);

        if (secondPriceInputRef.current) {
          (secondPriceInputRef.current as HTMLInputElement).focus();
          // + 스크롤 상단으로 올리기
        }
        // 2차 가격 설정을 체크해놓고 2차 가격과 시간 모두 입력 안 했을 때
      } else if (is2ndChecked && !secondPrice && !downTimeAfter) {
        handleToast(true, [<>2차 가격을 입력해주세요</>]);

        if (secondTimeInputRef.current) {
          (secondTimeInputRef.current as HTMLInputElement).focus();
          // + 스크롤 상단으로 올리기
        }
      }
      // 약관 동의를 다 안 했을 때
      else if (!opt1 || !opt2 || !opt3 || !optFinal) {
        handleToast(true, [<>판매 진행 약관에 동의해주세요</>]);

        // 계좌를 입력 안 한 경우
      } else if (!userData?.accountNumber) {
        handleToast(true, [<>계좌를 입력해주세요</>]);
      }

      return;
    }

    const confirmToProceed = confirm("판매 게시물을 등록하시겠어요?");
    if (confirmToProceed) {
      mutate();
    }
  };

  return [submitHandler];
};

export default useSubmitHandler;
