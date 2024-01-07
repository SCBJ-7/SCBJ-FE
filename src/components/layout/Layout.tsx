import * as S from "./Layout.style";
import Header from "./header/HeaderTop";
import BottomNav from "./navBottom/NavBottom";

interface ChildrenProps {
  children: React.ReactNode;
}

const Layout = ({ children }: ChildrenProps) => {
  return (
    <S.Container>
      <Header />
      <S.Wrapper>{children}</S.Wrapper>
      <BottomNav />
    </S.Container>
  );
};

export default Layout;
