import { test, expect } from "@playwright/test";

test.use({ storageState: { cookies: [], origins: [] } });

test("로그인 성공", async ({ page }) => {
  await page.goto("http://localhost:5173/signin");

  await page.fill('input[name="email"]', "nana1@email.com");
  await page.fill('input[name="password"]', "asdf1234!");

  await page.click('button:has-text("로그인")');

  await page.waitForNavigation();

  const localStorageValue = await page.evaluate(() => {
    return localStorage.getItem("accessToken");
  });

  expect(typeof localStorageValue).toBe("string");

  expect(page.url()).toBe("http://localhost:5173/");
});
