import Busan from "@assets/regionImages/busan.jpg";
import Chungcheong from "@assets/regionImages/chungcheong.jpg";
import Gangwon from "@assets/regionImages/gangwon.jpg";
import Gyeonggi from "@assets/regionImages/gyeonggi.jpg";
import Gyeongsang from "@assets/regionImages/gyeongsang.jpg";
import Jeju from "@assets/regionImages/jeju.jpg";
import Jeolla from "@assets/regionImages/jeolla.jpg";
import Seoul from "@assets/regionImages/seoul.jpg";
import React from "react";

import * as S from "./RegionModal.style";

interface RegionModalProps {
  setRegionIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
  location: string | null;
  setLocation: React.Dispatch<React.SetStateAction<string | null>>;
}

const RegionModal = ({
  setRegionIsModalOpen,
  location,
  setLocation,
}: RegionModalProps) => {
  const handleItemClick = (region: string) => {
    if (location !== region) {
      setLocation(region);
      setRegionIsModalOpen(false);
    } else {
      setLocation(null);
    }
  };

  const handleModalClose = () => {
    setRegionIsModalOpen(false);
  };

  return (
    <S.ModalContainer>
      <S.ModalTop>
        <div></div>
        <S.ModalTitle>지역</S.ModalTitle>
        <div>
          <S.ModalCloseButton onClick={handleModalClose} />
        </div>
      </S.ModalTop>
      <S.ModalContent>
        <S.ModalRegionItems>
          <S.RegionItemsLine>
            <S.RegionItem
              onClick={() => handleItemClick("서울")}
              className={location === "서울" ? "active" : ""}
            >
              <S.RegionImage src={Seoul} />

              <S.RegionName>서울</S.RegionName>
            </S.RegionItem>
            <S.RegionItem
              onClick={() => handleItemClick("부산")}
              className={location === "부산" ? "active" : ""}
            >
              <S.RegionImage src={Busan} />
              <S.RegionName>부산</S.RegionName>
            </S.RegionItem>
            <S.RegionItem
              onClick={() => handleItemClick("제주")}
              className={location === "제주" ? "active" : ""}
            >
              <S.RegionImage src={Jeju} />

              <S.RegionName>제주</S.RegionName>
            </S.RegionItem>
          </S.RegionItemsLine>
          <S.RegionItemsLine>
            <S.RegionItem
              onClick={() => handleItemClick("경기")}
              className={location === "경기" ? "active" : ""}
            >
              <S.RegionImage src={Gyeonggi} />

              <S.RegionName>경기</S.RegionName>
            </S.RegionItem>
            <S.RegionItem
              onClick={() => handleItemClick("강원")}
              className={location === "강원" ? "active" : ""}
            >
              <S.RegionImage src={Gangwon} />

              <S.RegionName>강원</S.RegionName>
            </S.RegionItem>
            <S.RegionItem
              onClick={() => handleItemClick("경상")}
              className={location === "경상" ? "active" : ""}
            >
              <S.RegionImage src={Gyeongsang} />

              <S.RegionName>경상</S.RegionName>
            </S.RegionItem>
          </S.RegionItemsLine>
          <S.RegionItemsLine>
            <S.RegionItem
              onClick={() => handleItemClick("전라")}
              className={location === "전라" ? "active" : ""}
            >
              <S.RegionImage src={Jeolla} />
              <S.RegionName>전라</S.RegionName>
            </S.RegionItem>
            <S.RegionItem
              onClick={() => handleItemClick("충청")}
              className={location === "충청" ? "active" : ""}
            >
              <S.RegionImage src={Chungcheong} />

              <S.RegionName>충청</S.RegionName>
            </S.RegionItem>
          </S.RegionItemsLine>
        </S.ModalRegionItems>
      </S.ModalContent>
    </S.ModalContainer>
  );
};

export default RegionModal;
