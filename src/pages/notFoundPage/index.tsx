import { PATH } from "@constants/path";

import NoResult from "@/components/noResult/NoResult";

const NotFound = () => {
  const content = {
    title: "요청하신 페이지를 찾을 수 없습니다",
    desc: (
      <>
        방문하신 페이지의 주소가 <pre>잘못되었거나 삭제된 페이지입니다</pre>
      </>
    ),
    buttonDesc: "홈으로 돌아가기",
    navigateTo: PATH.ROOT,
  };

  return (
    <NoResult
      title={content.title}
      desc={content.desc}
      buttonDesc={content.buttonDesc}
      navigateTo={content.navigateTo}
    />
  );
};

export default NotFound;
