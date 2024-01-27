import { ACCESS_TOKEN } from "@/constants/api";
import useAuthStore from "@/store/authStore";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface IsLoginProps {
  children: React.ReactNode;
}

const IsLogin = ({ children }: IsLoginProps) => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const { pathname } = useLocation();

  useEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      setIsLoggedIn(true);
    }
  }, [pathname]);

  console.log(isLoggedIn);

  return <>{children}</>;
};

export default IsLogin;
