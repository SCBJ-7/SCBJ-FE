import { useValidateEmailMutation } from "@/hooks/api/useValidateEmailMutation";
import { getEmailVerification } from "@mocks/handlers/email";
import { server } from "@mocks/server";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { act, renderHook, waitFor } from "@testing-library/react";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});
const wrapper = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe("useValidateEmailMutation 훅 테스트", () => {
  beforeAll(() => server.listen());
  afterEach(() => {
    server.resetHandlers();
    queryClient.resetQueries();
  });
  afterAll(() => server.close());

  it("유효한 이메일로 요청이 가면 이메일 인증번호 발급에 성공한다.", async () => {
    const { result } = renderHook(() => useValidateEmailMutation(), {
      wrapper,
    });
    server.use(getEmailVerification());

    act(() => {
      return result.current.mutate({ email: "test@example.com" });
    });

    await waitFor(() => expect(result.current.isSuccess).toBe(true));
    expect(result.current.data).toEqual("1039475");
  });
});
