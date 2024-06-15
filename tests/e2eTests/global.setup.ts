import { chromium, FullConfig } from "@playwright/test";

import { LoginPage } from "./models/LoginPage";

async function globalSetup(config: FullConfig) {
  const { storageState } = config.projects[1].use;
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const loginPage = new LoginPage(page);
  await loginPage.navigate();
  console.log("로그인 시도");
  await loginPage.login("nana1@email.com", "asdf1234!");
  const accessToken = await loginPage.getAccessToken();
  const refreshToken = await loginPage.getRefreshToken();
  // const fcmToken = await loginPage.getFcmToken();
  console.log("accessToken", accessToken);
  console.log("refreshToken", refreshToken);
  // console.log("fcmToken", fcmToken);
  await page.context().storageState({ path: storageState as string });
  await browser.close();
}

export default globalSetup;
