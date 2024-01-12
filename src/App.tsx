import { Outlet, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import Toast from "./components/toast/Toast.tsx";

import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchUserInfo } from "@apis/fetchUserInfo.ts";
import { useToastStore, useUserInfoStore } from "./store/store.ts";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function App() {
  const { data } = useSuspenseQuery({
    queryKey: ["UserInfo"],
    queryFn: fetchUserInfo,
    staleTime: 500000,
  });
  // userInfo set함수 소환
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);

  if (data) {
    // userInfo를 전역에 저장합니다.
    setUserInfo({
      ...data,
    });
  }

  const toastConfig = useToastStore((state) => state.config);
  const setToastConfig = useToastStore((state) => state.setToastConfig);
  const location = useLocation();

  useEffect(() => {
    setToastConfig({
      isShow: false,
      strings: toastConfig.strings,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <Layout>
      <AnimatePresence>{toastConfig.isShow && <Toast />}</AnimatePresence>
      <Outlet />
    </Layout>
  );
}

export default App;
