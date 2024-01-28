import loading from "@assets/lottie/loading.json";
import Lottie from "lottie-react";

import * as S from "./Loading.style";

const Loading = () => {
  return (
    <S.LoadingWrapper>
      <Lottie animationData={loading} style={{ width: 180, height: 180 }} />
    </S.LoadingWrapper>
  );
};
export default Loading;
