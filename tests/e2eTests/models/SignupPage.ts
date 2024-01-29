import { Page } from "@playwright/test";

export class Signup {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(): Promise<void> {
    await this.page.goto("http://localhost:5173/signup");
  }

  async fillSignupForm(
    email: string,
    password: string,
    checkPassword: string,
    name: string,
    phone: string,
  ): Promise<void> {
    await this.page.fill('input[name="email"]', email);
    await this.page.fill('input[name="password"]', password);
    await this.page.fill('input[name="checkPassword"]', checkPassword);
    await this.page.fill('input[name="name"]', name);
    await this.page.fill('input[name="phone"]', phone);
  }

  async fillVerificationCode(code: string): Promise<void> {
    await this.page.fill('input[name="code"]', code);
  }

  async clickVerificationCode(): Promise<void> {
    await this.page.click('button:has-text("인증 확인")');
  }

  async submitSignup(): Promise<void> {
    const navigationPromise = this.page.waitForNavigation();
    await this.page.click('button:has-text("가입하기")');
    await navigationPromise;
  }

  async clickAllAgreeCheckbox(): Promise<void> {
    const checkboxLocator = this.page
      .locator("label")
      .filter({ hasText: "전체동의" })
      .locator("span")
      .first();

    await checkboxLocator.click();
  }

  async getVerifyEmail(): Promise<string | null> {
    await this.page.click('button:has-text("인증 요청")');

    // await this.page.waitForLoadState("networkidle");

    const response = await this.page.waitForResponse(
      (response) =>
        response.url() === "https://3.34.147.187.nip.io/v1/members/email" &&
        response.status() === 200,
    );

    const responseData = await response.json();
    console.log(responseData);
    return responseData.data;
  }
  // async getFcmToken(): Promise<string | null> {
  //   await this.page.waitForLoadState("networkidle");
  //   return this.page.evaluate(() => {
  //     return localStorage.getItem("fcmToken");
  //   });
  // }
}
