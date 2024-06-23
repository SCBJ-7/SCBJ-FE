import { AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";

import * as S from "./CommentModal.style";

import { SELLERCOMMENTS, type SellerCommentType } from "@/types/sellerComments";

interface CommentModalProps {
  sellerComments: SellerCommentType[];
  setSellerComments: React.Dispatch<React.SetStateAction<SellerCommentType[]>>;
  isCommentModalOpen: boolean;
  setIsCommentModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CommentModal = ({
  sellerComments,
  setSellerComments,
  isCommentModalOpen,
  setIsCommentModalOpen,
}: CommentModalProps) => {
  const handleChoose = (badgeName: SellerCommentType) => {
    if (sellerComments.includes(badgeName)) {
      setSellerComments([
        ...sellerComments.filter((item) => item !== badgeName),
      ]);
    } else if (sellerComments.length >= 5) {
      return;
    } else {
      setSellerComments([...sellerComments, badgeName]);
    }
  };

  const handleCancle = () => {
    setSellerComments([]);
    setIsCommentModalOpen(false);
  };

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { y: "100vh", x: "50", opacity: 0 },
    visible: { y: 0, x: "50", opacity: 1 },
    exit: { y: "-100", x: "50", opacity: 0 },
  };

  const appRoot = document.getElementById("app-install-pop")!;

  return ReactDOM.createPortal(
    <AnimatePresence mode="wait">
      {isCommentModalOpen && (
        <>
          <S.BackDrop
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setIsCommentModalOpen(false)}
            variants={backdropVariants}
            transition={{ duration: 0.5 }}
          />
          <S.CommentModalContainer
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            transition={{ duration: 0.5 }}
          >
            <S.Section>
              <S.Title>판매자 코멘트 추가하기</S.Title>
              <S.Message>
                구매자에게 상품을 어필할 키워드를 추가해보세요!
              </S.Message>
            </S.Section>
            <S.Section>
              <S.TitleDiv>
                <S.Subtitle>코멘트 선택</S.Subtitle>
                <S.Count>
                  <span>{sellerComments.length}</span>/5
                </S.Count>
              </S.TitleDiv>
              <S.BadgesList>
                {SELLERCOMMENTS.map((item) =>
                  sellerComments.includes(item) ? (
                    <S.Badge
                      key={item}
                      $clicked={true}
                      onClick={() => handleChoose(item)}
                    >
                      {item}
                    </S.Badge>
                  ) : (
                    <S.Badge
                      key={item}
                      $clicked={false}
                      onClick={() => handleChoose(item)}
                    >
                      {item}
                    </S.Badge>
                  ),
                )}
              </S.BadgesList>
            </S.Section>
            <S.ButtonWrapper>
              <S.DismissButton onClick={handleCancle}>
                키워드 없이 올리기
              </S.DismissButton>
              <S.InstallButton onClick={() => setIsCommentModalOpen(false)}>
                키워드 추가 완료
              </S.InstallButton>
            </S.ButtonWrapper>
          </S.CommentModalContainer>
        </>
      )}
    </AnimatePresence>,
    appRoot,
  );
};
