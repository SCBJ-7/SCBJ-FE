import { getEmailVerification } from "@mocks/handlers/email.ts";
import { server } from "@mocks/server.ts";
import VerificationPage from "@/pages/connectYanoljaPage/verificationPage/VerificationPage.tsx";
import { theme } from "@/styles/theme.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
});
afterAll(() => server.close());

describe("입력 필드 유효성 검사 테스트", () => {
  beforeEach(async () => {
    const queryClient = new QueryClient();

    render(
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <VerificationPage />
          </MemoryRouter>
        </QueryClientProvider>
        ,
      </ThemeProvider>,
    );
  });

  it("초기 렌더링 시 야놀자 계정 연동 버튼이 그레이스케일이어야 한다.", () => {
    // given
    const connectButton = screen.getByRole("button", {
      name: "야놀자 계정 연동하기",
    });

    // then
    expect(connectButton).toHaveStyle(
      `background-color: ${theme.color.greyScale5}`,
    );
  });

  it("유효한 이메일 입력 시 에러 메시지가 나타나지 않아야 한다.", () => {
    // given
    const emailInput = screen.getByLabelText("야놀자 계정 찾기");

    // when
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    // then
    expect(screen.queryByText("이메일 양식이 올바르지 않습니다")).toBeNull();
  });

  it("유효한 이메일이 입력되고 '인증 요청' 버튼을 누르면 버튼 텍스트가 '재요청'으로 바뀐다. ", async () => {
    // given
    const emailInput = screen.getByLabelText("야놀자 계정 찾기");

    // when
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    const validateButton = screen.getByRole("button", { name: "인증 요청" });
    fireEvent.click(validateButton);

    // then
    await waitFor(() => expect(validateButton).toHaveTextContent("재요청"));
  });

  it("유효하지 않은 이메일을 입력하고 '인증 요청' 버튼을 누르면 '유효하지 않은 이메일 입니다.' 에러 메시지가 나타난다.", async () => {
    // given
    const emailInput = screen.getByLabelText("야놀자 계정 찾기");

    // when
    fireEvent.change(emailInput, { target: { value: "test" } });
    const validateButton = screen.getByRole("button", { name: "인증 요청" });
    fireEvent.click(validateButton);

    server.use(getEmailVerification("error2"));
    // then
    await waitFor(() =>
      expect(
        screen.getByText("유효하지 않은 이메일입니다."),
      ).toBeInTheDocument(),
    );
  });

  it("유효한 인증번호를 입력했을 때 에러 메시지가 나타나지 않아야 한다.", () => {
    // given
    const emailInput = screen.getByLabelText("야놀자 계정 찾기");
    const validateButton = screen.getByRole("button", { name: "인증 요청" });

    // when
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(validateButton);
    fireEvent.change(screen.getByLabelText("인증번호 입력"), {
      target: { value: "123456" },
    });

    // then
    expect(screen.queryByText("잘못된 인증번호입니다")).toBeNull();
  });

  it("유효하지 않은 인증번호를 입력했을 때 '잘못된 인증번호입니다' 에러 메시지가 나타난다.", async () => {
    // given
    const emailInput = screen.getByLabelText("야놀자 계정 찾기");
    const validateButton = screen.getByRole("button", { name: "인증 요청" });

    // when
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(validateButton);
    fireEvent.change(screen.getByLabelText("인증번호 입력"), {
      target: { value: "1234567" },
    });

    // then
    await (() =>
      expect(screen.getByText("잘못된 인증번호입니다")).toBeInTheDocument());
  });

  it("유효한 인증번호를 입력했을 때 '인증 확인' 버튼이 활성화되어야 한다.", () => {
    // given
    const emailInput = screen.getByLabelText("야놀자 계정 찾기");
    const validateButton = screen.getByRole("button", { name: "인증 요청" });

    // when
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(validateButton);
    fireEvent.change(screen.getByLabelText("인증번호 입력"), {
      target: { value: "123456" },
    });

    // then
    const confirmButton = screen.getByRole("button", { name: "인증 확인" });
    expect(confirmButton).toBeEnabled();
  });

  it("유효한 인증번호를 입력했을 때 '인증 확인' 버튼을 누르면 버튼 텍스트가 '인증 완료'로 바뀐다.", async () => {
    server.use(getEmailVerification());
    // given
    const emailInput = screen.getByLabelText("야놀자 계정 찾기");
    const validateButton = screen.getByRole("button", { name: "인증 요청" });

    // when
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(validateButton);
    await waitFor(() => expect(validateButton).toHaveTextContent("재요청"));

    fireEvent.change(screen.getByLabelText("인증번호 입력"), {
      target: { value: "1039475" },
    });
    const confirmButton = screen.getByRole("button", { name: "인증 확인" });
    fireEvent.click(confirmButton);

    // then
    await waitFor(() => expect(confirmButton).toHaveTextContent("인증 완료"));
  });

  it("유효한 인증번호를 입력 후 인증이 완료되면 '인증이 완료되었습니다' 성공 메시지가 나타난다.", async () => {
    // given
    const emailInput = screen.getByLabelText("야놀자 계정 찾기");
    const validateButton = screen.getByRole("button", { name: "인증 요청" });

    // when
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(validateButton);
    fireEvent.change(screen.getByLabelText("인증번호 입력"), {
      target: { value: "1039475" },
    });
    const confirmButton = screen.getByRole("button", { name: "인증 확인" });
    fireEvent.click(confirmButton);

    // then
    await (() =>
      expect(screen.getByText("인증이 완료되었습니다")).toBeInTheDocument());
  });
});

