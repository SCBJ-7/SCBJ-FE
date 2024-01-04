import { Outlet } from "react-router-dom";
import * as S from "./App.styled";

function App() {
  return (
    <S.Container>
      {/* <SHeader /> */}
      <S.Wrapper>
        <Outlet />
      </S.Wrapper>
      {/* <SFooter/> */}
    </S.Container>
  );
}

export default App;
