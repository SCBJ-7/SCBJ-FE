import { PATH } from "@/constants/path";
import useAuthStore from "@/store/authStore";
import { useUserInfoStore } from "@/store/store";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface RedirectProps {
  children: React.ReactNode;
}

const Redirect = ({ children }: RedirectProps) => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
  const userInfo = useUserInfoStore((state) => state.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedIn || !userInfo || userInfo.linkedToYanolja) {
      navigate(PATH.ROOT);
    }
  }, [isLoggedIn, userInfo, navigate]);

  return <>{children}</>;
};

export default Redirect;
