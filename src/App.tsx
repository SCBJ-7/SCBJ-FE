import { Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import Toast from "./components/toast/Toast.tsx";

import { useToastStore } from "./store/store.ts";
import { AnimatePresence } from "framer-motion";

function App() {
  const toastConfig = useToastStore((state) => state.config);

  return (
    <Layout>
      <AnimatePresence>{toastConfig.isShow && <Toast />}</AnimatePresence>
      <Outlet />
    </Layout>
  );
}

export default App;
