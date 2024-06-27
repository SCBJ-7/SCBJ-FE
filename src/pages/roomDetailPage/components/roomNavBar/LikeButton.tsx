import { useEffect, useState } from "react";

import { LikeButtonWrapper } from "./RoomNavBar.style";

import HeartFill from "@/assets/icons/heart-fill.svg?react";
import Heart from "@/assets/icons/heart.svg?react";
import {
  useDeleteWishMutation,
  usePostWishMutation,
} from "@/hooks/api/useWishQuery";

const LikeButton = ({
  productId,
  isLike,
}: {
  productId: string;
  isLike: boolean;
}) => {
  const [liked, setLiked] = useState<boolean>(isLike);

  const { deleteWish } = useDeleteWishMutation();
  const { postWish } = usePostWishMutation();

  const handleToggleLike = () => {
    if (liked) {
      deleteWish(parseInt(productId), {
        onSuccess: () => setLiked(false),
      });
    } else {
      postWish(parseInt(productId), {
        onSuccess: () => setLiked(true),
      });
    }
  };

  useEffect(() => {
    setLiked(isLike);
  }, [isLike]);

  return (
    <LikeButtonWrapper type="button" onClick={handleToggleLike}>
      {liked ? <HeartFill /> : <Heart />}
    </LikeButtonWrapper>
  );
};

export default LikeButton;
