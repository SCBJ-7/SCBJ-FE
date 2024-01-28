import RegisterAccount from "../registerAccount/RegisterAccount";

import { useEffect } from "react";
import AccountInfo from "../accountInfo/AccountInfo";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PATH } from "@constants/path";
import useToastConfig from "@hooks/common/useToastConfig";
import { useAccountQuery } from "@/hooks/api/useMyPageQuery";

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
