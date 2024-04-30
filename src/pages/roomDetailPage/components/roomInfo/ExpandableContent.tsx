import ArrowSvg from "@assets/icons/ic_arrow.svg?react";
import React, { useState, useEffect, useRef, PropsWithChildren } from "react";
import styled from "styled-components";

const ExpandableContent: React.FC<
  PropsWithChildren<{ visibleLine?: number }>
> = ({ children, visibleLine = 2 }) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);
  const [baseHeight, setBaseHeight] = useState<number>(0);
  const [showEllipsis, setShowEllipsis] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      updateMaxHeight();
    });

    updateMaxHeight();

    contentRef.current &&
      observer.observe(contentRef.current, {
        childList: true,
        subtree: true,
      });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const contentElement = contentRef.current;
    if (contentElement) {
      const handleTransitionEnd = () => {
        const isClipped =
          contentElement.scrollHeight > contentElement.clientHeight;
        if (!isExpanded && isClipped) {
          setShowEllipsis(true);
        }
      };

      contentElement.addEventListener("transitionend", handleTransitionEnd);

      return () => {
        contentElement.removeEventListener(
          "transitionend",
          handleTransitionEnd,
        );
      };
    }
  }, [isExpanded]);

  const updateMaxHeight = () => {
    const contentElement = contentRef.current;
    if (contentElement) {
      const childrenArray = Array.from(
        contentElement.children,
      ) as HTMLElement[];
      const lineHeights: number[] = [];
      let currentTop: number | null = null;
      let currentLineHeight = 0;

      childrenArray.forEach((child, index) => {
        if (currentTop === null) {
          currentTop = child.offsetTop;
        }

        if (child.offsetTop === currentTop) {
          currentLineHeight = Math.max(currentLineHeight, child.offsetHeight);
        } else {
          lineHeights.push(currentLineHeight);
          currentTop = child.offsetTop;
          currentLineHeight = child.offsetHeight;
        }

        if (index === childrenArray.length - 1) {
          lineHeights.push(currentLineHeight);
        }
      });

      const gap = parseFloat(getComputedStyle(contentElement).gap);
      const totalHeight = lineHeights.reduce(
        (sum, height) => sum + height + gap,
        1,
      );

      setMaxHeight(totalHeight);

      const visibleLinesHeight = lineHeights
        .slice(0, visibleLine)
        .reduce(
          (sum, height, index) =>
            sum + height + (index < visibleLine - 1 ? gap : 0),
          0,
        );

      setBaseHeight(visibleLinesHeight);
    }
  };

  const toggleExpand = () => {
    setShowEllipsis(false);
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <TagWrapper
        ref={contentRef}
        className={showEllipsis ? "clipped" : ""}
        style={{
          maxHeight: isExpanded ? `${maxHeight}px` : `${baseHeight}px`,
          overflow: "hidden",
          transition: "max-height 0.3s ease-in-out",
        }}
      >
        {children}
      </TagWrapper>
      {maxHeight && maxHeight > baseHeight && (
        <Button type="button" onClick={toggleExpand}>
          {isExpanded ? <Arrow /> : <Arrow className="collapse" />}
        </Button>
      )}
    </>
  );
};

export default ExpandableContent;

const TagWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  position: relative;

  &.clipped::after {
    content: "...";
    position: absolute;
    right: 56px; // TODO: 동적으로 위치 조절할 수 있어야 함.
    bottom: 0;

    ${({ theme }) => theme.typo.caption1};
    letter-spacing: 0.6px;
    color: ${({ theme }) => theme.color.percentOrange};
  }
`;

const Button = styled.button`
  display: block;
  margin-left: auto;
  margin-top: 0.5rem;
`;

const Arrow = styled(ArrowSvg)`
  width: 20px;
  height: 20px;

  transform: rotate(-90deg);

  &.collapse {
    transform: rotate(90deg);
  }

  transition: transform 0.2s ease-in-out;
`;
