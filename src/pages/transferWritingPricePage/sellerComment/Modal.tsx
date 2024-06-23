import { AnimatePresence } from "framer-motion";
import ReactDOM from "react-dom";

import * as S from "./Modal.style";
import TermsSection from "../agreementSection/AgreementSection";

import { SELLERCOMMENTS, type SellerCommentType } from "@/types/sellerComments";

interface CommentModalProps {
  modalType: "SELLER" | "AGREEMENT";
  sellerComments: SellerCommentType[];
  setSellerComments: React.Dispatch<React.SetStateAction<SellerCommentType[]>>;
  isModalOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  submitHandler?: () => void;
  opt1: boolean;
  opt2: boolean;
  opt3: boolean;
  optFinal: boolean;
  setOpt1: React.Dispatch<React.SetStateAction<boolean>>;
  setOpt2: React.Dispatch<React.SetStateAction<boolean>>;
  setOpt3: React.Dispatch<React.SetStateAction<boolean>>;
  setOptFinal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Modal = ({
  modalType,
  sellerComments,
  setSellerComments,
  isModalOpen,
  setIsModalOpen,
  submitHandler,
  opt1,
  opt2,
  opt3,
  optFinal,
  setOpt1,
  setOpt2,
  setOpt3,
  setOptFinal,
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
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    if (submitHandler) {
      submitHandler();
    }
    setIsModalOpen(false);
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
      {isModalOpen && modalType === "SELLER" && (
        <>
          <S.BackDrop
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setIsModalOpen(false)}
            variants={backdropVariants}
            transition={{ duration: 0.3 }}
          />
          <S.CommentModalContainer
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={modalVariants}
            transition={{ duration: 0.3 }}
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
              <S.InstallButton onClick={() => setIsModalOpen(false)}>
                키워드 추가 완료
              </S.InstallButton>
            </S.ButtonWrapper>
          </S.CommentModalContainer>
        </>
      )}
      {isModalOpen && modalType === "AGREEMENT" && (
        <>
          <S.BackDrop
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={() => setIsModalOpen(false)}
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
              <S.Title>마지막으로 확인해주세요!</S.Title>
              <S.Message>판매게시물을 올린 후에는 수정할 수 없어요</S.Message>
            </S.Section>
            <TermsSection
              opt1={opt1}
              opt2={opt2}
              opt3={opt3}
              optFinal={optFinal}
              setOpt1={setOpt1}
              setOpt2={setOpt2}
              setOpt3={setOpt3}
              setOptFinal={setOptFinal}
            />
            <S.ButtonWrapper>
              <S.InstallButton onClick={handleSubmit}>
                판매글 올리기
              </S.InstallButton>
            </S.ButtonWrapper>
          </S.CommentModalContainer>
        </>
      )}
    </AnimatePresence>,
    appRoot,
  );
};
