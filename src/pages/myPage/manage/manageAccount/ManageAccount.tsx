import { useAccountQuery } from "@/hooks/api/useUserInfoQuery";
import { PATH } from "@constants/path";
import useToastConfig from "@hooks/common/useToastConfig";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

import AccountInfo from "../accountInfo/AccountInfo";
import RegisterAccount from "../registerAccount/RegisterAccount";

const ManageAccount = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const { handleToast } = useToastConfig();

  useEffect(() => {
    if (
      search.get("step") === "termsAgreement" ||
      search.get("step") === "enterAccount"
    )
      return;

    if (search.get("step") && search.get("step") !== "first") {
      navigate(PATH.MANAGE_ACCOUNT, { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const { data } = useAccountQuery();

  const noPrevAccount =
    !data?.accountData.accountNumber && !data.accountData.bank;

  if (!data.rawData.linkedToYanolja) {
    handleToast(true, [<>잘못된 접근 방식입니다</>]);
    navigate(PATH.SETTING, { replace: true });
    return null;
  }

  if (noPrevAccount) return <RegisterAccount />;

  return <AccountInfo data={data.rawData} accountInfo={data.accountData} />;
};

export default ManageAccount;
