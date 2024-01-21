import ManageEmail from "../manageEmail/ManageEmail";
import ManageName from "../manageName/ManageName";
import ManagePhoneNumber from "../managePhoneNumber/ManagePhoneNumber";
import * as S from "./ManageProfile.style";
import useProfileApi from "@/apis/useProfileApi";
import type { ProfileData } from "./ManageProfile.type";
import { useEffect, useState } from "react";
import { END_POINTS } from "@constants/api";

const ManageProfile = () => {
  const { getProfileData } = useProfileApi();
  const [userProfile, setUserProfile] = useState<ProfileData>();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const fetchUserProfile = async () => {
    try {
      const res = await getProfileData(END_POINTS.USER_INFO);
      setUserProfile(res);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
    // eslint-disable-next-line
  }, []);

  if (isLoading) return <div>Loading...</div>;

  if (!userProfile) return <div>Data Fetching Error</div>;

  return (
    <S.ManageContainer>
      <h1>나의 계정</h1>
      <S.ManageInfoWrapper>
        <ManageEmail email={userProfile?.email} />
        <ManageName
          prevName={userProfile?.name}
          linkedToYanolja={userProfile?.linkedToYanolja}
        />
        <ManagePhoneNumber prevPhoneNumber={userProfile?.phone} />
      </S.ManageInfoWrapper>
    </S.ManageContainer>
  );
};

export default ManageProfile;
