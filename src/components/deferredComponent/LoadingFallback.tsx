import DeferredComponent from "./DeferredComponent";
import Loading from "../lottie/loading/Loading";

const LoadingFallback = () => {
  return (
    <DeferredComponent>
      <Loading />
    </DeferredComponent>
  );
};

export default LoadingFallback;
