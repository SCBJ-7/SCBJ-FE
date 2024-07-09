import styled from "styled-components";

import Header from "@/components/layout/header/HeaderTop.tsx";
import Layout from "@/components/layout/Layout.tsx";
import { Typo } from "@/components/ui/typo";
import { useWishInfiniteQuery } from "@/hooks/api/useWishQuery";
import { useIntersectionObserver } from "@/hooks/common/useIntersectionObserver";
import WishCard from "@/pages/wishListPage/components/wishCard/WishCard.tsx";
import { remCalc } from "@/utils/styleFormatter.ts";

const WishList = () => {
  const { data, fetchNextPage, hasNextPage } = useWishInfiniteQuery();

  const handleIntersect = (isIntersecting: boolean) => {
    if (isIntersecting && hasNextPage) {
      fetchNextPage();
    }
  };

  const { ref } = useIntersectionObserver({
    onChange: handleIntersect,
    threshold: 0.5,
  });

  return (
    <>
      <Header text={`찜한 숙소(${data?.pages?.[0].totalElements})`} />
      <Layout
        bg={"greyScale7"}
        pt={20}
        pb={32}
        paddingInline={16}
        isBottomNavOn
      >
        <ListWrapper>
          {data.pages?.[0].empty || !data.pages?.[0].totalElements ? (
            <NoResultCover>
              <Typo typo="title4">찜 등록된 상품이 없어요</Typo>
            </NoResultCover>
          ) : (
            data.pages.map((page) =>
              page.content.map((product) => (
                <WishCard key={product.id} product={product} />
              )),
            )
          )}
          {hasNextPage && <div ref={ref} />}
        </ListWrapper>
      </Layout>
    </>
  );
};

export default WishList;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${remCalc(16)};
`;

const NoResultCover = styled.div`
  margin: 50% auto;
`;
