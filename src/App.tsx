import { Outlet } from "react-router-dom";
import ScrollToTop from "@components/scrollToTop/ScrollToTop";
import Toast from "./components/toast/Toast";
import "./firebase.ts";

import { useToastStore } from "./store/store";
import { AnimatePresence } from "framer-motion";

function App() {
  const toastConfig = useToastStore((state) => state.config);

  return (
    <>
      <ScrollToTop />
      <AnimatePresence>{toastConfig.isShow && <Toast />}</AnimatePresence>
      <Outlet />
    </>
  );
}

export default App;
