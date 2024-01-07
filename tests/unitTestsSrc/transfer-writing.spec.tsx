import { render } from "@testing-library/react";
// import TransferWriting from "../../src/pages/transferWritingPage/index";
import App from "../../src/App";

describe("Transfer Component", () => {
  beforeEach(() => {
    render(<App></App>);
  });

  it("첫 진입 시 토스트 메시지가 표출되었다가 3초 후 사라진다", () => {});

  it("타이틀이 판매할 내역 선택 으로 되어있다.", async () => {});

  it("기존 구매 내역을 잘 불러온다.", () => {});

  it("클릭 시 border가 primary컬러로 전환되는 애니메이션을 0.5초 보여주고 다음 페이지로 넘어간다", () => {});
});
