import { useState } from "react";
import * as S from "./Info.style";
import { useNavigate } from "react-router-dom";
import { PATH } from "@constants/path";
import { logout } from "@apis/logout";
import useToastConfig from "@hooks/common/useToastConfig";
import useAuthStore from "@/store/authStore";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "@/constants/api";
import { useQueryClient } from "@tanstack/react-query";

const Info = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { handleToast } = useToastConfig();
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const infoList = [
    { name: "문의하기", handler: () => alert("문의하기") },
    isLoggedIn
      ? { name: "로그아웃", handler: () => setShowLogoutModal(true) }
      : { name: "로그인", handler: () => navigate(PATH.LOGIN) },
  ];
  const logoutCancelHandler = () => {
    setShowLogoutModal(false);
  };

  const logoutConfirmHandler = async () => {
    try {
      await logout();
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(REFRESH_TOKEN);
      setIsLoggedIn(false);
      queryClient.removeQueries({ queryKey: ["purchaseList"] });
      navigate(PATH.ROOT);
    } catch (err) {
      handleToast(true, [<>로그아웃 실패. 잠시 후 다시 시도해 주세요</>]);
    } finally {
      setShowLogoutModal(false);
    }
  };

  return (
    <>
      {showLogoutModal && (
        <S.DimmedBackground>
          <S.LogoutModal>
            <S.ModalText>로그아웃 하시겠습니까?</S.ModalText>
            <S.ModalButtonWrapper>
              <S.ConfirmButton onClick={logoutConfirmHandler}>
                확인
              </S.ConfirmButton>
              <S.CancelButton onClick={logoutCancelHandler}>
                취소
              </S.CancelButton>
            </S.ModalButtonWrapper>
          </S.LogoutModal>
        </S.DimmedBackground>
      )}

      <S.InfoListWrapper>
        <h1>정보</h1>
        {infoList.map((item) => {
          return (
            <S.InfoListElement key={item.name}>
              <button onClick={item.handler}>
                <span>{item.name}</span>
              </button>
            </S.InfoListElement>
          );
        })}
      </S.InfoListWrapper>
    </>
  );
};

export default Info;
