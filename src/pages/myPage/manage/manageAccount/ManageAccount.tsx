import RegisterAccount from "../registerAccount/RegisterAccount";
import useProfileApi from "@apis/useProfileApi";
import type { ProfileData } from "../manageProfile/ManageProfile.type";
import { useEffect, useState } from "react";
import type { AccountProps } from "@type/account";
import AccountInfo from "../accountInfo/AccountInfo";
import { END_POINTS } from "@constants/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import { PATH } from "@constants/path";
import useToastConfig from "@hooks/common/useToastConfig";

const ManageAccount = () => {
  const navigate = useNavigate();
  const [search] = useSearchParams();
  const { getProfileData } = useProfileApi();
  const { handleToast } = useToastConfig();
  const [data, setData] = useState<ProfileData>();
  const noPrevAccount = !data?.accountNumber && !data?.bank;
  const [accountInfo, setAccountInfo] = useState<AccountProps>({
    accountNumber: data?.accountNumber,
    bank: data?.bank,
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await getProfileData(END_POINTS.USER_INFO);
      if (!res.linkedToYanolja) {
        handleToast(true, [<>잘못된 접근 방식입니다</>]);
        navigate(PATH.SETTING, { replace: true });
        return;
      }
      setData(res);
      setAccountInfo({ accountNumber: res.accountNumber, bank: res.bank });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (
      search.get("step") === "termsAgreement" ||
      search.get("step") === "enterAccount"
    )
      return;

    if (search.get("step") && search.get("step") !== "first") {
      navigate(PATH.MANAGE_ACCOUNT, { replace: true });
    }

    fetchData();
    // eslint-disable-next-line
  }, [search]);

  if (isLoading) return <div>Loading...</div>;

  if (!data) return <div>Data fetching Error</div>;

  if (noPrevAccount) return <RegisterAccount />;

  return <AccountInfo data={data} accountInfo={accountInfo} />;
};

export default ManageAccount;
