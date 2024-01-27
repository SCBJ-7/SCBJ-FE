import { ACCESS_TOKEN } from "@/constants/api";
import useAuthStore from "@/store/authStore";
import { useLayoutEffect } from "react";

interface IsLoginProps {
  children: React.ReactNode;
}

const IsLogin = ({ children }: IsLoginProps) => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);

  useLayoutEffect(() => {
    if (localStorage.getItem(ACCESS_TOKEN)) {
      setIsLoggedIn(true);
    }
  }, [setIsLoggedIn]);

  return <>{children}</>;
};

export default IsLogin;
