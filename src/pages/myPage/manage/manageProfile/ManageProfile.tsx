import ManageEmail from "../manageEmail/ManageEmail";
import ManageName from "../manageName/ManageName";
import ManagePhoneNumber from "../managePhoneNumber/ManagePhoneNumber";
import * as S from "./ManageProfile.style";
import useProfileApi from "@/apis/useProfileApi";
import type { ProfileData } from "./ManageProfile.type";
import { useQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";

const ManageProfile = () => {
  const { getProfileData } = useProfileApi();
  const { data } = useQuery<ProfileData, AxiosError>({
    queryKey: ["profile"],
    queryFn: () => getProfileData("/v1/members"),
  });

  return (
    <>
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
