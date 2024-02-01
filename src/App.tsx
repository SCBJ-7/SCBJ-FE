import IsLogin from "@components/isLogin/IsLogin";
import ScrollToTop from "@components/scrollToTop/ScrollToTop";
import Toast from "@components/toast/Toast";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import "./firebase.ts";

import { useToastStore } from "./store/store";

const App = () => {
  const location = useLocation();
  const toastConfig = useToastStore((state) => state.config);
  const resetToast = useToastStore((state) => state.resetToast);

  useEffect(() => {
    resetToast();
  }, [location, resetToast]);

  return (
    <IsLogin>
      <ScrollToTop />
      <AnimatePresence>{toastConfig.isShow && <Toast />}</AnimatePresence>
      <Outlet />
    </IsLogin>
  );
};

export default App;