describe("약관 동의, 폼 제출 테스트", () => {
  beforeEach(async () => {
    const queryClient = new QueryClient();

    render(
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <MemoryRouter>
            <VerificationPage />
          </MemoryRouter>
        </QueryClientProvider>
        ,
      </ThemeProvider>,
    );
  });

  it("전체동의를 체크하면 모든 약관이 체크된다 ", () => {
    // given
    const allAgreeCheckbox = screen.getByRole("checkbox", {
      name: "전체동의",
    });

    // when
    fireEvent.click(allAgreeCheckbox);

    // then
    expect(screen.getByLabelText("이용약관")).toBeChecked();
    expect(screen.getByLabelText("개인정보 처리방침")).toBeChecked();
  });

  it("인증이 완료되고 약관에 동의하면 '야놀자 계정 연동하기' 버튼이 활성화된다.", async () => {
    // given
    const emailInput = screen.getByLabelText("야놀자 계정 찾기");
    const validateButton = screen.getByRole("button", { name: "인증 요청" });
    const allAgreeCheckbox = screen.getByRole("checkbox", {
      name: "전체동의",
    });
    const confirmButton = screen.getByRole("button", { name: "인증 확인" });

    // when
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(validateButton);
    fireEvent.change(screen.getByLabelText("인증번호 입력"), {
      target: { value: "1039475" },
    });
    fireEvent.click(confirmButton);
    fireEvent.click(allAgreeCheckbox);

    // then
    await waitFor(() =>
      expect(
        screen.getByRole("button", { name: "야놀자 계정 연동하기" }),
      ).toHaveStyle({
        backgroundColor: theme.color.yanoljaPink,
      }),
    );
  });

  it("인증이 완료되고 약관에 동의하지 않고 '아놀자 계정 버튼 연동하기' 버튼을 클릭하면 제출 버튼이 그레이스케일이여야 한다.", () => {
    // given
    const emailInput = screen.getByLabelText("야놀자 계정 찾기");
    const validateButton = screen.getByRole("button", { name: "인증 요청" });
    const confirmButton = screen.getByRole("button", { name: "인증 확인" });

    // when
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(validateButton);
    fireEvent.change(screen.getByLabelText("인증번호 입력"), {
      target: { value: "1039475" },
    });
    fireEvent.click(confirmButton);
    const allAgreeCheckbox = screen.getByRole("checkbox", {
      name: "전체동의",
    });
    expect(allAgreeCheckbox).not.toBeChecked();

    // then
    const connectButton = screen.getByRole("button", {
      name: "야놀자 계정 연동하기",
    });
    fireEvent.click(connectButton);
    expect(connectButton).toHaveStyle({
      backgroundColor: theme.color.greyScale5,
    });
  });
});
