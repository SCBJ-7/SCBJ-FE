import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import { ACCESS_TOKEN } from "@/constants/api";
import useAuthStore from "@/store/authStore";

interface IsLoginProps {
  children: React.ReactNode;
}

const IsLogin = ({ children }: IsLoginProps) => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  const { pathname } = useLocation();

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      setIsLoggedIn(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <>{children}</>;
};

export default IsLogin;
