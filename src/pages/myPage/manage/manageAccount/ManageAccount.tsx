import RegisterAccount from "../registerAccount/RegisterAccount";
import useProfileApi from "@apis/useProfileApi";
import type { ProfileData } from "../manageProfile/ManageProfile.type";
import { useEffect, useState } from "react";
import EnterAccountInfo from "@components/account/enterAccountInfo/EnterAccountInfo";
import type { AccountProps } from "@type/account";
import AccountInfo from "../accountInfo/AccountInfo";
import useToastConfig from "@hooks/common/useToastConfig";
import { END_POINTS } from "@constants/api";
import { useLocation } from "react-router-dom";

const ManageAccount = () => {
  const { search: step } = useLocation();
  const { getProfileData } = useProfileApi();
  const { handleToast } = useToastConfig();
  const [data, setData] = useState<ProfileData>();
  const noPrevAccount = !data?.accountNumber && !data?.bank;
  const [accountInfo, setAccountInfo] = useState<AccountProps>({
    accountNumber: data?.accountNumber,
    bank: data?.bank,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const res = await getProfileData(END_POINTS.USER_INFO);
      setData(res);
      setAccountInfo({ accountNumber: res.accountNumber, bank: res.bank });
    } catch {
      handleToast(true, [<>fetching err</>]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (step === "?step=first" || !step) {
      fetchData();
    }
    // eslint-disable-next-line
  }, [isEditing, step]);

  const setEditState = (state: boolean) => {
    setIsEditing(state);
  };

  return (
    <>
      {isLoading ? (
        <div>Loading</div>
      ) : noPrevAccount ? (
        <RegisterAccount />
      ) : isEditing ? (
        <EnterAccountInfo
          accountInfo={accountInfo}
          setAccountInfo={setAccountInfo}
          setIsEditing={setIsEditing}
        />
      ) : (
        <AccountInfo data={data} onClick={() => setEditState(true)} />
      )}
    </>
  );
};

export default ManageAccount;
