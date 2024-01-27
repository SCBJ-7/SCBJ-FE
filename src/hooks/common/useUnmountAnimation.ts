import { useEffect, useState } from "react";

export default function useUnmountAnimation(condition: boolean) {
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (!condition) {
      // condition이 false로 변경되면 (언마운트되어야 할 때)
      // 애니메이션을 시작하기 위해 isCompleted를 true로 설정
      setIsCompleted(true);
    }
  }, [condition]);

  const handleTransitionEnd = () => {
    if (!condition) {
      // 애니메이션이 종료되면 isCompleted를 false로 설정하여 컴포넌트를 DOM에서 제거
      setIsCompleted(false);
    }
  };

  return {
    // 컴포넌트가 렌더링 될 조건: condition이 true이거나 애니메이션이 완료되지 않았을 때
    isRenderCondition: condition || isCompleted,
    handleTransitionEnd,
    // 애니메이션을 트리거하는 조건: condition이 false이고 애니메이션이 시작됐을 때
    triggerAnimation: !condition && isCompleted,
  };
}
