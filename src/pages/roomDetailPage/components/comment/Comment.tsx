import { motion, useAnimation } from "framer-motion";
import React, {
  useState,
  useEffect,
  useRef,
  PropsWithChildren,
  useLayoutEffect,
  isValidElement,
  cloneElement,
} from "react";
import styled from "styled-components";

import ArrowSvg from "@/assets/icons/ic_arrow.svg?react";
import IconChat from "@/assets/icons/ic_chat-fill.svg?react";
import { Typo } from "@/components/ui/typo";

const Comment = ({ children }: PropsWithChildren) => {
  const [expanded, setExpanded] = useState(false);
  const [expandable, setExpandable] = useState(false);

  const controls = useAnimation();
  const contentRef = useRef<HTMLDivElement>(null);
  const childrenRef = useRef<HTMLElement>(null);

  const [childHeight, setChildHeight] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);

  const toggleExpanded = () => setExpanded((prev) => !prev);

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleExpanded;
    }
  };

  useLayoutEffect(() => {
    if (contentRef.current) {
      const contentHeight = contentRef.current.scrollHeight;
      setContentHeight(contentHeight + 1);

      if (childrenRef.current) {
        const childHeight = childrenRef.current.offsetHeight;
        setChildHeight(childHeight + 1);
        setExpandable(childHeight !== contentHeight);
      }
    }
  }, [expanded]);

  useEffect(() => {
    if (expandable) {
      const targetHeight = expanded ? contentHeight : childHeight;
      controls.start({ height: targetHeight });
    } else {
      controls.start({ height: contentHeight });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded, expandable, contentHeight, childHeight]);

  // cloneElement를 통해 children에 ref를 전달
  const _children = React.Children.map(children, (child, index) => {
    // 첫 번째 자식 요소에만 ref를 할당
    if (index === 0 && isValidElement(child)) {
      return cloneElement(child as React.ReactElement, { ref: childrenRef });
    }
    return child;
  });

  const transition = {
    type: "tween",
    duration: 0.3,
    ease: [0.4, 0, 0.2, 1],
  };

  return (
    <CommentContainer>
      <CommentHeader
        type="button"
        aria-expanded={expanded}
        expand={expanded}
        onClick={toggleExpanded}
        onKeyDown={handleKeyPress}
      >
        <TitleWrapper>
          <IconChat />
          <Typo typo="body2">판매자 코멘트</Typo>
        </TitleWrapper>
        {expandable && <ArrowSvg className="chevron" />}
      </CommentHeader>
      <ContentWrapper
        ref={contentRef}
        as={motion.div}
        initial={{ height: childHeight }}
        animate={controls}
        transition={transition}
        expanded={expanded}
        role="region"
      >
        {_children}
      </ContentWrapper>
    </CommentContainer>
  );
};

export default Comment;

const CommentContainer = styled.section`
  padding: 2rem 1.25rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.color.white};
`;

const ContentWrapper = styled.div<{
  expanded: boolean;
}>`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  position: relative;

  overflow: hidden;
  text-overflow: ellipsis;
`;


const CommentHeader = styled.button.withConfig({
  shouldForwardProp: (prop) => !["expand"].includes(prop),
})<{ expand: boolean }>`
  margin-bottom: 1rem;

  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  & > svg.chevron {
    width: 20px;
    height: 20px;

    transform: ${({ expand }) => (expand ? "rotate(-90deg)" : "rotate(90deg)")};
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 0.3s;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 0.4rem;
`;
