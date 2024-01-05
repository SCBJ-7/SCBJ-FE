import { Outlet } from "react-router-dom";
import Layout from "./components/layout/index.tsx";

function App() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
