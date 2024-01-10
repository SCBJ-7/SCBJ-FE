import ManageEmail from "../manageEmail/ManageEmail";
import ManageName from "../manageName/ManageName";
import ManagePhoneNumber from "../managePhoneNumber/ManagePhoneNumber";
import * as S from "./ManageProfile.style";
import useProfileApi from "@/apis/getProfile";
import type { ProfileData } from "./ManageProfile.type";
import { useSuspenseQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const ManageProfile = () => {
  const { getProfileData } = useProfileApi();
  const { isLoading, data, isError } = useSuspenseQuery<
    ProfileData,
    AxiosError
  >({
    queryKey: ["profile"],
    queryFn: () => getProfileData("/v1/members"),
  });

  return (
    <>
      {isError && <div>error..</div>}
      {isLoading && <div>Loading...</div>}
      {data ? (
        <S.ManageContainer>
          <h1>나의 계정</h1>
          <S.ManageInfoWrapper>
            <ManageEmail prevEmail={data.email} />
            <ManageName
              prevName={data.name}
              linkedToYanolja={data.linkedToYanolja}
            />
            <ManagePhoneNumber prevPhoneNumber={data.phone} />
          </S.ManageInfoWrapper>
        </S.ManageContainer>
      ) : (
        <div>Data Fetching Error</div>
      )}
    </>
  );
};

export default ManageProfile;
