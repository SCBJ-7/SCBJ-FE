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
  const setUserInfo = useUserInfoStore((state) => state.setUserInfo);

  if (data) {
    setUserInfo({
      ...data,
    });
    console.log(data, "Data Set in UserInfoStore");
  }

  console.log("userInfo: ", data);

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
