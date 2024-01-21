import { useState } from "react";
import * as S from "./NoticePage.style";

const NoticePage = () => {
  const [messages] = useState([1, 2, 3, 4, 5]);

  return (
    <S.Container>
      {messages.map((item) =>
        item !== 5 ? (
          <S.NewMessage>
            <h1>‘호텔 인 나인 강남’의 판매가 완료 되었어요!</h1>
            <div>
              <section />
              <h3>2023. 12. 30. 17:00</h3>
            </div>
          </S.NewMessage>
        ) : (
          <S.OldMessage>
            <h1>‘호텔 인 나인 강남’의 판매가 완료 되었어요!</h1>
            <h3>2023. 12. 30. 17:00</h3>
          </S.OldMessage>
        ),
      )}
    </S.Container>
  );
};

export default NoticePage;
