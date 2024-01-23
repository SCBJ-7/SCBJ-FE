import Lottie from "lottie-react";
import loading from "@assets/loading.json";

import * as S from "./Loading.style";

const Loading = () => {
  return (
    <S.LoadingWrapper>
      <Lottie animationData={loading} style={{ width: 300, height: 300 }} />
    </S.LoadingWrapper>
  );
};
export default Loading;
