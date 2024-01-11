import { Outlet } from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";

import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchUserInfo } from "@apis/fetchUserInfo.ts";
import { useUserInfoStore } from "./store/store.ts";

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

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
