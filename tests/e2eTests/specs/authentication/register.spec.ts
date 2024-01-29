import { test } from "@playwright/test";
import { Signup } from "@tests/e2eTests/models/SignupPage";

test.use({ storageState: { cookies: [], origins: [] } });

test("회원가입 성공", async ({ page }) => {
  const signup = new Signup(page);
  const userEmail = `test${Math.floor(Math.random() * 10000)}@example.com`;
  const userPassword = "asdf1234!";
  const userName = "집주인";
  const userPhone = "010-1234-5678";

  await signup.navigate();

  await signup.fillSignupForm(
    userEmail,
    userPassword,
    userPassword,
    userName,
    userPhone,
  );

  const verificationCode = await signup.getVerifyEmail();
  if (!verificationCode) {
    throw new Error("인증 이메일을 받지 못했습니다.");
  }

  await signup.fillVerificationCode(verificationCode);

  await signup.clickVerificationCode();

  await signup.clickAllAgreeCheckbox();

  await signup.submitSignup();
});
