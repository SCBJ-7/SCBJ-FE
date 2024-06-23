import { IoAddSharp as AddIcon } from "react-icons/io5";

import * as S from "./SellerComment.style";

import { type SellerCommentType } from "@/types/sellerComments";

interface SellerCommentsProps {
  sellerComments: SellerCommentType[];
  setIsSellerCommentOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SellerComment = ({
  sellerComments,
  setIsSellerCommentOpen,
}: SellerCommentsProps) => {
  return (
    <S.Container>
      <S.Title>판매자 코멘트</S.Title>
      <S.Desc>상품을 어필할 키워드를 추가해 보세요!</S.Desc>
      <S.BadgesList>
        {sellerComments.map((item) => (
          <S.Badge># {item}</S.Badge>
        ))}
      </S.BadgesList>
      <S.AddBadgeButton onClick={() => setIsSellerCommentOpen(true)}>
        <AddIcon size={20} className="icon" />
        추가하기
      </S.AddBadgeButton>
    </S.Container>
  );
};

export default SellerComment;
