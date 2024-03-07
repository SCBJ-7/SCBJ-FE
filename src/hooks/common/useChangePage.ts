import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { PATH } from "@/constants/path";
import { useSelectedItemStore, useStateHeaderStore } from "@/store/store";

interface changePageProps {
  is2ndChecked: boolean;
  firstCheckRef: React.MutableRefObject<null>;
}

const useChangePage = ({ is2ndChecked, firstCheckRef }: changePageProps) => {
  const navigate = useNavigate();
  const setHeaderConfig = useStateHeaderStore((state) => state.setHeaderConfig);
  const selectedItem = useSelectedItemStore((state) => state.selectedItem);

  // 현재 페이지가 어디인지
  const [accountSetting, setAccountSetting] = useState<"none" | "enter">(
    "none",
  );

  // 페이지 전환 시 적용할 효과
  useEffect(() => {
    if (accountSetting === "none") {
      setHeaderConfig({
        title: selectedItem.hotelName,
        undo: () => {
          navigate(PATH.WRITE_TRANSFER);
        },
      });

      if (is2ndChecked && firstCheckRef.current) {
        (firstCheckRef.current as HTMLInputElement).checked = true;
      }
    }

    if (accountSetting === "enter") {
      setHeaderConfig({
        title: "계좌 연동하기",
        undo: () => {
          setAccountSetting("none");
        },
      });

      if (is2ndChecked && firstCheckRef.current) {
        (firstCheckRef.current as HTMLInputElement).checked = false;
      }
    }
    // eslint-disable-next-line
  }, [accountSetting]);

  return { accountSetting, setAccountSetting };
};

export default useChangePage;
