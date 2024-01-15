import { Outlet, useLocation } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import Toast from "./components/toast/Toast.tsx";

import { useToastStore } from "./store/store.ts";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";

function App() {
  const toastConfig = useToastStore((state) => state.config);
  const setToastConfig = useToastStore((state) => state.setToastConfig);
  const location = useLocation();

  useEffect(() => {
    setToastConfig({
      isShow: false,
      isError: false,
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
