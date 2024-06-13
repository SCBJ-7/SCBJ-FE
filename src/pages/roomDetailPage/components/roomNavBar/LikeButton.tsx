import { useState } from "react";

import { LikeButtonWrapper } from "./RoomNavBar.style";

import HeartFill from "@/assets/icons/heart-fill.svg?react";
import Heart from "@/assets/icons/heart.svg?react";
import {
  useDeleteWishMutation,
  usePostWishMutation,
} from "@/hooks/api/useWishQuery";

const LikeButton = ({ productId }: { productId: string }) => {
  const [liked, setLiked] = useState<boolean>(false);

  const { deleteWish } = useDeleteWishMutation();
  const { postWish } = usePostWishMutation();

  const handleToggleLike = () => {
    setLiked((prev) => !prev);
    if (liked) {
      deleteWish(productId);
    } else {
      postWish(productId);
    }
  };

  return (
    <LikeButtonWrapper type="button" onClick={handleToggleLike}>
      {liked ? <HeartFill /> : <Heart />}
    </LikeButtonWrapper>
  );
};

export default LikeButton;
