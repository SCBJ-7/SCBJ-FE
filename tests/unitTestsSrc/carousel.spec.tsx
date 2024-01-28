import Carousel from "@components/carousel/Carousel";
import { fireEvent, render, screen } from "@testing-library/react";

const dummyImg = ["image1.jpg", "image2.jpg", "image3.jpg"];

describe("Carousel Component", () => {
  beforeEach(() => {
    render(<Carousel images={dummyImg} />);
  });

  it("초기 렌더링 시 이전 버튼이 보이지 않아야 한다.", () => {
    // given - 초기 슬라이드 상태 확인 (첫 번째 슬라이드)
    expect(screen.getByAltText("Slide 0")).toBeVisible();

    // when
    const prevButton = screen.queryByRole("button", { name: "뒤로가기" });

    // then
    expect(prevButton).not.toBeVisible();
  });

  it("버튼 클릭 시 슬라이드가 올바르게 이동해야 한다.", async () => {
    // given - 초기 슬라이드 상태 확인
    expect(screen.getByAltText("Slide 0")).toBeVisible();

    // when - 다음 버튼 클릭
    const nextButton = screen.getByRole("button", { name: "앞으로가기" });
    fireEvent.click(nextButton);

    // then - 다음 이미지(두 번째 슬라이드)만 화면에 표시되는지 확인
    expect(screen.getByTestId("slide-1")).toBeVisible();

    // when - 이전 버튼 클릭
    const prevButton = screen.getByRole("button", { name: "뒤로가기" });
    fireEvent.click(prevButton);

    // then - 다시 첫 번째 슬라이드만 화면에 표시되는지 확인
    expect(screen.getByTestId("slide-0")).toBeVisible();
  });

  it("처음 슬라이드에서 이전 버튼이 보이지 않아야 한다.", () => {
    // given
    expect(screen.getByAltText("Slide 0")).toBeVisible();

    // when - 다음 슬라이드로 이동 후 처음 슬라이드로 다시 돌아옴
    const nextButton = screen.getByRole("button", { name: "앞으로가기" });
    fireEvent.click(nextButton);
    const prevButton = screen.queryByRole("button", { name: "뒤로가기" });
    fireEvent.click(prevButton as HTMLElement);

    // then
    expect(prevButton).not.toBeVisible();
  });

  it("마지막 슬라이드에서 다음 버튼이 보이지 않아야 한다.", () => {
    // given

    // when - 마지막 슬라이드로 이동
    const nextButton = screen.getByRole("button", { name: "앞으로가기" });
    for (let i = 0; i < dummyImg.length - 1; i++) {
      fireEvent.click(nextButton);
    }

    // then
    expect(nextButton).not.toBeVisible();
  });
});

describe("Carousel Component with Infinite loop", () => {
  beforeEach(() => {
    render(<Carousel images={dummyImg} infinite={true} />);
  });

  it("처음 슬라이드에서 이전 버튼을 클릭했을 때 마지막 슬라이드에 있어야 한다.", () => {
    // given - 첫 번째 슬라이드 확인
    expect(screen.getByAltText("Slide 0")).toBeVisible();

    // when - 처음 슬라이드에서 이전 버튼 클릭
    const prevButton = screen.getByRole("button", { name: "뒤로가기" });
    fireEvent.click(prevButton);

    // then - 마지막 슬라이드만 화면에 표시되는지 확인
    const lastSlideIndex = dummyImg.length - 1;
    expect(screen.getByTestId(`slide-${lastSlideIndex}`)).toBeVisible();
  });
});
