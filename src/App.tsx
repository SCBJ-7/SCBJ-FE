import { OverlayProvider } from "@toss/use-overlay";

import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";

import { useToastStore } from "./store/store.ts";


import IsLogin from "@/components/isLogin/IsLogin";
import ScrollToTop from "@/components/scrollToTop/ScrollToTop";
import Toast from "@/components/toast/Toast";

import "./firebase.ts";

const App = () => {
  const location = useLocation();
  const toastConfig = useToastStore((state) => state.config);
  const resetToast = useToastStore((state) => state.resetToast);

  useEffect(() => {
    resetToast();
  }, [location, resetToast]);

  return (
    <OverlayProvider>
      <IsLogin>
        <ScrollToTop />
        <AnimatePresence>{toastConfig.isShow && <Toast />}</AnimatePresence>
        <Outlet />
      </IsLogin>
    </OverlayProvider>
  );
};

export default App;
