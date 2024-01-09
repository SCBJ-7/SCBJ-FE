import {
  fireEvent,
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import App from "../../src/App";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";

describe("Transfer Component", () => {
  beforeEach(() => {
    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter>
          <App></App>
        </MemoryRouter>
      </ThemeProvider>,
    );
  });

  it("첫 진입 시 토스트 메시지가 표출되었다가 3초 후 사라진다", () => {
    const transferTab = screen.getByText("판매하기");

    fireEvent.click(transferTab);

    // 추후 추가 예정
  });

  it("타이틀이 판매할 내역 선택 으로 되어있다.", async () => {
    const transferTab = screen.getByText("판매하기");

    fireEvent.click(transferTab);

    expect(screen.getByText("판매할 내역 선택")).toBeVisible();
  });

  it("기존 구매 내역을 잘 불러온다.", async () => {
    const transferTab = screen.getByText("판매하기");

    fireEvent.click(transferTab);

    await waitFor(() => {
      const transferItems = screen.queryAllByText(/체크인까지/i);
      if (transferItems.length === 0) return false;

      transferItems.forEach((el) => {
        expect(el).toBeInTheDocument();
      });
    });
  });

  it("클릭 시 border가 primary컬러로 전환되는 애니메이션을 0.5초 보여주고 다음 페이지로 넘어간다", async () => {
    const transferTab = screen.getByText("판매하기");

    fireEvent.click(transferTab);

    await waitFor(() => {
      const transferItem = screen.queryByText(/체크인까지/i);

      if (transferItem !== null) {
        fireEvent.click(transferItem);
        waitForElementToBeRemoved(() => {
          transferItem;
        });
      }
    });
  });
});
